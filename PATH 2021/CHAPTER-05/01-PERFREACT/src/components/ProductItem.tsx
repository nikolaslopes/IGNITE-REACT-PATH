import dynamic from 'next/dynamic'
import { memo, useState } from 'react'
import { IAddProductToWishList, IProductItem } from '../Interfaces/global'
import styles from '../styles/Home.module.css'
import lodash from 'lodash'

const AddProductToWishList = dynamic<IAddProductToWishList>(
  () => {
    return import('./AddProductToWishList').then(
      (module) => module.AddProductToWishList
    )
  },
  {
    loading: () => <span>Loading...</span>,
  }
)

function ProductItemComponent({
  product,
  onAddProductToWishList,
}: IProductItem) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false)

  return (
    <div className={styles['product-item']}>
      <section>
        {product.title} - <strong>{product.price}</strong>
        <button
          type="button"
          className={`${styles.btn} ${styles['btn-space']}`}
          onClick={() => setIsAddingToWishList(true)}
        >
          Add to wish list
        </button>
      </section>

      {isAddingToWishList && (
        <AddProductToWishList
          dispatchOnAddToWishList={() => onAddProductToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product)
  }
)

/**
 * ? React Reconciliation -> Igualdade referencial
 * 1. Criar uma nova versão do componente
 * 2. Comparar com a versão anterior
 * 3. Se houverem alterações, o que alterou será atualizado
 */

/**
 * ? When use MEMO
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */
