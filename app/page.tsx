import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Asosiy sahifa</h1>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/detail">Detail</Link></li>
        </ul>
      </nav>
    </div>
  );
}