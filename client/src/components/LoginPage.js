import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter} from "react-router-dom";

function LoginPage() {

    return (
        <div>
            <form>
                <input type = "text" placeholder = "username"></input>
                <input type = "text" placeholder = "password"></input><br></br>
                <button>Enter</button>
            </form>
        </div>
    )
}

// export default LoginPage;

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import {Route, BrowserRouter} from "react-router-dom";

// function LoginPage({ onLogin }) {

// const [username, setUsername] = useState("")
// const [password, setPassword] = useState("")

//     function handleSubmit(event) {
//         event.preventDefault();
//         fetch("/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ username }),
//         })
//         .then(r => r.json())
//         .then(user => onLogin(user));
//     }

//     return (
//         <div>
//             <form onSubmit = {handleSubmit}>
//                 <input 
//                 type = "text" 
//                 placeholder = "username"
//                 value = {username}
//                 onChange = { e => setUsername(e.target.value)}
//                 />
//                 {/* <input 
//                 type = "text" 
//                 placeholder = "password"
//                 value = {password}
//                 onChange = { e => setPassword(e.target.value)}
//                 /> */}
//                 <br></br>
//                 <button>Enter</button>
//             </form>
//         </div>
//     )
// }

// export default LoginPage;