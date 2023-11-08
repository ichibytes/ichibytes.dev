import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src='/images/banner.png'
        alt='Ichibytes'
        width={1280}
        height={640}
      />
    </main>
  );
}
