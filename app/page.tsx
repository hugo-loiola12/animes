import React from "react";
import Image from "next/image";
import Img1 from "./data/imgs/anime-8801333_1280.webp"
import Img2 from "./data/imgs/oshi-no-ko-capa.jpg"
import Img3 from "./data/imgs/360_F_562024161_tGM4lFlnO0OczLYHFFuNNdMUTG9ekHxb.jpg"

const Home = () => {
  return (
	<div className="text-center">
	  <h1
		className="mb-4 mt-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
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
		  <div
			className="h-64 w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0">
			<Image
			  layout="fill"
			  className="h-64 w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
			  src={Img2}
			  alt="image description"
			/>
		  </div>
		</div>
		<div className="w-full sm:w-1/3 p-2">
		  <div
			className="h-64 w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0">
			<Image
			  layout="fill"
			  className="h-64 w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
			  src={Img3}
			  alt="image description"
			/>
		  </div>
		</div>
		<div className="w-full sm:w-1/3 p-2">
		  <div
			className="h-64 w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0">
			<Image
			  layout="fill"
			  src={Img1}
			  alt="image description"
			/>
		  </div>

		</div>
	  </div>
	</div>
  );
};

export default Home;
