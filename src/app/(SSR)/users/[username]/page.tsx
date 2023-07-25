import { UnsplashUser } from "@/models/UnsplashUserModel";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Alert } from "@/components/bootstrap";

interface PageProps {
  params: { username: string };
}

async function getUser(username: string): Promise<UnsplashUser> {
  const res = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  if (res.status !== 200) notFound();
  return await res.json();
}

export async function generateMetadata({
  params: { username },
}: PageProps): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title:
      ([user.first_name + " " + user.last_name].filter(Boolean).join(" ") ||
        user.username) + " - Next.js Image Gallery",
  };
}

export default async function Page({ params: { username } }: PageProps) {
  const user = await getUser(username);
  return (
    <div>
      <Alert>
        This profile page uses <strong>generateMetadata</strong> to set the{" "}
        <strong>page title</strong> dynamically from the API response.
      </Alert>
      <h1>{user.username}</h1>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <a href={"https://unsplash.com/" + user.username}>Unsplash Profile</a>
    </div>
  );
}
