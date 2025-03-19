"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  console.log(tasks);
  return (
    <>
      <h1>Hello World</h1>
      <Button>Click me</Button>
      {tasks?.map((task) => (
        <div key={task._id}>
          {task.text} && {task.isCompleted ? "true" : "false"}
        </div>
      ))}
    </>
  );
}
