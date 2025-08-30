import { User } from "@/types/user";
import type { InitialValuesProps } from "../../types/note";
import { type Note } from "../../types/note";
import { nextServer } from "./api";

interface ResProps {
  notes: Note[];
  totalPages: number;
}
export type CheckSessionResponse = {
  success: boolean;
};
export type EditProps = {
  username: string;
};

export async function fetchNotes(
  page: number,
  debouncedInput: string,
  category: string
) {
  const params: Record<string, string | number> = { page };
  if (debouncedInput) {
    params.search = debouncedInput;
  }
  if (category != "All") {
    params.tag = category;
  }
  const res = await nextServer.get<ResProps>("/notes", {
    params,
  });
  return res.data;
}

async function postList(newList: InitialValuesProps) {
  const res = await nextServer.post<Note>("/notes", newList, {});
  return res.data;
}

async function deleteList(listId: string) {
  const res = await nextServer.delete<Note>(`/notes/${listId}`, {});
  return res.data;
}
export const getSingleNote = async (id: string) => {
  const res = await nextServer.get<Note>(`/notes/${id}`, {});
  return res.data;
};

export { postList, deleteList };

export const register = async (data: User) => {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
};

export const login = async (data: User) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};

export const checkSession = async () => {
  const { data } = await nextServer.get<CheckSessionResponse>(`/auth/session`);
  return data.success;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>(`/users/me`);
  return data;
};

export const editProfile = async (update: EditProps) => {
  const { data } = await nextServer.patch<User>(`/users/me`, update);
  return data;
};

export const logout = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};
