export interface Errors {
  id: string;
  offset: number;
  length: number;
  description: {
    en: string;
  };
  bad: string;
  better: [];
  type: string;
}

export interface GrammarResponse {
  result: boolean;
  errors: Errors[];
}

export interface GrammarStatus {
  status: boolean;
  response: GrammarResponse;
}
