import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ButtonsLogin = () => {
    const navigate = useNavigate();
    return (
        <div className="container-buttons">
            <h3><span>Carrito</span>Food</h3>
            <p className="description">¡Tu tienda favorita en linea para comprar lo que necesitas!</p>
            
            <div className="buttons">
                <button className="btn-login" onClick={() => navigate("/login")}>Log in</button>
                <button className="btn-register" onClick={() => navigate("/registro")}>Register</button>
            </div>
        </div>
    )
}