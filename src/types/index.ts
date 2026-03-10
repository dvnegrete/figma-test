export interface Offer {
  id: number
  title: string
  category: string
  subcategory: string
  points: number
  image: string
  imageBgClass: string
}

export type AlertType = 'success' | 'error' | 'dev'

export interface AlertConfig {
  type: AlertType
  title: string
  message: string
}
