import React, { useState } from "react";
function LoginPage({ onLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    
  
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, email }),
            })
            .then((r) => {
                if (r.ok) {
                    r.json().then((user) => onLogin(user));
                } 
        });
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label htmlFor = "username">Username</label>
                    <input 
                    type = "text" 
                    placeholder = "username"
                    id = "username"
                    value = {username}
                    onChange = { e => setUsername(e.target.value)}
                    />
                <label htmlFor = "password">Password</label>
                    <input 
                    type = "text" 
                    placeholder = "password"
                    id = "password"
                    value = {password}
                    onChange = { e => setPassword(e.target.value)}
                    />
                    <br></br>
                    <button>Enter</button>
            </form>
        </div>
    )
}

export default LoginPage;
