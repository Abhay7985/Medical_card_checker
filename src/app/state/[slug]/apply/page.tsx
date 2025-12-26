'use client';

import { useState, useMemo } from 'react';
import { useRouter, useParams } from 'next/navigation';
import FormInput from '@/components/FormInput';
import { submitEligibility } from '@/services/eligibilityService';
import states from '@/data/states.json';

export default function ApplyPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const stateData = useMemo(
    () => states.find((s: any) => s.slug === slug),
    [slug]
  );

  const requiredAge = stateData?.ageRequirement ?? 0;

  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    condition: '',
    agree: false,
  });

  const [ageError, setAgeError] = useState('');
  const [loading, setLoading] = useState(false);

  const parsedAge = Number(form.age);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormInvalid =
    !form.name ||
    !form.email ||
    !isValidEmail(form.email) ||
    !form.condition ||
    !form.agree ||
    !parsedAge ||
    parsedAge < requiredAge;

  const handleAgeChange = (e: any) => {
    const value = e.target.value;
    const age = Number(value);

    setForm({ ...form, age: value });

    if (!age || age < requiredAge) {
      setAgeError(`Minimum required age is ${requiredAge}`);
    } else {
      setAgeError('');
    }
  };

  const submit = async () => {
    if (parsedAge < requiredAge || !isValidEmail(form.email)) return;

    try {
      setLoading(true);

      await submitEligibility({
        name: form.name,
        email: form.email,
        age: parsedAge,
        condition: form.condition,
        state: slug,
      });

      router.push(`/state/${slug}/success?name=${form.name}`);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
const removeLeadingSpace = (value: string) =>
  value.replace(/^\s+/, '');
  return (
    <div
      style={{
        maxWidth: 520,
        margin: '40px auto',
        padding: 24,
        background: '#fff',
        borderRadius: 8,
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <h1 style={{ textAlign: 'center', fontWeight: 700 }}>
        Eligibility Form
      </h1>

      <FormInput
        label="Full Name"
        value={form.name}
       onChange={(e: any) =>
    setForm({
      ...form,
      name: removeLeadingSpace(e.target.value),
    })
  }

      />

      <FormInput
        label="Email"
        type="email"
        value={form.email}
        onChange={(e: any) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      {form.email && !isValidEmail(form.email) && (
        <p style={{ color: '#dc2626', fontSize: 13 }}>
          Please enter a valid email address
        </p>
      )}

      <FormInput
        label={`Age (Minimum ${requiredAge})`}
        type="number"
        value={form.age}
        onChange={handleAgeChange}
      />

      {ageError && (
        <p style={{ color: '#dc2626', fontSize: 13 }}>
          {ageError}
        </p>
      )}

      <textarea
        placeholder="Medical Condition"
        value={form.condition}
        onChange={(e) =>
    setForm({
      ...form,
      condition: removeLeadingSpace(e.target.value),
    })
  }
        style={{
          padding: 10,
          borderRadius: 6,
          border: '1px solid #d1d5db',
          minHeight: 80,
          fontSize: 14,
        }}
      />

      <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 14,
            marginTop: 4,
          }}
        >
          <input
            type="checkbox"
            checked={form.agree}
            onChange={(e) => setForm({ ...form, agree: e.target.checked })}
            style={{ width: 18, height: 18 }}
          />
          I agree to the privacy policy
        </label>

      <button
        onClick={submit}
        disabled={loading || isFormInvalid}
        style={{
          padding: 12,
          borderRadius: 6,
          border: 'none',
          fontWeight: 600,
          cursor:
            loading || isFormInvalid
              ? 'not-allowed'
              : 'pointer',
          background:
            loading || isFormInvalid ? '#9ca3af' : '#2563eb',
          color: '#fff',
        }}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
}
