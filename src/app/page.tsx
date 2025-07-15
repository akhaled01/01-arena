"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { redirect } from "next/navigation";

const Page = () => (
  <>
    <Authenticated>{redirect("/arena")}</Authenticated>
    <Unauthenticated>{redirect("/sign-in")}</Unauthenticated>
  </>
);

export default Page;
