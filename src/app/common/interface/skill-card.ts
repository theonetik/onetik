export interface SkillCard {
    id?: string;           // Firestore doc ID (optional)
    title: string;
    description: string;
    websiteLink?: string;
    youtubeLink?: string;
    subItem?: string;
}

