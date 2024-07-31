import React from 'react'
import './Card.css'
import Tag from './Tag'

const Card = (props) => {
    let tags = undefined
    if (props.tags) {
        tags = props.tags.map((tag) => <Tag key={tag} tag={tag} />)

    }

    return (
        <div className="card">
            <div className="card-left">
                <h3 className='year'>{props.year}</h3>
            </div>
            <div className="card-right">
                {props.qualification &&
                    <h3>
                        <b>{props.qualification}</b>  {props.branch && <span className="dot"></span>} {props.branch}
                    </h3>
                }
                {props.institute && <h3 >{props.institute}</h3>}
                {props.projectName && <h3><b>{props.projectName}</b></h3>}
                {props.role && <h3>{props.role}</h3>}
                {props.description && <p>{props.description}</p>}
                {props.tags &&
                    <div className='tags'>{tags}</div>
                }
            </div>

        </div>
    )
}

export default Card