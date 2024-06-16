import Image from "next/image";
import { title } from "process";
import React from "react";

const data = [
  {
    _id: 1,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    image: "Frame1.svg",
  },
  {
    _id: 2,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    image: "Frame2.svg",
  },
  {
    _id: 3,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    image: "Frame3.svg",
  },
  {
    _id: 4,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    image: "Frame4.svg",
  },
  {
    _id: 5,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    image: "Frame5.svg",
  },
  {
    _id: 6,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    image: "Frame6.svg",
  },
];

const About = () => {
  return (
    <div className="flex w-full flex-col items-start gap-x-2 gap-y-4">
      <h2 className="text-3xl text-[#3c4852] font-extrabold leading-tight tracking-tighter md:text-4xl">
        About the{" "}
        <span className="text-[#3f95d0]">Fintech Senior Leadership</span>{" "}
        Programme
      </h2>
      <p className=" text-left text-lg text-muted-foreground">
        Participate in an exclusive 8-month Senior Leadership course in Fintech,
        tailored to meet the requirements of seasoned executives. Embrace an
        immersive learning experience exposing you to cutting-edge technology
        innovations in diverse financial sectors, including banking, insurance,
        lending, and other domains in the economic ecosystem—Utilise
        state-of-the-art technologies such as blockchain, machine learning, and
        analytics. The program culminates in a high-impact capstone project,
        live interactive sessions with faculty members from the Indian School of
        Business, fintech start-up showcases, weekly office hours with Industry
        Experts, and essential fintech mentoring.
      </p>
      <div className="flex flex-wrap w-full">
        {data.map((item) => (
          <div key={item._id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
              />
              <h3 className="text-xl font-bold text-center mt-2">
                {item.title}
              </h3>
              <p className="text-center text-sm mt-2">{item.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
