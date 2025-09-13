import { SubSection } from "./subSection";

 export interface MenuItem {
   id: string;
  icon: string;
  name: string;
  subsections?: SubSection[];
}