import "@/styles/globals.css";
import { Header, Footer, PageContainer } from "@/components/layout";

// export const metadata: Metadata = {
//   openGraph: {
//     title: "Cuckoo and the Birds | Chicago, IL",
//     description:
//       "Cuckoo and the Birds is a rock band based in Chicago, IL who write sad and angry songs that flirt with harmonies.",
//     type: "website",
//     url: "https://www.cuckooandthebirds.com",
//     images: {
//       url: "https://res.cloudinary.com/cuckooandthebirds/image/upload/c_scale,w_450/v1590178958/Twin%20Stars/laser-tyler-og.png",
//       alt: "Laser Tyler",
//     },
//   },
//   authors: {
//     name: "Tyler Earls",
//   },
//   title: "Cuckoo and the Birds",
//   description: "Cuckoo and the Birds is a rock band based in Chicago, IL.",
//   keywords:
//     "Chicago, Illinois, DIY, Music, Punk, Indie, Rock, Alt Country, Pop, Alternative, Midwest, Guitar, Bass, Drums, Vocals, Live Music, Cuckoo, Birds, Cuckoo and the Birds",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        <PageContainer>{children}</PageContainer>
        <Footer />
        </>

  );
}
