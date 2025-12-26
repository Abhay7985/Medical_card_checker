import Link from 'next/link';

export default function Navbar() {
  return (
    <header style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      padding: '14px 0'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link
          href="/"
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#111827',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          Medical Card Checker
        </Link>

        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <Link
            href="/"
            style={{
              color: '#374151',
              fontWeight: 500,
              textDecoration: 'none'
            }}
          >
            Home
          </Link>

          <Link
            href="/admin/submissions"
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '8px 14px',
              borderRadius: '6px',
              fontWeight: 500,
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
