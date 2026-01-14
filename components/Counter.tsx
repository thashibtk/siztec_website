"use client";
import React, { useEffect, useRef } from 'react';
// @ts-ignore
interface CounterProps {
  end: number;
  duration?: number;
  className?: string;
}

export default function Counter({ end, duration = 1.5, className = "purecounter" }: CounterProps) {
    const rawId = React.useId();
    // Sanitizing ID just in case, though attribute selector handles most chars.
    // Replacing colons with dashes to be safe for ID attributes if needed, 
    // but React useId is valid for ID attribute. 
    // PureCounter selector needs attribute selector to safe-guard against special chars.
    const id = `counter-${rawId.replace(/:/g, '')}`; 
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Ensure element exists before init
        const element = document.getElementById(id);
        if (element) {
            import('@srexi/purecounterjs').then((module) => {
                const PureCounter = module.default || module;
                try {
                    new PureCounter({
                        selector: `[id='${id}']`,
                        start: 0,
                        end: end,
                        duration: duration,
                        delay: 10,
                        once: true,
                        repeat: false,
                        decimals: 0, 
                        legacy: true,
                        filesaving: true,
                        currency: false,
                        separator: true,
                    });
                } catch (e) {
                    console.error("PureCounter init error:", e);
                }
            }).catch(err => console.error("PureCounter import error:", err));
        }
    }, [end, duration, id]);

    return (
        <span id={id} ref={spanRef} className={className}>0</span>
    );
}
