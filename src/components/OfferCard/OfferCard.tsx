import { useState } from 'react'
import './OfferCard.css'
import { IconInfo, IconCart, Alert } from '../ui'
import type { AlertConfig } from '../ui'
import type { Offer } from '../../types'
import { ALERTS } from '../../data/alerts'

interface OfferCardProps {
  offer: Offer
}

export default function OfferCard({ offer }: OfferCardProps) {
  const [alert, setAlert] = useState<AlertConfig | null>(null)

  return (
    <>
      <div className="offer-card">
        <div className={`offer-card__image-wrap ${offer.imageBgClass}`}>
          <img className="offer-card__image" src={offer.image} alt={offer.title} />
          <span className="offer-card__badge">{offer.points} ✪</span>
        </div>

        <div className="offer-card__footer">
          <div className="offer-card__info">
            <span className="offer-card__title">{offer.title}</span>
            <span className="offer-card__category">
              {offer.category}
              <span className="offer-card__category-sep">•</span>
              {offer.subcategory}
            </span>
          </div>

          <div className="offer-card__actions">
            <button
              className="offer-card__btn offer-card__btn--info"
              aria-label="Info"
              onClick={() => setAlert(ALERTS.purchaseError)}
            >
              <IconInfo size={16} />
            </button>
            <button
              className="offer-card__btn offer-card__btn--cart"
              aria-label="Add to cart"
              onClick={() => setAlert(ALERTS.purchaseSuccess)}
            >
              <IconCart size={16} />
            </button>
          </div>
        </div>
      </div>

      {alert && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
    </>
  )
}
