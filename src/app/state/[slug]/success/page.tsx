import states from '@/data/states.json';
import { notFound } from 'next/navigation';

type Params = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ name?: string }>;
};

export default async function Success({ params, searchParams }: Params) {
  const { slug } = await params;
  const { name } = await searchParams;

  const state = states.find(s => s.slug === slug);

  if (!state) return notFound();

  return (
    <div
      style={{
        maxWidth: '520px',
        margin: '40px auto',
        padding: '24px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        textAlign: 'center',
      }}
    >
      <h1>Thank You, {name}</h1>
      <p>You applied for <strong>{state.name}</strong></p>
      <a href="/">
        <button
          style={{
            marginTop: '12px',
            padding: '12px',
            borderRadius: '6px',
            border: 'none',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
            backgroundColor: '#2563eb',
            color: '#fff',
          }}
        >
          Back to Home
        </button>
      </a>
    </div>
  );
}
