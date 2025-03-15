"use client";

import React from "react";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

import { title, subtitle } from "@/components/primitives";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-md space-y-8">
        <h1 className={title({ color: "yellow" })}>404</h1>
        <h2 className={subtitle()}>Página Não Encontrada</h2>

        <p className={subtitle({ className: "mt-4" })}>
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            color="primary"
            variant="shadow"
            onPress={() => router.push("/")}
          >
            Voltar ao Início
          </Button>

          <Button color="default" variant="flat" onPress={() => router.back()}>
            Voltar à Página Anterior
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
