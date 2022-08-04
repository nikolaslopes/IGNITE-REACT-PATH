import { IProduct } from '../Interfaces/global'

export function ProductItem({ product }: IProduct) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}
