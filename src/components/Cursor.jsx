import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
    const cursorRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let mx = 0, my = 0, rx = 0, ry = 0;

        const handleMouseMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
        };

        document.addEventListener('mousemove', handleMouseMove);

        let animationFrameId;
        const anim = () => {
            if (cursorRef.current && ringRef.current) {
                cursorRef.current.style.left = mx + 'px';
                cursorRef.current.style.top = my + 'px';
                rx += (mx - rx) * 0.12;
                ry += (my - ry) * 0.12;
                ringRef.current.style.left = rx + 'px';
                ringRef.current.style.top = ry + 'px';
            }
            animationFrameId = requestAnimationFrame(anim);
        };
        anim();

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        // Initial attachment to interactive elements
        const attachHoverListeners = () => {
            document.querySelectorAll('a, button, .game-card, .team-card').forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        // Attach after a short delay to let components mount
        setTimeout(attachHoverListeners, 100);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            document.querySelectorAll('a, button, .game-card, .team-card').forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                className={`cursor ${isHovered ? 'hovered' : ''}`}
                id="cursor"
                ref={cursorRef}
            ></div>
            <div
                className={`cursor-ring ${isHovered ? 'hovered' : ''}`}
                id="cursorRing"
                ref={ringRef}
            ></div>
        </>
    );
};

export default Cursor;
