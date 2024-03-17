import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from "./context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CartProvider>
            <GoogleOAuthProvider
                clientId={123}
            >
                <App />
            </GoogleOAuthProvider>
        </CartProvider>
    </React.StrictMode>
);
