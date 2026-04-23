// "use client";

import { useEffect, useRef } from "react";
import Card from "./Card";

const SmoothColumn = ({ items, speed }) => {
    const trackRef = useRef(null);
   

    useEffect(() => {
        const track = trackRef.current;
       
        let pos = 0;

        const animate = () => {

            const halfHeight = track.scrollHeight / 2;
            console.log(halfHeight, "halfHeight")

            pos -= speed;

            if (Math.abs(pos) >= halfHeight) {
                pos += halfHeight;
            }

            track.style.transform = `translate3d(0, ${pos}px, 0)`;

            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [speed]);

    const loopItems = [...items, ...items];
    return (
        <div className="relative h-full overflow-hidden">
            <div
                ref={trackRef}
                className="flex flex-col gap-6 will-change-transform"
            >
                {loopItems.map((item, i) => (
                    <Card key={i} {...item} />
                ))}
            </div>
        </div>
    )
}

export default SmoothColumn
