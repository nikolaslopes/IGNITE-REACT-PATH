import { memo } from 'react'
import { IProduct } from '../Interfaces/global'

function ProductItemComponent({ product }: IProduct) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
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
 * ? React Reconciliation
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
