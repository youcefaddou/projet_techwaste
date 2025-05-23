// import { motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */
import BentoCard from "../components/BentoCard";
import Link from "next/link";

const cards = [
  {
    title: "L'indice de réparabilité : comprendre et agir",
    image: "/indice-de-reparabilite_equipements_concernes_calcul_note.webp",
    link: "/comprendre/articles/indice-reparabilite",
  },
  {
    title: "Recyclage de vos équipements : comment cela fonctionne ?",
    image: "/recyclage-equipement.png",
    link: "/comprendre/articles/recyclage-fonctionnement",
  },
  {
    title: "La loi AGEC : Pour une économie circulaire",
    image: "/loi-agec-economie-circulaire.jpg",
    link: "/comprendre/articles/loi-agec",
  },
  {
    title: "Info-tri : signalétique et consignes à savoir",
    image: "/tri-signaletique.jpg",
    link: "/comprendre/articles/info-tri",
  },
  {
    title: "Entretenir ses équipements électriques",
    image: "/entretien-equipement.jpg",
    link: "/comprendre/articles/entretenir-equipements",
  },
  {
    title: "Recycler : le geste primordial pour protéger la Terre et ses ressources",
    image: "/proteger-terre.jpg",
    link: "/comprendre/articles/recycler-primordial",
  },
];

export default function ComprendrePage() {
  return (
    <main className="min-h-screen bg-green-50 py-12 page-fadein">
      <h1
        className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10 animate-fadein"
      >
        Comprendre le recyclage et l'entretien
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="animate-fadein"
            style={{ animationDelay: `${i * 0.13}s`, animationFillMode: 'both' }}
          >
            <BentoCard {...card} />
          </div>
        ))}
      </div>
      <Link href="/comprendre">Comprendre</Link>
    </main>
  );
} 