
import { LoginComponent} from "./Login"
import { SignupComponent } from "./Signup"

export const LoginRegister =()=>{
return(
       <div className="container">
            <LoginComponent></LoginComponent>
            <br></br>
            <SignupComponent></SignupComponent>
       </div>
)
    
}