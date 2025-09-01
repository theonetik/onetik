export interface Customcard {
    id?: string;
  title: string;
  description: string;
  contactNo: string;
  websiteUrl?: string;
  youtubeUrl?: string;
  aboutUrl?: string;
  category: string;
  subCategory: string;
  country?: string;
  region?: string;
  isProtected?: boolean; // Cannot be deleted
  createdBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
