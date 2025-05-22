interface MlDropDownProps {
  genres: string[];
  value: string;
  onChange: (genre: string) => void;
}

export const MlDropDown = ({ genres, value, onChange }: MlDropDownProps) => {
  return (
    <select
      className="border rounded px-3 py-1 text-lg"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">Todos</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>{genre}</option>
      ))}
    </select>
  )
}