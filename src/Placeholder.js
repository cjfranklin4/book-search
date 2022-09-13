import {Heading, Image,Flex } from '@chakra-ui/react'

import readingImage from './images/undraw_reading.png'

const Placeholder = () => {
    return (
        <Flex alignItems='center' flexDirection='column'>
            <Heading as="h2" textAlign='center' mb={2} >Search for books using the Google Books API</Heading>
            <Image
                w='30%' 
                textAlign='center'
                src={readingImage} 
                alt="Reading a book placeholder" 
            />
        </Flex>
    )
}

export default Placeholder