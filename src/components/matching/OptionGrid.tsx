interface OptionGridProps<T extends string> {
  options: Array<{ value: T; label: string }>;
  selected: T[];
  multiSelect?: boolean;
  onChange: (value: T) => void;
}

export function OptionGrid<T extends string>({ options, selected, multiSelect = false, onChange }: OptionGridProps<T>) {
  return <div className="option-grid">
    {options.map((option) => {
      const active = selected.includes(option.value);
      return <button
        key={option.value}
        type="button"
        aria-pressed={active}
        className={`option-button ${active ? 'option-button--selected' : ''}`}
        onClick={() => onChange(option.value)}
      >
        <span>{option.label}</span>
        {multiSelect && <small>{active ? '已选择' : '点按选择'}</small>}
      </button>;
    })}
  </div>;
}
