import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";
import { useContext } from "react";

import { Context } from "./context/AuthContext";

function App() {
  const { auth } = useContext(Context)
  
  return auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App; 
