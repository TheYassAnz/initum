import axios from 'axios'
import { useState } from 'react'
import Alert from '../../components/Alert'

export default function Contact() {
    const [open, setOpen] = useState(false)
    const [alertInfo, setAlertInfo] = useState({ title: '', message: '' })
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const data = Object.fromEntries(form)
        axios
            .post('http://localhost:8000/api/mail/send', data)
            .then((response) => {
                event.target.reset()
                setAlertInfo({
                    title: 'Message envoyé',
                    message: 'Votre message a été envoyé avec succès!',
                })
                setOpen(true)
            })
            .catch((error) => {
                setAlertInfo({
                    title: 'Erreur',
                    message:
                        "Une erreur est survenue lors de l'envoi du message.",
                })
                setOpen(true)
            })
    }
    return (
        <>
            <Alert
                open={open}
                setOpen={setOpen}
                title={alertInfo.title}
                message={alertInfo.message}
            />
            <main className="mb-16 grid h-full place-items-center bg-white px-4 py-12 lg:px-8">
                <div className="flex h-full flex-col items-center justify-center">
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Contactez-nous
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Vous avez une question ou un projet en tête ?
                        Contactez-nous dès maintenant.
                    </p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex flex-col gap-x-10 sm:flex-row">
                            <div>
                                <label className="mt-6 block text-sm font-semibold text-gray-900">
                                    Nom
                                </label>
                                <input
                                    name="lastname"
                                    type="text"
                                    className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="mt-6 block text-sm font-semibold text-gray-900">
                                    Prénom
                                </label>
                                <input
                                    name="firstname"
                                    type="text"
                                    className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mt-6 block text-sm font-semibold text-gray-900">
                                Adresse e-mail
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="mt-6 block text-sm font-semibold text-gray-900">
                                Votre projet
                            </label>
                            <select
                                name="project"
                                className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                            >
                                <option value="default" disabled selected>
                                    --Choisissez une option--
                                </option>
                                <option value="Site web de présentation">
                                    Site web de présentation
                                </option>
                                <option value="Application web interactive">
                                    Application web interactive
                                </option>
                                <option value="Site e-commerce">
                                    Site e-commerce
                                </option>
                                <option value="Application mobile">
                                    Application mobile
                                </option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                        <div>
                            <label className="mt-6 block text-sm font-semibold text-gray-900">
                                Message
                            </label>
                            <textarea
                                name="message"
                                className="mt-2 h-28 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="mt-6 w-full rounded-md bg-black px-4 py-2 font-semibold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}
