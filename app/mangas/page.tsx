import React from "react";
import Link from "next/link";
import Card from "@/app/components/Card";

export default async function index() {
  // Buscando dados da API Jikan
  const response = await fetch("https://api.jikan.moe/v4/top/manga");
  const data = await response.json();

  return (
    <div className="flex flex-wrap justify-evenly gap-4 py-8">
      {data.data.map(
        (item: {
          year: never;
          score: never;
          mal_id: React.Key | null | undefined;
          title: never;
          synopsis: never;
          images: { jpg: { large_image_url: never } };
        }) => (
          <Link href={`/mangas/${item.mal_id}`} key={item.mal_id}>
            {/* Garantir que o conteúdo dentro de Link seja apenas um elemento */}
            <div>
              <Card
                titulo={item.title}
                imagem={item.images.jpg.large_image_url}
                data={item.year}
                nota={item.score}
              />
            </div>
          </Link>
        )
      )}
    </div>
  );
}
