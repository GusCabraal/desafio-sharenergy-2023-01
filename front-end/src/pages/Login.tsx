import { useEffect, useState } from "react";
import { api } from "../axios/config";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios, { AxiosError } from "axios";

const MIN_EMAIL_LENGTH = 5;
const MIN_PASSWORD_LENGTH = 6;
export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify({ token: ''}))
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    mutation.mutate();
  };

  const mutation = useMutation({
    mutationFn: () => {
      return api
        .post("/login", { username, password })
        .then((response) => response.data);
    },
    onSuccess: (data) => {
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/home");
    },
    onError: (err: Error | AxiosError) => {
      if (axios.isAxiosError(err)) {
        setLoginError(true);
      }
    },
  });
  return (
      <main className="bg-slate-500 w-full min-h-screen flex items-center justify-center">
        <div className="bg-white p-14 rounded-xl shadow-xl ">
          <h1 className="text-4xl text-center font-bold mb-10">Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="text-sm">
              Username
              <input
                id="username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu username"
                className="block bg-gray-200 rounded p-2 mb-3 text-lg"
              />
            </label>
            <label htmlFor="password" className="text-sm">
              Senha
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="block bg-gray-200 rounded p-2 text-lg"
              />
            </label>
            <button
              type="submit"
              disabled={
                !(
                  username.length > MIN_EMAIL_LENGTH &&
                  password.length > MIN_PASSWORD_LENGTH
                )
              }
              className="mt-10 bg-green-700 w-full py-3 rounded text-white font-bold hover:bg-green-900 disabled:bg-gray-500 "
            >
              Entrar
            </button>
          </form>
          {loginError && <p className="text-center pt-2 text-red-600">Usuario não encontrado</p>}
        </div>
      </main>
  );
}