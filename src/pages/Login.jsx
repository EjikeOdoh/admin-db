import { useDispatch, useSelector } from "react-redux"
import { loginSuccess, selectAuthState } from "../store/slices/authSlice"
import { useNavigate } from "react-router"

export default function Login() {

    const navigate = useNavigate()
    const authState = useSelector(selectAuthState)
    const dispatch = useDispatch()

    function login(){
        dispatch(loginSuccess())
        navigate('/')
    }

    console.log(authState)
    return <div>
        <h1>Login</h1>
        <p>{authState}</p>
        <button onClick={login}>Log in</button>
        
    </div>
}