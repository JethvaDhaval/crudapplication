import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'

export default function Home() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/user");
        setUser(result.data.reverse());
    }


    const deleteUsers = async (id) => {
        await axios.delete(`http://localhost:3003/user/${id}`);
        loadUsers();
    }
    return (
        <div className="container overflow-auto mt-2">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`/user/${user.id}`}>View</Link>
                                    <Link className="btn btn-success mr-2" to={`/user/edituser/${user.id}`}>Edit</Link>
                                    <Link className="btn btn-danger" onClick={()=> deleteUsers(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
