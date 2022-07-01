import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICamp } from "types/type";
import fonts from "styles/fonts";

interface IProps {
  camp: ICamp;
  isHeadField: boolean;
}

const CampCard = ({ camp, isHeadField }: IProps) => {
  return (
    <Link to={`/camp${camp.id}`}>
      <Container bgImg={camp.thumbnail}>
        <BgOpacityBlack />
        <div className="camp-content">
          <div className="camp-head">
            {isHeadField ? `${camp.field}/${camp.skill}` : camp.status}
          </div>
          <div className="camp-name">{camp.name}</div>
          <div className="camp-start-date">{camp.startDate}</div>
        </div>
      </Container>
    </Link>
  );
};

export default CampCard;

const Container = styled.div<{ bgImg: string }>`
  position: relative;
  height: 280px;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .camp-content {
    padding: 20px;
    z-index: 1;
    color: white;
  }
  .camp-head {
    ${fonts.Caption}
    padding-bottom:8px;
  }
  .camp-name {
    ${fonts.Body1}
    font-weight:bold;
    padding-bottom: 8px;
  }
  .camp-start-date {
    ${fonts.Caption}
  }
`;

const BgOpacityBlack = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(39, 63, 40, 0) 0%,
    rgba(89, 89, 89, 0.558824) 15.62%,
    #000000 70.83%
  );
  border-radius: 0px 0px 10px 10px;
`;
