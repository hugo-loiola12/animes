import React from "react";
import Card from "@/app/components/Card";
import Link from "next/link";

export default async function Page() {
  // Buscando dados da API Jikan
  const response = await fetch("https://api.jikan.moe/v4/seasons/now");
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
          <Link href={`/animes/${item.mal_id}`} key={item.mal_id}>
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
