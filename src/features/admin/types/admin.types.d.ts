namespace AdminTypes {
  namespace PostGame {
    type Requirements = {
      os: string
      processor: string
      memory: string
      graphics: string
      network: string
      storage: string
    }

    type Request = {
      title: string
      description: string
      price: number
      thumbnails: string[]
      category: string[]
      tags: string[]
      releaseAt: string
      detailImages: string[]
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
}
