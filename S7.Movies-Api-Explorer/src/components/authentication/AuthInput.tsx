import type { InputProps } from "../../types/props";

export default function AuthInput({ placeholder, onChange, type = "text" }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 rounded border"
      onChange={onChange}
    />
  );
}