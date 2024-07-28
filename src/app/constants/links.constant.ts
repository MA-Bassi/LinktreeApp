export interface DashLink {
  title: string;
  url: string;
  isActive: boolean;
}

export const DASH_LINKS: DashLink[] = [
  {
    title: 'Youtube',
    url: 'www.youtube.com',
    isActive: true,
  },
  {
    title: 'Facebook',
    url: 'www.facebook.com',
    isActive: true,
  },
  {
    title: 'Google',
    url: 'www.google.com',
    isActive: true,
  },
];
