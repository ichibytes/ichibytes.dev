import Image from 'next/image';

export default function Home() {
  return (
    <main className="main">
      <Image
        src='/images/banner.png'
        alt='Ichibytes'
        width={0}
        height={0}
        sizes='100vw'
        className='main__image'
        priority
      />
    </main>
  );
}
