// import { DEGREE } from "./constants";

export namespace IEntity {
  export interface Student {
    id: number;
    fullName: string;
    degree: string;
    tuitionFee: number;
    phone: string;
    createdAt: string;
    university: string;
  }

  export interface Sponsor {
    id: number;
    fullName: string;
    phone: string;
    amount: number;
    spendMoney: number;
    createdAt: string;
    status: string;
  }

  export interface University {
    id: number;
    name: string;
  }
}

export namespace IForm {}

export namespace IApi {
  export namespace Students {
    export interface Request {
      id: number,
      page: number;
      limit: number;
      search: string;
      degree: string;
      university: string;
    }
    export interface Response {
      count: number;
      next: number | null;
      previous: number | null;
      totalPages: number;
      results: IEntity.Student[];
    }
  }

  export namespace Sponsors {
    export interface Request {
      page: number;
      limit: number;
    }
    export interface Response {
      count: number;
      next: number | null;
      previous: number | null;
      totalPages: number;
      results: IEntity.Sponsor[];
    }
  }

  export namespace Universities {
    export interface Request {}
    export interface Response {
      count: number;
      results: IEntity.University[];
    }
  }
}

export namespace IQuery {
  export interface Students {
    students: IEntity.Student[];
    count: number;
    isLoading: boolean;
  }

  export interface Universities {
    universities: IEntity.University[];
    count: number;
    isLoading: boolean;
  }

  export interface Sponsors {
    sponsors: IEntity.Sponsor[];
    count: number;
    isLoading: boolean;
  }
}
