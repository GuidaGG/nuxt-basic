import type { Media, RichTextBlock } from './content';

export interface ContentText {
  __typename: 'ComponentContentContentText';
  title: string;
  subtitle: string;
  description: RichTextBlock[];
}

export interface ContentMedia {
  __typename: 'ComponentContentContentMedia';
  media: Media;
}

export type PageContent = ContentText | ContentMedia;

export interface Page {
  title: string;
  slug: string;
  page: PageContent[];
}

export interface PageResponse {
  pages: Page[];
}