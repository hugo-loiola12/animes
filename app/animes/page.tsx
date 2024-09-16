import React from "react";

// app/page.js
export default async function Page() {
  const response = await fetch("https://api.jikan.moe/v4/seasons/now");
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  return <ul>
	{data.data.map((item) => <li key={item.mal_id}><h1 className="text-center text-white"> {item.title}</h1></li>)}
  </ul>;
}
