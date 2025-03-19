"use client";
import { signInAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import UserProfile from "@/components/user-profile";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  console.log(tasks);
  return (
    <>
      <UserProfile />
    </>
  );
}
