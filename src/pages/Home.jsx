import React, { useState } from 'react';
import Header from '../componentes/Header.jsx';
import Footer from '../componentes/Footer.jsx';
import Cartel from '../cartel/Cartel.jsx';
import './Home.css';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: 'INTRODUCCIÓN', content: <Cartel /> },
        { title: 'PROBLEMATICA', content: <Cartel /> },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="home-container">
            <Header />

            <main className="main-content">
                <div className="slider">
                    <button className="arrow left-arrow" onClick={prevSlide}>&lt;</button>
                    <div className="slide">
                        <h1>{slides[currentSlide].title}</h1>
                        <div className="slide-content">
                            {slides[currentSlide].content}
                        </div>
                    </div>
                    <button className="arrow right-arrow" onClick={nextSlide}>&gt;</button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
