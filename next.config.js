module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["react-component"] },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      }
    );
    return cfg;
  },
};
// For building on vercel: https://github.com/Automattic/node-canvas/issues/1779
if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ""}`;
}

/*

  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'bestever';
  },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: './font/[hash].[ext]',
            },
          },
        ]
      }
 */
