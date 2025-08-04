import ReactDOM from "react-dom/client";
import theme from "../theme.json";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={theme}>
    <App />
  </ConfigProvider>
);
