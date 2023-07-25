import { UnsplashImageModel } from "@/models/UnsplashImageModel";
import { Alert } from "@/components/bootstrap";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 0; // in seconds - render the page every 0 seconds
export const metadata: Metadata = {
  title: "Dynamic Fetching - Next JS 13.4 Image Gallery",
};
export default async function Page() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    {
      // cache: "no-cache", // also can use "no-store"
      // also can set to "reload"
      // also can use next: {revalidate:0},
    }
  );
  const image: UnsplashImageModel = await response.json();
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <div className={"d-flex flex-column align-items-center"}>
      <Alert>
        This page <strong>fetches data dynamically</strong>. Every time you
        refresh the page, you get a new image from the Unsplash API.
      </Alert>
      <Image
        src={image.urls.raw}
        alt={image.alt_description}
        width={width}
        height={height}
        className={"rounded shadow mw-100 h-100"}
      />
      by{" "}
      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
