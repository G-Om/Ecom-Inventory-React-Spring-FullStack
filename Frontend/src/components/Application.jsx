import { LoginComponent } from "./BasicComponents/Login"
import { SignupComponent } from "./BasicComponents/Signup"
import { Routes, Route } from "react-router-dom"
import { HomeComponent } from "./BasicComponents/Home"
import { HeaderComponent } from "./BasicComponents/Header"
import { FooterComponent } from "./BasicComponents/Footer"
import { TableComponent } from "./BasicComponents/Table"
import { LoginRegister } from "./BasicComponents/LoginRegster"
import { CardComponent } from "./BasicComponents/Card"
export const ApplicationComponent =()=>{
    return (

        <div>
            <HeaderComponent></HeaderComponent>
                <Routes>
                    <Route path="/home" element={<HomeComponent></HomeComponent>} exact></Route>
                    <Route path="/login" element={<LoginComponent></LoginComponent>} exact></Route>
                    <Route path="/signup" element={<SignupComponent></SignupComponent>} exact></Route>
                    <Route path="/table" element={<TableComponent></TableComponent>} exact></Route>
                    <Route path="/loginreg" element={<LoginRegister></LoginRegister>} exact></Route>
                    <Route path="/card" element={<CardComponent></CardComponent>} exact></Route>
                    {/* <LoginComponent/> */}
                </Routes>
            <FooterComponent></FooterComponent>
        </div>
    )
}