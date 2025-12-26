import states from '@/data/states.json';

export const revalidate = 60;

export async function generateStaticParams() {
  return states.map(s => ({ slug: s.slug }));
}

export default async function StatePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;


  const state = states.find(s => s.slug === slug);

  if (!state) return <p>State not found</p>;

  return (
    <div className="card">
      <h1>{state.name}</h1>
      <p><strong>Age Requirement:</strong> {state.ageRequirement}+</p>
      <p><strong>Card Fee:</strong> ${state.fee}</p>
      <p>{state.description}</p>

      <a href={`/state/${state.slug}/apply`}>
        <button>Start Evaluation</button>
      </a>
    </div>
  );
}
