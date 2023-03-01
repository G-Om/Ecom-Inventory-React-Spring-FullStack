import { useState } from "react"
import { useNavigate } from "react-router-dom"




export const LoginComponent = (props)=>{
    const [username, setUsername] = useState("om")
    const [password, setPassword] = useState("123")
    const [failedLogin, setFailedLogin] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event)=>{
        // Dummy : username : om
        // Dummy : password : 123
        event.preventDefault()          //stops default redirection
        // console.log(event.target.value)
        if(username==="om" && password==="123"){
            // console.log("Logged in successfully")
            setFailedLogin(false)
            navigate("/home")
        }else{
            setFailedLogin(true)
        }

    }

    return(
        <div className="LoginComponent">
            {failedLogin && <div className="alert alert-warning">Invalid Credentials</div>}
            <h2>Login</h2>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" className="username form-control-sm" 
                        value={username} onChange={(e)=>{setUsername(e.target.value)}}></input><br/>
                    
                    <label>Password</label>
                    <input type="password" className="password form-control-sm" 
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                    <button type="submit" className="btn btn-success form-control-sm">Login</button>
                </form>

            </div>
        </div>
    )
}