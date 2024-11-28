import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/useAuth";

function App() {
  return (
    <UserProvider>
      <div>
        <Outlet />
        <ToastContainer />
      </div>
    </UserProvider>
  );
}

export default App;