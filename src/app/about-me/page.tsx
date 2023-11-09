import styles from '@/styles/page.module.css';

export default function AboutMe() {
  return (
    <main className={styles.main}>
      <h1>About Me</h1>
      <p>
        I'm a software developer from Spain. I'm currently working on a
        personal project called <a href='https://ichibytes.dev'>Ichibytes</a>.
      </p>
    </main>
  );
}
