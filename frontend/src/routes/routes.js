import { createBrowserRouter } from "react-router-dom";
import PDFForm from "./GeneratePdf/GeneratePdf";
import PDFHistory from "./historyPdf/historyPdf";

export const routesConfig = [
  {
    path: "/",
    element: <PDFForm />,
  },
  {
    path: "/history",
    element: <PDFHistory />,
  },
];
export const router = createBrowserRouter(routesConfig);
