import { useEffect, useState } from "react";
import api from "../api/api";
import Salutation from "../components/Salutation";

export default function UserManagement() {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        try {
            setIsLoading(true);
            const { data } = await api.get("admin/users");
            console.log(data)
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchUsers();
    }, []); 
    if (isLoading) {
        return <p>Loading...</p>; 
    }

    return (
        <div>
            <Salutation title="User Management" />
            <h1>User Management</h1>
            {/* <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li> 
                ))}
            </ul> */}
        </div>
    );
}
