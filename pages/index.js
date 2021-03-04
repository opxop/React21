import { useTheme } from 'next-themes';

import Layout from '@/components/Layout';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <Layout>
      <section className="flex flex-col items-center">
        <div className="flex">
          <h1 className="font-bold text-7xl tracking-wide mb-4">React21</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 cursor-pointer"
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
            }}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>

        <blockquote className="text-gray-400 italic my-6 text-center leading-relaxed">
          In <b>2021</b>, I don't want to waste time with stupid things.
          <br /> Therefore, I created a few project that I learned from several
          sources as well.
        </blockquote>
      </section>
    </Layout>
  );
}
