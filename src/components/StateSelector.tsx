'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function StateSelector({ states }: any) {
  const router = useRouter();
  const [slug, setSlug] = useState('');

  return (
    <div style={{
      margin: '40px auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px' 
    }}>
      <select
        value={slug}
        onChange={e => setSlug(e.target.value)}
        style={{
          padding: '12px',
          borderRadius: '6px',
          border: '1px solid #d1d5db',
          fontSize: '14px',
          outline: 'none'
        }}
      >
        <option value="">Select State</option>
        {states.map((s: any) => (
          <option key={s.slug} value={s.slug}>
            {s.name}
          </option>
        ))}
      </select>

      <button
        disabled={!slug}
        onClick={() => router.push(`/state/${slug}`)}
        style={{
          padding: '12px',
          borderRadius: '6px',
          border: 'none',
          fontSize: '14px',
          fontWeight: 600,
          cursor: slug ? 'pointer' : 'not-allowed',
          backgroundColor: slug ? '#2563eb' : '#9ca3af',
          color: '#ffffff',
          transition: 'background-color 0.2s'
        }}
      >
        Check Eligibility
      </button>
    </div>
  );
}
