import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce the minimal server bundle used by the production Docker image.
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'esvqcoolltyjolvzfxuw.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  async redirects() {
    return [
      // Haberler şimdilik gizli
      { source: '/haberler', destination: '/', permanent: false },
      { source: '/haberler/:path*', destination: '/', permanent: false },
      // Eski marka/ürün rotaları
      { source: '/markalar/sungrow', destination: '/markalar', permanent: true },
      { source: '/markalar/inspur/konut-tipi-bess', destination: '/bess/ev-tipi-bess', permanent: true },
      { source: '/markalar/inspur/ticari-kabinet-bess', destination: '/bess/sivi-sogutmali-kabinet-bess', permanent: true },
      { source: '/markalar/inspur/mobil-bess', destination: '/bess/flexcube-konteyner-bess', permanent: true },
      { source: '/markalar/inspur/:slug', destination: '/bess/:slug', permanent: true },
      { source: '/markalar/thermaplus/:slug', destination: '/isi-pompasi/:slug', permanent: true },
      // Eski çözüm bağlantıları
      { source: '/cozumlerimiz/fabrikalar', destination: '/cozumlerimiz/sanayi-tesisleri', permanent: true },
      { source: '/cozumlerimiz/santraller', destination: '/cozumlerimiz/enerji-santralleri', permanent: true },
      { source: '/cozumlerimiz/evler', destination: '/cozumlerimiz/konutlar', permanent: true },
      { source: '/cozumlerimiz/ticari', destination: '/cozumlerimiz/ticari-isletmeler', permanent: true },
      { source: '/cozumlerimiz/ticari-binalar', destination: '/cozumlerimiz/ticari-isletmeler', permanent: true },
      { source: '/cozumlerimiz/oteller', destination: '/cozumlerimiz/ticari-isletmeler', permanent: true },
      { source: '/cozumlerimiz/sebeke', destination: '/cozumlerimiz/enerji-santralleri', permanent: true },
      { source: '/referanslar', destination: '/cozumlerimiz', permanent: false },
      { source: '/teknik-dokumanlar', destination: '/iletisim', permanent: false },
    ];
  },
};

export default nextConfig;
