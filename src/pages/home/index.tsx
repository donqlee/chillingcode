import { Navigation } from "components";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Link to="/camp/1">
        <div>Camp 1</div>
      </Link>
      <Link to="/camp/2">
        <div>Camp 2</div>
      </Link>
      <Link to="/camp/3">
        <div>Camp 3</div>
      </Link>
    </div>
  );
};

export default Home;
