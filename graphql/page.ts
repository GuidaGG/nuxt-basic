// ~/graphql/pageBySlug.ts
import { gql } from 'graphql-tag'

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
            title
            slug
            page {
                __typename
                ... on ComponentContentContentText {
                title
                subtitle
                description
                }
                ... on ComponentContentContentMedia {
                media {
                        url
                        alternativeText
                        caption
                        formats
                        mime
                    
                    }
                }

            }
    }
  }
`
