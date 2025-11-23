export interface Skillcategory {
    name: string;
    subcategories: {
        title: string;
        items: string[];
    }[];
}
