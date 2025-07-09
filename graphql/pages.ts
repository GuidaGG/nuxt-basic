import { gql } from 'graphql-tag';

export const GET_PAGES = gql`
    query GetPages {
        pages {
            title
            slug
        }
    }
`;
