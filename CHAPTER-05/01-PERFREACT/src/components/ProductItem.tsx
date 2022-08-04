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
