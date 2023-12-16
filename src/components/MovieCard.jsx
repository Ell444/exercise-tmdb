export default (movies, id, overview, title, vote, poster) => {

    return (<>
        (
        <div key={id} className="movie-card">
            <h1 className="movie-title">{title}</h1>
            <figure className="movie-img">
                <img src={poster} alt="" />
            </figure>
            <p className="movie-overview">{overview}</p>
            <p className="movie-vote">{vote}</p>
        </div>
        )

    </>)
};