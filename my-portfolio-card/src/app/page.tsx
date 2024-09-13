import Head from 'next/head';
import PortfolioCard from '../components/PortfolioCard';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <PortfolioCard />
      </main>
    </div>
  );
}