export const metadata = {
  title: 'About Us | Legado',
};

export default function AboutPage() {
  return (
    <main className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)', minHeight: '60vh' }}>
      <h1 style={{ marginBottom: 'var(--spacing-md)' }}>About Legado</h1>
      <div style={{ lineHeight: '1.8', maxWidth: '800px' }}>
        <p style={{ marginBottom: 'var(--spacing-sm)' }}>
          Legado was founded by immigrants, for immigrants.
        </p>
        <p>
          Moving to a new country for work is an incredible achievement. However, navigating the financial complexities that come with it—cross-border taxation, investment limitations, and planning for an uncertain future—can be daunting.
        </p>
        <br/>
        <p>
          We are building the tools necessary for expats to grow their wealth seamlessly, without barriers.
        </p>
      </div>
    </main>
  );
}
