import { useState, useEffect } from 'react';

const images = [
    '/public/Carrusel inicio_1.jpg',
    '/public/Carrusel inicio_2.jpg',
    '/public/Carrusel inicio_3.jpg'
];



export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Cambia la imagen cada 3 segundos

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="relative max-w-full max-h-full ">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-7000"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full" />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};