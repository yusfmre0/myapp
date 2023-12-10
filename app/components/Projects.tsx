import Image from "next/image"
import Link from "next/link"
import ATS from '../public/ats.jpg'

export default function Projects() {
  return (
    <section className="w-full h-full flex flex-col gap-8 py-20">
      <div className="projects text-white text-[60px] font-bold max-[500px]:text-[50px]">My Projects</div>

      <div className="w-full grid grid-cols-1">
        <Link href={'https://ats.alltoscan.com/'} target="blank" className="w-full h-full flex gap-4 py-3 px-2 border-b border-white/30 max-[585px]:flex-col">

          <div className="w-40 h-20 rounded-lg bg-cover bg-center max-[585px]:w-full max-[585px]:h-36" style={{ backgroundImage: `url(${ATS.src})` }}></div>

          <div className="flex flex-col justify-between max-[585px]:gap-4">
            <div className="w-4/4 flex justify-between items-baseline">
                <h3 className="text-zinc-100 text-xl font-bold max-[370px]:text-lg">ATS Coin</h3>
                <h3 className="text-zinc-100 text-sm font-light max-[370px]:text-xs">Frontend</h3>
            </div>
            <p className="text-zinc-100 text-sm font-light w-4/4">I designed the official website of "ATS Coin", the coin of the Alltoscan project, as a template.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
