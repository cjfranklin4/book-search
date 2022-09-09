const ResultContainer = ({results}) => {
   return (
    <div>
        <h2>Results for: inquiry</h2>
        {results.map((book, index) => (
            <div key={index}>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.description}</p>

                <a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer">
                    <button>Read More</button>
                </a>
            </div>
        ))}
    </div>
   ) 
}

export default ResultContainer;