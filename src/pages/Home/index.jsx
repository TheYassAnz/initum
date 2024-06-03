import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoReact from '../../assets/logo_reactjs.png'
import LogoDjango from '../../assets/logo_django.png'
import LogoNode from '../../assets/logo_node.png'
import LogoDocker from '../../assets/logo_docker.png'
import PPAbubakar from '../../assets/pp_abubakar.png'
import PPYassine from '../../assets/pp_yassine.png'
import PPManel from '../../assets/pp_manel.png'
import {
    GlobeAltIcon,
    ShoppingCartIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Site web de presentation',
        description:
            'Obtenez votre site web de presentation simple pour booster votre image sur le web.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Application web interactive',
        description:
            'Obtenez une application web interactive pour vos clients et vos employés.',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Site e-commerce sécurisé',
        description:
            'Obtenez votre site e-commerce sécurisé pour vendre vos produits en ligne.',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Application mobile',
        description:
            'Obtenez votre application mobile pour être présent sur les stores.',
        icon: DevicePhoneMobileIcon,
    },
]

const people = [
    {
        name: 'Yassine ANZAR BASHA',
        role: 'Fondateur & Développeur Full Stack',
        imageUrl: PPYassine,
        linkedin: 'https://linkedin.com/in/yanzarbasha',
    },
    {
        name: 'Abubakar ALIEV',
        role: 'Co-Foundateur & Développeur Back-End',
        imageUrl: PPAbubakar,
        linkedin: 'https://www.linkedin.com/in/abubakar-aliev-49ab02133',
    },
]
export default function Home() {
    return (
        <>
            <div className="mx-auto max-w-2xl py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Obtenez un site internet à votre image.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Nous créons des solutions innovantes afin de booster
                        votre image sur le web.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/contact"
                            className="rounded-full bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Contactez-nous
                        </Link>
                        <Link
                            to="/about"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            À propos <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl rounded-full bg-black px-16 py-20 text-white">
                <h2 className="text-center text-lg font-semibold leading-8">
                    Nous travaillons avec les meilleurs technologies du marché
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                        src={LogoReact}
                        alt="React"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                        src={LogoDjango}
                        alt="Django"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                        src={LogoNode}
                        alt="Node"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                        src={LogoDocker}
                        alt="Docker"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
            <div className="mx-auto mt-10 py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Rencontrez notre équipe
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Nous sommes une équipe de passionnés qui mettons tout en
                        oeuvre pour vous satisfaire.
                    </p>
                </div>
                <div className="mt-10 flex justify-center">
                    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 md:grid-cols-2 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="col-span-2 flex items-center gap-x-6 p-10">
                                    <img
                                        className="max-w-44 flex-shrink-0 rounded-full grayscale"
                                        src={person.imageUrl}
                                        alt=""
                                    />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                            {person.name}
                                        </h3>
                                        <p className="text-sm font-semibold leading-6 text-gray-600">
                                            {person.role}
                                        </p>
                                        <p>
                                            <Link
                                                to="/team"
                                                className="text-sm font-semibold leading-6 text-gray-900"
                                            >
                                                En savoir plus{' '}
                                                <span aria-hidden="true">
                                                    →
                                                </span>
                                            </Link>
                                        </p>
                                        <p class="mt-2 flex">
                                            <Link
                                                to={person.linkedin}
                                                className="bi bi-linkedin text-xl"
                                            ></Link>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mx-auto mb-24 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                        Découvrez nos services
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Nous proposons des services sécurisés et fiables en
                        constante évolution.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid grid-cols-1 items-center gap-20 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="h-full transform rounded-3xl border bg-black p-10 text-white transition duration-300 hover:scale-105"
                            >
                                <dt className="text-base font-semibold leading-7">
                                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                                        <feature.icon
                                            className="h-6 w-6 text-black"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="bg- mt-2 text-base leading-7">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
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
                            <p className="mb-3 text-gray-400">
                                Téléphone : 07 52 70 17 42
                            </p>
                            <Link
                                to="mailto:contact@eatheria.com"
                                className="text-gray-400"
                            >
                                Email: contact@aetheria.com
                            </Link>
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
                                        to="/about"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        À propos
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
