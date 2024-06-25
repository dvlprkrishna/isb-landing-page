import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

export default function FintechShowcase() {
  const cards = [
    { logo: "/edua.svg", title: "Eduvanz", category: "Lending" },
    { logo: "/edua.svg", title: "INDmoney", category: "Wealth Tech" },
    { logo: "/edua.svg", title: "PayIO", category: "Payment" },
    { logo: "/edua.svg", title: "Finagg", category: "Supply Chain Finance" },
    { logo: "/edua.svg", title: "NEO Insurance", category: "Insuretech" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 5,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 15,
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
        {cards.map((card, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-white group relative shadow-md rounded-lg text-left overflow-hidden"
          >
            <div className="">
              <div className="px-6 w-full flex flex-col gap-y-3">
                <div className="relative mt-8 md:mt-4 w-full h-[64px]">
                  <Image
                    src={card.logo}
                    alt={card.title}
                    width={1}
                    height={60}
                    className="absolute inset-0 w-full h-full object-contain  md:object-cover"
                  />
                </div>
                <div className="text-md mb-1">Explore</div>
                <div className="text-md font-bold mb-4">{card.category}</div>
              </div>
              <div
                className="text-md inline-flex w-full justify-between items-center text-white p-6"
                style={{
                  background:
                    "linear-gradient(339deg,#4362a9 -1.99%,#50a1d5 77.11%)",
                }}
              >
                Know More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <div
              className="text-white text-sm p-6 w-full absolute bottom-0 left-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              style={{
                background:
                  "linear-gradient(339deg,#4362a9 -1.99%,#50a1d5 77.11%)",
              }}
            >
              <div className="text-md py-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                ullam a ipsam provident id vitae iure dolorem ratione. Laborum
                consectetur non dignissimos quia earum totam ut labore adipisci
                exercitationem eligendi.
              </div>
            </div>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && instanceRef.current.track.details && (
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
