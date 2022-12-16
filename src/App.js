import Routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useContext } from "react";
import { Context } from "./context/AuthContext";

function App() {
  let { userData } = useContext(Context);

  return (
    <>
      {userData && <Header />}
      <Routes />
      {userData && <Footer />}
    </>
  )
}

export default App; 
