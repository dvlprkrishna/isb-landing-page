import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center gap-x-2 gap-y-4">
      <Image
        src="/imarticusmoblogo.svg"
        width={263}
        height={54}
        className="mb-4"
        alt="imarticus logo"
      />
      <h2 className="text-3xl text-[#3c4852] font-extrabold leading-tight tracking-tighter md:text-4xl">
        About Imarticus Learning
      </h2>
      <p className=" text-center text-lg text-muted-foreground">
        Imarticus Learning is a leading EdTech company, offering high-quality,
        industry-specific education via innovative technology, specialised
        training, career assistance, and mentorship from industry professionals.
      </p>
      <p className=" text-center text-lg text-muted-foreground">
        It has impacted over 10,00,000+ careers within a decade through
        leading-edge curriculums, highly experienced faculty, and over 3500+
        global partnerships with leading institutions and corporations.
        Imarticus Learning seeks to upskill the existing and future workforce to
        fulfil various industries current and upcoming job market demands.
      </p>
      <p className=" text-center text-lg text-muted-foreground">
        Imarticus Learning is with its students at every step of their learning
        journey with top-notch training programme, certification programme,
        executive programme, university degrees, and several job-assured
        programme. Its objective is to provide learners with valuable learning
        experiences and industry-specific skills and prepare them to take on
        leadership roles in their sector.
      </p>
    </div>
  );
};

export default Footer;
