import type { NextPage } from 'next'
import { FormEvent, useCallback, useState } from 'react'
import { SearchProducts } from '../components/SearchProducts'
import { IHome, IProducts } from '../Interfaces/global'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<IHome>({
    totalPrice: 0,
    products: [],
  })

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data: Pick<IProducts, 'products'> = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    const products = data.products.map((product) => {
      return {
        id: product.id,
        price: product.price,
        priceFormatterd: formatter.format(product.price),
        title: product.title,
      }
    })

    const totalPrice = data.products.reduce((acc: number, product) => {
      return acc + product.price
    }, 0)

    setResults({ products: products, totalPrice: totalPrice })
  }

  const onAddToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, [])

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

      <div className={styles['products-list']}>
        <SearchProducts
          products={results.products}
          totalPrice={results.totalPrice}
          onAddToWishList={onAddToWishList}
        />
      </div>
    </main>
  )
}

export default Home
