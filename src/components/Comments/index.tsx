import styled from "styled-components";
import { IComment } from "types/type";
import Comment from "./Comment";

const Comments = ({ comments }: { comments: IComment[] }) => (
  <Container>
    {comments.map((comment, index) => (
      <Comment key={index} comment={comment} />
    ))}
  </Container>
);

export default Comments;

const Container = styled.div``;
