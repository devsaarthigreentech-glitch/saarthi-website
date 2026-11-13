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
    // Old URLs kept working after the November 2026 content update (301s).
    const moved = [
      ["/technology/chca", "/technology/chfa"],
      ["/solutions/new-logistics", "/solutions/greendrive"],
      ["/solutions/new-industrial", "/solutions/greenedge"],
      ["/solutions/new-marine", "/solutions/greenmarine"],
      ["/solutions/fleetlogistics", "/solutions/greendrive"],
      ["/solutions/mining", "/solutions/greendrive"],
      ["/solutions/dg", "/solutions/greenx"],
      ["/solutions/ports", "/solutions/greenmarine"],
      ["/solutions", "/#applications"],
      ["/products/greendrive", "/solutions/greendrive"],
      ["/products/greenx", "/solutions/greenx"],
      ["/products/greenmarine", "/solutions/greenmarine"],
      ["/ecosystem", "/technology/chfa"],
      ["/ecosystem/greenvision", "/technology/greenvision"],
      ["/greenvision", "/technology/greenvision"],
      ["/evidence/awards", "/about/journey"],
      ["/evidence/certificates", "/about/journey"],
      ["/about/founder", "/about/leadership"],
      ["/resources", "/resources/downloads"],
    ].map(([source, destination]) => ({ source, destination, permanent: true }));

    // TODO(owner): GreenMentor / GreenLabs — keep as named services? Until confirmed the
    // pages stay in the repo but visitors are sent to the technology page (temporary 307).
    const onHold = ["/greenmentor", "/greenlabs", "/ecosystem/greenmentor", "/ecosystem/greenlabs"].map(
      (source) => ({ source, destination: "/technology/chfa", permanent: false }),
    );

    return [
      ...moved,
      ...onHold,
      {
        source: "/certification/verify/:id",
        destination: `${academy.replace(/\/$/, "")}/verify/:id`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
