export interface PlatformStateModel {
  platforms: PlatformItem[];
}

export interface PlatformItem {
  id: number;
  route: string;
  title: string;
  logo: string;
}
