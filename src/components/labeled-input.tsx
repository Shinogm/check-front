'use client'

interface Props {
  label: string
  type: React.InputHTMLAttributes<HTMLInputElement>['type']
  defaultValue?: string
  placeholder?: string
  required?: boolean
  name?: string
  capitalize?: boolean
}

const className = {
  isCapitalized: 'capitalize'
}

export const LabeledInput = ({ label, defaultValue, placeholder, type, required = false, name, capitalize = false }: Props) => (
  <label
    className='flex flex-col mb-4'
  >
    <span
      className='font-bold text-lg'
    >
      {label}
    </span>
    <input
      className={`outline-none border-b border-black/50 py-1 focus:border-black transition-all focus:px-1 rounded-md ${capitalize ? className.isCapitalized : ''}`}
      type={type}
      placeholder={placeholder}
      required={required}
      name={name}
      defaultValue={defaultValue}
    />
  </label>
)
