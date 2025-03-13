import React from "react";

import { title } from "@/components/primitives";


const page = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Animes do Hugo</h1>
        </div>
      </section>
    </div>
  );
};

export default page;
