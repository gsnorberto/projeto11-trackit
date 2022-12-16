import Routes from "./routes";
import { Context } from "./context/AuthContext";
import { useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let { auth } = useContext(Context);

  return(
    <>
      { auth && <Header />}
      <Routes /> 
      { auth && <Footer />}
    </>
  )
}

export default App; 
