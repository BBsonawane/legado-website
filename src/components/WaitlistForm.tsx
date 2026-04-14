'use client';

import { useState } from 'react';
import styles from './WaitlistForm.module.css';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setMessage("You're on the list! Keep an eye on your inbox.");
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Failed to join waitlist. Please try again.');
    }
  };

  return (
    <div className={styles.formWrapper}>
      {status === 'success' ? (
        <div className={styles.successMessage}>
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={styles.input}
            disabled={status === 'loading'}
            required
          />
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <div className={styles.errorMessage}>{message}</div>
      )}
    </div>
  );
}
