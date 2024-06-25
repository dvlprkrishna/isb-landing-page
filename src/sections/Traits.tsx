import Image from "next/image";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      {traits.map((trait) => (
        <div
          key={trait.id}
          className="flex flex-col items-center bg-white px-4 py-8 rounded-lg shadow-lg justify-between"
        >
          <Image src={trait.src} alt={trait.alt} width={64} height={64} />
          <p className="mt-2 text-center font-semibold text-[#165d93] text-lg">
            {trait.text}
          </p>
        </div>
      ))}
    </div>
  );
}
