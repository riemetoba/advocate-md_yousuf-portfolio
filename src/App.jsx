import SmoothScroll from './components/layout/SmoothScroll'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
// import PracticeAreas from './components/sections/PracticeAreas'
// import Experience from './components/sections/Experience'
// import Testimonials from './components/sections/Testimonials'
// import Contact from './components/sections/Contact'

function App() {
  return (
    <SmoothScroll>
      <div className="bg-offwhite text-charcoal font-sans overflow-x-hidden">
        <Navbar />

        <main>
          <Hero />
           <About />
          {/* <PracticeAreas />
          <Experience />
          <Testimonials />
          <Contact />  */}
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App