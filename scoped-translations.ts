export type AvailableLangsIds = 'en' | 'fa';

export interface AvailableLangs {
  id: AvailableLangsIds;
  label: string;
}

export const availableLangs: AvailableLangs[] = [
  {
    id: 'en',
    label: 'English',
  },
  {
    id: 'fa',
    label: 'فارسی',
  },
];

export const scopeLoader = (importer: any, root = 'i18n') => {
  return availableLangs.reduce((acc: any, lang) => {
    acc[lang.id] = () => importer(lang.id, root);
    return acc;
  }, {});
};
