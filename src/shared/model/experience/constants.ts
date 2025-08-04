import { TECHNOLOGIES } from '../technologies';

import { type Experience, JOB_TYPES } from './types';

export const experience: Experience[] = [
  {
    id: 'absolutist-2018',
    period: {
      start: '2018-12-10',
      end: '2021-01-15',
    },
    position: 'HTML5 Developer',
    company: 'Absolutist Ltd.',
    companyUrl: 'https://ru.absolutist.com/',
    description:
      'Collaborated closely with a cross-functional team of designers, developers, and QA specialists to support the migration of legacy games from ActionScript 3 to JavaScript. My work included debugging the transpiled code, implementing mobile adaptations, optimizing performance, and mentoring junior developers.',
    technologies: [TECHNOLOGIES.ACTION_SCRIPT, TECHNOLOGIES.JS],
    projects: [
      {
        id: 'yoworld',
        name: 'YoWorld',
        link: 'https://www.bigvikinggames.com/yoworld/',
      },
      {
        id: 'fly-squirrel-fly-2',
        name: 'Fly Squirrel Fly 2',
        link: 'https://ru.absolutist.com/online/fly-squirrel-fly-2/',
      },
      {
        id: 'summon-the-hero',
        name: 'Summon the Hero',
        link: 'https://ru.absolutist.com/online/summon-the-hero/',
      },
    ],
    type: JOB_TYPES.FULL_TIME,
  },
  {
    id: 'freelance-2021',
    period: {
      start: '2021-03-01',
      end: null,
    },
    position: 'Web Developer',
    company: 'Self-Employed',
    companyUrl: '',
    description:
      'As a freelance developer and designer, I created and optimized client websites by building responsive interfaces, implementing custom features not covered by plugins, and improving technical SEO to boost performance and search visibility.',
    technologies: [TECHNOLOGIES.WORDPRESS, TECHNOLOGIES.SEO, TECHNOLOGIES.CSS, TECHNOLOGIES.PHP],
    projects: [
      {
        id: 'smmsova',
        name: 'SMM Sova',
        link: 'https://smmsova.ru/',
      },
      {
        id: 'kosmetbeauty',
        name: 'Kosmet Beauty',
        link: 'https://kosmetbeauty.pl/',
      },
      {
        id: 'cleanglow',
        name: 'Clean Glow',
        link: 'https://cleanglow.pl/',
      },
    ],
    type: JOB_TYPES.FREELANCE,
  },
];
