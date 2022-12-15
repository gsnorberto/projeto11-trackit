import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";

function App() {
  let auth = true;
  
  return auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App;
