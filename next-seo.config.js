const title = 'Bibleverses Admin';
const description =
  'Bibleverses help you easily browse and explore the KJV bible.';

const SEO = {
  title,
  description,
  canonical: 'https://comments.bibleverses.net/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://comments.bibleverses.net/',
    title,
    description,
    images: [
      {
        url: 'https://comments.bibleverses.net/logo.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
