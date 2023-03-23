import { MainRoutes } from "./routes";
import { Provider } from "./context/context";
import { Toaster } from "react-hot-toast";

export function App() {
  return (
    <Provider>
      <MainRoutes />
      <Toaster toastOptions={{ style: { fontSize: 16 } }} />
    </Provider>
  );
}
