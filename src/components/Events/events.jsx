
import axios from 'axios'
import './events.css'
import { useEffect, useState } from 'react'

export function Eventpage(){

    const [events, setevents] = useState([]);

    function featchEvents(){
        axios.get('http://127.0.0.1:7000/Events')
        .then(res => setevents(res.data))
        .catch(error => console.error('Error fetching home alerts:', error));
    }
    useEffect(()=>{
        featchEvents()
    },)

    return(
        <div className="eventbody">
            <div className=' bg-info p-2 fs-2 text-center fw-bold rounded-4 mb-3'>Events Section</div>
            {
               events.map( event => <div className='alert alert-danger rounded-3'>
                <b className='d-flex justify-content-between '><span className='bi-pen-fill bg-light p-2 me-2 rounded-3 '> {event.alertTitle}</span> 
                <span><span className='bi-trash-fill bg-light p-2 rounded-3' title='Delete'></span>
                <span className='bi-pen-fill bg-light p-2 rounded-3 ms-2' title='Update'></span></span></b>
                <hr />
                <dd>{event.alertText}</dd>
                <hr />
                <dd>{event.Date}</dd>
               </div>)
            }
        </div>
    )
}