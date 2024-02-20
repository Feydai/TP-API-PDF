import React, { useState } from "react";
import './PopupItem.css'

function PopuItem({ pdf, handleDelete, setIsPopupOpen, setSelectedPdfId, isPopupOpen, selectedPdfId }) {
  const [isDivHovered, setIsDivHovered] = useState(false);

  return (
    <div 
        className="popup-item"
        onMouseEnter={() => setIsDivHovered(true)} 
        onMouseLeave={() => setIsDivHovered(false)}
    >
        <h2 className="pdf-name">{pdf.pdf_name}</h2>
        {isDivHovered && (
            <button className="popup-button" onClick={() => {setIsPopupOpen(true); setSelectedPdfId(pdf.id);}}>...</button>
        )}
        {isPopupOpen && selectedPdfId === pdf.id && (
            <div className="popup">
                <button className="delete-button" onClick={() => handleDelete(pdf.id)}>Delete</button>
                <a
                    className="view-pdf-link"
                    href={`http://localhost:5000/pdf-files/${pdf.pdf_name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View PDF
                </a>{" "}
            </div>
        )}
    </div>
);
}

export default PopuItem;