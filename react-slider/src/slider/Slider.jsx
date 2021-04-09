import React, { useState, useEffect } from 'react';
import './slider.css';
import slide1 from '../img/Slide1.jpg';
import slide2 from '../img/Slide2.jpg';
import slide3 from '../img/Slide3.jpg';

const images = [
    <img key={slide1} src={slide1} alt='first' width='450px' height='450px'/>,
    <img key={slide2} src={slide2} alt='second' width='450px' height='450px'/>,
    <img key={slide3} src={slide3} alt='third' width='450px' height='450px'/>
]

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCurrentSlide(current =>
                current === images.length - 1 ? 0 : current + 1
            )
        }, 3000)
        return () => clearInterval()
    }, [])
    const prevImageIndex = currentSlide ? currentSlide - 1 : images.length - 1;
    const nextImageIndex = currentSlide === images.length - 1 ? 0 : currentSlide + 1;

    return (
        <div className='slider'>
            <div className='slider-image slider-image-prev' key={prevImageIndex}>
                {images[prevImageIndex]}
            </div>
            <div className='slider-image' key={currentSlide}>
                {images[currentSlide]}
            </div>
            <div className='slider-image slider-image-next' key={nextImageIndex}>
                {images[nextImageIndex]}
            </div>
        </div>
    )
}

