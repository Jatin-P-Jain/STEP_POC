export interface SourceOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export const SourceOptions: SourceOption[] = [
  { value: "", label: "Source", disabled: true },
  { value: "Jeddah", label: "Jeddah" },
  { value: "Riyadh", label: "Riyadh" },
];
