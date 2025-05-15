export default defineAppConfig({
  title: 'tou.kr',
  email: 'master@tou.kr',
  github: 'https://github.com/choi5781/sink',
  twitter: 'https://tou.kr',
  telegram: 'https://tou.kr',
  mastodon: 'https://tou.kr',
  blog: 'https://tou.kr',
  //description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  description: 'URL 단축 서비스 / 분석 /서버리스 / 사용자정의 슬러그 / 인공지능 슬러그 / 링크만료 등',
  description: '',
  //image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
