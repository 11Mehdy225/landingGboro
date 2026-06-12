import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function BetaForm({ testerCount, onTesterAdded }) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    favorite_club: "",
    favorite_content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      favorite_club: "",
      favorite_content: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.from("beta_testers").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        favorite_club: formData.favorite_club,
        favorite_content: formData.favorite_content,
      },
    ]);
    setLoading(false);

    if (error) {
      console.error(error);
      setErrorMessage("Une erreur est survenue. Réessaie dans un instant.");
      return;
    }

    resetForm();
    onTesterAdded();
setShowModal(true);
  };

  return (
    <>
      <div id="beta" className="bg-[#081b14]/90 border border-white/10 p-5 rounded-2xl">
        <h2 className="text-xl font-bold mb-3">
          Bêta-testeur
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          Inscris-toi pour recevoir le lien de test dès que l’application sera disponible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2.5 rounded-lg bg-[#10261d] text-sm outline-none border border-white/10 focus:border-green-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2.5 rounded-lg bg-[#10261d] text-sm outline-none border border-white/10 focus:border-green-500"
          />

          <input
            type="text"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2.5 rounded-lg bg-[#10261d] text-sm outline-none border border-white/10 focus:border-green-500"
          />

          <input
            type="text"
            name="favorite_club"
            placeholder="Club préféré"
            value={formData.favorite_club}
            onChange={handleChange}
            className="w-full p-2.5 rounded-lg bg-[#10261d] text-sm outline-none border border-white/10 focus:border-green-500"
          />

          <select
            name="favorite_content"
            value={formData.favorite_content}
            onChange={handleChange}
            className="w-full p-2.5 rounded-lg bg-[#10261d] text-sm outline-none border border-white/10 focus:border-green-500"
          >
            <option value="">Contenu préféré</option>
            <option value="Ligue 1 Côte d’Ivoire">Ligue 1 Côte d’Ivoire</option>
            <option value="Ligue 2 Côte d’Ivoire">Ligue 2 Côte d’Ivoire</option>
            <option value="Éléphants">Éléphants</option>
            <option value="Champions League">Champions League</option>
            <option value="Mercato">Mercato</option>
            <option value="Pépite du moment">Pépite du moment</option>
          </select>

          {errorMessage && (
            <p className="text-red-400 text-sm">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 py-2.5 rounded-lg text-sm font-semibold transition"
          >
            {loading ? "Inscription..." : "Je veux tester Gboro"}
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-sm rounded-3xl bg-[#081b14] border border-green-500/30 p-6 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-green-400 text-2xl">
              ✓
            </div>

            <h3 className="text-2xl font-bold">
              Merci !
            </h3>

            <p className="mt-3 text-gray-300 text-sm leading-6">
              Tu fais maintenant partie des premiers bêta-testeurs {testerCount} de Gboro.
              Nous te contacterons dès que l’application sera disponible.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full rounded-xl bg-orange-500 hover:bg-orange-600 py-3 text-sm font-semibold transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}