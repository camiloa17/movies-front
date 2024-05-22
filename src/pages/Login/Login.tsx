import { Component, createSignal } from "solid-js";
import Input from "../../components/Input";
import { ApiResponse } from "../../models/apiResponse";
import { AuthTokens } from "../../models/auth";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "@solidjs/router";

const loginUser = async(email: string, password: string): Promise<ApiResponse<AuthTokens>> => {
  
  const reqOptions: RequestInit = {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    credentials: "include",
    body: JSON.stringify({email, password})

  }
  const authResp =  await fetch(`http://localhost:8080/authenticate/`, reqOptions)
  const  authTokens = (await (authResp.json() as Promise<ApiResponse<AuthTokens>>))

  return authTokens
}

const Login: Component = () => {
  const { setJwtToken, setAlertClass, setAlertMessage } = useAppContext();
  const navigate = useNavigate()

  const [email, setEmail] = createSignal<string>("")
  const [password, setPassword]= createSignal<string>("")
  
  const handleSubmit = async (event: Event) => {
    event.preventDefault()
    try {
      const tokensResponse = await loginUser(email(),password())
      if (tokensResponse.error){
        setAlertMessage(tokensResponse.message)
        setAlertClass("alert-danger")
        return
      }else {
        console.log(tokensResponse)
        setJwtToken(tokensResponse.data.accessToken)
        setAlertMessage("")
        setAlertClass("d-none")
        navigate("/")
      }
      
    }
    catch(err) {
      setAlertMessage("something went wrong")
      setAlertClass("alert-danger")
    }
  }

  return (
    <div class="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <Input
                    title="Email Address"
                    type="email"
                    class="form-control"
                    name="email"
                    autoComplete="email-new"
                    value={email()}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Input
                    title="Password"
                    type="password"
                    class="form-control"
                    name="password"
                    autoComplete="password-new"
                    value={password()}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <hr />

                <button 
                    type="submit"
                    class="btn btn-primary"
                >Login</button>


            </form>
        </div>
  )
}

export default Login