import { IProducts } from '../Interfaces/global'
import { ProductItem } from './ProductItem'

export function SearchProducts({ products }: IProducts) {
  console.log(products)
  return (
    <div>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />
      })}
    </div>
  )
}
