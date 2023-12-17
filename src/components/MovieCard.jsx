import './MovieCard.scss'
import { BsFillStarFill } from "react-icons/bs";

export default ({ title, overview, vote, poster }) => {
    return (<>
        {<div className="movies">
            <div className="movie-cards">
                <figure className="img-container">
                    <img src={poster} alt={`${title} poster`} />
                </figure>
                <h3 className="movie-title">{title}</h3>
                <p className="movie-overview">{overview}</p>
                <p className="vote"> <BsFillStarFill /> {vote}</p>
            </div>
        </div>}
    </>)
}