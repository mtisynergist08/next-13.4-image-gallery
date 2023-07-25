export interface UnsplashImageModel {
  description: string;
  alt_description: string;
  user: { username: string };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  width: number;
  height: number;
}

export interface UnsplashSearchResponse {
  results: UnsplashImageModel[];
}
