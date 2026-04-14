export const metadata = {
  title: 'Cookies Policy | Legado',
};

export default function CookiesPage() {
  return (
    <main className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)', minHeight: '60vh' }}>
      <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Cookies Policy</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <div style={{ lineHeight: '1.8', maxWidth: '800px' }}>
        <p>This is a placeholder for the Legado Cookies Policy.</p>
        <p>
          We use cookies to improve your experience on our website, analyze site usage, and assist in our marketing efforts.
        </p>
      </div>
    </main>
  );
}
