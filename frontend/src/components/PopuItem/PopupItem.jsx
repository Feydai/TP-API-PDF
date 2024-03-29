import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./PopupItem.css";

function PopupItem({ pdf, handleDelete, selectedPdfId, setSelectedPdfId }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSelectedPdfId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSelectedPdfId]);

  const isPopupOpen = selectedPdfId === pdf.id;

  return (
    <div
      className="popup-item"
      onClick={() =>
        window.open(`http://localhost:5000/pdf-files/${pdf.pdf_name}`, "_blank")
      }
      rel="noopener noreferrer"
    >
      <h2 className="pdf-name">{pdf.pdf_name}</h2>
      <div className="utils">
        <button
          className="popup-button"
          onClick={(event) => {
            event.stopPropagation();
            setSelectedPdfId(pdf.id);
          }}
        >
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
        {isPopupOpen && (
          <div className="popup" ref={popupRef}>
            <button
              className="delete-button"
              onClick={(event) => {
                event.stopPropagation();
                handleDelete(pdf.id);
              }}
            >
              Supprimer
            </button>
            <button
              className="view-pdf-link"
              onClick={(event) => {
                event.stopPropagation();
                window.open(
                  `http://localhost:5000/pdf-files/${pdf.pdf_name}`,
                  "_blank"
                );
              }}
              rel="noopener noreferrer"
            >
              Voir le PDF
            </button>
          </div>
        )}
        <button
          onClick={(event) => {
            event.stopPropagation();
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
    </div>
  );
}

export default PopupItem;