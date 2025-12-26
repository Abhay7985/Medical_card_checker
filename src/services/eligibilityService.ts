import { EligibilityPayload } from '@/types/eligibility';

export async function submitEligibility(payload: EligibilityPayload) {
  const res = await fetch('/api/eligibility', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {
    throw new Error('Submission failed');
  }

  return res.json();
}
