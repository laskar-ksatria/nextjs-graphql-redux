import { gql } from '@apollo/client'

export const QUERY_SPACE = gql`
    {
        users {
            name
        }
    }
`