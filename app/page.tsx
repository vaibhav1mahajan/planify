"use client";
import { signInAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1>Login </h1>
      <form action={signInAction}>
        <Button>Log in</Button>
      </form>
    </>
  );
}
