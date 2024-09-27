import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-frauces",
});
// @ts-expect-error
export default function CardAnime({ titulo, imagem, data, nota }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        className="w-80 h-80 object-cover" // Define um tamanho fixo para a imagem
        src={imagem}
        alt={`Imagem de ${titulo}`}
      />
      <div className="px-6 py-4">
        <h2
          className={`font-bold text-2xl mb-4 text-gray-800 ${fraunces.variable} font-titulo`}
        >
          {titulo}
        </h2>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">{data}</span>
          <span className="bg-yellow-400 text-white text-sm font-semibold py-1 px-2 rounded-lg">
            Nota: {nota}
          </span>
        </div>
      </div>
    </div>
  );
}
