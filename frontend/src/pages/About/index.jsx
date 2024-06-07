export default function About() {
    return (
        <main className="mb-16 grid h-full place-items-center gap-y-10 bg-white px-8 py-12 lg:px-8">
            <div className="grid gap-y-10">
                <div className="flex max-w-4xl flex-col">
                    <h1 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        À propos
                    </h1>
                    <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Notre histoire
                    </h2>
                    <p className="mt-6 text-justify text-base leading-7 text-gray-600">
                        Initum est une entreprise de prestations de services
                        informatiques spécialisée dans de le développement web.
                        Fondée en 2024 à Paris par deux développeurs passionnés
                        , elle prpose au grand public des services de qualité à
                        des prix compétitifs.
                    </p>
                </div>
            </div>
        </main>
    )
}
