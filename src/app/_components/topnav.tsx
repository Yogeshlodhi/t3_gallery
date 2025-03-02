// "use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { UploadButton } from '~/utils/uploadthing';
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav(){
  // const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            {/* <UploadButton 
              endpoint="imageUploader" 
              onClientUploadComplete={() => {
                // console.log("Upload complete in client")
                router.refresh();
              }}
              // onUploadError={(error) => console.error("Upload Error:", error)}
            /> */}
            <SimpleUploadButton/>
            <UserButton/>
        </SignedIn>
      </div>
    </nav>
  )
}