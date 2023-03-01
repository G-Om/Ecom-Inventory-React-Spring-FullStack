import { useState } from "react"
import {useNavigate} from "react-router-dom"

export const SignupComponent = ()=>{
    const [email, setEmail] = useState("om@gmail.com")
    const [username, setUsername] = useState("om")
    const [password, setPassword] = useState("123")
    const [phone_no, setPhone_no] = useState(4585689575)
    const [role, setRole] = useState("")
    const options = [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        }
      ]
    const navigate = useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault()
        navigate("/home")
    }

    return(
        <div className="container">
            <h2>Signup</h2>
            <div className="form form-group">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-info">Email</label>
                    <input id="email" type="text" className="email" 
                        value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br/>

                    <label className="text-info">Phone number</label>
                    <input type="number" className="phone" 
                        value={phone_no} onChange={(e)=>{setPhone_no(e.target.value)}}></input><br/>

                    <label className="text-info">Username</label>
                    <input type="text" className="username" 
                        value={username} onChange={(e)=>{setUsername(e.target.value)}}></input><br/>

                    <label className="text-info">Password</label>
                    <input type="password" className="password" 
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}></input><br/>

                    <label className="text-info">Role</label>
                    <select name="roles" id="roles" onChange={(e)=>setRole(e.target.value)}>
                        
                        {options.map((option)=>{
                            return <option value={option.value}>{option.label}</option>
                        })}
                       
                    </select>         
                    <br/>

                    <button className="btn btn-primary" type="submit">Sign Up</button>                  
                </form>
            </div>
        </div>
    )
}