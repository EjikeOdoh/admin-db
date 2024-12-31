import { useEffect, useState } from "react";
import api from "../api/api";
import Salutation from "../components/Salutation";
import StickyHeader from "../components/Table";
import Modal from 'react-modal'
import { Button } from "@mui/material";

export default function UserManagement() {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal () {
        setIsModalOpen(true)
    }

    function closeModal(){
        setIsModalOpen(false)
    }

    async function fetchUsers() {
        try {
            setIsLoading(true);
            const { data } = await api.get("admin/users");
            setUsers(data.data?.users?.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setIsLoading(false);
        }
    }

    // Column definitions
    const columns = [
        { id: 'name', label: 'Name', minWidth: "auto" },
        { id: 'email', label: 'Email', minWidth: "auto" },
        { id: 'country', label: 'Country', minWidth: "auto" },
        { id: 'plan', label: 'Plan', minWidth: "auto" },
        { id: 'actions', label: 'Actions', minWidth: "auto", align: 'center' },
    ];

    function editStudentDetail (det) {
        console.log(det)
        openModal()
    }

    const actions = [
        {
            Component: Button,
            props: (row) => ({
                variant: 'contained',
                color: 'primary',
                size: 'small',
                onClick: () => editStudentDetail(row),
                children: 'Edit',
            }),
        },
        {
            Component: Button,
            props: (row) => ({
                variant: 'contained',
                color: 'error',
                size: 'small',
                onClick: () => console.log('Delete:', row),
                children: 'Delete',
            }),
        },
    ];


    useEffect(() => {
        fetchUsers();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Salutation title="User Management" />
            {users.length > 0 && <StickyHeader arr={users} columns={columns} actions={actions} />}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                Hello world
            </Modal>
        </div>
    );
}

