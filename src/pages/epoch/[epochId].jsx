import { useRouter } from 'next/router'
import { Box, Button, Flex, Heading } from 'theme-ui'
import { Icon } from '../../components'

const EpochDetails = () => {
  const router = useRouter()
  const { epochId } = router.query

  const push = () => router.push('/')

  return (
    <Flex
      sx={{
        pt: '50px',
        alignItems: 'center',
      }}
    >
      <Button
        onClick={push}
        sx={{
          background: 'none',
        }}
      >
        <Flex
          css={{
            alignItems: 'center',
            borderRadius: '50%',
            height: '40px',
            width: '40px',
            justifyContent: 'center',
            transform: 'rotate(90deg)',
            ':hover': {
              background: 'rgba(111, 76, 255, 0.88)',
            },
          }}
        >
          <Icon variant="arrowDown" />
        </Flex>
      </Button>
      <Heading as="h1">
        <span>Some image</span>
        <span css={{ paddingLeft: '25px' }}>{epochId}</span>
      </Heading>
    </Flex>
  )
}

export default EpochDetails
