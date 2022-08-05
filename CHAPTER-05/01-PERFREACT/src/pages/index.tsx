import type { NextPage } from 'next'
import { FormEvent, useCallback, useState } from 'react'
import { SearchProducts } from '../components/SearchProducts'
import { IHome, IProduct } from '../Interfaces/global'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [date, setDate] = useState('')
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<IHome>({
    totalPrice: '',
    products: [],
  })

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    const products = data.map((product: IProduct) => {
      return {
        id: product.id,
        price: formatter.format(product.price),
        title: product.title,
      }
    })

    const totalPrice = formatter.format(
      data.reduce((acc: number, product: IProduct) => {
        return acc + product.price
      }, 0)
    )

    setResults({ products: products, totalPrice: totalPrice })
  }

  const onAddToWishList = useCallback(async (id: number) => {
    alert(`Product ${id} add to wishlist!`)
  }, [])

  const formatDate = async () => {
    const { format } = await import('date-fns')

    setDate(format(new Date(), "'Today is a' eeee"))
  }

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1>Search</h1>

        <div className={styles.date}>
          <button className={styles.btn} onClick={() => formatDate()}>
            call date-fns
          </button>
          <b>{date}</b>
        </div>
      </section>

      <form onSubmit={handleSearch} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Type here..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button
          type="submit"
          className={styles.btn}
          disabled={search.length === 0}
        >
          Search product
        </button>
      </form>

      <div className={styles['products-list']}>
        <SearchProducts
          products={results.products}
          totalPrice={results.totalPrice}
          onAddProductToWishList={onAddToWishList}
        />
      </div>
    </main>
  )
}

export default Home
