import React from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css'; // Import your CSS file

const FadeInSection = ({ children, animationClass = 'fade-in-up', delay = '' }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            className={`${animationClass} ${inView ? animationClass : ''} ${delay}`}
            ref={ref}
            style={{
                opacity: inView ? 1 : 0, // Set opacity to 1 if inView is true, otherwise set it to 0
                transition: 'opacity 0.5s ease-in-out', // Add a transition effect to the opacity property
            }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
