import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import CampStore from "stores/CampStore";
import { Navigation, Skeleton } from "components";

import { maxWidth } from "styles/mixin";
import fonts from "styles/fonts";

const CampDetail = () => {
  const { campId } = useParams();
  console.log(campId);
  const campStore = useContext(CampStore);

  useEffect(() => {
    campStore.fetchCampById(Number(campId));
  }, []);
  if (campStore.targetCamp) {
    return (
      <>
        <Navigation />
        <Container>
          <div style={{ paddingTop: "60px" }}>
            <div>
              <h1>{campStore.targetCamp.name}</h1>
            </div>
            <div>{campStore.targetCamp.tags}</div>
            <div>{campStore.targetCamp.desc}</div>
            <div>{campStore.targetCamp.seat}</div>
            <div>{campStore.targetCamp.reviewMaterial}</div>
            <div>{campStore.targetCamp.headerImaget}</div>
            <div>
              {campStore.targetCamp.images &&
                campStore.targetCamp.images.map((image) => (
                  <img width="300" src={image} alt="캠프 설명" />
                ))}
            </div>
            <div>{campStore.targetCamp.process}</div>
            <div>{campStore.targetCamp.type}</div>
            <div>{campStore.targetCamp.status}</div>
            <div>{campStore.targetCamp.field}</div>
            <div>{campStore.targetCamp.skill}</div>
            <div>{campStore.targetCamp.startDate}</div>
            <div>{campStore.targetCamp.thumbnail}</div>
            <div>
              {campStore.targetCamp.reviews &&
                campStore.targetCamp.reviews.map((review) => (
                  <Review>
                    <div>{review.reviewer}</div>
                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    ></div>
                  </Review>
                ))}
            </div>
            <div>
              {campStore.targetCamp.faqs.map((faq) => (
                <Faq>
                  <div>Q.{faq.question}</div>
                  <div>A.{faq.answer}</div>
                </Faq>
              ))}
            </div>
          </div>
        </Container>
      </>
    );
  } else {
    return (
      <div>
        <Skeleton
          style={{ width: "100%", height: 280, borderRadius: "10px" }}
          animated
        />
      </div>
    );
  }
};

export default observer(CampDetail);

const Container = styled.div`
  padding-top: 60px;
  ${maxWidth};
  .title {
    ${fonts.H1};
  }
`;
const Review = styled.div`
  padding: 20px;
  div:nth-child(1) {
    padding-bottom: 20px;
    &::before {
      content: "⭐️";
    }
  }
  b {
    font-weight: bold;
  }
`;

const Faq = styled.div`
  padding: 20px;
  border: solid 1px lightblue;
`;
