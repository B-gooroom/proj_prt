import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div>index</div>
        <div>
          <div>
            <Link href="/board">공지사항</Link>
          </div>
          <div>
            <Link href="/notification">알림</Link>
          </div>
          <div>
            <Link href="/user">회원정보</Link>
          </div>
          <div>
            <Link href="/on">견적정보</Link>
          </div>
          <div>
            <Link href="/testin">견적정보</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
