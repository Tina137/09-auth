import { cookies } from "next/headers";
import { nextServer } from "./api";

import type { Note } from "@/types/note";
import type { User } from "@/types/user";

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const res = await nextServer.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res;
};

export const getServerSingleNote = async (id: string): Promise<Note> => {
  const cookiesData = await cookies();
  const res = await nextServer.get(`/notes/${id}`, {
    headers: { Cookie: cookiesData.toString() },
  });
  return res.data;
};

export const getServerMe = async (): Promise<User> => {
  const cookiesData = await cookies();
  const res = await nextServer.get(`/users/me`, {
    headers: { Cookie: cookiesData.toString() },
  });
  return res.data;
};
