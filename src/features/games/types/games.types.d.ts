namespace GamesTypes {
  type Requirements = {
    os: string
    processor: string
    memory: string
    graphics: string
    network: string
    storage: string
  }

  type ListItem = {
    id: string
    title: string
    description: string
    price: number
    thumbnails: GlobalTypes.File.API.PostFiles.Response[]
    category: string[]
    tags: string[]
    releaseAt: string
    wishlistCount: number
    discountPercentage: number
    discountPeriod: { start: string; end: string }
    averageRating: number
    createdAt: string
  }

  namespace GetGames {
    type Response = {
      list: ListItem[]
      totalCount: number
    }
  }

  namespace PostGame {
    type Request = {
      title: string
      description: string
      price: number
      thumbnails:
        | GlobalTypes.File.Item[]
        | GlobalTypes.File.API.PostFiles.Response[]
      category: string[]
      tags: string[]
      releaseAt: string
      detailImages:
        | GlobalTypes.File.Item[]
        | GlobalTypes.File.API.PostFiles.Response[]
      options: { name: string; price: number }[]
      discountPercentage: number
      discountPeriod: { start: string; end: string }
      detailInfo: {
        title: string
        contentDescriptors: string
        ageRating: number
        ratingNumber: string
        ratingDate: string
        businessName: string
        distributionLicenseNumber: string
        publisher: string
        franchise: string
        developer: string
      }
      recommendedRequirements: Requirements
      minimumRequirements: Requirements
    }
  }

  namespace PatchGame {
    type Request = { id: string } & PostGame.Request
  }

  namespace GetGameDetail {
    type Response = ListItem & {
      detailImages: GlobalTypes.File.Item[]
      options: { name: string; price: number }[]
      recentRating: number
      detailInfo: {
        contentDescriptors: string
        ageRating: number
        ratingNumber: string
        ratingDate: string
        businessName: string
        distributionLicenseNumber: string
        publisher: string
        franchise: string
        developer: string
      }
      recommendedRequirements: Requirements
      minimumRequirements: Requirements
    }
  }
}
