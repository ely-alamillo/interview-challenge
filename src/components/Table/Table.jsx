import React, { useState } from 'react'
import { Box, Button, Flex, Text, Spinner, Alert } from 'theme-ui'
import { Icon } from '../Icon'

export const Table = ({
  header,
  columnDefinitions,
  data,
  loading,
  error,
  fetchMore,
  sorting,
  onSortingChange,
}) => {
  const [sortingConfig, setSortingConfig] = useState({
    activeColumn: sorting.defaultField,
    sortingDirection: sorting.isDescending ? 'desc' : 'asc',
  })

  const renderSpinner = () => {
    return (
      <Flex
        css={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Spinner />
      </Flex>
    )
  }

  const flipSortingDirection = (currentDirection) => {
    return currentDirection === 'asc' ? 'desc' : 'asc'
  }

  const renderTableHeaders = () => {
    return (
      <thead>
        <tr>
          {columnDefinitions.map((column, idx) => (
            <th
              key={`${column.id}-${idx}`}
              onClick={() => {
                // can we sort column
                if (column.sortable) {
                  const newDirection = flipSortingDirection(
                    sortingConfig.sortingDirection,
                  )

                  // column hasn't change so just update sortingDirection
                  if (column.id === sortingConfig.activeColumn) {
                    onSortingChange({
                      column: sortingConfig.activeColumn,
                      direction: newDirection,
                    })

                    setSortingConfig((prev) => ({
                      ...prev,
                      sortingDirection: newDirection,
                    }))
                  } else {
                    // if column has changed then update active column and
                    // reset sorting state
                    onSortingChange({
                      column: column.id,
                      direction: 'asc',
                    })

                    setSortingConfig((prev) => ({
                      activeColumn: column.id,
                      sortingDirection: newDirection,
                    }))
                  }
                }

                return
              }}
            >
              <Flex
                css={{
                  alignItems: 'center',
                  borderBottom: '2px solid rgba(255, 255, 255, 0.16)',
                  padding: '16px',
                  cursor: 'pointer',
                  borderBottom:
                    sortingConfig.activeColumn === column.id
                      ? '2px solid rgba(255, 255, 255, 0.64)'
                      : '',
                  ':hover': column.sortable && {
                    borderBottom: '2px solid rgba(255, 255, 255, 0.64)',
                  },
                }}
              >
                <Box>
                  <Text css={{ fontSize: '10px', textTransform: 'uppercase' }}>
                    {column.header}
                  </Text>
                </Box>

                <Box css={{ marginLeft: '10px' }}>
                  {sortingConfig.activeColumn === column.id && (
                    <>
                      {sortingConfig.sortingDirection === 'asc' ? (
                        <Icon variant="arrowUp" />
                      ) : (
                        <Icon variant="arrowDown" />
                      )}
                    </>
                  )}
                </Box>
              </Flex>
            </th>
          ))}
        </tr>
      </thead>
    )
  }

  const renderTableBody = () => {
    return (
      <tbody>
        {data.map((item) => (
          <tr
            height="65px"
            key={item.id}
            css={{
              // TODO: this is messy, need to figure out how to better
              // style the hover icon for navigation
              borderBottom: '2px solid rgba(255, 255, 255, 0.04)',
              ':hover': {
                background: 'rgba(255, 255, 255, 0.02)',
                '.epoch-link': {
                  background: 'rgba(255, 255, 255, 0.02)',
                  opacity: '1',
                  borderRadius: '50%',
                  ':hover': {
                    background: 'rgba(111, 76, 255, 0.88)',
                    opacity: '1',
                    borderRadius: '50%',
                    height: '40px',
                    width: '40px',
                  },
                },
              },
            }}
          >
            {columnDefinitions.map((column, idx) => (
              <td css={{ padding: '' }} key={`${column.id}-${idx}`}>
                {column.cell(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }

  const renderError = () => {
    return (
      <Flex
        css={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Alert>There was an error loading this page.</Alert>
      </Flex>
    )
  }

  const renderTable = () => {
    return (
      <Flex css={{ flexDirection: 'column', width: '100%' }}>
        <Box css={{ width: '100%' }}>
          <table
            css={{
              tableLayout: 'fixed',
            }}
          >
            {renderTableHeaders()}
            {renderTableBody()}
          </table>
        </Box>
        <Box
          css={{
            marginTop: '67px',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Button
            onClick={fetchMore}
            variant="primary"
            css={{
              background: 'transparent',
              border: '1px solid rgba(111, 76, 255, 0.35)',
              borderRadius: '4px',
              padding: '14px 30px',
              textShadow:
                '0 0 32px rgba(111, 76, 255, 0.64), 0 0 16px rgba(170, 234, 255, 0.32)',
              ':hover': {
                boxShadow: `
                0 0 24px rgba(111, 76, 255, 0.32),
                0 0 0 1px #6f4cff,
                0 0 0 1px #ffffff
              `,
              },
            }}
          >
            Load More
          </Button>
        </Box>
      </Flex>
    )
  }

  return (
    <Flex ss={{ flexDirection: 'column', width: '100%', minWidth: 1024 }}>
      <Box css={{ width: '100%' }}>
        {header}
        {loading && renderSpinner()}
        {error && renderError()}
        {!loading && !error && renderTable()}
      </Box>
    </Flex>
  )
}
