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
    _id: 'Prjct_1',
    projectName: 'Mugs for Many',
    shortSummary: 'something here',
    description: 'Longer description here',
    slogan: 'A short slogan',
    projectImage: '',
    isActive: true,
  },
];