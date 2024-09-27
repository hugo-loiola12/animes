"use client"; // Certifique-se de que esta página é um componente do lado do cliente
import React from "react";
import { useParams } from "next/navigation";
import { Fraunces } from "next/font/google";
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-frauces",
});

export default async function AnimeDetail() {
  const { id } = useParams(); // Obtém o ID da URL

  // Buscando dados da API Jikan
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const data = await response.json();

  // Verifica se os dados do anime foram carregados corretamente
  if (!data.data) {
    return <div>Erro ao carregar dados do anime.</div>;
  }

  return (
    <div className="container mx-auto p-4 text-white">
      <h1
        className={`text-3xl font-bold mb-4 ${fraunces.variable} font-titulo`}
      >
        Detalhes do Anime
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <img
          src={data.data.images.jpg.large_image_url}
          alt={`Imagem de ${data.data.title}`}
          className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0"
        />
        <div className="flex-1">
          <h2
            className={`text-2xl font-semibold ${fraunces.variable} font-titulo`}
          >
            {data.data.title}
          </h2>
          <p className="mt-2 text-gray-600">ID do Anime: {id}</p>
          <p className="mt-2">
            Sinopse: {data.data.synopsis || "Sinopse não disponível."}
          </p>
          <p className="mt-2">
            Data de Lançamento:{" "}
            {data.data.aired.string || "Data não disponível."}
          </p>
          <p className="mt-2">
            Nota: {data.data.score || "Nota não disponível."}
          </p>
          <p className="mt-2">
            Gêneros:{" "}
            {data.data.genres
              .map((genre: { name: never }) => genre.name)
              .join(", ") || "Gêneros não disponíveis."}
          </p>
        </div>
      </div>
    </div>
  );
}
