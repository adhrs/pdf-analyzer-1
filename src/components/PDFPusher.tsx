import React, { useState } from 'react';

const PDFPusher: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [email, setEmail] = useState('');
  const [cloudFolder, setCloudFolder] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the logic to push the PDF to the selected destination
    if (destination === 'email') {
      console.log(`Pushing PDF to email: ${email}`);
      alert(`PDF würde an ${email} gesendet werden. In einer echten Anwendung würde hier der E-Mail-Versand implementiert sein.`);
    } else if (destination === 'cloud') {
      console.log(`Pushing PDF to cloud folder: ${cloudFolder}`);
      alert(`PDF würde in den Cloud-Ordner "${cloudFolder}" hochgeladen werden. In einer echten Anwendung würde hier der Cloud-Upload implementiert sein.`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Ziel auswählen</label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        >
          <option value="">Bitte wählen</option>
          <option value="email">E-Mail</option>
          <option value="cloud">Cloud-Ordner</option>
        </select>
      </div>

      {destination === 'email' && (
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-Mail-Adresse
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
      )}

      {destination === 'cloud' && (
        <div>
          <label htmlFor="cloudFolder" className="block text-sm font-medium text-gray-700">
            Cloud-Ordner
          </label>
          <input
            type="text"
            id="cloudFolder"
            value={cloudFolder}
            onChange={(e) => setCloudFolder(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        PDF weiterleiten
      </button>
    </form>
  );
};

export default PDFPusher;