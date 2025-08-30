import { Metadata } from "next";
import css from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Not-found",
  description: "Sorry, something went wrong...",
  openGraph: {
    title: "Not-found",
    description: "Sorry, something went wrong...",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        alt: "Note hub",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const NotFound = () => {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
};

export default NotFound;
