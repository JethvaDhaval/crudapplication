import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory,useParams } from 'react-router-dom'

export default function EditUser() {
    let history = useHistory();

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


    const onInputChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/user/${id}`, user);
        history.push("/");
    }

    const { name, username, email } = user;

    return (
        <div className="container mt-5">
        <div className="w-90 mx-auto shadow p-1">
            <h3>Edit User</h3>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Your Name..." name="name" value={name}
                    onChange={(e => onInputChange(e))} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Enter Username..." name="username" value={username} 
                    onChange={(e => onInputChange(e))} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control"  placeholder="Enter Email Id..." name="email" value={email} 
                    onChange={(e => onInputChange(e))} />
                </div>
                <button className="btn btn-success btn-block">Edit User</button>
            </form>
        </div>
    </div>
    )
}
