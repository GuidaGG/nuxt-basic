export interface MediaFormat {
  url: string;
  width: number;
  height: number;
}

export interface Media {
  url: string;
  alternativeText?: string;
  caption?: string;
  formats?: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  };
}

export interface RichTextChild {
  text: string;
  type: string;
  code?: boolean;
}

export interface RichTextBlock {
  type: string;
  children: RichTextChild[];
}

