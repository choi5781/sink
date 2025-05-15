export default defineAppConfig({
  title: 'tou.kr',
  email: 'master@tou.kr',
  github: 'https://github.com/choi5781/sink',
  twitter: 'https://tou.kr',
  telegram: 'https://tou.kr',
  mastodon: 'https://tou.kr',
  blog: 'https://tou.kr',
  //description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  description: '',
  //image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
