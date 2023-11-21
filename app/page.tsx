import Main from "./components/Main"
import Background from "./components/Background"
import Skills from './components/Skills'
import Footer from "./components/Footer"

export const metadata = {
  title: 'yusfmre.',
  author: 'yusfmre.',
  publisher: 'yusfmre.',
  description: 'Personal website for contact with yusfmre.'
}

export default function Home() {
  return (
    <main className="px-72 max-[1100px]:px-40 max-[700px]:px-20 max-[500px]:px-5">
      <Background id="tsparticles"></Background>
      <Main></Main>
      <Skills></Skills>
      <Footer></Footer>
    </main>
  )
}
