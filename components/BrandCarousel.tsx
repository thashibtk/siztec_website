"use client";
import React, { useEffect, useRef } from 'react';
// @ts-ignore

const BrandCarousel = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let glideInstance: any = null;

        if (sliderRef.current) {
            import('@glidejs/glide').then((module) => {
                if (!sliderRef.current) return; // Component might have unmounted

                const Glide = module.default || module;
                try {
                    glideInstance = new Glide(sliderRef.current, {
                        type: "carousel",
                        perView: 6,
                        focusAt: 'center',
                        gap: 20,
                        autoplay: 1000,
                        hoverpause: true,
                        animationDuration: 1000,
                        breakpoints: {
                            1200: { perView: 5 },
                            992: { perView: 4 },
                            768: { perView: 3 },
                            576: { perView: 2 },
                        },
                    });
                    glideInstance.mount();
                } catch (e) {
                    console.error("Glide init error:", e);
                }
            }).catch(err => console.error("Glide import error:", err));
        }

        return () => {
            if (glideInstance) {
                glideInstance.destroy();
            }
        };
    }, []);

    const brands = [
        "/images/icons/clients/burtplace.png",
        "/images/icons/clients/bkc.png",
        "/images/icons/clients/cgc.png",
        "/images/icons/clients/cnc.png",
        "/images/icons/clients/hilalco.png",
        "/images/icons/clients/pv.png",
    ];

    return (
        <div className="glide-brand-carousel" ref={sliderRef}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides d-flex" style={{listStyle: 'none', padding: 0, margin: 0}}>
                    {brands.map((src, index) => (
                        <li className="glide__slide text-center" key={index}>
                            <img 
                                alt="Client Logo" 
                                className="img-fluid" 
                                src={src} 
                                style={{ height: '70px', width: 'auto', margin: '0 auto', display: 'inline-block' }} 
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BrandCarousel;
