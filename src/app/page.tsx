import states from '@/data/states.json';
import StateSelector from '@/components/StateSelector';

export default function HomePage() {
  return (
    <div className="card">
      <h1>Check Medical Card Eligibility</h1>
      <p>Select your U.S. state to continue.</p>
      <StateSelector states={states} />
    </div>
  );
}
