import { Box, Select } from '@chakra-ui/react'

const FilterBooks = ({setOrderRes, setResType, handleSubmit, orderRes, resType}) =>{

    const handleSearch = (e) =>{
        setOrderRes(e.target.value)
        handleSubmit(bookSearch, orderRes, resType)
    }

    return(
        <Box>
        <Select placeholder='Sort By' onChange={handleSearch}>
            <option value="relevance">Relevance</option>
            <option value="Newest">Newest Published</option>
        </Select>
        <Select placeholder='Document Type' onChange={e => setResType(e.target.value)}>
            <option value="all">All</option>
            <option value="book">Book</option>
            <option value="newspaper">Newspaper</option>
            <option value="magazine">Magazine</option>
        </Select>
        </Box>
    )
}

export default FilterBooks