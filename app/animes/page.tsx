import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

// app/page.js
export default async function Page() {
  const response = await fetch("https://api.jikan.moe/v4/seasons/now");
  const data = await response.json();

  return (
    <ul className="text-white text-center">
      {data.data.map(
        (post: {
          [x: string]: any;
          mal_id: Key | null | undefined;
          title:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | Promise<AwaitedReactNode>
            | null
            | undefined;
        }) => (
          <li key={post.mal_id}>
            <img src={post.images.jpg.image_url} />
            <Link href={"/animes/" + post.mal_id}>Link</Link>
          </li>
        )
      )}
    </ul>
  );
}
