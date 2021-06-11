import React from 'react';
import api from '../../api.info'; 

const dateBuilder = (d) => {

    const months = [
        'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'
    ];
    
    const days = [
        'Sunday' , 'Monday' , 'Tuesday' , 'Wednseday' , 'Thurdsay' , 'Friday' , 'Saturday' ,'Sunday'
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}


function Location() {
    return (
        <>
            <div className = "location">
                Bhopal, MP , India
            </div>

            <div className = "date">{dateBuilder(new Date())}</div>
        </>
    );
}

export default Location;