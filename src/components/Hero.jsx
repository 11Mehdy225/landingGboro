import logo from "../assets/hero.png";

export default function Hero({ testerCount }) {
  return (
    <section className="h-[32vh] flex flex-col items-center justify-center text-center px-6 pt-4">
  <img src={logo} alt="GBORO" className="w-70 mb-4" />
  <p className="text-sm text-orange-400 font-medium">
  Bêta privée • Coupe du Monde 2026 Scores • Classements • Actualités • Données Football
</p>

  
  <p className="text-lg text-gray-300 mt-2 text-center mb-12">
    Le football ivoirien dans ta poche , Déjà {testerCount} passionnés dans la liste bêta
  </p>
  
  
  
</section>
  );
}