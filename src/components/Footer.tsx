import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col gap-5">
                <ul className="flex flex-row gap-3 mx-auto ">
                    <li className="hover:bg-blue-300 rounded-full m-1 transition-colors"><a
                        href="https://serranoandes.mitiendanube.com/" target="_blank"
                    ><FaShoppingCart size={30} /></a></li>
                    <li className="hover:bg-green-300 rounded-full m-1 transition-colors" ><a
                        href="https://api.whatsapp.com/send/?phone=542613460843&text&type=phone_number&app_absent=0" target="_blank"
                    ><FaWhatsapp size={30} /></a></li>
                    <li className="hover:bg-amber-300 rounded-full m-1 transition-colors" ><a
                        href="https://www.instagram.com/serranoandes/" target="_blank"
                    ><FaInstagram size={30} /></a></li>
                </ul>
                <div className=" flex flex-col gap-3">
                    <h3 className="text-xl text-center text-white"> Nuestras Ubicaciones</h3>
                    <ul className="flex gap-10 mx-auto items-center">
                        <li className=" items-center flex flex-col"><a
                            href="https://maps.app.goo.gl/xGKMsoSNVhbwcaMq5" target="_blank"
                        ><GrMapLocation size={30} /></a>Ruta 7, Los caminos del vino</li>
                        <li className=" items-center flex flex-col"><a
                            href="https://maps.app.goo.gl/tei29Y4cHeNsc7UR8" target="_blank"
                        ><GrMapLocation size={30} /></a>Beltran , Maipu </li>
                        <li className=" items-center flex flex-col"><a
                            href="https://maps.app.goo.gl/6fpoSjGrxzNbmwa28" target="_blank"
                        ><GrMapLocation size={30} /></a>Parador del jamón, by Gianuzzo</li>
                    </ul>
                </div>
                <p className=" text-center cursor-pointer text-white flex gap-4 content-center justify-center">Serrano Andes, Todos los derechos reservados &copy; {new Date().getFullYear()}
                    <Link to='https://linktr.ee/viralmk?fbclid=PAZXh0bgNhZW0CMTEAAaaDt0GRMewRaznFlWYwXoXmAf8DphiWiZ3Cdi0Kn-YCgwNpNZ7Lz0743UM_aem_Vzxh6uCC7RpCbm0sA08zgA' target="_blank"
                    ><img className="h-7 w-20 " src="/public/Marca viral-03.png" alt="VMKT" />
                    </Link></p>
            </div>
        </>
    )
}
