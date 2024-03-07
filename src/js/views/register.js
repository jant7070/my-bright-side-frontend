import React, { useEffect, useState } from "react";
import "../../styles/home.css";


export const Register = () => {

    const [name, setName] = useState("");


    return (
        <div className="register d-flex justify-content-center flex-column align-items-center vh-100" data-wow-delay="0.1s">
            <div className="col-lg-6 bg-transparent rounded rounded-3 text-center p-5">
                <h1 className="mb-4">Registro</h1>
                <form>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control opacity-50 bg-white rounded-pill" id="gname" placeholder="Gurdian Name" />
                                <label htmlFor="gname"><strong>Nombre</strong></label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control opacity-50 bg-white rounded-pill" id="gmail" placeholder="Gurdian Email" />
                                <label htmlFor="gmail"><strong>Apellido</strong></label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="email" className="form-control opacity-50 bg-white rounded-pill" id="cname" placeholder="Child Name" />
                                <label htmlFor="cname"><strong>Email</strong></label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="password" className="form-control opacity-50 bg-white rounded-pill" id="cage" placeholder="Child Age" />
                                <label htmlFor="cage"><strong>Contraseña</strong></label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="password" className="form-control opacity-50 bg-white rounded-pill" id="password1" placeholder="Child Age" />
                                <label htmlFor="password1"><strong>Confirmar Contraseña</strong></label>
                            </div>
                        </div>
                        <div className="col-8 mx-auto">
                            <button className="btn btn-navBar w-100 py-3 rounded-pill" type="submit">Registrarme</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}