import React, { useState } from 'react';

const EmailReceiver: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the logic to set up email receiving
    console.log(`Email set up for receiving PDFs: ${email}`);
    alert(`E-Mail-Empfang für ${email} eingerichtet. In einer echten Anwendung würde hier die E-Mail-Empfangsfunktion konfiguriert werden.`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-Mail-Adresse für PDF-Empfang
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
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        E-Mail-Empfang einrichten
      </button>
    </form>
  );
};

export default EmailReceiver;