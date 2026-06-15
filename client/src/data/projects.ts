export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;    // URL or path under /public/images/
  tags: string[];
}

// Add projects here. Empty array → empty state UI in Work.tsx.
export const projects: Project[] = [
  // {
  //   title: 'My Project',
  //   description: 'What it does.',
  //   url: 'https://github.com/...',
  //   image: '/images/my-project.png',
  //   tags: ['React', 'TypeScript'],
  // },
]
