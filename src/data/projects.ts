export type Project = {
  _id: string;
  projectName?: string;
  shortSummary?: string;
  description?: string;
  slogan?: string;
  projectImage?: string;
  isActive?: boolean;
};

export const projects: Project[] = [
  {
    _id: 'project-1',
    projectName: 'Project 1',
    shortSummary: 'Short summary here',
    description: 'Longer description here',
    slogan: 'A short slogan',
    projectImage: '',
    isActive: true,
  },
];