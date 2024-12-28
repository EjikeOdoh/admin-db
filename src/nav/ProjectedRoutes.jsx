import { Navigate, Outlet} from "react-router";

export default function ProtectedRoutes({isAuthenticated}){
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}