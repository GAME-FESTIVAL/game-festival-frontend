declare namespace NewSpecialTypes {
  type GameData = {
    img: string
    name: string
    tags: string[]
    price: {
      original: string
      sale?: string
      discount?: string
    }
  }
  type BannerData = {
    img: string
    name: string
    description: string
    price: string
  }
}
