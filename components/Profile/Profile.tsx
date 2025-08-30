"use client";
import Image from "next/image";
import css from "./Profile.module.css";
import Link from "next/link";
import { useAuthStore } from "@/lib/store/authStore";

export default function Profile() {
  const email = useAuthStore((state) => state.user?.email);
  const username = useAuthStore((state) => state.user?.username);
  const src = useAuthStore((state) => state.user?.avatar);

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          {src && (
            <Image
              src={src}
              alt="User Avatar"
              width={120}
              height={120}
              className={css.avatar}
            />
          )}
        </div>
        <div className={css.profileInfo}>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </main>
  );
}
