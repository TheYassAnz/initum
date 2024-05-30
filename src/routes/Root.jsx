import { Link, Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <header className="mx-5 mt-5">
                <nav className="flex items-center justify-between rounded-full px-10 py-5 text-black">
                    <div>
                        <Link
                            to="/home"
                            className="text-2xl font-bold uppercase"
                        >
                            <span className="font-normal">Anz</span>liev
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <Link
                            to="/contact"
                            className="inline-flex rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
                        >
                            Contact Us
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
            <main className="mx-5 px-3">
                <Outlet />
            </main>
        </>
    )
}
export default Root
