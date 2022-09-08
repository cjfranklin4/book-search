const ResultContainer = ({results}) => {
    <div>
        <h2>Results for: inquiry</h2>
        {results.map((book, index) => (
            <div key={index}>
                {/* <img src={book.imageLinks.thumbnail} alt={book.title} /> */}
                <h3>{book.title}</h3>
                {/* <p>{book.description}</p>

                <a href={book.infoLink}>
                    <button>Read More</button>
                </a> */}
            </div>
        ))}
    </div>
}

export default ResultContainer;