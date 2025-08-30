import { cookies } from "next/headers";
import { nextServer } from "./api";

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const res = await nextServer.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res;
};

// export const getServerMe = async () => {
//   const cookiesData = await cookies();
//   const res = await nextServer.get(`/auth/me`, {
//     headers: { Cookie: cookiesData.toString() },
//   });
//   return res;
// };
