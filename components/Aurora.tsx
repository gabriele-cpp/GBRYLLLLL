'use client';

import { useEffect, useRef } from 'react';

type AuroraProps = {
    colorStops?: string[];
    blend?: number;
    amplitude?: number;
    speed?: number;
};

const Aurora = ({
                    colorStops = ["#00c7a9", "#2ec4b6", "#007cf0"],
                    blend = 0.5,
                    amplitude = 1.0,
                    speed = 0.5,
                }: AuroraProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        let frameId: number;
        let time = 0;

        const render = () => {
            if (!canvas || !ctx) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            colorStops.forEach((color, idx) =>
                gradient.addColorStop(idx / (colorStops.length - 1), color)
            );

            ctx.fillStyle = gradient;
            ctx.globalAlpha = blend;

            ctx.beginPath();
            ctx.moveTo(0, 0);
            for (let x = 0; x <= canvas.width; x++) {
                const y = Math.sin((x + time) * 0.005) * 100 * amplitude + canvas.height / 2;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(canvas.width, 0);
            ctx.closePath();
            ctx.fill();

            time += speed;
            frameId = requestAnimationFrame(render);
        };

        const resize = () => {
            canvas!.width = window.innerWidth;
            canvas!.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();
        render();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', resize);
        };
    }, [colorStops, blend, amplitude, speed]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-60 blur-3xl"
            style={{ transform: 'translateY(-40%) scale(1.2)' }}
        />
    );
};

export default Aurora;
