export type Team = {
  rank: number;
  participant: {
    id: string;
    name: string;
    images: {
      url: string;
    }[];
  };
  data: {
    code: string;
    value: number;
  }[];
};

export type Tournament = {
  startDate: string;
  endDate: string;
  name: string;
  standings: {
    participants: Team[];
  }[];
};

export type Match = {
  id: string;
  startDate: string;
  status: string;
  participants: {
    results: {
      resultType: string;
      value: number;
    }[];
    participant: {
      name: string;
      images: {
        url: string;
      }[];
    };
  }[];
};
