import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

export default function FacultySpotlight() {
  const professor = [
    {
      name: "Shashwat Alok",
      image: "/Shashwat.webp",
      alt: "Shashwat Alok",
      position: "Associate Professor, Finance",
      bio: "He is a faculty member at ISB's Finance Department since 2013 with a Ph.D. in Finance from Washington University, directs the Digital Identity Research Initiative. His research delves into corporate finance's impact on emerging markets, encompassing law, government, ...",
      fullBio:
        "He is a faculty member at ISB's Finance Department since 2013 with a Ph.D. in Finance from Washington University, directs the Digital Identity Research Initiative. His research delves into corporate finance's impact on emerging markets, encompassing law, government, and firm dynamics. Shashwat's extensive work is published in top journals and presented at various conferences, showcasing his contributions to the academic and practical world of finance.",
    },
    {
      name: "Nandkishore Doreswamy",
      image: "/nandu.webp",
      alt: "Nandkishore Doreswamy",
      position: "Adjunct Professor (Practice), Marketing",
      bio: "He is a seasoned global executive and inspirational global executive and inspirational leader is a Visiting Faculty at the Indian School of Business, Nandu boasts 34+ years of exceptional leadership experience in diverse environments, including NESTLE, where he ...",
      fullBio:
        "He is a seasoned global executive and inspirational global executive and inspirational leader is a Visiting Faculty at the Indian School of Business, Nandu boasts 34+ years of exceptional leadership experience in diverse environments, including NESTLE, where he held several top positions. His deep expertise in marketing, leadership, and strategic management is a significant asset to ISB's academic and professional community.",
    },
  ];

  const [expanded, setExpanded] = useState(professor.map(() => false));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
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

  const handleSeeMoreClick = (index: number) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <>
      <div ref={sliderRef} className="keen-slider my-4">
        {professor.map((prof, index) => (
          <div key={index} className="keen-slider__slide">
            <div
              style={{
                background: "linear-gradient(180deg,#3e3b68,#6c3a71)",
              }}
              className="bg-purple-600 mt-10 sm:my-0 text-white relative p-6 mb-8 sm:mb-0 pt-16 rounded-lg shadow-lg w-full sm:w-72"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 w-20 h-20">
                <Image
                  src={prof.image}
                  alt={prof.alt}
                  className="rounded-full"
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{prof.name}</h3>
              <p className="text-sm font-medium text-center">{prof.position}</p>
              <p className="text-sm mt-4">
                {expanded[index] ? prof.fullBio : prof.bio}{" "}
                <span
                  className="text-blue-300 cursor-pointer"
                  onClick={() => handleSeeMoreClick(index)}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
              </p>
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
