import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import photo from "../Photo/hello_kittygi_birthday.png"
import Timer from "./timer"
gsap.registerPlugin(MotionPathPlugin);

function HeartAnimation() {
  const heartRef = useRef(null);
  const containerRef = useRef(null);

  function generateHeartPoints(scale = 10, step = 0.1) {
    const points = [];
    for (let t = 0; t <= Math.PI * 2; t += step) {
      // Calculate the heart coordinates using the parametric equations.
      const x = scale * 16 * Math.pow(Math.sin(t), 3);
      const y = -scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      points.push({ x, y });
    }
    const start = points[0];

    return points.map((p) => ({
        x: p.x - start.x,
        y: p.y - start.y,
    }));
  }

  useEffect(() => {
    const heartPoints = generateHeartPoints(10, 0.1);
    gsap.to(heartRef.current, {
      duration: 5,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: heartPoints,
        align: heartRef.current,
        autoRotate: false,
      }
    });

    const trailInterval = 0.1; // seconds
    const spawnTrail = () => {
      // Clone the heart element
      const clone = heartRef.current.cloneNode(true);
      clone.style.position = "absolute";
      // Append clone to container so it doesn't interfere with the main element
      containerRef.current.appendChild(clone);
      
      // Set an initial opacity and let it fade out
      gsap.set(clone, { opacity: 0.5 });
      gsap.to(clone, {
        duration: 1,
        opacity: 0,
        ease: "power1.out",
        onComplete: () => clone.remove(),
      });
    };
    
    const intervalId = setInterval(spawnTrail, trailInterval * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
      <>
    <div>
      <Timer></Timer>
    </div>

    <div ref={containerRef} style={containerStyle}>
      <img
      ref={heartRef} 
      style={heartStyle}
      src={photo}
      />
    </div>
    </>

    
  )
}

const containerStyle = {
    position: "relative",
    width: "300px",
    height: "300px",
    margin: "0 auto",
  };

const heartStyle = {
  display: "box",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "pink",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

export default HeartAnimation;
