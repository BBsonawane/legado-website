export const metadata = {
  title: 'Privacy Policy | Legado',
};

export default function PrivacyPage() {
  return (
    <main className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)', minHeight: '60vh' }}>
      <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <div style={{ lineHeight: '1.8' }}>
        <p>This is a placeholder for the Legado Privacy Policy.</p>
        <p>We are committed to protecting your personal information and your right to privacy.</p>
      </div>
    </main>
  );
}
