export interface Posts {
  id: number;
  title: string;
  slug: string;
  content: string;
  featuredImg: FeaturedImg;
  category: Category[];
  author: Author;
  totalComments: string;
  publishedDate: Date;
  html: string;
  tags: Tag[];
  primary_tag: Tag;
  excerpt: string;
  codeinjection_head: string | null;

  publishDate: any;
}

export interface Title {
  rendered: string;
}
export interface PostData {
  id: number;
  title: string;
  diff: object;
  slug: string;
  content: string;
  feature_image: string;
  category: Category[];
  author: Author;
  totalComments: string;
  publishedDate: Date;
  tags: Tag[];
  html: string;
  codeinjection_head: string | null;
  excerpt: string;
  publishDate: any;
  primary_tag: Tag;
}
export interface BlogProps {
  totalComments?: string;
  slug?: string;
  id?: number;
  content?: string;
  title?: any;
  category?: Category[];
  featuredImg?: FeaturedImg;
  excerpt?: string;
  author?: Author;
  publishDate?: any;
  diff?: any;
  comments?: Comment[];
  tags?: Tag[];
}
export interface FeaturedImg {
  thumbnail: string;
  medium: string;
  large: string;
}
export interface TaxnomyProps {
  postsData: Posts[];
  error: boolean;
}
export interface Category {
  name: string;
  slug: string;
  term_id: number;
  cat_ID: number;
}
export interface Tag {
  name: string;
  slug: string;
  term_id: number;
}

export interface Comment {
  comment_approved: string;
  comment_author: string;
  comment_content: string;
  comment_date: string;
}

export type Author = {
  name: string;
  id: string;
  description: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  github: string;
  instagram: string;
  gravatar: string;
};
