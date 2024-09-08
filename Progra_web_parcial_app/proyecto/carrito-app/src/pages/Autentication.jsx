import React, { useEffect, useState } from 'react'
import '../styles/Login.css'
import fondo from '../assets/fondo_v.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const Autentication = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginService = async (e) => {
        e.preventDefault();
        const URL = import.meta.env.VITE_URL_BASE;
        const data = {
            username: username,
            password: password
        }

        await axios.post(`${URL}/users/login`, data)
            .then((resp) => {
                console.log(resp)
                if (resp.status == 200) {
                    Swal.fire({
                        title: '¡Bienvenido!',
                        text: 'Ingreso exitoso',
                        icon: 'success',
                        confirmButtonText: 'Entendido'
                    }).then(() => {
                        navigate("/productos");
                    });
                }
            })
            .catch((err) => {
                console.log(err)
                Swal.fire({
                    title: 'Error',
                    text:'Tus credenciales son incorrectas, intentalo mas tarde',
                    icon:'error',
                    confirmButtonText:'Entendido'
                })
            })
    }

    return (
        <div className="container_principal">
            <img className="fondo" src={fondo} alt="fondo" />
                     
            
            <div className='w-full h-20 mt-44 flex flex-col justify-center items-center'>
                <h5 className='font-bold text-2xl text-gray-950'>Login</h5>
                <input type='text' placeholder='Username' className='mt-7 border-2 rounded-lg' onChange={(e) => setUsername(e.target.value)} />
                <input type='password' placeholder='Password' className='mt-7 border-2 rounded-lg' onChange={(e) => setPassword(e.target.value)} />
                <button className='mt-5 bg-[#121534] w-20 text-white rounded-lg' onClick={loginService}>Login</button>
            </div>
        </div>
    )
}
