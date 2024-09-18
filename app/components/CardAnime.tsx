// components/CardAnime.js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function CardAnime({titulo, descricao, imagem}) {
  return (
	<div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
	  <img className="w-full h-48 object-cover" src={imagem} alt={`Imagem de ${titulo}`}/>
	  <div className="px-6 py-4">
		<h2 className="font-bold text-xl mb-2">{titulo}</h2>
		<p className="text-gray-700 text-base">{descricao}</p>
	  </div>
	</div>
  );
}
