import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
			<Link href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
				<img src={logo} style={{ width: "90%", height: "90%" }} />
			</Link>
			<button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<div class="navbar-nav ms-auto p-4 p-lg-0">
					<Link to="/" class="nav-item nav-link active">Inicio</Link>
					<Link to="/" class="nav-item nav-link">Sobre nosotros</Link>
					<Link to="/" class="nav-item nav-link">Clases</Link>
					<div class="nav-item dropdown">
						<a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
						<div class="dropdown-menu bg-light m-0">
							<a href="feature.html" class="dropdown-item">Features</a>
							<a href="appointment.html" class="dropdown-item">Appointment</a>
							<a href="team.html" class="dropdown-item">Our Team</a>
							<a href="testimonial.html" class="dropdown-item">Testimonial</a>
							<a href="404.html" class="dropdown-item">404 Page</a>
						</div>
					</div>
					<a href="contact.html" class="nav-item nav-link">Contacto</a>
				</div>
				<a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Registrarme<i class="fa fa-arrow-right ms-3"></i></a>
			</div>
		</nav>
	);
};
