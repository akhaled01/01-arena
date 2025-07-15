import { SignUp } from "@clerk/nextjs";
import React from 'react'

const Page = () => (
  <div className="flex h-screen items-center justify-center">
    <SignUp routing="hash" />
  </div>
)

export default Page