import { Link } from "react-router-dom";
import { Element } from 'react-scroll'
import Carousel from "../components/Carousel";
import ProductsView from "../components/ProductsView";
import { products } from "../data/products";
import Footer from "../components/Footer";

import { IoLogoYoutube } from "react-icons/io5";
import { SiNewyorktimes } from "react-icons/si";


export default function IndexView() {
    return (
        <>
            <div className="max-h-full max-w-full bg-gray-100 flex items-center justify-center">
                <Carousel />
                <Element name="section1" className=" z-20 absolute top-28 flex flex-row lg:flex-col gap-4 justify-center items-center">
                    <img className="h-70 w-1/3" src="/public/logo inicio.png" alt="logoSerranoAndes" />
                    <h1 className=" font-alegreya-sc uppercase font-bold text-md lg:text-4xl mt-5 text-white flex-col justify-center items-center flex">
                        Somos una empresa de familia
                        <span>dedicada a satisfacer lod gustos
                            de nuestros clientes</span>
                        <span> a travez del mejor jamon crudo argentino.</span>
                    </h1>
                </Element>
            </div>
            <div className="bg-custom-bordo max-h-full max-w-full ">
                <Element name="section2" className="bg-custom-claro flex flex-row gap-5 mx-3 lg:mx-20 relative bottom-20">
                    <div className="h-96 w-72 my-4 mx-5">
                        <img src="/public/nosotros/foto sobre nosotros.png" alt="puestoSerrano" />
                    </div>
                    <div className=" my-16 lg:text-2xl flex flex-col gap-3">
                        <h1 className="font-bold">Acerca de Nosotros:
                        </h1>
                        <p className="font-roboto flex flex-col gap-2">
                            <span >
                                Serrano Andes nació hace 20 años de la mano de su <br />
                                fundador Leopoldo Altamore, quien empezó a vender <br />
                                el tradicional sándwich. <br />
                            </span>
                            <span className="font-roboto">
                                Hoy en día tenemos 5 puestos distribuidos por la provincia <br />
                                de Mendoza. <br />
                            </span>
                            <span className="font-roboto">
                                Te inviramos a probár el verdadero y original sándwich <br />
                                de jamón crudo.
                            </span></p>
                    </div>
                </Element>
                <div className="flex justify-center items-center">
                    <h1 className="lg:text-3xl text-md font-roboto md:text-black  mx-auto flex mb-7 justify-between relative bottom-5 gap-3">
                        Hemos sido reconocidos por el <span className="hover:text-white text-white">New York Times</span>
                        y el chef <span className="hover:text-white text-white"> German Martitegui</span>
                    </h1>
                </div>
            </div>
            <div className="max-h-full max-w-full bg-gray-100 flex items-center justify-center transition-all">
                <Carousel />


                <div className=" absolute flex flex-col items-center lg:hidden gap-5 text-white">
                    <Link to='https://www.youtube.com/watch?v=-_QF9CnxMWc' target="_blank">
                        <p className="items-center flex flex-col"><IoLogoYoutube size={35} />El mejor sándwich segun The New York Times</p>
                    </Link>
                    <Link to='https://www.youtube.com/watch?v=GhrOHwWhZAo' target="_blank">
                        <p className="items-center flex flex-col"><IoLogoYoutube size={35} />German Martitegui prueba nuestro jámon</p>
                    </Link>
                    <Link to='https://www.nytimes.com/es/2018/03/03/espanol/america-latina/mendoza-argentina-vino-vinedo.html' target="_blank">
                        <p className="items-center flex flex-col"><SiNewyorktimes size={35} />The New York Times prueba nuestro jámon</p>
                    </Link>

                </div>

                <div className="absolute my-2 lg:grid grid-cols-1 lg:grid-cols-3 space-x-10 hidden">
                    <Link to='https://www.youtube.com/watch?v=-_QF9CnxMWc' target="_blank">
                        <div className=" bg-amber-100 mt-1 mx-5 ">
                            <div className=" h-80 w-80 overflow-hidden">
                                <img className=" hover:scale-125 transition-transform hover:rotate-2" src="/public/nosotros/foto nota 2.jpg" alt="ElMejorJamon" />
                            </div>
                            <div className="">
                                <p className=" justify-center items-center mb-1 grid font-roboto">Somos el mejor sándwich de jamón<br /> segun The New York Times</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='https://www.youtube.com/watch?v=GhrOHwWhZAo' target="_blank">
                        <div className=" bg-amber-100 mt-1 ">
                            <div className=" h-80 w-80 overflow-hidden">
                                <img className=" hover:scale-125 transition-transform hover:rotate-2" src="/public/nosotros/foto nota 1.jpg" alt="GermanMartitegui" />
                            </div>
                            <div className="">
                                <p className=" justify-center items-center mb-1 grid font-roboto">El chef German Martitegui prueba <br />nuesto sándwich de jámon</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='https://www.nytimes.com/es/2018/03/03/espanol/america-latina/mendoza-argentina-vino-vinedo.html' target="_blank">
                        <div className=" bg-amber-100 mt-1 ">
                            <div className=" h-80 w-80 overflow-hidden">
                                <img className=" hover:scale-125 transition-transform hover:rotate-2" src="/public/nosotros/foto nota 3.jpg" alt="ElMejorJamon" />
                            </div>
                            <div className="">
                                <p className="justify-center items-center mb-1 grid font-roboto">The New York Times<br /> prueba nuestro jámon</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
            <Element name="section3" className="bg-customColor py-10 relative bottom-5">
                <h1 className=" text-center font-alegreya-sc uppercase text-4xl">Nuestros Productos</h1>
                <div className="min-h-screen bg-customColor grid items-center justify-center" >
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-10 space-y-10 grid-">
                        {products.map(product => (
                            <Link to={product.url} target="_blank" className="first:mt-10 ml-10">
                                <ProductsView key={product.name} product={product} />
                            </Link>
                        ))}
                    </div>
                </div>
            </Element>
            <Element name="section4" className="bg-custom-bordo py-5 relative bottom-5 w-full">
                <h2 className="text-center relative bottom-3 text-xl text-white">Contactate con nosotros</h2>
                <div className="">
                    <Footer />
                </div>
            </Element>
        </>
    )
}
