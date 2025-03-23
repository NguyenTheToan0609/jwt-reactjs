import "./App.scss";
import NavHeader from "./component/navigation/NavHeader";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import AppRoutes from "./routes/AppRoutes";
import { UserContext } from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Scrollbars } from "react-custom-scrollbars";

const App = () => {
  const { user } = useContext(UserContext);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    let windownHeight = window.innerHeight;
    setScrollHeight(windownHeight);
  }, [user]);

  return (
    <Scrollbars autoHide style={{ height: scrollHeight }}>
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
              <NavHeader />
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
    </Scrollbars>
  );
};

export default App;
