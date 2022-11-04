import './SearchBar.css';

const SearchBar = (props) => {
    let searchClass = ""
    if (props.mode) {
        searchClass = "dark";
    }
    else {
        searchClass = '';
    }

    const ChangeHandler = (input) => {
        props.onSearch(input.target.value);
    }

    return(
        <div className='searchbar'>
            <input className={searchClass} type="text" placeholder='Search for a country' onChange={({target})=>props.onSearch(target)}></input>
        </div>
    )
}

export default SearchBar;