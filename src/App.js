import "./App.scss";
import Nav from "./component/navigation/nav";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import AppRoutes from "./routes/AppRoutes";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import { TailSpin } from "react-loader-spinner";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Router>
        {user && user.isLoading ? (
          <>
            <div className="loading-container">
              <TailSpin
                height="80"
                width="80"
                radius="9"
                color="#0d6efd"
                ariaLabel="loading"
              />
              <div>Loading data.....</div>
            </div>
          </>
        ) : (
          <>
            <div className="app-header">
              <Nav />
            </div>
            <div className="App-container">
              <AppRoutes />
            </div>
          </>
        )}
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
