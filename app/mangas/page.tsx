"use client"; // Certifique-se de que esta página é um componente do lado do cliente
import React, { useEffect, useState } from "react";

export default function MangaList() {
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Buscando dados da API Jikan para mangás da temporada
  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/manga");
        const data = await response.json();
        setMangas(data.data);
      } catch (err) {
        setError("Erro ao buscar os mangás.");
      } finally {
        setLoading(false);
      }
    };

    fetchMangas();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Mangás da Temporada</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mangas.map((manga) => (
          <div
            key={manga.id}
            className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <img
              src={manga.images.jpg.large_image_url}
              alt={`Imagem de ${manga.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{manga.title}</h2>
              <p className="text-gray-600">ID: {manga.id}</p>
              <p className="mt-2">
                Nota: {manga.score || "Nota não disponível."}
              </p>
              <p className="mt-2">
                Gêneros:{" "}
                {manga.genres.map((genre) => genre.name).join(", ") ||
                  "Gêneros não disponíveis."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
