import { FaSearch } from "react-icons/fa";

function Header(props) {

    return (
        <header className="App-header">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="¿Qué personaje estás buscando?" value={props.inputSearch} onChange={props.handleIputChange} />
                <button type="submit" className="searchButton" onClick={props.handleSearch}>
                    <FaSearch/>
                </button>
            </div>
        </header>
    )

}

export default Header;