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
                <div className="relative w-full h-80 bg-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dka01ysp8/image/upload/v1728838386/bgn/pvi3bj0jnved7zymju7m.png')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative w-full h-80 bg-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dka01ysp8/image/upload/v1728857216/bgn/b9b8dqyz6swhsfxqrbee.png')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative w-full h-80 bg-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dka01ysp8/image/upload/v1728857065/bgn/xu7dr52nsqpzwn7ycxxj.png')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative w-full h-80 bg-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dka01ysp8/image/upload/v1728856919/bgn/lno3b27d4k5oplrld6uy.png')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
