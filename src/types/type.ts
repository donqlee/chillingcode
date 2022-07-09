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
