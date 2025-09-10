/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-gfm")],
    rehypePlugins: [
      require("rehype-slug"),
      require("rehype-autolink-headings"),
      [require("rehype-highlight"), { detect: true }],
    ],
  },
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: false,
  },
};

module.exports = withMDX(nextConfig);
