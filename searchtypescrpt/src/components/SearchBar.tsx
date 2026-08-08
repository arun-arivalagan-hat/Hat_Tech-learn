type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}