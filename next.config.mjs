import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://elc.app.erxes.io/gateway",
    NEXT_PUBLIC_ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6ImVsYyIsImNyZWF0ZWRBdCI6IjIwMjQtMTEtMTJUMDg6MjI6NTMuODk4WiIsInVzZXJHcm91cElkIjoiNEVIeWRUREFpczJMZFFuWm4iLCJleHBpcmVEYXRlIjoiMjAyNC0xMi0xMlQwOTo1Njo1NS44NjdaIiwibm9FeHBpcmUiOnRydWUsImFsbG93QWxsUGVybWlzc2lvbiI6ZmFsc2UsIl9pZCI6InVrMF9kd2did2NxZWdQempDc3MzeSIsIl9fdiI6MH0sImlhdCI6MTczMTQwNTQ0M30.vrqsFLvH3Lwr56_6ggi0ORNiq9CIKVlXVlb-L7fS-Co",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'elc.api.erxes.io',
        pathname: '/api/read-file',
      },
    ],
  },
};

// Create Next Intl Plugin configuration
const withNextIntl = createNextIntlPlugin();

// Combine the nextConfig with the intl plugin
export default withNextIntl(nextConfig);





