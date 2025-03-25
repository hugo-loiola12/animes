import React from "react";

import { subtitle, title } from "@/components/primitives";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "blue" })}>Animes do Hugo</h1>
          <h2 className={subtitle()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui
            voluptas eum adipisci alias nemo dolore libero magnam porro quod,
            odit sapiente modi, quos nesciunt reprehenderit similique aspernatur
            tenetur? Nemo!
          </h2>
          <Image src={""} alt="Anime Principal" />
        </div>
      </section>
    </div>
  );
};

export default page;
