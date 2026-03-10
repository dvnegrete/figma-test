import type { AlertConfig } from '../types'

export const ALERTS: Record<string, AlertConfig> = {
  dev: {
    type: 'dev',
    title: 'Functionality not developed',
    message: 'This is just a sample of how the website can work. If you like it, let me know so I can continue with the project.',
  },
  purchaseSuccess: {
    type: 'success',
    title: 'Purchase successful',
    message: 'You have bought the offer for next one month',
  },
  purchaseError: {
    type: 'error',
    title: 'Purchase unsuccessful',
    message: 'You were not able to verify your purchase in the given timeframe.',
  },
  offerCreated: {
    type: 'success',
    title: 'Offer created',
    message: 'You have successfully created the offer.',
  },
}
