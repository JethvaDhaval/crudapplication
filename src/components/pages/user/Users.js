import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Users() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { id } = useParams();

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/user/${id}`);
        setUser(result.data);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div className="container">
            <br />
            <h2>User : {id}</h2>
            <ul className="list-group">
                <li className="list-group-item">Name : {user.name}</li>
                <li className="list-group-item">Username : {user.username}</li>
                <li className="list-group-item">email : {user.email}</li>
            </ul>
        </div>
    )
}
