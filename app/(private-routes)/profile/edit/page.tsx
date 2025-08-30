"use client";

import css from "./page.module.css";

import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";
import { EditProps, editProfile } from "@/lib/api/clientApi";
import { useState } from "react";
import { ApiError } from "@/app/api/api";

export default function EditPage() {
  const [error, setError] = useState("");
  const router = useRouter();
  const email = useAuthStore((state) => state.user?.email);
  const handleSubmit = async (formData: FormData) => {
    try {
      if (email) {
        const formValues: EditProps = {
          email: email,
          username: formData.get("username") as string,
        };
        const res = await editProfile(formValues);
        if (res) {
          router.push("/profile");
        } else {
          setError("Invalid email or password");
        }
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          "Oops... some error"
      );
    }
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        {/* <img
            src="avatar"
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          /> */}

        <form action={handleSubmit} className={css.profileInfo}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" className={css.input} />
          </div>

          <p>Email: {email}</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button
              onClick={() => router.back()}
              type="button"
              className={css.cancelButton}
            >
              Cancel
            </button>
            {error && <p>{error}</p>}
          </div>
        </form>
      </div>
    </main>
  );
}
