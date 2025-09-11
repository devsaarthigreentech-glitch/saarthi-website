import BlogCard from "@/components/Resources/BlogCard";

export default function BlogsPage() {
  const blogs = [
    {
      id: "b1",
      title: "Hydrogen retrofits cut diesel emissions",
      excerpt: "Results from fleet deployments and independent validation.",
      slug: "/blog/hydrogen-retrofits",
      date: "2025-06-10",
      image: "/images/resources/blog-01.jpg",
    },
    {
      id: "b2",
      title: "GreenVision for ESG reporting",
      excerpt: "IoT intelligence for provable Scope 1–3 emissions.",
      slug: "/blog/greenvision-esg",
      date: "2025-04-18",
      image: "/images/resources/blog-02.jpg",
    },
  ];

  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-extrabold mb-6">Blogs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </div>
    </main>
  );
}
