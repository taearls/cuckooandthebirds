import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header, Footer, PageContainer, Body } from "@/components/layout";

export const metadata: Metadata = {
  openGraph: {
    title: "Cuckoo and the Birds",
    description: "Cuckoo and the Birds is a rock band based in Chicago, IL.",
    type: "website",
    url: "https://www.cuckooandthebirds.com",
    // images: {
    //   url: "https://res.cloudinary.com/taearls/image/upload/c_scale,w_450/v1605418591/teal-tyler-in-space.jpg",
    //   alt: "Teal Tyler in Space",
    // },
  },
  authors: {
    name: "Tyler Earls",
  },
  title: "Cuckoo and the Birds",
  description: "Cuckoo and the Birds is a rock band based in Chicago, IL.",
  keywords:
    "Chicago, Music, Indie, Rock, Pop, Alternative, Midwest, Guitar, Bass, Drums",
  // "HTML, CSS, JavaScript, Java, Rust, React, Vue, Node.js, Software Engineer, Web Development, SASS, SCSS, Less, Responsive Design, Software Engineer, Frontend, Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body>
        <Header />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </Body>
    </html>
  );
}
