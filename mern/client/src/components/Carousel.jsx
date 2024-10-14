import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS

const CarouselComponent = () => {
    return (
        <div className="bg-gray-800">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div className="relative w-full h-80 bg-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dka01ysp8/image/upload/v1728826116/bgn/kssmasue0bdzu2mxvukv.png')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div> 
                </div>
                <div className="relative w-full h-80 bg-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dka01ysp8/image/upload/v1728828051/bgn/zcrf2xmh0i1pbsfemchd.png')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative w-full h-80 bg-cover" style={{ backgroundImage: "url('https://i.natgeofe.com/n/b2f18338-8e60-40e1-9338-bb96c0c0c30e/GettyImages-515561558.jpg?w=1280&h=925')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
