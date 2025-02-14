import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="/assets/blog.jpeg" alt="logo" />
    </div>
  );
}
