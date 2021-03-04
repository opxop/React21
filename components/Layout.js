import SEO from '@/components/SEO';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <main className="h-screen flex flex-col justify-center max-w-2xl mx-auto px-8">
        {children}
      </main>
    </>
  );
}
