import { useState } from 'react'
import './MyOffers.css'
import { Dropdown, SearchInput, Pagination } from '../ui'
import OfferCard from '../OfferCard/OfferCard'
import { OFFERS } from '../../data/offers'

const PAGE_SIZE_OPTIONS = [8, 16, 24]
const TOTAL_PAGES = 5

export default function MyOffers() {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(2)
  const [pageSize, setPageSize] = useState(8)

  return (
    <main className="my-offers">

      {/* Header */}
      <div className="my-offers__header">
        <h1 className="my-offers__title">My Offers</h1>
        <div className="my-offers__controls">
          <Dropdown label="All Categories" />
          <Dropdown label="All Industries" />
          <SearchInput value={search} onChange={setSearch} />
        </div>
      </div>

      {/* Cards grid */}
      <div className="my-offers__grid">
        {OFFERS.map(offer => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
        pageSizeOptions={PAGE_SIZE_OPTIONS}
      />

    </main>
  )
}
