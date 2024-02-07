import { createBrowserRouter } from 'react-router-dom';
import PDFForm from './generatePdf/generatePdf';

export const routesConfig = [
  {
    path: '/',
    element: <PDFForm />,
  },
];

export const router = createBrowserRouter(routesConfig);