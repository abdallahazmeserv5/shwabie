export interface Blog {
  id: number;
  title: string;
  slug: string;
  country: string;
  city: string;
  content: string;
  image: string;
  created_at: string;
}

export interface BlogDetails {
  id: number;
  title: string;
  slug: string;
  country: string;
  city: string;
  content: string;
  created_at: string;
  created_by: string;
  author_image: string;
  meta_tags: any[];
}
