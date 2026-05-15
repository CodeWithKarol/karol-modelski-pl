/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/integracja-pipedrive',
        destination: '/narzedzia/pipedrive',
        permanent: true,
      },
      {
        source: '/integracja-clickup',
        destination: '/narzedzia/clickup',
        permanent: true,
      },
      {
        source: '/automatyzacja-google-sheets',
        destination: '/narzedzia/google-sheets',
        permanent: true,
      },
      {
        source: '/integracja-hubspot',
        destination: '/narzedzia/hubspot',
        permanent: true,
      },
      {
        source: '/integracja-slack',
        destination: '/narzedzia/slack',
        permanent: true,
      },
      {
        source: '/automatyzacja-finansow',
        destination: '/narzedzia/stripe',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
