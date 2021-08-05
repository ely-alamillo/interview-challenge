import { gql } from 'apollo-boost'

export const EPOCHES_QUERY = gql`
  query epoches(
    $orderBy: String!
    $orderDirection: String!
    $search: Epoch_filter
    $skip: Int!
    $first: Int!
  ) {
    epoches(
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $search
      skip: $skip
      first: $first
    ) {
      id
      startBlock
      endBlock
      queryFeeRebates
      totalRewards
    }
  }
`
