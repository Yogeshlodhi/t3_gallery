import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* {images.map((image) => ( */}
      {images.map((image) => (
        // <div key={image.id} className="flex w-auto h-auto flex-col p-2">
        <div key={image.id} className="flex w-48 h-48 flex-col p-2 overflow-hidden">
          <Link href={`/img/${image.id}`}>
            {/* <img src={image.url} alt="image" className="object-cover w-48 h-48" /> */}
            <Image
              src={image.url}
              alt={image.name}
              // className="object-cover w-48 h-48"
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
            />
          </Link>
          <div className="truncate">{image.name}</div>
        </div>
      ))}
    </div>
  )

}

export default async function HomePage() {

  return (
    <main>
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please Sign In Above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
