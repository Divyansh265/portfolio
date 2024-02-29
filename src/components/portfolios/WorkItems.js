import React from 'react'

function WorkItems({ item }) {
    return (
        <div className='work__card' key={item.id}>
            <img className='work__img' src={item.image} alt=''></img>
            <h3 className='work__title'>{item.title}</h3>
            <a className='work__button' href={item.link}>
                Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
            </a>
        </div>
    )
}

export default WorkItems
