import {Heading, Image,Flex, Highlight } from '@chakra-ui/react'

import readingImage from '../images/undraw_reading.png'

const Placeholder = () => {
    return (
        <Flex alignItems='center' flexDirection='column' flexGrow='1'>
            <Heading as="h2" size='lg' textAlign='center' mb={2} ml={5} mr={5}>Search for books you <Highlight  query='love'
    styles={{ px: '2', py: '1', rounded: 'lg', bg: 'orange.300' }}>love</Highlight></Heading>
            <Image
                w={['80%','50%']}
                maxW='700px' 
                textAlign='center'
                src={readingImage} 
                alt="Reading a book placeholder"
                borderRadius='lg' 
            />
        </Flex>
    )
}

export default Placeholder