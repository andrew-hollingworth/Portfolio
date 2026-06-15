export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;    // URL or path under /public/images/
  tags: string[];
}

// Add projects here. Empty array → empty state UI in Work.tsx.
// Each entry: { title, description, url, image, tags }
export const projects: Project[] = []
