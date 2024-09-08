import React from 'react'
import '../styles/Login.css'
import logo from '../assets/carrito.png'
import fondo from '../assets/fondo_v.png'
import { ButtonsLogin } from '../components/ButtonsLogin'

export const Login = () => {
    return (
        <div className="container_principal">
            <img className="carrito" src={logo} alt="logo carrito" />
            <div className="container_fondo">
                <img src={fondo} alt="img fondo" />
                </div>
            <ButtonsLogin />
        </div>
    )
}