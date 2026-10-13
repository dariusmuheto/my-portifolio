export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  visual: "payments" | "platform" | "web";
  link?: string;
};

export type Skill = {
  title: string;
  items: string[];
  icon: any;
};