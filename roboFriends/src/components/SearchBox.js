import React from 'react';

const SearchBox = (props) => {

    return (
        <div className = 'pa2' >
            <input className = 'pa3 ba bg-lightest-blue'
                   type='search' 
                   placeholder='search robots'
                   onChange = {props.searchChange}
                   aria-label ="Search Robots"
            />
        </div>
    )
}

export default SearchBox;
