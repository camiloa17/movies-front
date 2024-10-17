import { ApiResponse } from "./models/apiResponse";
import { AuthTokens } from "./models/auth";



export const loginUser = async(email: string, password: string): Promise<ApiResponse<AuthTokens>> => {
  
  const reqOptions: RequestInit = {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    credentials: "include",
    body: JSON.stringify({email, password})

  }
  const authResp =  await fetch(`http://localhost:3000/api/authenticate/`, reqOptions)
  const  authTokens = (await (authResp.json() as Promise<ApiResponse<AuthTokens>>))

  return authTokens
}

export const refreshTokens = async () => {
  const reqOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };
  const req = await fetch('http://localhost:3000/api/refresh/', reqOptions);
  const authTokens = await (req.json() as Promise<ApiResponse<AuthTokens>>);

  return authTokens;
};

export const logOutCall = async () => {
  const reqOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };
  const req = await fetch('api/logout/', reqOptions);
};