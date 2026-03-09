import './Pagination.css'
import { IconChevronDown, IconChevronFirst, IconChevronLast, IconChevronLeft, IconChevronRight } from '../icons'

interface PaginationProps {
  currentPage: number
  totalPages: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange?: (size: number) => void
  pageSizeOptions?: number[]
}

export default function Pagination({
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [8, 16, 24],
}: PaginationProps) {
  /* Build visible page buttons: always show first, last, current ± 1, with "..." gaps */
  const pages = buildPageList(currentPage, totalPages)

  return (
    <div className="pagination">
      {/* Items per page */}
      <div
        className="pagination__size"
        role="button"
        aria-label="Items per page"
        onClick={() => {
          const idx = pageSizeOptions.indexOf(pageSize)
          const next = pageSizeOptions[(idx + 1) % pageSizeOptions.length]
          onPageSizeChange?.(next)
        }}
      >
        <span className="pagination__size-val">{String(pageSize).padStart(2, '0')}</span>
        <span className="pagination__size-chevron">
          <IconChevronDown size={12} />
        </span>
      </div>

      {/* Page nav */}
      <nav className="pagination__nav" aria-label="Pagination">
        <button
          className="pagination__item pagination__item--arrow"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          aria-label="First page"
        >
          <IconChevronFirst size={16} />
        </button>

        <button
          className="pagination__item pagination__item--arrow"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <IconChevronLeft size={16} />
        </button>

        {pages.map((p, i) =>
          p === '...' ? (
            <button key={`dots-${i}`} className="pagination__item pagination__item--dots" disabled>
              ...
            </button>
          ) : (
            <button
              key={p}
              className={`pagination__item ${p === currentPage ? 'pagination__item--active' : ''}`}
              onClick={() => onPageChange(p as number)}
              aria-current={p === currentPage ? 'page' : undefined}
            >
              {p}
            </button>
          )
        )}

        <button
          className="pagination__item pagination__item--arrow"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <IconChevronRight size={16} />
        </button>

        <button
          className="pagination__item pagination__item--arrow"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          <IconChevronLast size={16} />
        </button>
      </nav>
    </div>
  )
}

/* Builds the list of page numbers + '...' separators to display */
function buildPageList(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const pages: (number | '...')[] = [1]

  if (current > 3) pages.push('...')

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  for (let p = start; p <= end; p++) pages.push(p)

  if (current < total - 2) pages.push('...')

  pages.push(total)
  return pages
}
