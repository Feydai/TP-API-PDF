import React, { useState, useEffect } from "react";
import "./HistoryPdf.css";
import PopuItem from '../../components/PopuItem/PopupItem';

function PDFHistory({ onToggle }) {
  const [pdfs, setPdfs] = useState([]);
  const [deletedPdfId, setDeletedPdfId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPdfId, setSelectedPdfId] = useState(null);

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

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    onToggle();
  };

  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <p className="title">Historique des PDF</p>
        {pdfs.map((pdf) => (
          <PopuItem 
            key={pdf.id} 
            pdf={pdf} 
            handleDelete={handleDelete} 
            setIsPopupOpen={setIsPopupOpen} 
            setSelectedPdfId={setSelectedPdfId} 
            isPopupOpen={isPopupOpen} 
            selectedPdfId={selectedPdfId} 
          />
        ))}
      </div>
      <button
        className="toggle-button"
        onClick={toggleOpen}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {isOpen ? "|" : ">"}
      </button>
      {!isOpen && isHovered && (
        <div className="sidebar-open">Ouvrir la barre d'historique</div>
      )}
      {isOpen && isHovered && (
        <div className="sidebar-close">Fermer la barre d'historique</div>
      )}
    </div>
  );
}

export default PDFHistory;