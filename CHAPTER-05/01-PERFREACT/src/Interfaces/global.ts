export interface IProduct {
  id: number
  price: number
  title: string
}

export interface IAddProductToWishList {
  dispatchOnAddToWishList: () => void
  onRequestClose: () => void
}

export interface IProductItem {
  product: IProduct
  onAddProductToWishList: (id: number) => void
}

export interface ISearchProducts {
  products: Array<IProduct>
  totalPrice: string
  onAddProductToWishList: (id: number) => void
}

export type IHome = Pick<ISearchProducts, 'products' | 'totalPrice'>
