import React, { useEffect } from "react";

//images
import rigoImage from "../../img/rigo-baby.jpg";
import children from "../../img/class.jpg"
import adults from "../../img/classes_adults.jpg"
import light from "../../img/favicon.png"
import teacher from "../../img/class-about.jpg"
import art from "../../img/art-class.jpg"
import english from "../../img/english-class.jpg"
import day from "../../img/day-care.jpg"

import { Link } from "react-router-dom";

//styles sheets
import "../../styles/home.css";
import "animate.css"
import WOW from "wowjs"


export const Home = () => {

	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, [])

	return (
		<div>
			<div className="container-fluid p-0 wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
				<div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="w-100" src={children} alt="Image" />
							<div className="carousel-caption">
								<div className="container">
									<div className="row justify-content-center">
										<div className="col-lg-7">
											<img className="img-fluid position-relative mt-auto favicon" src={light} style={{ width: "250px" }} />
											<h1 className="display-2 mb-5 animate__animated animate__slideInDown">Making The World a Brighter Place</h1>
											<Link href="" className="btn btn-navBar py-sm-3 px-sm-5">Sobre nosotros</Link>
											<Link href="" className="btn btn-navBar py-sm-3 px-sm-5 ms-3">Nuestras clases</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img className="w-100" src={adults} alt="Image" />
							<div className="carousel-caption">
								<div className="container">
									<div className="row justify-content-center">
										<div className="col-lg-7">
											<h1 className="display-2 mb-5 animate__animated animate__slideInDown">Education Is Our Top Priority</h1>
											<a href="" className="btn btn-navBar py-sm-3 px-sm-5">Sobre nosotros</a>
											<a href="" className="btn btn-navBar py-sm-3 px-sm-5 ms-3">Nuestras clases</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
						data-bs-slide="prev">
						<span className="carousel-control-prev-icon rounded-pill" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
						data-bs-slide="next">
						<span className="carousel-control-next-icon rounded-pill" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>

			<div className="container-fluid facts py-5 pt-lg-0">
				<div className="container py-5 pt-lg-0">
					<div className="row gx-0">
						<div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
							<div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: "150px" }}>
								<div className="d-flex">
									<div className="flex-shrink-0 facts-icons btn-lg-square rounded rounded-3 ">
										<i className="fa fa-people-carry text-white"></i>
									</div>
									<div className="ps-4">
										<h5>Educación personalizada</h5>
										<span>Nuetra prioridad es adaptarnos a tu forma de aprender</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
							<div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: "150px" }}>
								<div className="d-flex">
									<div className="flex-shrink-0 rounded rounded-3 btn-lg-square facts-icons">
										<i className="fa fa-users text-white"></i>
									</div>
									<div className="ps-4">
										<h5>Profesores calificados</h5>
										<span>Nuestros profesores están altamente calificados para darte la mejor atencion en tu proceso de aprendizaje</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
							<div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: "150px" }}>
								<div className="d-flex">
									<div className="flex-shrink-0 rounded rounded-3 btn-lg-square facts-icons">
										<i className="fa fa-book-open text-white"></i>
									</div>
									<div className="ps-4">
										<h5>Clases dinámicas</h5>
										<span>Nuestras clases se enfocan en desarrollar tu intelecto y habilidades sociales</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-xxl py-6">
				<div className="container">
					<div className="row g-5">
						<div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
							<div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
								<img className="position-absolute w-100 h-100" src={teacher} alt="" style={{ objectFit: "cover" }} />
								<img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src={teacher} alt="" style={{ width: "200px", height: "200px", objectFit: "cover" }} />
							</div>
						</div>
						<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
							<div className="h-100">
								<h6 className="text-uppercase mb-2">Sobre nosotros</h6>
								<h1 className="display-6 mb-4">Te ayudamos a encontrar tu <strong style={{ color: "#febd5b" }}>BRIGHT SIDE</strong></h1>
								<p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
								<p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
								<div className="row g-2 mb-4 pb-2">
									<div className="col-sm-6">
										<i className="fa fa-check me-2" style={{ color: "#4ead74" }} ></i>Educación de Calidad
									</div>
									<div className="col-sm-6">
										<i className="fa fa-check me-2" style={{ color: "#4ead74" }} ></i>Educación personalizada
									</div>
									<div className="col-sm-6">
										<i className="fa fa-check me-2" style={{ color: "#4ead74" }} ></i>Precios accesibles
									</div>
									<div className="col-sm-6">
										<i className="fa fa-check me-2" style={{ color: "#4ead74" }} ></i>Profesores calificados
									</div>
									<div className="row g-4">
										<div className="col-sm-6">
											<Link className="btn btn-navBar py-3 px-5" to="/">Leer más</Link>
										</div>
										<div className="col-sm-6">
											<Link className="btn btn-navBar py-3 px-5" to="/">Contáctanos</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-xxl courses my-6 pb-0">
					<div className="container">
						<div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
							<h1 className="display-6 mb-4">Clases y servicios</h1>
						</div>
						<div className="row g-4 justify-content-center">
							<div className="col-lg-4 col-md-6 wow fadeInUp py-3" style={{ background: "#FD8A8A" }} data-wow-delay="0.1s">
								<div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
									<div className="text-center p-4 pt-0">
										<h2 className="mb-3" style={{ color: "#FD8A8A" }}>Art class</h2>
										<p>
											Nuestras clases de arte para niños de 5 años en adelante
											son un espacio de autoconocimiento, expresión libre y aprendizaje,
											basadas en nuestro programa educativo bilingüe (Inglés-Español).
										</p>
									</div>
									<div className="position-relative mt-auto">
										<img className="img-fluid" src={art} alt="" />
										<div className="courses-overlay">
											<Link className="btn btn-navBar">Leer más</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 wow fadeInUp py-3" style={{ background: "#A8D1D1" }} data-wow-delay="0.3s">
								<div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
									<div className="text-center p-4 pt-0">
										<h2 className="mb-3" style={{ color: "#A8D1D1" }}>English class</h2>
										<p>
											Clases grupales completamente en Inglés, donde trabajamos el
											desarrollo del niño a través de la exploración
											y potenciación de sus habilidades.
										</p>
									</div>
									<div className="position-relative mt-auto">
										<img className="img-fluid" src={english} alt="" />
										<div className="courses-overlay">
											<Link className="btn btn-navBar">Leer más</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 wow fadeInUp py-3" style={{ background: "#febd5b" }} data-wow-delay="0.5s">
								<div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
									<div className="text-center p-4 pt-0">
										<h2 className="mb-3" style={{ color: "#febd5b" }}>Day care</h2>
										<p>
											Day care bilingüe (Inglés-Español) para niños entre 1 y 3 años.
											Acompañamos a nuestros alumnos en su desarrollo libre, integral, intelectual,
											físico, emocional y social.
										</p>
									</div>
									<div className="position-relative mt-auto">
										<img className="img-fluid" src={day} alt="" />
										<div className="courses-overlay">
											<Link className="btn btn-navBar">Leer más</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-8 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
								<div className="bg-white shadow rounded rounded-3 text-center p-5">
									<h1 className="mb-4" style={{ color: "#FD8A8A" }}>Contáctanos</h1>
									<form>
										<div className="row g-3">
											<div className="col-sm-6">
												<div className="form-floating">
													<input type="text" className="form-control border border-3 border-success rounded-3" id="gname" placeholder="Gurdian Name" />
													<label htmlFor="gname">Nombre completo</label>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-floating">
													<input type="email" className="form-control border border-3 border-success rounded-3" id="gmail" placeholder="Gurdian Email" />
													<label htmlFor="gmail">Email</label>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-floating">
													<input type="text" className="form-control border border-3 border-success rounded-3" id="cname" placeholder="Child Name" />
													<label htmlFor="cname">Servicio o clase</label>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-floating">
													<input type="text" className="form-control border border-3 border-success rounded-3" id="cage" placeholder="Child Age" />
													<label htmlFor="cage">Asunto</label>
												</div>
											</div>
											<div className="col-12">
												<div className="form-floating">
													<textarea className="form-control border border-3 border-success rounded-3" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
													<label htmlFor="message">Mensaje</label>
												</div>
											</div>
											<div className="col-12">
												<button className="btn btn-navBar w-100 py-3" type="submit">Submit</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-xxl">
					<div className="container">
						<div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
							<h1 className="display-6 mb-4">Conoce al equipo</h1>
						</div>
						<div className="row g-0 team-items">
							<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
								<div className="team-item position-relative">
									<div className="position-relative">
										<img className="img-fluid" src={rigoImage} alt="" />
										<div className="team-social text-center">
											<a className="btn btn-square  border-2 m-1" href=""><i className="fab fa-facebook-f text-warning"></i></a>
											<a className="btn btn-square  border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
											<a className="btn btn-square  border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
										</div>
									</div>
									<div className="bg-light text-center p-4">
										<h5 className="mt-2">Full Name</h5>
										<span>Trainer</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
								<div className="team-item position-relative">
									<div className="position-relative">
										<img className="img-fluid" src={rigoImage} alt="" />
										<div className="team-social text-center">
											<a className="btn btn-square border-2 m-1" href=""><i className="fab fa-facebook-f"></i></a>
											<a className="btn btn-square border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
											<a className="btn btn-square border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
										</div>
									</div>
									<div className="bg-light text-center p-4">
										<h5 className="mt-2">Full Name</h5>
										<span>Trainer</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
								<div className="team-item position-relative">
									<div className="position-relative">
										<img className="img-fluid" src={rigoImage} alt="" />
										<div className="team-social text-center">
											<a className="btn btn-square border-2 m-1" href=""><i className="fab fa-facebook-f"></i></a>
											<a className="btn btn-square border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
											<a className="btn btn-square border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
										</div>
									</div>
									<div className="bg-light text-center p-4">
										<h5 className="mt-2">Full Name</h5>
										<span>Trainer</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
								<div className="team-item position-relative">
									<div className="position-relative">
										<img className="img-fluid" src={rigoImage} alt="" />
										<div className="team-social text-center">
											<a className="btn btn-square border-2 m-1" href=""><i className="fab fa-facebook-f"></i></a>
											<a className="btn btn-square border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
											<a className="btn btn-square border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
										</div>
									</div>
									<div className="bg-light text-center p-4">
										<h5 className="mt-2">Full Name</h5>
										<span>Trainer</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-xxl py-6">
					<div className="container">
						<div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
							<h6 className="text-primary text-uppercase mb-2">Testimonial</h6>
							<h1 className="display-6 mb-4">What Our Clients Say!</h1>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
								<div className="owl-carousel testimonial-carousel">
									<div className="testimonial-item text-center">
										<div className="position-relative mb-5">
											<img className="img-fluid rounded-circle mx-auto" src={rigoImage} alt="" />
											<div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
												<i className="fa fa-quote-left fa-2x text-primary"></i>
											</div>
										</div>
										<p className="fs-4">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
										<hr className="w-25 mx-auto" />
										<h5>Client Name</h5>
										<span>Profession</span>
									</div>
									<div className="testimonial-item text-center">
										<div className="position-relative mb-5">
											<img className="img-fluid rounded-circle mx-auto" src={rigoImage} alt="" />
											<div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
												<i className="fa fa-quote-left fa-2x text-primary"></i>
											</div>
										</div>
										<p className="fs-4">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
										<hr className="w-25 mx-auto" />
										<h5>Client Name</h5>
										<span>Profession</span>
									</div>
									<div className="testimonial-item text-center">
										<div className="position-relative mb-5">
											<img className="img-fluid rounded-circle mx-auto" src={rigoImage} alt="" />
											<div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
												<i className="fa fa-quote-left fa-2x text-primary"></i>
											</div>
										</div>
										<p className="fs-4">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
										<hr className="w-25 mx-auto" />
										<h5>Client Name</h5>
										<span>Profession</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
