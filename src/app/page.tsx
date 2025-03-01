import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  // console.log(images);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
            <div key={image.id + "-" + index} className="flex w-48 h-48 flex-col">
              <img src={image.url} alt="image" className="object-cover w-48 h-48" />
              <div>{image.name}</div>
            </div>
          ))}
      </div>
    </main>
  );
}
