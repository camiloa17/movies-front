import { Component, createSignal } from "solid-js";
import Input from "../../components/Input";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "@solidjs/router";
import { loginUser } from "../../api";


const Login: Component = () => {
  const { setJwtToken, setAlertClass, setAlertMessage, toggleRefresh } = useAppContext();
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
        toggleRefresh(false)
        return
      }else {
        console.log(tokensResponse)
        setJwtToken(tokensResponse.data.accessToken)
        setAlertMessage("")
        setAlertClass("d-none")
        navigate("/")
        toggleRefresh(true)
      }
      
    }
    catch(err) {
      setAlertMessage("something went wrong")
      setAlertClass("alert-danger")
      toggleRefresh(false)
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