import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

export default function AddUser() {

    let history = useHistory();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const onInputChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/user", user);
        history.push("/");
    }

    const { name, username, email } = user;

    return (
        <div className="container mt-5">
            <div className="w-90 mx-auto shadow p-1">
                <h3>Add User</h3>
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
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
}
