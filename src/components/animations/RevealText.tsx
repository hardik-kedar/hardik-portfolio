"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

type RevealTextProps = {
  text: string;
  className?: string;
};

export default function RevealText({
  text,
  className,
}: RevealTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, {
      types: "words",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.06,
      duration: 1.2,
      ease: "power4.out",
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h1
      ref={textRef}
      className={className}
    >
      {text}
    </h1>
  );
}