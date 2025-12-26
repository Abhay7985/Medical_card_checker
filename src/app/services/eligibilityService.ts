export async function submitEligibility(payload: any) {
  const res = await fetch('/api/eligibility', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('API failed');
  }

  return res.json();
}
