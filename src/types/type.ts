export interface ICamp {
  id: number;
  name: string;
  type: string;
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
  comments: { profile: string; nickname: string; content: string }[];
}
