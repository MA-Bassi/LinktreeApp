export interface DashLink {
  title: string;
  url: string;
  isActive: boolean;
  isLocked: boolean;
}

export const DASH_LINKS: DashLink[] = [
  {
    title: 'Youtube',
    url: 'www.youtube.com',
    isActive: true,
    isLocked: false,
  },
  {
    title: 'Facebook',
    url: 'www.facebook.com',
    isActive: true,
    isLocked: false,
  },
  {
    title: 'Google',
    url: 'www.google.com',
    isActive: true,
    isLocked: false,
  },
];
