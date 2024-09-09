"use client";

import { useState } from 'react';
import Label from '../components/ui/label';

export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Register
      </button>
    </form>
  );
};
