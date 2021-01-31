import React from 'react'
import './search-card.scss'

const SearchCard = (props) => {
    return <div className='search-card'>
    <p>{props.animal.attributes.name}</p>
    <img src='https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg' alt='animal image'/>
    </div>
}

export default SearchCard