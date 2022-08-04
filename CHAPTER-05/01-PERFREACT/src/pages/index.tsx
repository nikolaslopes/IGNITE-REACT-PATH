import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { SearchProducts } from '../components/SearchProducts'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    setProducts(data)
  }

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

        <button type="submit" className={styles.btn}>
          Search product
        </button>
      </form>

      <SearchProducts products={products} />
    </main>
  )
}

export default Home
