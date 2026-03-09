import './SearchInput.css'
import { IconSearch } from '../icons'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  fullWidth?: boolean
}

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search',
  fullWidth = false,
}: SearchInputProps) {
  return (
    <div className={`search-input ${fullWidth ? 'search-input--full' : ''}`}>
      <input
        className="search-input__field"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="search-input__icon">
        <IconSearch size={16} />
      </span>
    </div>
  )
}
