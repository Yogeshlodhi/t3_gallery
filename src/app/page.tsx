import Link from "next/link";

const mockUrls = [
  "https://9ch4okkejz.ufs.sh/f/MCdll9xliRNtvJydDGQwVkPue2na3ELg59AZzxQ6oYMmNjvt",
  "https://9ch4okkejz.ufs.sh/f/MCdll9xliRNtzkNSmyrlSnX3DTxGvcyQZPKOJ81YCtF5zaek",
  "https://9ch4okkejz.ufs.sh/f/MCdll9xliRNt276bng1fNVswgWq9pFTmLHBer3JAcSyRE4h7",
  "https://9ch4okkejz.ufs.sh/f/MCdll9xliRNtw225XSyZ4Wimd9buoC3kEQlaPHUV0YLxAhD1",
  "https://9ch4okkejz.ufs.sh/f/MCdll9xliRNtoNCMdY68MKQFP1SGyZzTIUYDANBVxkhOc326"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-48 h-48">
              <img src={image.url} alt="image" className="object-cover w-48 h-48" />
            </div>
          ))
        }
      </div>
      {/* Yogesh */}
    </main>
  );
}
