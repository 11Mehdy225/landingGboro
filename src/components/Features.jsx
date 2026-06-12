const features = [
 "Scores en direct",
"Classements actualisés",
"Actualités du football ivoirien",
"Pépite du moment",
"interviews",
"Suivi des Éléphants",
"Ligue 1 & Ligue 2 Côte d'Ivoire",
"Champions League & compétitions UEFA",
"Mercato et transferts",
"Notifications de matchs"
];

export default function Features() {
  return (
    <div className="bg-[#081b14]/90 border border-white/10 p-5 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">
        Fonctionnalités
      </h2>

      <ul className="space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-gray-300"
          >
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}