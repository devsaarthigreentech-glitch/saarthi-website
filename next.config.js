/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // Certificates print https://sgthydroedge.com/certification/verify/<id> in
  // their QR code. Send that path on to the training app's /verify page, which holds the
  // certificate records, so printed links keep working wherever it is hosted.
  async redirects() {
    const academy = process.env.ACADEMY_URL || "https://academy.sgthydroedge.com";
    return [
      {
        source: "/certification/verify/:id",
        destination: `${academy.replace(/\/$/, "")}/verify/:id`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
