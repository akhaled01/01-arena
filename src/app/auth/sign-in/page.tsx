import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => (
  <div className="flex h-screen items-center justify-center bg-background">
    <SignIn
      routing="hash"
      appearance={{
        elements: {
          formButton: "bg-primary hover:bg-primary text-white",
        },
      }}
    />
  </div>
);

export default Page;
