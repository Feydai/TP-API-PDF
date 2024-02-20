import { createBrowserRouter } from "react-router-dom";
import PDFForm from "./GeneratePdf/GeneratePdf";
import PDFHistory from "./HistoryPdf/HistoryPdf";
import HomePage from "./HomePage/HomePage";

export const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/history",
    element: <PDFHistory />,
  },
];
export const router = createBrowserRouter(routesConfig);
