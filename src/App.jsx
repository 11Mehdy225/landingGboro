import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import BetaForm from "./components/BetaForm";
import classementImg from "./assets/classement.PNG";
import competitionsImg from "./assets/actu.PNG";
import equipesImg from "./assets/equipes.jpg";
import { getBetaTestersCount } from "./lib/betaTesters";
import Footer from "./components/Footer";

function App() {
  const [testerCount, setTesterCount] = useState(136);

  useEffect(() => {

    async function fetchCount() {

      const count = await getBetaTestersCount();

      setTesterCount(count);

    }

    fetchCount();

  }, []);

  const handleTesterAdded = () => {

    setTesterCount((prev) => prev + 1);

  };
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Filigrane Ronna Group */}
{/* Background App Screens */}

<img
  src={classementImg}
  alt=""
  className="
    absolute
    top-10
    left-[-120px]
    w-[450px]
    opacity-[0.8]
    blur-[3px]
    pointer-events-none
    select-none
    z-0
    rotate-[-12deg]
  "
/>

<img
  src={competitionsImg}
  alt=""
  className="
    absolute
    top-20
    right-[-120px]
    w-[450px]
    opacity-[0.8]
    blur-[3px]
    pointer-events-none
    select-none
    z-0
    rotate-[12deg]
  "
/>

<img
  src={equipesImg}
  alt=""
  className="
    absolute
    bottom-[-50px]
    left-1/2
    -translate-x-1/2
    opacity-[0.3]
    blur-[3px]
    pointer-events-none
    select-none
    z-0
  "
/>
 

      {/* Contenu */}

      <div className="relative z-10">
        <Hero testerCount={testerCount} />

        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            <About />

            <Features />

            <BetaForm

              testerCount={testerCount}

              onTesterAdded={handleTesterAdded}

            />
          </div>

       
        </section>

        {/* <Footer /> */}
        <Footer/>
      </div>
    </main>
  );
}
export default App;
