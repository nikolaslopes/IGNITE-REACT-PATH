import { memo } from 'react'
import { IProductItem } from '../Interfaces/global'
import styles from '../styles/Home.module.css'

function ProductItemComponent({ product, onAddToWishList }: IProductItem) {
  return (
    <div className={styles['product-item']}>
      {product.title} - <strong>{product.price}</strong>
      <button
        type="button"
        className={styles.btn}
        onClick={() => onAddToWishList(product.id)}
      >
        Add to wish list
      </button>
    </div>
  )
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
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
