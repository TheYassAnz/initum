import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
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
                                className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                            >
                                <option value="default" disabled selected>
                                    --Choisissez une option--
                                </option>
                                <option value="landing">
                                    Site web de présentation
                                </option>
                                <option value="application">
                                    Application web interactive
                                </option>
                                <option value="e-commerce">
                                    Site e-commerce
                                </option>
                                <option value="mobile">
                                    Application mobile
                                </option>
                                <option value="other">Autre</option>
                            </select>
                        </div>
                        <div>
                            <label className="mt-6 block text-sm font-semibold text-gray-900">
                                Message
                            </label>
                            <textarea
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
