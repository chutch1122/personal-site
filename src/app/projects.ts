export interface Repository {
  label?: string;
  url: string;
  provider?: 'GitHub' | 'GitLab' | 'Bitbucket' | 'Other';
}

export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  liveUrl?: string;
  repositories?: Repository[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Nova - Personal AI Assistant',
    description:
      'A progressive web app that acts as my personal AI assistant that can answer questions, control my car, and search the web.',
    image: '/assets/nova/nova-thumbnail.png',
    imageAlt: 'Screenshot placeholder for Nova - Personal AI Assistant',
    technologies: ['Angular', 'FastAPI', 'LangChain', 'OpenAI', 'ElevenLabs', 'Docker'],
  },
  {
    title: 'Ranking System (Deprecated)',
    description:
      'An application that tracks player win/losses for various office break-time games complete with ELO-based leaderboards, streaks, statistics, and seasonal resets. (Note: The live demo database is reset every 30 minutes.)',
    image: '/assets/ranking-system/ranking-system-thumbnail.png',
    imageAlt: 'Screenshot placeholder for Ranking System',
    technologies: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'Flyway', 'Docker'],
    liveUrl: 'https://rankings-legacy.demos.chutchison.com',
    repositories: [
      { label: 'UI Source', url: 'https://github.com/chutch1122/ranking-system-ui', provider: 'GitHub' },
      { label: 'API Source', url: 'https://github.com/chutch1122/ranking-system-api', provider: 'GitHub' },
    ],
  },
  {
    title: 'Personal Website',
    description:
      'This website! My website is a hub for showcasing myself, my projects, and my explorations in technology.',
    image: '/cameron-logo.png',
    imageAlt: 'Screenshot placeholder for Personal Website',
    technologies: ['Angular', 'Tailwind CSS', 'Docker'],
    liveUrl: 'https://chutchison.com',
    repositories: [
      { label: 'Source', url: 'https://github.com/chutch1122/personal-site', provider: 'GitHub' },
    ],
  },
];
