export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
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
    title: 'Ranking System',
    description:
      'An application that tracks player win/losses for various office break-time games complete with ELO-based leaderboards, streaks, statistics, and seasonal resets.',
    image: '/assets/ranking-system/ranking-system-thumbnail.png',
    imageAlt: 'Screenshot placeholder for Ranking System',
    technologies: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'Flyway', 'Docker'],
  },
  {
    title: 'Personal Website',
    description:
      'This website! My website is a hub for showcasing myself, my projects, and my explorations in technology.',
    image: '/cameron-logo.png',
    imageAlt: 'Screenshot placeholder for Personal Website',
    technologies: ['Angular', 'Tailwind CSS', 'Docker'],
  },
];
