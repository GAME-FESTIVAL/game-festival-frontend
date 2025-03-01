namespace MainTypes {
  type GameItem = {
    id: string
    title: string
    desc: string
    img_url: string
    tags: string[]
    discount_rate: number
    price: number
    release_at: string
  }
  namespace GetPopularGameList {
    type Response = GameItem[]
  }

  namespace GetHotdealGameList {
    type Response = GameItem[]
  }

  namespace GetNewGameList {
    type Response = GameItem[]
  }

  namespace GetBestGameList {
    type Response = GameItem[]
  }

  namespace GetUpcomingGameList {
    type Response = GameItem[]
  }

  namespace GetSpecialDiscountGameList {
    type Response = GameItem[]
  }

  namespace GetPopularFreeGameList {
    type Response = GameItem[]
  }

  namespace GetGameDetail {
    type Response = {
      id: string
      title: string
      desc: string
      release_at: string
      thumbnail_urls: string[]
      tags: string[]
      discount_rate: number
      price: number
      rating_summary: string
      review_count: number
      top_reviews: {
        id: string
        parent_id: string
        name: string
        total_reviews: number
        content: string
        rating: number
      }[]
    }
  }
}
