import { createBrowserRouter } from "react-router-dom";
import PDFForm from "./GeneratePdf/GeneratePdf";
import HomePage from "./HomePage/HomePage";

export const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cv",
    element: <PDFForm />,
  },
];
export const router = createBrowserRouter(routesConfig);
