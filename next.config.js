module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // permitir iframes
          },
        ],
      },
    ];
  },
};{
  key: "Content-Security-Policy",
  value: "frame-ancestors *"
}
