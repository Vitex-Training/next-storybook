export interface Label {
  readonly color: string;
  readonly isDisabled?: boolean;
  readonly isFixed?: boolean;
  readonly label: string;
  readonly value: string;
}

export const labelOptions: readonly Label[] = [
  { color: '#006b75', label: 'Ready for review', value: 'Ready for review' },
  { color: '#d73a4a', label: 'Bug', value: 'Bug' },
  { color: '#0075ca', label: 'Documentation', value: 'Documentation' },
  { color: '#cfd3d7', label: 'Duplicate', value: 'Duplicate' },
  { color: '#a2eeef', label: 'Enhancement', value: 'Enhancement' },
  { color: '#7057ff', label: 'Good first issues', value: 'Good first issues' },
  { color: '#008672', label: 'Help wanted', value: 'Help wanted' },
  { color: '#e4e669', label: 'Invalid', value: 'Invalid' },
];
