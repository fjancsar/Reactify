﻿import React from 'react';

const Event = (props) => {

    const { id, img, band, genre, date, venue, url } = props.event;
    return (

        <tr>
            <td className="first-event-column"><img className="event-img" src={img} alt="event" /></td>
            <td>{band}</td>
            <td>
                {genre.map((genreItem, i) => [
                    i > 0 && ", ",
                    <span key={i}>{genreItem}</span>
                ])}
            </td>
            <td>{date}</td>
            <td>{venue}</td>
            <td><a class="event-link" href={url} target="_blank">Buy Ticket</a></td>
        </tr>

    )
}

export default Event;