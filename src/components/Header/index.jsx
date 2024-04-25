import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div class="container px-5">
                    <Link class="navbar-brand" to="/"><span class="fw-semibold text-primary">Yassine ANZAR BASHA</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-semibold">
                            <li class="nav-item"><Link class="nav-link" to="/home">Accueil</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/experience">Expériences & Formations</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/project">Projets</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header