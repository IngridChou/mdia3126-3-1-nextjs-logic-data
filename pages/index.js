import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  const [color, setColor] = useState("red");
  const [number, setNumber] = useState(1);

  const router = useRouter();

  const check = () => {
    if (number == 1) {
      console.log("ONE");
      setColor("blue");
    } else if (number == 2) {
      console.log("TWO");
      setColor("green");
    } else if (number == 3) {
      router.push('/dashboard')
    }
    setNumber(number + 1);
  }

  return (
    <>
      <main className={`${styles.main}`}>
        <button onClick={() => check()} style={{ backgroundColor: color }}>Click me</button>
      </main>
    </>
  )
}
