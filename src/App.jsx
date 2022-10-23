import { RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import routes from "./routes/routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
