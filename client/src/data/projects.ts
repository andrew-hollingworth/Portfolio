export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;    // URL or path under /public/images/
  tags: string[];
}

// Add projects here. Empty array → empty state UI in Work.tsx.
// export const projects: Project[] = [
//   {
//     title: 'My Project',
//     description: 'What it does and why it matters.',
//     url: 'https://github.com/andrew-hollingworth/my-project',
//     image: '/images/my-project.png',  // place image in client/public/images/
//     tags: ['React', 'TypeScript'],
//   },
// ]
export const projects: Project[] = []
