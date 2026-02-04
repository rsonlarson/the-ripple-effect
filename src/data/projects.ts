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
    shortSummary: 'Bring a Mug, Take a Mug.\n \nProviding a space to give and take. Give a mug a new home and spread the joy of sharing',
    description: 'This project is built around a simple idea: one small act can make a difference. By sharing and reusing mugs, we reduce waste, save resources, and create something quietly meaningful together. Bringing or taking a mug may seem small, but those small choices add up. Warmth in your hands, warmth in your drink, and warmth in the shared effort to care a little more for our community and the environment. \n If you are interested in letting us implement this idea in your own place of business or a business near you, please email us at the contact below. We take care of setting up the basket, mugs, sign and more. If you have any questions, we are always ready to assist!',
    slogan: 'One small act, Less waste, More warmth',
    projectImage: '',
    isActive: true,
  },
];