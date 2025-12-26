export default function FormInput({ label, ...props }: any) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}
