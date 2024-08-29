// import { bg } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img
        className="h-screen object-cover fixed inset-0 bg-black/50 w-full"
        src="../../assets/bgpepi.jpg"
        alt="dd"
      />
      <div className=" h-screen inset-0 lg:bg-black/60 bg-black/40 relative px-10">
        <img
          className="absolute right-0"
          src="../../assets/logo.png"
          alt="dd"
        />
        <div className="max-w-3xl lg:flex justify-center lg:top-[50%] items-center  flex-col m-auto top-[75vh] relative ">
          <h1 className="text-4xl text-white mb-10 font-bold">
            Taking Orders for Fast Deliveries
          </h1>
          <Link href="/home">
            <button className="btn mx-auto   w-[80%]">Get Started</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
