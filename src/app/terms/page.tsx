export const metadata = {
  title: 'Terms of Service | Legado',
};

export default function TermsPage() {
  return (
    <main className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)', minHeight: '60vh' }}>
      <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Terms of Service</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <div style={{ lineHeight: '1.8' }}>
        <p>This is a placeholder for the Legado Terms of Service.</p>
        <p>By using our website, you agree to these terms.</p>
      </div>
    </main>
  );
}
