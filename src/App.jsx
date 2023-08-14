import { useState } from "react";

import Hero from "./components/Hero"
import NavResponsive from "./components/NavResponsive"
import CreationsList from "./components/CreationsList";
import FooterContent from "./components/FooterContent";

// Images
import interactive from '/assets/images/mobile/image-interactive.jpg';

const App = () => {

  const [active, setActive] = useState(false);

  // OV
  if (active) {
    document.querySelector('html').classList.add('overflow-hidden')
  } else {
    document.querySelector('html').classList.remove('overflow-hidden')
  }

  return (
    <>
      <header className="relative">
        <Hero
          setActive={setActive}
        />

        {active && <NavResponsive setActive={setActive} />}
      </header>

      <main className="container px-5 mx-auto my-20 md:my-36">
        <div className="md:grid md:grid-cols-5 md:grid-rows-2">
          <div className="col-span-3 row-span-3">
            <img
              src={interactive}
              alt="interactive vr image"
              className="w-full"
            />
          </div>
          <div className="p-2 md:pl-20 md:pt-10 bg-white md:row-start-2 md:col-start-4 md:col-end-6 md:-ml-32 xl:-ml-40 md:-mt-20">
            <h2 className="text-4xl lg:text-5xl text-center md:text-start uppercase mt-10 font-josefin text-black">The leader in interactive VR</h2>
            <p className="mt-5 text-center lg:text-lg md:text-start font-josefin text-very-dark-gray">Founded in 2011, Loopstudios has been producing world-class virtual reality
              projects for some of the best companies around the globe. Our award-winning
              creations have transformed businesses through digital experiences that bind
              to their brand.</p>
          </div>
        </div>

        <CreationsList />
      </main>

      <footer className="bg-black px-5 py-16">
        <FooterContent />
      </footer>

    </>
  )
}

export default App