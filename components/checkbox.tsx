interface CheckboxProps {
  id: string
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function Checkbox({
  id,
  label,
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <div className="relative flex w-full items-center justify-between rounded-md border border-[#e6e6e6] bg-[#fefefe] p-[0.4rem_0.75rem] text-xs transition-shadow ease-linear">
      <label htmlFor={id} className="text-xs text-[#000000]/70">
        {label}
      </label>

      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="absolute right-2 block w-full rounded-md border border-[#e6e6e692] bg-[#fefefe]"
      ></input>
    </div>
  )
}
