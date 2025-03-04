export interface TabData {
  label: string;
  disabled?: boolean;
}

export const tabsData: TabData[] = [
  { label: "Government" },
  { label: "Industry", disabled: true },
  { label: "Vendor", disabled: true },
];
