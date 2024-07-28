import allPosts from "./writing/posts";

export default () => {
  const posts = allPosts().map((post) => ({
    url: `https://suryangsu.xyz/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `https://suryangsu.xyz${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
};
