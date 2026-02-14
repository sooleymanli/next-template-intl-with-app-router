import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/az.json'
  }
});

const config: NextConfig = {
 eslint: {
    ignoreDuringBuilds: true,
  },
  typescript:{
    ignoreBuildErrors:true
  },
    images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'admin.cht.az',
      port: '',
    }]
  },

};

export default withNextIntl(config);