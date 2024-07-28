import Header from "@/components/writing/Header";
import Main from "@/components/writing/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Infrequent posts about design and tech",
  openGraph: {
    title: "Writing",
    description: "Infrequent posts about design and tech",
    images: [
      {
        url: "https://suryangsu.xyz/og?title=Writing",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Writing",
    description: "Infrequent posts about design and tech",
    images: [
      {
        url: "https://suryangsu.xyz/og?title=Writing",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default () => (
  <>
    <Header />
    <Main />
  </>
);
