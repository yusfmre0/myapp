'use client'

import Typewriter from "typewriter-effect"

import Link from "next/link"

export default function Main() {
    return (
        <section className="w-full h-screen">
            <div className="w-1/2 h-full flex flex-col py-52 max-[1350px]:w-full">
                <h6 className="text-white">Hi, it's...</h6>
                <h1 id="myName" className="text-[90px] font-bold text-white max-[500px]:text-[80px]">
                    <Typewriter
                        onInit={(typewriter) => { 
                            typewriter
                            .typeString('yusfnrw')
                            .pauseFor(200)
                            .deleteChars(3)
                            .typeString('mre.')
                            .start()
                        }}
                    />
                </h1>
                <h3 className="text-white max-[500px]:text-sm">
                    <Typewriter
                        onInit={(typewriter) => { 
                            typewriter
                            .pauseFor(1000)
                            .typeString("I'm 16 years old student and freelancer in Turkey. For 1.5 years I have been developing myself in web technologies such as web frontend and backend.")
                            .changeDelay('natural')

                            .start()
                        }}
                    />
                </h3>

                <div className="flex gap-4 mt-5">
                    <Link href={'https://github.com/yusfmre0'} target="_blank" className="text-zinc-100">
                        <i className="fa-brands fa-github text-white text-2xl"></i>
                    </Link>

                    <Link href={'https://t.me/yusfmre'} target="_blank" className="text-zinc-100">
                        <i className="fa-brands fa-telegram text-white text-2xl"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}