import { Link, Router } from "react-router-dom"

export const HeaderComponent =()=>{
return(
    <header>
        <nav  className="navbar-expand-md navbar-dark bg-dark" >
        
            <ul className="navbar-nav">
                <div  className="navbar-brand"><a href="/home">BrandName</a></div>
                <li><Link to={"/home"} className="nav-link">Home</Link></li>
                <li><Link to={"/login"} className="nav-link">Login</Link></li>
                <li><Link to="/signup" className="nav-link">Signup</Link></li>
                <li><Link to="/table" className="nav-link">Table</Link></li>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li><Link className="nav-link">Logout</Link></li>
                </ul>
            </ul>
            
        </nav>
    </header>
       
)
    
}