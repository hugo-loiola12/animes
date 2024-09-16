import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="mb-4 mt-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Melhor site de animes!
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        O nosso site de animes é a referência definitiva para os fãs desse
        universo fascinante. Com uma interface intuitiva e moderna, oferecemos
        uma vasta biblioteca de animes, desde os clássicos atemporais até os
        lançamentos mais recentes. A nossa plataforma é atualizada
        constantemente para garantir que você esteja sempre por dentro das
        últimas novidades e tendências. Além disso, contamos com uma comunidade
        engajada e apaixonada, onde você pode discutir suas séries favoritas,
        compartilhar recomendações e fazer novas amizades. Seja para maratonar
        episódios ou explorar novos títulos, nosso site proporciona uma
        experiência imersiva e enriquecedora para todos os amantes de animes.
      </p>
      <div className="flex flex-wrap justify-center p-5 sm:p-10">
        <div className="w-full sm:w-1/3 p-2">
          <img
            className="h-64 w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="https://th.bing.com/th/id/OIP.orFv-9YGkVrRUmadGVpu_QHaEK?rs=1&pid=ImgDetMain"
            alt="image description"
          />
        </div>
        <div className="w-full sm:w-1/3 p-2">
          <img
            className="h-64 w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="https://th.bing.com/th/id/OIP.SVEGNyAAG_jLAciyJU1YWAHaE8?rs=1&pid=ImgDetMain"
            alt="image description"
          />
        </div>
        <div className="w-full sm:w-1/3 p-2">
          <img
            className="h-64 w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="https://steamuserimages-a.akamaihd.net/ugc/1745683693631264527/2B099EDBE23E15FF9EC7596FC213FBB37153657D/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
            alt="image description"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
