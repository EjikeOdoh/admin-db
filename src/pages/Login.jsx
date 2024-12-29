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
                className="w-1/3 p-4 py-8 border-white border rounded-md grid gap-5"
                onSubmit={login}
            >
                <h1 className="text-4xl font-bold text-[#FFD700]">Exam Rush</h1>
                <div className="mb-5 space-y-4">
                    <div className="w-full grid gap-y-1">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full h-12 p-2 px-4 rounded-md outline-none text-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-full grid gap-y-1">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full h-12 p-2 px-4 rounded-md outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <Button ></Button>

                <button
                    className={`block w-1/2 mx-auto p-4 rounded-md ${isLoading ? "bg-gray-400" : "bg-[#FFD700]"
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
