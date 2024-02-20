import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./PopupItem.css";

function PopupItem({ pdf, handleDelete, setSelectedPdfId }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popup-item">
      <h2 className="pdf-name">{pdf.pdf_name}</h2>
      <button
        className="popup-button"
        onClick={() => {
          setIsPopupOpen(true);
          setSelectedPdfId(pdf.id);
        }}
      >
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
      {isPopupOpen && (
        <div className="popup" ref={popupRef}>
          <button
            className="delete-button"
            onClick={() => handleDelete(pdf.id)}
          >
            Delete
          </button>
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
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = `http://localhost:5000/pdf/pdf-download/${pdf.pdf_name}`;
          link.download = pdf.pdf_name;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="download-button"
      >
        <FontAwesomeIcon icon={faDownload} />
      </button>
    </div>
  );
}

export default PopupItem;
