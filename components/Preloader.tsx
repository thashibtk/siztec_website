"use client";
import React, { useEffect, useState } from "react";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [render, setRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            // Match the delay in CSS transition or original JS logic
            setTimeout(() => {
                setRender(false);
                document.body.style.overflow = 'visible';
            }, 500); // Wait for fade out
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!render) return null;

    return (
        <div 
            id="preloader" 
            style={{ 
                opacity: loading ? 1 : 0, 
                transition: "opacity 0.5s ease-out",
                pointerEvents: loading ? "all" : "none" 
            }}
        >
            <div className="ctn-preloader" id="ctn-preloader">
                <div className="animation-preloader">
                    <div className="spinner"></div>
                    <div className="loader-logo">
                        <img src="/images/logo/icon.png" alt="Preloader Logo" />
                    </div>
                    <div className="txt-loading">
                        <span className="letters-loading" data-text-preloader="S"> S </span>
                        <span className="letters-loading" data-text-preloader="I"> I </span>
                        <span className="letters-loading" data-text-preloader="Z"> Z </span>
                        <span className="letters-loading" data-text-preloader="T"> T </span>
                        <span className="letters-loading" data-text-preloader="E"> E </span>
                        <span className="letters-loading" data-text-preloader="C"> C </span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
