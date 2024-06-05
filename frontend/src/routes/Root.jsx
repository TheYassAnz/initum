import { Link, Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <header className="mx-5 mt-5">
                <nav className="flex items-center justify-between rounded-full px-10 py-5 text-black">
                    <div>
                        <Link to="/home" className="text-2xl font-bold">
                            <span className="font-normal">Ae</span>theria.
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <Link
                            to="/contact"
                            className="hidden rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:flex "
                        >
                            Obtenir un devis
                        </Link>
                        <button className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10">
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                class="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700"
                            >
                                <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            <Outlet />
            <footer className="bg-black py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="text-white">
                            <h3 className="mb-4 text-lg font-semibold">
                                Informations
                            </h3>
                            <p className="text-gray-400">
                                7 Rue Maurice Grandcoing
                            </p>
                            <p className="mb-3 text-gray-400">
                                94200 Ivry-sur-Seine
                            </p>
                            <p>
                                <Link
                                    className="text-gray-400 hover:underline"
                                    to="tel:0752701742"
                                >
                                    07 52 70 17 42
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="mailto:contact@eatheria.com"
                                    className="text-gray-400 hover:underline"
                                >
                                    contact@aetheria.com
                                </Link>
                            </p>
                        </div>
                        <div className="text-white">
                            <h3 className="mb-4 text-lg font-semibold">
                                Liens rapides
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/home"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Accueil
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/team"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Equipe
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        À propos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-white">
                            <h3 className="mb-4 text-lg font-semibold">
                                Réseaux sociaux
                            </h3>
                            <ul className="flex space-x-4">
                                <li>
                                    <Link
                                        to="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        <i className="bi bi-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        <i className="bi bi-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        <i className="bi bi-linkedin"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                S'inscrire à la newsletter
                            </h2>
                            <p class="mt-4 text-lg leading-8 text-gray-300">
                                Recevez les dernières nouvelles de notre
                                entreprise directement dans votre boîte de
                                réception.
                            </p>
                            <div class="mt-6 flex gap-x-4">
                                <label for="email-address" class="sr-only">
                                    Adresse e-mail
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    required
                                    class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                    placeholder="Entrez votre adresse e-mail"
                                />
                                <button
                                    type="submit"
                                    class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm"
                                >
                                    S'inscrire
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-gray-400">
                            © 2024 Aetheria. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Root
