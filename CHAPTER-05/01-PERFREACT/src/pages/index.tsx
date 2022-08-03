import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')

  function handleSearch() {}

  return (
    <main className={styles.main}>
      <h1>Search</h1>

      <form onSubmit={handleSearch} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Type here..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button type="button" className={styles.btn}>
          Search product
        </button>
      </form>
    </main>
  )
}

export default Home
