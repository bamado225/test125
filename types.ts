
export interface ClientLogo {
  name: string;
  icon?: string;
}

export interface PortfolioItem {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  rating?: number;
}
