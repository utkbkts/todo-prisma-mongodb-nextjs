"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function create(formdata: FormData) {
  const input = formdata.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: input,
    },
  });
  revalidatePath("/");
}
export async function changeStatus(formdata: FormData) {
  const inputId = formdata.get("inputId") as string;
  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });
  if (!todo) {
    return;
  }
  const updatedStatus = !todo?.isCompleted;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });
  revalidatePath("/");
  return updatedStatus;
}

export async function edit(formdata: FormData) {
  const input = formdata.get("newTitle") as string;
  const inputId = formdata.get("inputId") as string;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });
  revalidatePath("/");
}

export async function deletetodo(Formdata: FormData) {
  const inputId = Formdata.get("inputId") as string;

  await prisma.todo.delete({
    where: {
      id: inputId,
    },
  });
  revalidatePath("/");
}
