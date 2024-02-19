import React, { useState, useEffect } from "react";
import "./PDFHistory.css";

function PDFHistory() {
  const [pdfs, setPdfs] = useState([]);
  const [deletedPdfId, setDeletedPdfId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/pdf/pdf-history")
      .then((response) => response.json())
      .then((data) => {
        setPdfs(data);
      })
      .catch((error) => {
        console.error(
          "An error occurred while fetching the PDF history:",
          error
        );
      });
  }, [deletedPdfId]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/pdf/pdf-delete/${id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          setDeletedPdfId(id);
        } else {
          throw new Error("Error deleting PDF");
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the PDF:", error);
      });
  };

  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <p className="title">PDF History</p>
        {pdfs.map((pdf) => (
          <div key={pdf.id}>
            <h2>{pdf.pdf_name}</h2>
            <button onClick={() => handleDelete(pdf.id)}>Delete</button>
            <a
              href={`http://localhost:5000/pdf-files/${pdf.pdf_name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
      <button 
        className="toggle-button" 
        onClick={() => setIsOpen(!isOpen)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {isOpen ? "|" : "<"}
      </button>
      {!isOpen && isHovered && <div className="sidebar-open">Ouvrir le historique</div>}
      {isOpen && isHovered && <div className="sidebar-close">Fermer le historique</div>}
    </div>
  );
}

export default PDFHistory;
