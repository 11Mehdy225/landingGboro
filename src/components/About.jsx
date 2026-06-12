export default function About() {
  return (
    <div className="bg-[#081b14]/90 border border-white/10 p-5 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">
        À propos de Gboro
      </h2>

      <div className="space-y-5">
        <div>
          <h3 className="text-green-400 font-semibold mb-2">
            Notre mission
          </h3>

          <p className="text-gray-300 text-sm leading-7">
            Valoriser le football ivoirien grâce à une plateforme moderne
            dédiée aux supporters, aux clubs et aux passionnés de football.
          </p>
        </div>

        <div>
          <h3 className="text-orange-400 font-semibold mb-2">
            Notre vision
          </h3>

          <p className="text-gray-300 text-sm leading-7">
            Construire la référence digitale du football ivoirien et africain,
            en réunissant scores, classements, actualités et données sportives
            sur une seule plateforme.
          </p>
        </div>

        <div className="border-t border-white/10 pt-4 space-y-2">
  <p className="text-xs text-gray-400">
    Projet développé par
    <span className="text-white font-semibold">
      {" "}Ronna Group
    </span>
    , avec l'ambition de rapprocher les supporters de leurs équipes.
  </p>

  <p className="text-xs text-orange-400 italic">
    Gboro signifie « jouer » en bambara, une référence à la passion du football et du sport.
  </p>
</div>
      </div>
    </div>
  );
}