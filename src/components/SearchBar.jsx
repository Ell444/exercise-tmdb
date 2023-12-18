import { useState } from "react"
import "./SearchBar.scss"
import { BiCameraMovie } from "react-icons/bi";

export default ({ onSearch }) => {

    const [value, setValue] = useState('');
    const [selectValue, setSelectValue] = useState('movie')

    return (<>
        <div className="input-container">
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)} />
            <select
                value={selectValue}
                onChange={e => setSelectValue(e.target.value)}
            >
                <option value="movie">Movie</option>
                <option value="tv">Tv-series</option>
                <option value="person">Person</option>
            </select>

            <button
                className="search-btn"
                onClick={() => {
                    onSearch(value)
                    setValue('')
                }}
            > <BiCameraMovie /> Search movies </button>
        </div>

    </>)
}