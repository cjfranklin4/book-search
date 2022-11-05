import {Heading,Icon,Box} from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'

const Footer = () =>{
    return(
        <Box as='footer' display='flex' alignItems='center' flexDirection='column' position='relative' bottom='0' w='100%' justifyContent='center' py={5} background='orange.300' mt={10}>
        <Heading as="h5" size='md'>Bookmarked</Heading>

        <Box as='a' href='https://github.com/cjfranklin4/book-search' target="_blank">
        <Icon 
        as={BsGithub} 
        color='blue.400'  
        _hover={{
          color: "white",
          }}/>
        </Box>
      </Box>
    )
}

export default Footer