import { BaseType } from "./BaseType";

export type NPMData = BaseType & {
  name: string;
  version: string;
  description: string;
  keywords: string;
  author: string;
  author_email: string;
  last_published: string;
  maintainers: string;
  repository: string;
  downloads_this_year: string;
};
