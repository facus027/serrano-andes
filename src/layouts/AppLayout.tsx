import { Outlet } from 'react-router-dom'
import { Link } from 'react-scroll'

export default function AppLayout() {
    return (
        <>
            <header className=' fixed z-30 py-4 flex flex-col min-w-full right-1 lg:flex-row lg:justify-end bg-black text-white font-bold '>
                <nav className=' gap-16 flex mr-10 text-lg'>
                    <Link to="section1" smooth={true} duration={500} className="cursor-pointer">
                        Inicio
                    </Link>
                    <Link to="section2" smooth={true} duration={500} className="cursor-pointer">
                        Nosotros
                    </Link>
                    <Link to="section3" smooth={true} duration={500} className="cursor-pointer">
                        Productos
                    </Link>
                    <Link to="section4" smooth={true} duration={500} className="cursor-pointer">
                        Contactos
                    </Link>
                </nav>
            </header >

            <section className="w-max-full mx-auto p-2">
                <Outlet />
            </section>
        </>
    )
}
