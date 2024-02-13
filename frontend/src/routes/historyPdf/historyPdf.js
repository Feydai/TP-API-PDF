import React, { useState, useEffect } from 'react';

function PDFHistory() {
  const [pdfs, setPdfs] = useState([]);
  const [deletedPdfId, setDeletedPdfId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/pdf/pdf-history')
      .then(response => response.json())
      .then(data => {
        setPdfs(data);
      })
      .catch(error => {
        console.error('An error occurred while fetching the PDF history:', error);
      });
  }, [deletedPdfId]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/pdf/pdf-delete/${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setDeletedPdfId(id);
        } else {
          throw new Error('Error deleting PDF');
        }
      })
      .catch(error => {
        console.error('An error occurred while deleting the PDF:', error);
      });
  };

  return (
    <div>
      <h1>PDF History</h1>
      {pdfs.map(pdf => (
        <div key={pdf.id}>
          <h2>{pdf.pdf_name}</h2>
          <p>{pdf.pdf_path}</p>
          <button onClick={() => handleDelete(pdf.id)}>Delete</button>
          <a href={pdf.pdf_path} target="_blank" rel="noopener noreferrer">View PDF</a>
        </div>
      ))}
    </div>
  );
}

export default PDFHistory;