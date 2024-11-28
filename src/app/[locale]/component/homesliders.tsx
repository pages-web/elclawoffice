"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Sliderhome() {
  const t = useTranslations("Headerworks");

  // State to track the current index of the image
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to track if the component has mounted
  const [isMounted, setIsMounted] = useState(false);

  // Array of images for the carousel
  const images = [
    "/image/homesection1.jpg",
    "/image/homesection2.jpg",
    "/image/homesection3.jpg",
    "/image/homesection4.jpg",
    "/image/homesection5.jpg",
  ];

  // Array of text overlays for each image
  const overlays = [
    t("Picture1"),
    t("Picture2"),
    t("Picture3"),
    t("Picture4"),
    t("Picture5"),
  ];

  // Auto transition every 13 seconds (10 seconds for zoom + 3 seconds for transition)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Change to 13 seconds for smooth effect (10s zoom + 3s for transition)

    // Mark as mounted to enable animations
    setIsMounted(true);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div id="content" className="lan-mn index">
      <section className="slider">
        <div className="carousel">
          {images.map((src, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                zIndex: index === currentIndex ? 2 : 1,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transform:
                  index === currentIndex
                    ? isMounted
                      ? "scale(1.2)" // Zoom in after mounting
                      : "scale(1)" // Initial state before mounting
                    : "scale(1)",
                transition: "opacity 3s ease-in-out, transform 10s ease-in-out", // Smooth fade and zoom
              }}
            >
              <Image
                alt={`Image ${index + 1}`}
                src={src}
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">{overlays[index]}</div>
            </div>
          ))}
          {/* Scroll Icon - Independent of carousel-item */}
          <div className="icon-scroll"></div>
        </div>
      </section>
    </div>
  );
}
