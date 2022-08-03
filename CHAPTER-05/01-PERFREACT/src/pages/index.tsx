import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')

  return (
    <main className={styles.main}>
      <h1>Search</h1>

      <form>
        <input
          className={styles.input}
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </main>
  )
}

export default Home
