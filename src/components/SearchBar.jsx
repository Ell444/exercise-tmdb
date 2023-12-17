import { useState } from "react"
import "./SearchBar.scss"
import { BiCameraMovie } from "react-icons/bi";

export default ({ onSearch }) => {

    const [value, setValue] = useState('');


    return (<>
        <div className="input-container">
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)} />
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