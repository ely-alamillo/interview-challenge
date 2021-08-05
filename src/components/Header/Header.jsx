import React from 'react'
import { Flex, Box, Heading, Button, Input } from 'theme-ui'
import { Icon } from '../Icon'

const Search = ({ resetSearch, handleSearch, value }) => {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Box sx={{ ml: '10px' }}>
        {value ? (
          <Button
            onClick={() => {
              resetSearch()
            }}
            sx={{
              appearance: 'none',
              background: 'none',
              borderRadius: '50%',
              height: '20px',
              padding: 0,
              width: '20px',
              ':hover': {
                background: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            <Icon variant={'cross'} />
          </Button>
        ) : (
          <Box
            sx={{
              height: '20px',
              width: '20px',
            }}
          >
            <Icon variant={'search'} />
          </Box>
        )}
      </Box>
      <Box sx={{ ml: '10px' }}>
        <Input
          onChange={(e) => handleSearch(e.currentTarget.value)}
          placeholder="Search"
          value={value}
          sx={{
            border: 'none',
            outline: 'none',
            padding: 0,
            '::placeholder': {
              color: 'rgba(255, 255, 255, 0.48)',
            },
            ':hover': {
              '::placeholder': {
                color: 'rgba(255, 255, 255, 0.64)',
              },
            },
          }}
        />
      </Box>
    </Flex>
  )
}

export const Header = ({
  title,
  handleClear,
  handleSearch,
  searchValue,
  resetSearch,
}) => (
  <Flex sx={{ mb: '26px', alignItems: 'center' }}>
    <Box sx={{ pr: '10px' }}>
      <Heading
        as="h1"
        sx={{
          textShadow: `
            0 0 80px rgb(192 219 255 / 48%), 
            0 0 32px rgb(65 120 255 / 24%)
          `,
        }}
      >
        {title}
      </Heading>
    </Box>
    <Box sx={{ borderLeft: '2px solid rgba(255, 255, 255, 0.16)' }}>
      <Search resetSearch={resetSearch} handleSearch={handleSearch} value={searchValue} />
    </Box>
  </Flex>
)
