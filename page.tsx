'use client';
import { useState } from 'react';

export default function Apply() {
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async () => {
    setLoading(true);
    setError('');
    try {
      const r = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: 'User', lastName: 'Test' }),
      });

      if (!r.ok) {
        throw new Error('Failed to submit application');
      }

      const d = await r.json();
      setId(d.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={submit} disabled={loading}>
        {loading ? 'Applying...' : 'Apply'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {id && (
