import type { Page } from './page';

export interface Header{
  header: {
    pages: Page[]
  }
}

export interface Footer{
  footer: {
    pages: Page[]
  }
}

export interface PagesQuery {
  data: {
    pages: Array<{ slug: string }>
  }
}