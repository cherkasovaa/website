const URL_PATTERNS = {
  RSSCHOOL: {
    domain: 'rolling-scopes-school.github.io',
    projectSegmentIndex: 1,
  },
  MY_GITHUB: {
    domain: 'cherkasovaa.github.io',
    projectSegmentIndex: 0,
  },
} as const;

export const formatUrl = (url: string): string => {
  if (!url) return '';

  const cleanUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  for (const config of Object.values(URL_PATTERNS)) {
    if (cleanUrl.includes(config.domain)) {
      const path = cleanUrl.substring(config.domain.length + 1);
      const segments = path.split('/');

      return segments[config.projectSegmentIndex];
    }
  }

  return cleanUrl;
};
