import { IProducts } from '../Interfaces/global'
import { ProductItem } from './ProductItem'

export function SearchProducts({ products }: IProducts) {
  return (
    <div>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />
      })}
    </div>
  )
}
