import { AccordionDemo } from "@/components/Accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
const data = [
  {
    _id: 1,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    bgColor: "#efe3e5",
    image: "Frame1.svg",
  },
  {
    _id: 2,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    bgColor: "#e1dff5",
    image: "Frame2.svg",
  },
  {
    _id: 3,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    bgColor: "#82a8cd59",
    image: "Frame3.svg",
  },
  {
    _id: 4,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    bgColor: "#e1dff5",
    image: "Frame4.svg",
  },
  {
    _id: 5,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    bgColor: "#82a8cd59",
    image: "Frame5.svg",
  },
  {
    _id: 6,
    title: "Tailored for Fintech Mastery",
    data: "Our programme curriculum is meticulously crafted to immerse senior leaders in Business, leadership, and strategy trends. Through diverse experiential learning, participants gain essential skills to navigate the challenges of leading in the era of fintech disruption.",
    bgColor: "#efe3e5",
    image: "Frame6.svg",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {/* header */}
      <section className=" w-full text-left gap-6 pb-8 pt-6 md:py-10 bg-cover bg-[url('/headerw.webp')]">
        <div className="container text-white flex flex-col sm:flex-row gap-y-5 justify-between">
          <div className="flex flex-col gap-y-6">
            {/* ISBLogo.webp */}
            <Image width={267} height={64} src="/ISBLogo.webp" alt="campus" />
            <h2 className="text-2xl text-white max-w-md font-bold     md:text-3xl">
              Senior Leadership Programme In Fintech
            </h2>
            <p className=" text-white text-xl ">
              Pioneer Leadership in Fintech
            </p>
            <div className="flex flex-row gap-8">
              <p className="flex items-center gap-x-2">
                <span>
                  <Image src="/clock.svg" height={16} width={16} alt="clock" />
                </span>
                8 Months
              </p>
              <p className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/Live-training.svg"
                    height={16}
                    width={16}
                    alt="clock"
                  />
                </span>
                Online + Campus Immersion
              </p>
            </div>
            <div className="flex mt-5 max-w-md  space-x-4">
              <Button className="flex-1 border border-white hover:bg-transparent bg-transparent text-white py-8 px-2 text-md rounded-lg">
                Download Brochure
              </Button>
              <Button className="flex-1 text-[#3c4852] bg-white hover:bg-white py-8 px-2 text-md rounded-lg">
                Apply Now
              </Button>
            </div>
          </div>
          <Image width={556} height={358} src="/camus.webp" alt="campus" />
        </div>
      </section>
      {/* about */}
      <section className="container text-left gap-6 pb-8 pt-8 mt-8 md:py-10">
        <div className="flex w-full flex-col items-start gap-x-2 gap-y-4">
          <h2 className="text-3xl text-[#3c4852] font-bold  md:text-4xl">
            About the{" "}
            <span className="text-[#3f95d0]">Fintech Senior Leadership</span>{" "}
            Programme
          </h2>
          <p className=" text-left text-lg text-muted-foreground">
            Participate in an exclusive 8-month Senior Leadership course in
            Fintech, tailored to meet the requirements of seasoned executives.
            Embrace an immersive learning experience exposing you to
            cutting-edge technology innovations in diverse financial sectors,
            including banking, insurance, lending, and other domains in the
            economic ecosystem—Utilise state-of-the-art technologies such as
            blockchain, machine learning, and analytics. The program culminates
            in a high-impact capstone project, live interactive sessions with
            faculty members from the Indian School of Business, fintech start-up
            showcases, weekly office hours with Industry Experts, and essential
            fintech mentoring.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {data.map((item) => (
              <div key={item._id} className="flex flex-col items-start ">
                <Image
                  className="rounded-full h-[70px] w-[70px] bg-[#efe3e5] p-5"
                  style={{ backgroundColor: item.bgColor }}
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={70}
                />
                <h3 className="text-lg text-[#3c4852] font-bold text-left my-2">
                  {item.title}
                </h3>
                <p className="text-left text-base text-[#3c4852] max-w-[400px] ">
                  {item.data}
                </p>
              </div>
            ))}
          </div>
          <div className="flex mx-auto">
            <Button className="flex-1   text-white bg-[#3f95d0] hover:bg-[#3f95d0] py-7 px-12 text-md rounded-lg">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      {/* Programme Curriculum
       */}

      {/* Fintech Showcases

 */}

      {/* Projects that you will work on
       */}

      {/* Key Traits of a Fintech Leader
       */}
      <section className=" w-full text-center gap-6 pb-8 pt-6 md:py-10 bg-cover bg-[url('/leader1.webp')]">
        <div className="container text-white flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-center gap-y-6">
            {/* ISBLogo.webp */}
            <h2 className="text-2xl text-white max-w-md font-bold     md:text-3xl">
              Key Traits of a Fintech Leader
            </h2>
          </div>
          <div className="flex justify-center items-center  p-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-y-4 gap-x-8">
              <div className="flex flex-col items-center bg-white px-4 py-8 rounded-lg shadow-lg justify-between">
                <Image
                  src="/traits1.svg"
                  alt="Technology Leader"
                  width={64}
                  height={64}
                />
                <p className="mt-2 text-center font-semibold text-[#165d93] text-lg">
                  Technology Leader
                </p>
              </div>
              <div className="flex flex-col items-center bg-white px-4 py-8 rounded-lg shadow-lg justify-between">
                <Image
                  src="/traits2.svg"
                  alt="Strategic & Creative Thinker"
                  width={64}
                  height={64}
                />
                <p className="mt-2 text-center font-semibold text-[#165d93] text-lg">
                  Strategic & Creative Thinker
                </p>
              </div>
              <div className="flex flex-col items-center bg-white px-4 py-8 rounded-lg shadow-lg justify-between">
                <Image
                  src="/traits3.svg"
                  alt="Data-driven Problem Solver"
                  width={64}
                  height={64}
                />
                <p className="mt-2 text-center font-semibold text-[#165d93] text-lg">
                  Data-driven Problem Solver
                </p>
              </div>
              <div className="flex flex-col items-center bg-white px-4 py-8 rounded-lg shadow-lg justify-between">
                <Image
                  src="/traits4.svg"
                  alt="Catalyst for Innovation"
                  width={64}
                  height={64}
                />
                <p className="mt-2 text-center font-semibold text-[#165d93] text-lg">
                  Catalyst for Innovation
                </p>
              </div>
              <div className="flex flex-col items-center bg-white px-4 py-8 rounded-lg shadow-lg justify-between">
                <Image
                  src="/traits5.svg"
                  alt="Global Thought Leadership"
                  width={64}
                  height={64}
                />
                <p className="mt-2 text-center font-semibold text-[#165d93] text-lg">
                  Global Thought Leadership
                </p>
              </div>
              <div className="flex flex-col items-center bg-white px-4 py-8 rounded-lg shadow-lg justify-between">
                <Image
                  src="/traits6.svg"
                  alt="Strategist & Risk Mitigator"
                  width={64}
                  height={64}
                />
                <p className="mt-2 text-center font-semibold text-[#165d93] text-lg">
                  Strategist & Risk Mitigator
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumini Status */}
      <section className="container text-left gap-6 pb-8 pt-8 mt-8 md:py-10">
        <div className="flex w-full flex-col sm:flex-row  items-start gap-x-2 gap-y-4">
          <div className="sm:w-1/2 w-full">
            <h2 className="text-3xl text-[#3c4852] font-bold  md:text-4xl">
              <span className="text-[#3f95d0]">ISB</span> Executive Alumni
              Status
            </h2>
            <h4 className="text-[#3c4852] font-bold text-lg my-3">
              ISB Executive Alumni will receive the following benefits upon
              successful completion of 100+ learning hours:
            </h4>
            <ul>
              <li className="flex flex-row gap-x-2 items-baseline">
                <span className="text-[#3c4852] text-left font-bold text-base">
                  <Image src="/list.svg" width={22} height={22} alt="check" />
                </span>{" "}
                Participate in an exclusive 8-month Senior Leadership course in
                Fintech, tailored to meet the requirements of seasoned
                executives.
              </li>
              <li className="flex flex-row gap-x-2 items-baseline">
                <span className="text-[#3c4852] text-left font-bold text-base">
                  <Image src="/list.svg" width={22} height={22} alt="check" />
                </span>{" "}
                Participate in an exclusive 8-month Senior Leadership course in
                Fintech, tailored to meet the requirements of seasoned
                executives.
              </li>
              <li className="flex flex-row gap-x-2 items-baseline">
                <span className="text-[#3c4852] text-left font-bold text-base">
                  <Image src="/list.svg" width={22} height={22} alt="check" />
                </span>{" "}
                Participate in an exclusive 8-month Senior Leadership course in
                Fintech, tailored to meet the requirements of seasoned
                executives.
              </li>
              <li className="flex flex-row gap-x-2 items-baseline">
                <span className="text-[#3c4852] text-left font-bold text-base">
                  <Image src="/list.svg" width={22} height={22} alt="check" />
                </span>{" "}
                Participate in an exclusive 8-month Senior Leadership course in
                Fintech, tailored to meet the requirements of seasoned
                executives.
              </li>
              <li className="flex flex-row gap-x-2 items-baseline">
                <span className="text-[#3c4852] text-left font-bold text-base">
                  <Image src="/list.svg" width={22} height={22} alt="check" />
                </span>{" "}
                Participate in an exclusive 8-month Senior Leadership course in
                Fintech, tailored to meet the requirements of seasoned
                executives.
              </li>
              <li className="flex flex-row gap-x-2 items-baseline">
                <span className="text-[#3c4852] text-left font-bold text-base">
                  <Image src="/list.svg" width={22} height={22} alt="check" />
                </span>{" "}
                Participate in an exclusive 8-month Senior Leadership course in
                Fintech, tailored to meet the requirements of seasoned
                executives.
              </li>
            </ul>
          </div>
          <div className="sm:w-1/2 w-full">
            <Image
              src="/alumniw.webp"
              width={610}
              height={526}
              className="mb-4"
              alt="alumniw.webp"
            />
          </div>
        </div>
      </section>
      {/* Expectional */}
      <section className=" bg-[#ecf0f7] w-full ">
        <div className="container  flex w-full flex-col items-center text-center gap-6 pb-8 pt-8 mt-8 md:py-10 gap-x-2 gap-y-16">
          <h2 className="text-3xl text-center text-[#3c4852] font-bold  md:text-4xl">
            What Makes <span className="text-[#3f95d0]"> ISB </span>{" "}
            Exceptional?
          </h2>
          {/* ISB_INfow */}
          <Image
            src="/ISB_INfow.webp"
            width={1170}
            height={419}
            className="mb-4"
            alt="imarticus logo"
          />
        </div>
      </section>
      {/* Know More */}
      <section className="container text-left gap-6 pb-8 pt-8 mt-8 md:py-10">
        <div className="flex w-full flex-col sm:flex-row-reverse  items-start gap-x-2 gap-y-4">
          <div className="w-full sm:w-1/2 pl-8">
            <h2 className="text-3xl mb-8 text-[#3c4852] font-bold  md:text-4xl">
              Know More About <span className="text-[#3f95d0]">ISB</span>
            </h2>
            <p className="text-[#3c4852] text-left mb-4 text-base">
              Indian School of Business (ISB) is the #1 Executive Education
              B-school in India. Through its Executive Education, ISB equips
              executives with the necessary skills, mindsets, and valuable
              networks to effectively manage and lead in the ever-evolving
              business landscape while attaining their unique personal and
              professional objectives. In contrast to many prominent
              international business schools, ISB stands out by cultivating
              robust intellectual capital and an extensive collection of case
              studies that delve into critical issues faced by organisations and
              leaders in both advanced and emerging markets.
            </p>
            <p className="text-[#3c4852] text-left mb-4 text-base">
              The ISB faculty comprises distinguished academics with deep domain
              expertise, drawing from extensive research, real-world
              involvement, and substantial teaching experience gained at
              esteemed global business institutions. ISB&apos;s Executive
              Education programmes are known for their distinct teaching
              methodologies and a rigorous and stimulating learning environment
              that pushes participants to expand their learning boundaries
              beyond their beliefs.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <Image
              src="/knowmore.webp"
              width={610}
              height={526}
              className="mb-4"
              alt="knowmore.webp"
            />
          </div>
        </div>
      </section>

      {/* Academic Director
       */}
      <section className="w-full text-left gap-6 pt-6 md:pt-10 bg-white">
        <div className="container text-white flex flex-col gap-y-5 justify-center">
          <h2 className="text-3xl text-center text-[#3c4852] font-bold md:text-4xl">
            Academic Director
          </h2>

          <div className="shadow-lg ">
            <div className="h-10 bg-blue-300"></div>

            <div className="flex p-6 flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Vijaya Marisetty</h3>
                <p className="text-gray-600">Visiting Professor</p>
                <p className="mt-4 text-gray-700">
                  Professor Marisetty is an authority in fintech and works
                  closely with both industry and government on fintech
                  initiatives. He has received research grants to develop
                  Blockchain fintech platforms for the empowerment of the bottom
                  of the pyramid from the Ministry of Electronics and IT and the
                  Department of Science and Technology, Government of India. He
                  is leading a team for developing a Blockchain-enabled
                  co-lending platform for banks to address the priority sector
                  lending targets.
                </p>
                <p className="mt-2 text-gray-700">
                  Prof. Marisetty runs the Blockchain lab at ISB and trains
                  senior executives of many of India&apos;s top banks and
                  corporates for undertaking their digital transformation
                  journey in financial services. He has published several
                  research papers on fintech in top international journals.
                </p>
                <a href="#" className="text-blue-500 mt-2 inline-block">
                  ...see more
                </a>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/mobvija.webp"
                  alt="Vijaya Marisetty"
                  width={200}
                  height={200}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Spotlight
       */}
      <section className="w-full text-left gap-6 pb-8 pt-6 md:py-10 bg-cover bg-[url('/BGw.webp')]">
        <div className="container text-white flex flex-col gap-y-5 justify-center">
          <h2 className="text-3xl text-center text-[#3c4852] font-bold md:text-4xl">
            Faculty <span className="text-[#3f95d0]">Spotlight</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center mt-10 space-y-6 sm:space-y-0 sm:space-x-8">
            <div
              style={{
                background: "linear-gradient(180deg,#3e3b68,#6c3a71)",
              }}
              className="bg-purple-600 text-white relative p-6 pt-16 rounded-lg shadow-lg w-72"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
                <Image
                  src="/Shashwat.webp"
                  alt="Shashwat Alok"
                  className="rounded-full"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-semibold text-center">
                Shashwat Alok
              </h3>
              <p className="text-sm font-medium text-center">
                Associate Professor, Finance
              </p>
              <p className="text-sm mt-4">
                He is a faculty member at ISB&apos;s Finance Department since
                2013 with a Ph.D. in Finance from Washington University, directs
                the Digital Identity Research Initiative. His research delves
                into corporate finance&apos;s impact on emerging markets,
                encompassing law, government, ...{" "}
                <span className="text-blue-300 cursor-pointer">See More</span>
              </p>
            </div>

            <div
              style={{
                background: "linear-gradient(180deg,#3e3b68,#6c3a71)",
              }}
              className="bg-purple-600 text-white relative p-6 pt-16 rounded-lg shadow-lg w-72"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
                <Image
                  src="/nandu.webp"
                  alt="Nandkishore Doreswamy"
                  className="rounded-full"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-semibold text-center">
                Nandkishore Doreswamy
              </h3>
              <p className="text-sm font-medium text-center">
                Adjunct Professor (Practice), Marketing
              </p>
              <p className="text-sm mt-4">
                He is a seasoned global executive and inspirational global
                executive and inspirational leader is a Visiting Faculty at the
                Indian School of Business, Nandu boasts 34+ years of exceptional
                leadership experience in diverse environments, including NESTLE,
                where he ...{" "}
                <span className="text-blue-300 cursor-pointer">See More</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Exp */}
      <section className="container text-left gap-6 pb-8 pt-8 mt-8 md:py-10">
        <div className="flex w-full flex-col text-center  items-center gap-x-2 gap-y-4">
          <div className="w-full ">
            <h2 className="text-3xl mb-8 text-[#3c4852] font-bold  md:text-4xl">
              Learning Experience
            </h2>
            <div className="flex flex-wrap justify-around mb-8 text-center">
              <div className="w-full md:w-1/3    p-4 text-center flex flex-col items-center">
                <Image
                  src="/SquareIcon1.svg"
                  height={30}
                  width={30}
                  alt="Pre-Recorded Video Lectures Icon"
                  className="w-[60px] h-[60px] p-2 rounded-[16px] bg-[#e3e0e7] mb-[16px]"
                />
                <p className="text-[#4e5d8c] font-bold text-[28px] max-w-[350px] w-[350px] leading-[36px]">
                  30 Weeks Pre-Recorded Video Lectures
                </p>
              </div>
              <div className="w-full md:w-1/3    p-4 text-center flex flex-col items-center">
                <Image
                  src="/SquareIcon2.svg"
                  height={30}
                  width={30}
                  alt="Case Studies Icon"
                  className="w-[60px] h-[60px] p-2  flex justify-center items-center rounded-[16px] bg-[#e3e0e7] mb-[16px]"
                />
                <p className="text-[#4e5d8c] font-bold text-[28px] max-w-[350px] w-[350px] leading-[36px]">
                  5+ Case Studies
                </p>
              </div>
              <div className="w-full md:w-1/3    p-4 text-center flex flex-col items-center">
                <Image
                  src="/SquareIcon3.png"
                  height={30}
                  width={30}
                  alt="Live Sessions Icon"
                  className="w-[60px] h-[60px] p-2  flex justify-center items-center rounded-[16px] bg-[#e3e0e7] mb-[16px]"
                />
                <p className="text-[#4e5d8c] font-bold text-[28px] max-w-[350px] w-[350px] leading-[36px]">
                  6 Live Sessions With ISB Faculty
                </p>
              </div>
              <div className="w-full md:w-1/3    p-4 text-center flex flex-col items-center">
                <Image
                  src="/SquareIcon4.svg"
                  height={30}
                  width={30}
                  alt="Fintech Showcases Icon"
                  className="w-[60px] h-[60px] p-2  flex justify-center items-center rounded-[16px] bg-[#e3e0e7] mb-[16px]"
                />
                <p className="text-[#4e5d8c] font-bold text-[28px] max-w-[350px] w-[350px] leading-[36px]">
                  5 Fintech Showcases By Industry Experts
                </p>
              </div>
              <div className="w-full md:w-1/3    p-4 text-center flex flex-col items-center">
                <Image
                  src="/SquareIcon5.svg"
                  height={30}
                  width={30}
                  alt="Industry Experts Icon"
                  className="w-[60px] h-[60px] p-2  flex justify-center items-center rounded-[16px] bg-[#e3e0e7] mb-[16px]"
                />
                <p className="text-[#4e5d8c] font-bold text-[28px] max-w-[350px] w-[350px] leading-[36px]">
                  Sessions With Industry Experts On Fintech Practice
                </p>
              </div>
              <div className="w-full md:w-1/3    p-4 text-center flex flex-col items-center">
                <Image
                  src="/SquareIcon6.png"
                  height={30}
                  width={30}
                  alt="Mentoring Icon"
                  className="w-[60px] h-[60px] p-2  flex justify-center items-center rounded-[16px] bg-[#e3e0e7] mb-[16px]"
                />
                <p className="text-[#4e5d8c] font-bold text-[28px] max-w-[350px] w-[350px] leading-[36px]">
                  Executive Fintech Mentoring
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col  items-start gap-x-2 gap-y-4">
          <div className="w-full ">
            <h2 className="text-3xl mb-8 text-[#3c4852] font-bold  md:text-4xl">
              Disclaimer
            </h2>
            <ul className=" list-disc pl-8 text-[#3c4852]">
              <li>
                This programme is self-paced and will have limited live faculty
                interactions.
              </li>
              <li>
                The faculty will not be a part of the live weekly office hours.
                Our curated panel of subject-matter experts will be conducting
                these sessions.
              </li>
              <li>
                There are 6 Live sessions with the faculty during the programme.
                Date and time for the same will be communicated at batch launch.
              </li>
              <li>
                Assessments and evaluations are graded by a panel of experts
                approved by the institute. The institute has the final say on
                the grade awarded.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Certificate Will You Get?
       */}
      <section className=" w-full text-left gap-6 pb-8 pt-6 md:py-10 bg-cover bg-[url('/cBG.webp')]">
        <div className="container text-white flex flex-col sm:flex-row gap-y-5 justify-between">
          <div className="flex  flex-col justify-center gap-y-6">
            {/* ISBLogo.webp */}
            <h2 className="text-3xl text-white font-bold md:text-[48px]">
              What Certificate Will You Get?
            </h2>
            <p className=" text-white text-xl sm:w-[80%] ">
              Upon successful completion of the programme, you will earn a
              certificate of Completion for the Senior Leadership Programme in
              Fintech by the Indian School of Business (ISB). Successful
              programme completion is contingent on meeting the attendance
              requirements and the criteria for course evaluation.
            </p>
          </div>
          <Image width={380} height={294} src="/c.webp" alt="campus" />
        </div>
      </section>

      {/* Learn Before You Leap
       */}
      <section className=" bg-[#ecf0f7] w-full ">
        <div className="container  flex w-full flex-col items-center text-left py-16 ">
          <h2 className="text-3xl mb-2 text-[#3c4852] font-bold  md:text-4xl">
            Learn Before You Leap
          </h2>
          <p className="text-[#3c4852] text-left mb-8 text-base">
            Get equipped with the requisite knowledge before you get trained
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-around  ">
            {/* LinkedIn Learning Section */}
            <div className="w-full col bg-white p-6 rounded-lg shadow-sm mb-6 md:mb-0">
              <div className="flex flex-col items-start mb-4">
                <Image
                  height={54}
                  width={227}
                  src="/linkedin.webp"
                  alt="LinkedIn Learning"
                  className="h-[54px] w-auto mr-3"
                />
                <h2 className="text-xl font-semibold text-[#3c4852] mt-5">
                  Get Premium Access To LinkedIn Learning For Six Months:
                </h2>
              </div>
              <p className="text-gray-600 ">
                The moment you opt for this learning, some exciting perks await
                you, which shall:
              </p>
              <ul className="list-disc pl-5  mt-3 text-gray-600">
                <li>
                  Unplug a treasure trove of high-quality, exclusive content
                  tailored specifically for you.
                </li>
                <li>
                  Help with gaining invaluable insights from influential global
                  visionaries.
                </li>
                <li>
                  Help you stay ahead of the competition by accessing
                  cutting-edge skill development courses at your own pace.
                </li>
              </ul>
            </div>

            {/* Webinar Section */}
            <div className="w-full col bg-white p-6 rounded-lg shadow-sm mb-6 md:mb-0">
              <div className="flex flex-col  items-start mb-4">
                <Image
                  height={54}
                  width={227}
                  src="/live.webp"
                  className="h-[54px] w-auto mr-3"
                  alt="Webinar"
                />
                <h2 className="text-xl font-semibold mt-5 text-[#3c4852]">
                  Engage In Webinars
                </h2>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-600">
                <li>
                  Your participation in our monthly webinars will enable
                  remarkable opportunities for unparalleled growth and insights.
                </li>
                <li>
                  Leverage the power of exclusive 1:1 conversations with
                  distinguished business experts.
                </li>
                <li>
                  Unearth transformative insights from cutting-edge trends,
                  reshaping business landscapes.
                </li>
                <li>
                  Handpicked and thoughtfully curated webinars, meticulously
                  designed to elevate your learning experience throughout the
                  course.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className=" bg-white w-full ">
        <div className="container  flex w-full flex-col items-center text-center gap-6 pb-8 pt-8 my-8 md:py-10 gap-x-2 gap-y-16">
          <h2 className="text-3xl text-center text-[#3c4852] font-bold  md:text-4xl">
            Admission Process
          </h2>
          {/* admissionprocess.webp */}
          <Image
            src="/admissionprocess.webp"
            width={1170}
            height={419}
            className="mb-4"
            alt="imarticus logo"
          />
        </div>
      </section>

      {/* Programme Fee */}
      <>
        <section className="container text-left gap-6 pb-8 pt-6 md:py-10">
          <div
            className="flex flex-col md:flex-row justify-center items-center flex-1    rounded-lg shadow-md"
            style={{
              background:
                "linear-gradient(281deg, rgb(67, 98, 169) 5.6%, rgb(80, 161, 213) 100.93%)",
            }}
          >
            <div className="flex-1 text-center text-white h-auto  p-10 rounded-lg ">
              <h2 className="text-3xl mb-4">Programme Fee</h2>
              <div className=" font-bold flex flex-row justify-center items-baseline my-8">
                <p className="text-[64px]">₹ 5,00,000 </p>
                <span className="text-3xl"> + GST </span>
              </div>
              <Button className="flex-1 text-[#3c4852] bg-white hover:bg-white py-8 px-12 text-lg rounded-lg">
                Enquire Now
              </Button>
            </div>
            <div className="flex-1 bg-white rounded-r-lg p-6 shadow">
              <table className="min-w-full   border">
                <thead>
                  <tr>
                    <th className="text-left border-[#3c485280] border p-2">
                      Instalment Schedule
                    </th>
                    <th className="text-left border-[#3c485280] border p-2">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2  border border-[#3c485280]">
                      Registration Fee
                    </td>
                    <td className="p-2  border border-[#3c485280]">
                      ₹ 50,000 + GST
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2  border border-[#3c485280]">
                      1st Instalment
                    </td>
                    <td className="p-2  border border-[#3c485280]">
                      ₹ 95,000 + GST
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2  border border-[#3c485280]">
                      2nd Instalment
                    </td>
                    <td className="p-2  border border-[#3c485280]">
                      ₹ 95,000 + GST
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2  border border-[#3c485280]">
                      3rd Instalment
                    </td>
                    <td className="p-2  border border-[#3c485280]">
                      ₹ 95,000 + GST
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2  border border-[#3c485280]">
                      4th Instalment
                    </td>
                    <td className="p-2  border border-[#3c485280]">
                      ₹ 95,000 + GST
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2  border border-[#3c485280]">
                      5th Instalment
                    </td>
                    <td className="p-2  border border-[#3c485280]">
                      ₹ 70,000 + GST
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-between flex-col items-center mt-4">
                <p className="text-gray-500 text-sm">
                  Note: Registration Fees includes ₹ 5000 + GST as
                  non-refundable application fee
                </p>
                <Button className="flex-1   text-white bg-[#3f95d0] hover:bg-[#3f95d0] py-4 mt-5 px-12 text-md rounded-lg">
                  Pay Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
      {/* accordion */}
      <section className="container text-left gap-6 pb-8 pt-6 md:py-10">
        <h2 className="text-2xl text-[#3c4852] font-bold  text-center  mb-14  md:text-3xl">
          FAQs
        </h2>
        <h2 className="text-2xl text-[#3c4852] font-bold     md:text-3xl">
          About the Programme
        </h2>
        <AccordionDemo />
        <h2 className="text-2xl text-[#3c4852] font-bold     md:text-3xl">
          Eligibility
        </h2>
        <AccordionDemo />
        <h2 className="text-2xl text-[#3c4852] font-bold     md:text-3xl">
          Fees
        </h2>
        <AccordionDemo />
      </section>
      {/* footer */}
      <section className="container text-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex w-full flex-col items-center gap-x-2 gap-y-4">
          <Image
            src="/imarticusmoblogo.svg"
            width={263}
            height={54}
            className="mb-4"
            alt="imarticus logo"
          />
          <h2 className="text-3xl text-[#3c4852] font-bold  md:text-4xl">
            About Imarticus Learning
          </h2>
          <p className=" text-center text-lg text-muted-foreground">
            Imarticus Learning is a leading EdTech company, offering
            high-quality, industry-specific education via innovative technology,
            specialised training, career assistance, and mentorship from
            industry professionals.
          </p>
          <p className=" text-center text-lg text-muted-foreground">
            It has impacted over 10,00,000+ careers within a decade through
            leading-edge curriculums, highly experienced faculty, and over 3500+
            global partnerships with leading institutions and corporations.
            Imarticus Learning seeks to upskill the existing and future
            workforce to fulfil various industries current and upcoming job
            market demands.
          </p>
          <p className=" text-center text-lg text-muted-foreground">
            Imarticus Learning is with its students at every step of their
            learning journey with top-notch training programme, certification
            programme, executive programme, university degrees, and several
            job-assured programme. Its objective is to provide learners with
            valuable learning experiences and industry-specific skills and
            prepare them to take on leadership roles in their sector.
          </p>
        </div>
      </section>
    </main>
  );
}
