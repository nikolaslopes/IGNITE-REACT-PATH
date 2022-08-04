export interface IProduct {
  id: number
  price: number
  title: string
}

export interface IProductItem {
  product: IProduct
  onAddToWishList: (id: number) => void
}

export interface ISearchProducts {
  products: Array<IProduct>
  totalPrice: string
  onAddToWishList: (id: number) => void
}

export type IHome = Pick<ISearchProducts, 'products' | 'totalPrice'>
