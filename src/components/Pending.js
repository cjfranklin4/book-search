import {Heading,Box, Spinner} from '@chakra-ui/react'

const PendingSearch = () =>{
    return(
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' flexGrow='1'>
          <Heading as="h2" textAlign='center'>Finding your books</Heading>
          <Spinner 
          size='xl'
          color='orange.400'
          />
        </Box>
    )
}

export default PendingSearch