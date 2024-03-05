import { useState } from 'react';

export default function CreateLink() {
  const [linkName, setLinkName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/add-link', { // This path is relative to the hosted frontend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ link_name: linkName, phone_number: phoneNumber, message }),
    });    
      if (response.ok) {
        const data = await response.json();
        setGeneratedLink(`https://chamanozap.link/l/${data.link_name}`);
    } else {
        const errorData = await response.json();
        if (response.status === 409) {
          setError('The link name is already taken. Please choose another one.');
        } else {
          setError(errorData.error || 'An error occurred while creating the link.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while submitting the form.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={linkName}
          onChange={(e) => setLinkName(e.target.value)}
          placeholder="Link Name"
          required
        />
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />
        <button type="submit">Create Link</button>
      </form>
      {generatedLink && <p>Generated Link:

        <Link href="/redirect/[...slug]" as={`/l/${linkName}`}>
          <a>{generatedLink}</a>
        </Link>
      
      </p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
