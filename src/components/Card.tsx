import { useState } from 'react';

interface ICard {
  id: number;
  title: string;
  paragraph: string;
  details: string;
}

export const Card = ({ id, title, paragraph, details }: ICard) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode fazer algo com os dados do login, como enviá-los para um serviço
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <p>{details}</p>
      
      {/* Formulário de login */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
