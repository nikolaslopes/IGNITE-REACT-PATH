export interface IProduct {
  product: {
    id: number
    price: number
    title: string
  }
  onAddToWishList: (id: number) => void
}

export interface IProducts {
  products: Array<{
    id: number
    price: number
    title: string
  }>
  onAddToWishList: (id: number) => void
}
