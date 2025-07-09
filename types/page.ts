import type { ContentBlock } from './content';

export type PageContent = ContentBlock;

export interface Page {
  title: string;
  slug: string;
  subtitle: string;
  page: PageContent[];
}

export interface PageResponse {
  pages: Page[]
}