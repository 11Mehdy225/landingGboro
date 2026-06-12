import logo from "../assets/hero.png";

export default function Hero({ testerCount }) {
  return (
    <section className="h-[32vh] flex flex-col items-center justify-center text-center px-6 pt-4">
  <img src={logo} alt="GBORO" className="w-70 mb-4" />
   <p className="text-lg text-gray-300 mt-2 text-center mb-12">
    Le football ivoirien dans ta poche 
  </p>
   <a
  href="#beta"
  className="
    md:hidden
    inline-flex
    items-center
    gap-2
    mt-5
    bg-green-500
    hover:bg-green-600
    px-6
    py-3
    rounded-full
    text-sm
    font-semibold
    transition
  "
>
  Rejoindre la bêta
  ↓
</a>
 
  <p className="text-sm text-orange-400 font-medium">
  Bêta privée • Coupe du Monde 2026 Scores 
</p>


<p className="mt-1 text-green-400 text-sm font-semibold">

  Déjà {testerCount} passionnés dans la liste bêta

</p>

  
 
  
  
  
</section>
  );
}