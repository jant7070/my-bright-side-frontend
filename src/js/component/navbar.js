import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
			<Link href="index.html" className="navbar-brand d-flex ms-2 align-items-center">
				<img src={logo} style={{ width: "50px", height: "50px" }} />
			</Link>
			<button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarCollapse">
				<div className="navbar-nav ms-auto p-4 p-lg-0">
					<Link to="/" className="nav-item nav-link">Sobre nosotros</Link>
					<Link to="/" className="nav-item nav-link">Clases</Link>
					<div className="nav-item dropdown">
						<a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
						<div className="dropdown-menu bg-light m-0">
							<a href="feature.html" className="dropdown-item">Features</a>
							<a href="appointment.html" className="dropdown-item">Appointment</a>
							<a href="team.html" className="dropdown-item">Our Team</a>
							<a href="testimonial.html" className="dropdown-item">Testimonial</a>
							<a href="404.html" className="dropdown-item">404 Page</a>
						</div>
					</div>
					<Link to="/" className="nav-item nav-link">Contacto</Link>
					<Link to="/" className="nav-item nav-link">Iniciar sesión</Link>
					<Link href="" className="nav-item nav-link active registro">Registrarme<i className="fa fa-arrow-right ms-3"></i></Link>
				</div>
			</div>
		</nav>
	);
};
