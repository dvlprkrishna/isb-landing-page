import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

export default function Traits() {
  const traits = [
    {
      id: 1,
      src: "/traits1.svg",
      alt: "Technology Leader",
      text: "Technology Leader",
    },
    {
      id: 2,
      src: "/traits2.svg",
      alt: "Strategic & Creative Thinker",
      text: "Strategic & Creative Thinker",
    },
    {
      id: 3,
      src: "/traits3.svg",
      alt: "Data-driven Problem Solver",
      text: "Data-driven Problem Solver",
    },
    {
      id: 4,
      src: "/traits4.svg",
      alt: "Catalyst for Innovation",
      text: "Catalyst for Innovation",
    },
    {
      id: 5,
      src: "/traits5.svg",
      alt: "Global Thought Leadership",
      text: "Global Thought Leadership",
    },
    {
      id: 6,
      src: "/traits6.svg",
      alt: "Strategist & Risk Mitigator",
      text: "Strategist & Risk Mitigator",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider my-4">
        {traits.map((trait) => (
          <div
            key={trait.id}
            className="keen-slider__slide flex flex-col gap-y-4 items-center bg-white px-4 py-8 rounded-lg shadow-lg justify-between"
          >
            <Image src={trait.src} alt={trait.alt} width={64} height={64} />
            <p className="mt-2 text-center font-semibold text-[#165d93] text-lg">
              {trait.text}
            </p>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots md:hidden">
          {Array.from(
            {
              length: instanceRef.current.track.details.slides.length,
            },
            (_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          )}
        </div>
      )}
    </>
  );
}
