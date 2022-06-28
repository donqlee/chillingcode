import { Link } from "react-router-dom";
import { Navigation } from "components";

const CampDetail = () => {
  return (
    <>
      <Navigation />
      <Link to="/camp/apply">
        <div>Camp 신청하기</div>
      </Link>
    </>
  );
};

export default CampDetail;
