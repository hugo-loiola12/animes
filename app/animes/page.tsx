import React from "react";

// app/page.js
export default async function Page() {
  const response = await fetch("https://api.jikan.moe/v4/seasons/now");
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <ul>
	{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
	{data.data.map((item: {
	  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
	  mal_id: React.Key | null | undefined; // @ts-expect-error
	  title: string | number | bigint | boolean | React.ReactElement<never, string | React.JSXElementConstructor<never>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
	}) => {
	  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
	  // @ts-expect-error
	  return <li key={item.mal_id}><h1 className="text-center text-white"> {item.title}</h1></li>;
	})}
  </ul>;
}
