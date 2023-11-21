'use client'

import Typewriter from "typewriter-effect"

export default function Main() {
    return (
        <section className="w-full h-full flex justify-between">
            <div className="w-1/2 h-full flex flex-col py-52">
                <h6 className="text-white">Hi, it's...</h6>
                <h1 id="myName" className="text-[90px] font-bold text-white">
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
                <h3 className="text-white">
                    <Typewriter
                        onInit={(typewriter) => { 
                            typewriter
                            .pauseFor(1000)
                            .typeString("I'm 16 years old student and freelancer in Turkey. For 1.5 years I have been developing myself in web technologies such as web frontend and backend.")
                            .changeDelay(.2)
                            .start()
                        }}
                    />
                </h3>
            </div>
        </section>
    )
}