import { UnsplashImageModel } from "@/models/UnsplashImageModel";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Alert } from "@/components/bootstrap";

// export const revalidate = 0;

interface PageProps {
  params: { topic: string };
  // searchParams: {[key:string]:string | string[] | undefined }
}
export function generateMetadata({ params: { topic } }: PageProps) {
  return {
    title: `${topic} - NEXT-JS Image Gallery`,
  };
}
//export const dynamicParams = false; // cannot search other topic

export function generateStaticParams() {
  return ["health", "fitness", "coding", "travel"].map((topic) => ({
    topic,
  }));
}

export default async function Page({ params: { topic } }: PageProps) {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImageModel[] = await res.json();

  return (
    <div>
      <Alert>
        This page uses <strong>generateStaticParams</strong> to render and cache
        static pages at build time, even though the URL has a dynamic parameter.
        Pages that are not included in generateStaticParams will be fetched &
        rendered on first access and then{" "}
        <strong>cached for subsequent request </strong>
        (this can be disable).
      </Alert>
      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          key={image.urls.raw}
          src={image.urls.raw}
          alt={image.alt_description}
          width={250}
          height={250}
          className={styles.image}
        />
      ))}
    </div>
  );
}
