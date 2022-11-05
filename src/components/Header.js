import {Flex,Heading,Input,FormControl, IconButton,Icon,Box, useColorMode } from '@chakra-ui/react'
import { SearchIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import { BsBookmarksFill } from 'react-icons/bs'

const Header = ({handleSubmit, bookSearch, setBookSearch}) =>{
    const { colorMode, toggleColorMode } = useColorMode()
    return(
        <Box as="header">
        <Flex justifyContent='center' alignItems='center' w='100%'>
          <Flex as="a" href="/" justifyContent='center' alignItems='center' w='100%' mr={-5}>
            <Heading as="h1" textAlign='center' size='lg' mt={5} mb={2}>Bookmarked</Heading>

            <Icon 
            as={BsBookmarksFill} 
            color='orange.300'/>
          </Flex>
          

          <IconButton 
            onClick={toggleColorMode}
            colorScheme='blue'
            variant='outline' 
            size='sm'
            icon={colorMode === 'light' ? <MoonIcon />  : <SunIcon />}
            alignSelf='right'
            mr={5}
          >
          </IconButton>
        </Flex>
        
        <FormControl 
        as='form'
        display='flex' 
        onSubmit={handleSubmit}
        justifyContent='center'
        mb={5}
        >
          <Input type="text" placeholder="Search" required value={bookSearch} onChange={(e) => setBookSearch(e.target.value)} w='90%' maxW='500px'  ml={5}/>

          <IconButton
            icon={<SearchIcon />} 
            aria-label='Search for Book' 
            type="submit" 
            value="Submit"
            w='10%'
            maxW='200px'
            backgroundColor='orange.300'
            _hover={{
              backgroundColor: "orange.500",
              }}
            color='white'
            mr={5}
          />

        </FormControl>
      </Box>
    )
}

export default Header