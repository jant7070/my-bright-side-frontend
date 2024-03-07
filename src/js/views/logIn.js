import React, { useEffect, useState } from "react";
import "../../styles/home.css";


export const LogIn = () => {

    const [username, setUsername] = useState("");


    return (
        <div className="register d-flex justify-content-center flex-column align-items-center vh-100" data-wow-delay="0.1s">
            <div className="col-lg-6 bg-transparent rounded rounded-3 text-center p-5">
                <h1 className="mb-4">Iniciar sesión</h1>
                <form>
                    <div className="row g-3 d-flex flex-column justify-content-center align-items-center">
                        <div className="col-sm-8">
                            <div className="form-floating">
                                <input type="email" className="form-control opacity-50 bg-white rounded-pill" id="email" placeholder="Gurdian Name" />
                                <label htmlFor="email"><strong>Email</strong></label>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="form-floating">
                                <input type="password" className="form-control opacity-50 bg-white rounded-pill" id="password" placeholder="Gurdian Email" />
                                <label htmlFor="password"><strong>Contraseña</strong></label>
                            </div>
                        </div>
                        <div className="col-8 mx-auto">
                            <button className="btn btn-navBar w-100 py-3 rounded-pill" type="submit">Iniciar sesión</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}