import { Link } from "react-router-dom";
import styled from "styled-components";

import { ICommunity } from "types/type";
import { Tags, Comments } from "components";
import fonts from "styles/fonts";

interface IProps {
  community: ICommunity;
}
const CommunityCard = ({ community }: IProps) => {
  return (
    <Link to={`/community/${community.id}`}>
      <Container>
        <div>
          <Tags tags={community.tags} />
          <div className="title"> {community.title}</div>
          <div className="content"> {community.content}</div>
        </div>
        <Comments comments={community.comments} />
      </Container>
    </Link>
  );
};

export default CommunityCard;

const Container = styled.div`
  padding: 16px;
  height: 320px;
  border: 1px solid #cccccc;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    padding-top: 8px;
    ${fonts.Body1};
    font-weight: bold;
  }
  .content {
    padding-top: 10px;
    ${fonts.Body1};
  }
`;
