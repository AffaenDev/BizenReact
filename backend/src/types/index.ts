// Define common types for the application

export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  gifUrl: string;
  videoUrl: string;
  price: number;
  publisher: string;
  publisherId: number;
  publishDate: string;
  location: string;
  category: string;
  views: number;
  likes: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  joinDate: string;
  videos: number[];
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Region {
  id: number;
  name: string;
  subRegions: SubRegion[];
}

export interface SubRegion {
  id: number;
  name: string;
}