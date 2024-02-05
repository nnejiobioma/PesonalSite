"use client"

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-screen h-screen relative">
    <div className="flex items-center w-full h-full bg-cover bg-center relative">
    <video
  autoPlay
  loop
  muted
  style={{ width: "100%", height: "100%", objectFit: "cover", position: "fixed", zIndex: "-1" }}
>
  <source src="/space.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <div className="pl-20 md:pl-30 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[60px] text-white font-semibold">
            Hello Welcome, I'm a      
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Software Engineer
            </span>
          </h1>
          <p className="text-gray-200  md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
            
           </div>
           
          </div>
                 
      </div>

      <div className="absolute flex bottom-20 z-[20] -5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

       <div className="absolute bottom-0 right-0 z-[10]"> 
        <Image 
          src="/passport.png"
          alt="horse"
          height={150}
          width={150}
          className="absolute right-10 top-40 rounded-full"
        />

       {<Image src="" alt="cliff" width={390} height={390} />}
      </div>

      {/* <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>  */}


       {/* ========================================================= */}
            {/* Image component */}
            {/* <div className="">
        <Image className="rounded-full "
          src="/passport.png"
          alt="horse"
          height={300}
          width={300}
         />
      </div> */}
      {/* ============================================================= */}

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />

    </main>
  );
}