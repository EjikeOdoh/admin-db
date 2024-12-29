import { BrowserRouter, Routes, Route } from 'react-router';
import ProtectedRoutes from './nav/ProjectedRoutes';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import Analytics from './pages/Analytics';
import ProfileManagement from './pages/ProfileManagement';
import Settings from './pages/Settings';
import Layout from './nav/Layout';
import { useSelector } from 'react-redux';
import { selectToken } from './store/slices/tokenSlice';

function App() {  
  const token = useSelector(selectToken)
  console.log(token)
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<ProtectedRoutes isAuthenticated={token} />}>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} /> 
            <Route path="analytics" element={<Analytics />} />
            <Route path="profile-management" element={<ProfileManagement />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
