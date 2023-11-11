import Image from 'next/image';
import styles from '@/styles/page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src='/images/banner.png'
        alt='Ichibytes'
        layout='responsive'
        width={100}
        height={100}
      />
    </main>
  );
}
