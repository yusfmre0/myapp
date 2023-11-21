import Main from "./components/Main"
import Background from "./components/Background"
import Skills from './components/Skills'
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="px-72">
      <Background id="tsparticles"></Background>
      <Main></Main>
      <Skills></Skills>
      <Footer></Footer>
    </main>
  )
}
