export type CampType = "popular" | "sale";
export interface ICamp {
  id: number;
  name: string;
  type: CampType;
  status: "ready" | "open" | "completed";
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
}
export interface ICampDetail {
  id: number;
  name: string;
  tags: string[];
  desc: string;
  seat: string;
  reviewMaterial: string[];
  headerImaget: string;
  images: string[];
  process: string;
  type: CampType;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
  reviews: { content: string; reviewer: string }[];
  faqs: { question: string; answer: string }[];
}
export interface ICommunity {
  id: number;
  tags: string[];
  title: string;
  content: string;
  comments: IComment[];
}

export interface IComment {
  profile: string;
  nickname: string;
  content: string;
}
