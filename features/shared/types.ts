export interface Root<T> {
  status: string;
  message: string;
  data: T;
  pagination: Pagination;
}
export interface Pagination {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
}

export interface SiteSettings {
  site_name: string;
  site_logo: string;
  site_description: string;
  site_keywords: string;
  site_url: string;
  site_email: string;
  site_phone: string;
  site_address: string;
  site_language: string;
  site_favicon: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  og_image: any;
  twitter_card_image: any;
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  linkedin_url: string;
  youtube_url: string;
  currency: string;
  latitude: string;
  longitude: string;
  google_analytics_id: string;
  facebook_pixel_id: string;
  google_tag_manager_id: string;
  pixels: string;
}

export interface HomeData {
  about_us: AboutUs;
  trips: Trip[];
  services: Service[];
  hotels: Hotel[];
  testimonials: Testimonial[];
}

export interface AboutUs {
  title: string;
  description: string;
  image: string;
}

export interface Trip {
  id: number;
  title: string;
  slug: string;
  price: string;
  is_air_ticket: number;
  is_offer: number;
  currency: string;
  country_name: string;
  country_id: number;
  thumbnail: string;
  created_at: string;
  start_date: string;
}

export interface Service {
  id: number;
  name: string;
  slug: string;
  currency: string;
  price: string;
  thumbnail: string;
  created_at: string;
}

export interface Hotel {
  id: number;
  name: string;
  slug: string;
  country_name: string;
  country_id: number;
  price: string;
  currency: string;
  is_air_ticket: number;
  average_rating: number;
  thumbnail: string;
  created_at: string;
}

export interface Testimonial {
  name: string;
  description: string;
  image: string;
  rating: string;
}
