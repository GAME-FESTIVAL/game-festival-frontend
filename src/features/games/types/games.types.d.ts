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
    _id: string
    title: string
    description: string
    price: number
    thumbnail: GlobalTypes.File.API.PostFiles.Response[]
    screenshots: GlobalTypes.File.API.PostFiles.Response[]
    categories: string[]
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
      games: ListItem[]
      totalCount: number
    }
  }

  namespace PostGame {
    type Request = {
      title: string
      description: string
      price: number
      thumbnail:
        | GlobalTypes.File.Item[]
        | GlobalTypes.File.API.PostFiles.Response[]
      screenshots:
        | GlobalTypes.File.Item[]
        | GlobalTypes.File.API.PostFiles.Response[]
      categories: string[]
      tags: string[]
      releaseAt: string
      representativeImage:
        | GlobalTypes.File.Item
        | GlobalTypes.File.API.PostFiles.Response
      detailImages:
        | GlobalTypes.File.Item[]
        | GlobalTypes.File.API.PostFiles.Response[]
      options: { name: string; price: number }[]
      discountPercentage: number
      discountPeriod: { start: string; end: string }
      wishlistCount: number
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
      totalRating: number
      totalRater: number
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

  namespace GetComments {
    type Response = {
      comments: {
        _id: string
        content: string
        createdAt: Date
        gameId: string
        helpful: number
        isRecommended: boolean
        rating: number
        likes: number
        notHelpful: number
        playTime: number
        updatedAt: Date
        writer: {
          _id: string
          nickname: string
        }
      }[]
      totalCount: number
    }
  }

  namespace PostComment {
    type Request = {
      writer: string
      gameId: string
      content: string
      playTime: number
      isRecommended: boolean
    }
  }

  namespace PatchComment {
    type Request = { id: string } & PostComment.Request
  }
}
