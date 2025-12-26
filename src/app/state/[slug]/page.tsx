import { Suspense } from 'react';
import StateDetails from '../state-details';

export default function Page(props: any) {
  return (
    <Suspense fallback={<p>Loading state details...</p>}>
      <StateDetails {...props} />
    </Suspense>
  );
}
