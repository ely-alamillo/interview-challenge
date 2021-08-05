import { Box, Text, Button } from 'theme-ui'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Flex } from 'theme-ui'
import debounce from 'lodash/debounce'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'
import { Table, Header } from '../components'
import { EPOCHES_QUERY } from '../apollo/queries'
import { Icon } from '../components'

const PAGE_SIZE = 5

const formatValue = (value) => {
  const val = Number(value) / 10 ** 18

  return val.toFixed(0)
}

const columnDefinitions = [
  {
    id: 'id',
    header: 'EPOCH',
    sortingField: 'epoch',
    sortable: true,
    cell: (item) => {
      return <span>{item.id}</span>
    },
  },
  {
    id: 'startBlock',
    header: 'START BLOCK',
    sortingField: 'startBlock',
    sortable: true,
    cell: (item) => {
      return <span>{`#${item.startBlock}`}</span>
    },
  },
  {
    id: 'endBlock',
    header: 'END BLOCK',
    sortingField: 'endBlock',
    sortable: true,
    cell: (item) => {
      return <span>{`#${item.endBlock}`}</span>
    },
  },
  {
    id: 'queryFeeRebates',
    header: 'QUERY FEES',
    sortingField: 'queryFees',
    sortable: true,
    cell: (item) => {
      return (
        <Box css={{ display: 'inline-flex', alignItems: 'center' }}>
          {formatValue(item.queryFeeRebates)}
          <Text css={{ fontSize: '11px', paddingLeft: '10px' }}>GRT</Text>
        </Box>
      )
    },
  },
  {
    id: 'totalRewards',
    header: 'TOTAL REWARDS',
    sortingField: 'totalRewards',
    sortable: true,
    cell: (item) => {
      return (
        <Box css={{ display: 'inline-flex', alignItems: 'center' }}>
          {formatValue(item.totalRewards)}
          <Text css={{ fontSize: '11px', paddingLeft: '10px' }}>GRT</Text>
        </Box>
      )
    },
  },
  {
    id: 'navigation',
    header: '',
    cell: (item) => {
      return (
        <Link href={`epoch/${item.id}`}>
          <Button
            className="epoch-link"
            css={{
              opacity: '0',
            }}
          >
            <Icon variant="delegate" />
          </Button>
        </Link>
      )
    },
  },
]

const Index = () => {
  const [{ orderBy, orderDirection, searchVal, first }, setEpochesQueryConfig] = useState(
    {
      orderBy: 'startBlock',
      orderDirection: 'asc',
      searchVal: '',
      first: PAGE_SIZE,
    },
  )

  const { loading, error, data } = useQuery(EPOCHES_QUERY, {
    variables: {
      orderBy,
      orderDirection,
      first,
      search: searchVal ? { startBlock: Number(searchVal) } : {},
      skip: 0,
    },
  })

  const onSortingChange = ({ column, direction }) => {
    setEpochesQueryConfig((prev) => ({
      ...prev,
      orderBy: column,
      orderDirection: direction,
    }))
  }

  return (
    <Flex>
      <Box
        sx={{
          maxWidth: 1280,
          mx: 'auto',
          px: 3,
          py: 4,
        }}
      >
        <Table
          header={
            <Flex css={{ flexDirection: 'column', width: '100%', minWidth: '1256px' }}>
              <Box css={{ width: '100%' }}>
                <Header
                  title={'Epoches'}
                  resetSearch={() => {
                    setEpochesQueryConfig((prev) => ({
                      ...prev,
                      searchVal: '',
                    }))
                  }}
                  handleSearch={(val) => {
                    setEpochesQueryConfig((prev) => ({
                      ...prev,
                      searchVal: val,
                    }))
                  }}
                  searchValue={searchVal}
                />
              </Box>
            </Flex>
          }
          columnDefinitions={columnDefinitions}
          data={loading ? [] : data.epoches}
          loading={loading}
          error={error}
          sorting={{ defaultField: 'id', isDescending: false }}
          fetchMore={() =>
            setEpochesQueryConfig((prev) => ({ ...prev, first: prev.first + PAGE_SIZE }))
          }
          onSortingChange={onSortingChange}
        />
      </Box>
    </Flex>
  )
}

export default withApollo(Index, { ssr: false })
