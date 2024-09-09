"use client";

import { useState } from 'react';
import Label from '../components/ui/label';
import { signIn } from 'next-auth/react';

export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signIn('crdentails', {
        email,
        password,
        callbackUrl: '/dashboard'
    })
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <Label htmlFor="email">Email</Label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="password">Password</Label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Enter your password"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>
    </form>
  );
};
