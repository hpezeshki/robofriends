import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div style={{margin:'10px'}}>
         <input type='search' placeholder='Search Robots' onChange={searchChange} className='pa3 ba b--green bg-lightest-blue' />
        </div>
        
    );
}

export default SearchBox;