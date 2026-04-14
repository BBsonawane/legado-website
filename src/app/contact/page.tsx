export const metadata = {
  title: 'Contact Us | Legado',
};

export default function ContactPage() {
  return (
    <main className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)', minHeight: '60vh' }}>
      <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Contact Us</h1>
      <div style={{ lineHeight: '1.8', maxWidth: '800px' }}>
        <p style={{ marginBottom: 'var(--spacing-sm)' }}>
          Have questions or need assistance? We'd love to hear from you.
        </p>
        <p>
          Email us at: <strong>hello@legado.test</strong>
        </p>
      </div>
    </main>
  );
}
