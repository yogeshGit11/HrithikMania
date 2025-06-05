import { useState } from 'react';
import axios from 'axios';

export default function FindMovies() {
    const [movieName, setMovieName] = useState('');
    const [movieData, setMovieData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .get(`${process.env.REACT_APP_API_BASE_URL}/api/movies/?search=${movieName}`)
            .then((response) => {
                setMovieData(response.data);
            })
            .catch((err) => {
                console.error('Error fetching movie:', err);
            });
    };

    const isMovieUnavailable = (source) =>
        !source || source === 'http://127.0.0.1:8000/media/not%20available' || source === 'http://127.0.0.1:8000/media/False';

    return (
        <div className="container-fluid findmovie" style={{ backgroundImage: `url('red.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="row">
                <h1 className="text-light fw-bold text-center bg-dark mt-2 rounded-pill">
                    EXPLORE HRITIK ROSHAN MOVIES
                </h1>

                <div className="col-sm-4 col-xl-4 offset-4">
                    <form className="mt-1" onSubmit={handleSubmit}>
                        <label className="h5 fw-bold text-light">Enter the Movie Name:</label>
                        <input
                            type="text"
                            name="movieName"
                            className="form-control"
                            placeholder="Enter the Hritik Roshan movie name"
                            onChange={(e) => setMovieName(e.target.value)}
                            required
                        />
                        <input type="submit" value="Search" className="btn btn-info mt-1 offset-5" />
                    </form>
                </div>
            </div>

            {movieData && movieData.length > 0 ? (
                <div className="row">
                    <div className="col-sm-9">
                        <table className="table mt-2 table-bordered">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th>Movie Name</th>
                                    <th>Movie Director</th>
                                    <th>Movie Casting</th>
                                    <th>Release Date</th>
                                    <th>Box Office Collection</th>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: '#62d97f' }}>
                                <tr>
                                    <td>{movieData[0].name}</td>
                                    <td>{movieData[0].director}</td>
                                    <td>{movieData[0].starring}</td>
                                    <td>{movieData[0].release_date}</td>
                                    <td>{movieData[0].box_office_collection}</td>
                                </tr>
                            </tbody>
                        </table>

                        <strong className="fw-bold h5 text-light">Story of {movieData[0].name}:</strong>
                        <div className="story p-2 poster">
                            {movieData[0].story}
                        </div>

                        {isMovieUnavailable(movieData[0].source_file) ? (
                            <button type="button" disabled className="btn btn-warning mt-4 fw-bold">
                                Movie Unavailable!
                            </button>
                        ) : (
                            <div className="mt-4">
                                <a href={movieData[0].source_file} download>
                                    <button type="button" className="btn btn-warning fw-bold">
                                        <i className="fa-solid fa-cloud-arrow-down"></i> Download Movie
                                    </button>
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="col-sm-3 mt-2">
                        <h5 className="fw-bold text-light">Movie Poster:</h5>
                        <img
                            src={movieData[0].poster}
                            alt="poster"
                            height="400"
                            width="300"
                            className="border border-light border-3"
                        />
                    </div>
                </div>
            ) : (
                <div className="col-sm-10 mt-4">
                    <div className="alert alert-dark text-center h1 offset-3">
                        <span style={{ fontFamily: 'console' }}>ENTER VALID MOVIE NAME TO SHOW DETAIL</span>
                    </div>
                </div>
            )}
        </div>
    );
}