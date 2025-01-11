import { useActorRef } from "@xstate/react";
import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./styles/globals.css";

import PageContainer from "./components/layout/containers/PageContainer/PageContainer";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import routes from "./routes";
import { navigationMachine } from "./state/navigationMachine";

const GlobalStateContext = createContext({});

export const GlobalStateProvider = (props) => {
  const authService = useActorRef(navigationMachine);

  return (
    <GlobalStateContext.Provider value={{ navigationMachine }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStateProvider>
      <BrowserRouter>
        <Header />
        <PageContainer>{routes}</PageContainer>

        <Footer />
      </BrowserRouter>
    </GlobalStateProvider>
  </StrictMode>,
);
