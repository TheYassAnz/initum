import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoReact from '../../assets/logo_reactjs.png'
import LogoDjango from '../../assets/logo_django.png'
import LogoNode from '../../assets/logo_node.png'
import LogoDocker from '../../assets/logo_docker.png'
import PPAbubakar from '../../assets/pp_abubakar.png'
import PPYassine from '../../assets/pp_yassine.png'
import PPManel from '../../assets/pp_manel.png'

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
    {
        name: 'Manel DJEDIR',
        role: 'Scrum Master & Développeur UX/UI',
        imageUrl: PPManel,
        linkedin: 'https://www.linkedin.com/in/manel-d-435527261/',
    },
    // More people...
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
            <div className="mx-auto mb-40 mt-10 py-20">
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
        </>
    )
}
