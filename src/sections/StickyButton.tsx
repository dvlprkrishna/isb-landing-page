import Image from "next/image";
import Link from "next/link";

export default function StickyButton() {
  return (
    <>
      <div className=" hidden sm:flex  bg-white p-8">
        <div className=" flex justify-center items-center flex-row gap-x-4 sm:gap-x-8 w-screen ">
          <Link
            href={"/"}
            className="flex grow-1 flex-row items-center justify-center space-x-2 bg-transparent border border-blue-500 text-blue-500 rounded-lg py-2 px-3 sm:px-8 cursor-pointer w-full sm:w-auto "
          >
            <div className="relative w-6 h-6">
              <Image
                alt="Get free consulting"
                height={20}
                width={20}
                src="/Call.svg"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-base sm:text-lg whitespace-nowrap">
              Get Free Consulting
            </span>
          </Link>
          <Link
            href={"/"}
            className="flex  grow-1 flex-row items-center justify-center space-x-2 bg-[#3f95d0] text-white rounded-lg py-2 px-3 sm:px-8 cursor-pointer"
          >
            <div className="relative w-6 h-6">
              <Image
                alt="Download Brochure"
                src="/download.svg"
                height={20}
                width={20}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-lg">Download Brochure</span>
          </Link>
        </div>
      </div>

      <div className="flex bg-white py-8 px-2">
        <div className="flex justify-center items-center flex-row gap-x-4 sm:gap-x-8 w-screen">
          <Link
            href="/"
            className="flex flex-1 flex-row items-center justify-center space-x-2 bg-transparent border border-blue-500 text-blue-500 rounded-lg py-2 px-3 sm:px-8 cursor-pointer w-full sm:w-auto"
          >
            <div className="relative w-6 h-6">
              <Image
                alt="Get free consulting"
                height={20}
                width={20}
                src="/Call.svg"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-sm sm:text-lg whitespace-nowrap">
              Get Free Consulting
            </span>
          </Link>
          <Link
            href="/"
            className="flex flex-1 flex-row items-center justify-center space-x-2 bg-[#3f95d0] text-white rounded-lg py-2 px-3 sm:px-8 cursor-pointer w-full sm:w-auto"
          >
            <div className="relative w-6 h-6">
              <Image
                alt="Download Brochure"
                src="/download.svg"
                height={20}
                width={20}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-sm sm:text-lg whitespace-nowrap">
              Download Brochure
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
