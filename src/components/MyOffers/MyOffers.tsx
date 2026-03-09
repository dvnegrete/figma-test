import { useState, useMemo } from 'react'
import './MyOffers.css'
import { Dropdown, SearchInput, Pagination } from '../ui'
import OfferCard from '../OfferCard/OfferCard'
import { OFFERS } from '../../data/offers'

const CATEGORY_OPTIONS = ['Products', 'Services', 'Discounts']
const PAGE_SIZE_OPTIONS = [8, 16, 24]

export default function MyOffers() {
  const [search, setSearch]                   = useState('')
  const [categoryFilter, setCategoryFilter]   = useState<string[]>([])
  const [currentPage, setCurrentPage]         = useState(1)
  const [pageSize, setPageSize]               = useState(8)

  /* ── Derived: filter by category then by title search ── */
  const filteredOffers = useMemo(() => {
    const query = search.trim().toLowerCase()

    return OFFERS.filter(offer => {
      const matchesCategory =
        categoryFilter.length === 0 ||
        categoryFilter.includes(offer.category)

      const matchesSearch =
        query === '' ||
        offer.title.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [search, categoryFilter])

  /* ── Derived: reset to page 1 when filters change ── */
  const totalPages = Math.max(1, Math.ceil(filteredOffers.length / pageSize))

  const handleCategoryChange = (selected: string[]) => {
    setCategoryFilter(selected)
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearch(value)
    setCurrentPage(1)
  }

  /* ── Paginate the filtered results ── */
  const paginatedOffers = filteredOffers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  return (
    <main className="my-offers">

      {/* Header */}
      <div className="my-offers__header">
        <h1 className="my-offers__title">My Offers</h1>
        <div className="my-offers__controls">
          <Dropdown
            label="All Categories"
            title="Categories"
            options={CATEGORY_OPTIONS}
            selected={categoryFilter}
            onChange={handleCategoryChange}
          />
          <Dropdown
            label="All Industries"
            title="Industries"
            options={[]}
            selected={[]}
            onChange={() => {}}
          />
          <SearchInput
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Cards grid */}
      {paginatedOffers.length > 0 ? (
        <div className="my-offers__grid">
          {paginatedOffers.map(offer => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      ) : (
        <div className="my-offers__empty">
          No offers match your filters.
        </div>
      )}

      {/* Pagination — only when there is more than one page */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={(size) => { setPageSize(size); setCurrentPage(1) }}
          pageSizeOptions={PAGE_SIZE_OPTIONS}
        />
      )}

    </main>
  )
}
