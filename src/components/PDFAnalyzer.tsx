import React from 'react';

interface PDFAnalyzerProps {
  file: File;
  suggestedName: string;
}

const PDFAnalyzer: React.FC<PDFAnalyzerProps> = ({ file, suggestedName }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-semibold mb-2">Analyseergebnisse:</h3>
      <p>Dateiname: {file.name}</p>
      <p>Größe: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
      <p>Vorgeschlagener Name: {suggestedName}</p>
      <p className="text-sm text-gray-500 mt-2">
        In einer echten Anwendung würden hier weitere Analyseergebnisse und extrahierte Parameter angezeigt werden.
      </p>
    </div>
  );
};

export default PDFAnalyzer;