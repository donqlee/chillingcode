import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      style={{
        background: "aliceblue",
        display: "flex",
        padding: "20px",
        gap: "20px",
      }}
    >
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/community">
        <div>Community</div>
      </Link>
    </div>
  );
};

export default Navigation;
