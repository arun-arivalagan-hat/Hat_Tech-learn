type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function Filter({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Dev">Dev</option>
      <option value="Design">Design</option>
      <option value="HR">HR</option>
    </select>
  );
}