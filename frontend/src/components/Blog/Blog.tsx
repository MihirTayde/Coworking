import "./Blog.css";


const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Co-Working Spaces",
      description:
        "Discover how the co-working industry is evolving and what trends are shaping the future.",
      image: "https://source.unsplash.com/400x250/?office,workspace",
    },
    {
      id: 2,
      title: "Zero Brokerage: The Office Link Advantage",
      description:
        "Learn how Office Link helps you find the best workspace without any brokerage fees.",
      image: "https://source.unsplash.com/400x250/?business,meeting",
    },
    {
      id: 3,
      title: "Tips for Choosing the Perfect Workspace",
      description:
        "Find out what factors to consider when selecting a workspace that suits your needs.",
      image: "https://source.unsplash.com/400x250/?coworking,office",
    },
  ];

  return (
    <div className="blog-container">
      <h2 className="section-title">Our Latest Blogs</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
