import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import truckBg from "./assets/images/truck.jpg";

async function readyHeroPhoto() {
  if (window.location.pathname !== "/") return;
  const img = new Image();
  img.src = truckBg;
  const decoded = img.decode().catch(
    () =>
      new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      })
  );
  await Promise.race([decoded, new Promise((resolve) => setTimeout(resolve, 2500))]);
}

readyHeroPhoto().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
});
