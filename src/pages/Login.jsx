import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, setToken } from "../store/slices/tokenSlice";
import { useNavigate } from "react-router";
import "../nav/layout.css";
import api from "../api/api";
import { Button, } from "@mui/material";
import { setUser } from "../store/slices/userSlice";

export default function Login() {
    const token = useSelector(selectToken)
    console.log(token)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    async function login(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { data } = await api.post(`/signin?email=${email}&password=${password}`)
            const { data: user, access_token } = data
            console.log(data)
            dispatch(setUser(user))
            dispatch(setToken(access_token))
            localStorage.setItem("token", access_token)
            navigate('/')
        } catch (error) {
            if (error.status === 401) {
                alert(error?.response?.data?.message)
            }
            console.error("Login error:", error);
        } finally {
            setEmail("")
            setPassword("")
            setIsLoading(false);
        }
    }

    return (
        <div className="login">
            <form
                className="w-full md:w-1/3 p-4 py-8 grid gap-5"
                onSubmit={login}
            >
                <h1 className="text-4xl font-bold text-[#FFD700] mx-auto">Logo</h1>
                <div className="mb-5 space-y-4">
                    <div className="w-full grid gap-y-1">
                        <label className="text-white font-semibold" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full h-10 md:h-12 p-2 px-4 rounded-md outline-none text-[#1A1A1A]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-full grid gap-y-1">
                        <label className="text-white font-semibold" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full h-10 md:h-12 p-2 px-4 rounded-md outline-none text-[#1A1A1A]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <button
                    className={`block w-full mx-auto p-2 rounded-md ${isLoading ? "bg-gray-400" : "bg-[#FFD700]"
                        }`}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Logging in..." : "Log in"}
                </button>
            </form>
        </div>
    );
}
