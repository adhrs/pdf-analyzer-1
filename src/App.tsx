import React, { useState } from 'react';
import { Upload, Mail } from 'lucide-react';
import PDFUploader from './components/PDFUploader';
import PDFAnalyzer from './components/PDFAnalyzer';
import EmailReceiver from './components/EmailReceiver';
import PDFPusher from './components/PDFPusher';

function App() {
  const [analyzedPDF, setAnalyzedPDF] = useState<File | null>(null);
  const [suggestedName, setSuggestedName] = useState<string>('');

  const handlePDFUpload = (file: File) => {
    setAnalyzedPDF(file);
    // In a real application, you would send the file to your backend for analysis
    // For now, we'll just set a dummy suggested name
    setSuggestedName(`Analyzed_${file.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">PDF Analyzer und Manager</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Upload className="mr-2" /> PDF hochladen
            </h2>
            <PDFUploader onUpload={handlePDFUpload} />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2" /> PDF per E-Mail empfangen
            </h2>
            <EmailReceiver />
          </div>
        </div>
        
        {analyzedPDF && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">PDF-Analyse</h2>
            <PDFAnalyzer file={analyzedPDF} suggestedName={suggestedName} />
          </div>
        )}
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Upload className="mr-2" /> PDF weiterleiten
          </h2>
          <PDFPusher />
        </div>
      </div>
    </div>
  );
}

export default App;