export type Merchant = 'amazon' | 'decathlon'

export type ExperienceLevel = 'beginner' | 'intermediate' | 'performance'

export type ProductType = 'complete-set' | 'board-pack' | 'board' | 'wing' | 'foil'

export type ResearchStatus = 'verified' | 'partially-verified' | 'needs-review' | 'inactive'

export type ReviewStatus = 'self-tested' | 'expert-tested' | 'editorial-data-review' | 'not-reviewed'

export interface ProductOffer {
  merchant: Merchant
  productId: string
  sourceUrl: string
  affiliateUrl?: string
  currentPrice?: number
  originalPrice?: number
  currency: 'EUR'
  available?: boolean
  seller?: string
  marketplaceOffer?: boolean
  lastChecked?: string
}

export interface ProductScores {
  beginnerFriendliness?: number
  stability?: number
  earlyLift?: number
  control?: number
  agility?: number
  transport?: number
  completeness?: number
  upgradePotential?: number
  valueForMoney?: number
}

export interface WingfoilProduct {
  id: string
  slug: string
  name: string
  shortName: string
  brand: string
  productType: ProductType
  description: string
  shortDescription: string
  image?: string
  imageAlt: string

  levels: ExperienceLevel[]
  editorialRole?: string
  reviewStatus: ReviewStatus
  researchStatus: ResearchStatus
  published: boolean

  board?: {
    construction?: 'inflatable' | 'hardboard'
    volumeLitres?: number
    length?: string
    width?: string
    pressurePsi?: number
    carbonPlate?: boolean
  }

  wing?: {
    sizeSquareMetres?: number
    availableSizes?: number[]
    handles?: string
    windows?: boolean
  }

  foil?: {
    frontWingAreaCm2?: number
    rearWingAreaCm2?: number
    mastLengthCm?: number
    mastMaterial?: string
    frontWingMaterial?: string
    aspect?: 'low' | 'mid' | 'high'
  }

  included: {
    board?: boolean
    wing?: boolean
    foil?: boolean
    pump?: boolean
    boardLeash?: boolean
    wingLeash?: boolean
    bag?: boolean
    repairKit?: boolean
    tools?: boolean
  }

  recommendedWeightMinKg?: number
  recommendedWeightMaxKg?: number
  recommendedWindMinKnots?: number
  recommendedWindMaxKnots?: number

  advantages: string[]
  disadvantages: string[]
  suitableFor: string[]
  notSuitableFor: string[]

  scores?: ProductScores

  offers: ProductOffer[]

  sourceNotes?: string[]
  lastEditorialReview?: string
}

export interface FinderInput {
  level: ExperienceLevel | null
  weightKg: number | null
  weightRange: string
  previousExperience: string[]
  windRange: string
  transportPreference: 'inflatable' | 'hardboard' | 'any'
  budgetMax: number | null
  budgetRange: string
}

export interface FinderRecommendation {
  boardVolumeMin: number
  boardVolumeMax: number
  preferredConstruction: 'inflatable' | 'hardboard' | 'any'
  wingSizeMin: number
  wingSizeMax: number
  foilAreaMin: number
  foilAreaMax: number
  explanation: string[]
}

export interface MerchantPriceProvider {
  getOffer(productId: string): Promise<ProductOffer | null>
}

export interface BreadcrumbItem {
  label: string
  to?: string
}
