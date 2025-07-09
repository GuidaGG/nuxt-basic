// types/content.ts

export type ContentBlock =
  | ContentTextBlock
  | ContentMediaBlock

export interface ContentTextBlock {
  __typename: 'ComponentContentContentText'
  title: string
  subtitle: string
  description: RichTextParagraph[]
}

export interface RichTextParagraph {
  type: 'paragraph'
  children: RichTextChild[]
}

export interface RichTextChild {
  text: string
  type: 'text'
  code?: boolean
}

export interface ContentMediaBlock {
  __typename: 'ComponentContentContentMedia'
  media: MediaFile
}

export interface MediaFile {
  __typename: 'UploadFile'
  url: string
  alternativeText?: string
  caption?: string
  mime: string
  formats?: MediaFormats
}

export interface MediaFormats {
  thumbnail?: MediaFormat
  small?: MediaFormat
  medium?: MediaFormat
  large?: MediaFormat
}

export interface MediaFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}
