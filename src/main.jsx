import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes";

// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS
import "owl.carousel/dist/assets/owl.carousel.css"; // Owl Carousel 
// import "owl.carousel";
import "moment"; // Moment.js
import "moment-timezone"; // Moment-Timezone

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
