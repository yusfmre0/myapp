import Main from "./components/Main"
import Background from "./components/Background"
import Skills from './components/Skills'
import Projects from "./components/Projects"
import Footer from "./components/Footer"

import Script from 'next/script'

export const metadata = {
  title: 'yusfmre.',
  author: 'yusfmre.',
  publisher: 'yusfmre.',
  description: 'Personal website for contact with yusfmre.'
}

export default function Home() {
  return (

    <main className="px-72 max-[1100px]:px-40 max-[700px]:px-20 max-[500px]:px-5">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2994568811254175" crossOrigin="anonymous"></Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T98MCWLNJ4"></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-T98MCWLNJ4');
        `}
      </Script>
      <Background id="tsparticles"></Background>
      <Main></Main>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  )
}
