import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateCircle = () => {
      circlePos.current.x += (mousePos.current.x - circlePos.current.x) * 0.15;
      circlePos.current.y += (mousePos.current.y - circlePos.current.y) * 0.15;

      if (circleRef.current) {
        circleRef.current.style.left = `${circlePos.current.x}px`;
        circleRef.current.style.top = `${circlePos.current.y}px`;
      }

      requestAnimationFrame(animateCircle);
    };

    const handleMouseEnter = () => {
      circleRef.current?.classList.add("hovered");
    };

    const handleMouseLeave = () => {
      circleRef.current?.classList.remove("hovered");
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateCircle();

    // Add hover effects to interactive elements
    const hoverables = document.querySelectorAll("a, button, .hoverable");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={circleRef} className="cursor-circle" />
    </>
  );
};

export default CustomCursor;
