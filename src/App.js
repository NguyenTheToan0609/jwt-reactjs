import "./App.scss";
import Nav from "./component/navigation/nav";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Router>
        <div className="app-header">
          <Nav />
        </div>
        <div className="App-container">
          <AppRoutes />
        </div>
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
      </Router>
    </>
  );
}

export default App;
