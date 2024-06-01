import './AppointmentForm.css'
import SecondaryLogo from '../../assets/images/logo-secondary.png'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import moment from 'moment'

export default function AppointmentForm(){
    const [frequency, setFrequency] = useState("")
    const [startDate, setStartDate] = useState("")
    const [days, setDays] = useState([])
    const [times, setTimes] = useState([])
    const [notes, setNotes] = useState("Route preferences, leash location, treats given, etc.")

    function handleFrequencyClick(clickedFrequency){
        setFrequency(clickedFrequency)
    }

    function handleDayClick(clickedDay){
        // Check if the day has already been clicked
        if(days.includes(clickedDay)){
            // Remove previously clicked day from the array
            const filteredDays = days.filter((item) => item !== clickedDay)

            setDays(filteredDays)
        } else {
            setDays([...days, clickedDay])
        }
    }

    function handleTimesClick(clickedTime){
        // Check if the time has already been clicked
        if(times.includes(clickedTime)){
            // Remove previously clicked time from the array
            const filteredTimes = times.filter((item) => item !== clickedTime)

            setTimes(filteredTimes)
        } else {
            setTimes([...times, clickedTime])
        }
    }

    function clearAppointmentForm(){
        setFrequency("")
        setStartDate("")
        setDays([])
        setTimes([])
        setNotes("Write notes for your sitter")
    }

    function handleSubmit(){
        // Validates all required fields
        if( 
            frequency === "" || frequency === null ||
            startDate === "" || startDate === null ||
            days === [] || times === [] 
        ){
            Swal.fire({
                title: 'Missing Input',
                icon: 'info',
                text: 'You have missing or invalid input, please check the form and try again.',
                timer: 4000,
                position: 'bottom-start',
                toast: true,
                showConfirmButton: false
            })
        } else {
            // If everything is valid, send a request to server containing data from the form
            axios.post('http://127.0.0.1:8000/api/appointments', {
                frequency: frequency,
                start_date: startDate,
                days: days.toString(),
                times: times.toString(),
                notes: notes
            })
            .then(response => {
                Swal.fire({
                    title: 'Appointment Scheduled',
                    icon: 'success',
                    text: 'Your appointment has been scheduled!',
                    timer: 4000,
                    position: 'bottom-start',
                    toast: true,
                    showConfirmButton: false
                })
                
                // Clear all fields upon successful submission
                clearAppointmentForm()
            }).catch(error => {
                Swal.fire({
                    title: 'Server-provided Error',
                    icon: 'error',
                    text: error.response.data.message,
                    timer: 4000,
                    position: 'bottom-start',
                    toast: true,
                    showConfirmButton: false
                })
            })
        }
    }

    useEffect(() => {

    }, [days, times])

    return(
        <section className="container-fluid" id='appointment-form'>
            <div className="row">
                <div className="col-12 col-md-5 text-center" id="appointment-form-image">
                    <a href="#banner" className='text-decoration-none'>
                        <h3 className='my-5 text-white'><img src={SecondaryLogo} alt="Secondary Logo" className='img-fluid'/> PAWTASTIC</h3>
                    </a>
                    <div className='text-white'>
                        <h2 className='fw-bold'>All services include:</h2>
                        <ul className='w-50 mx-auto' id='services-list'>
                            <li>A photo update for you along</li>
                            <li>Notifications of sitter arrival</li>
                            <li>Treats for your pet with your</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-7 p-5" id="appointment-form-segment">
                    <h1 className='fw-bold primary-text w-75 mx-auto'>We'll take your dog for a walk. Just tell us when!</h1>
                    <div class="row g-3 w-75 mx-auto mt-4">
                        <div class="col-12 col-md-6 my-auto">
                            <label for="inputEmail4" class="form-label">Frequency</label>
                            <div className="d-flex border form-border rounded p-1">
                                <button className={frequency === "Recurring" ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleFrequencyClick("Recurring")}>Recurring</button>
                        
                                <button className={frequency === "One-Time" ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleFrequencyClick("One-Time")}>One-Time</button>       
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-auto">
                            <label for="inputPassword4" class="form-label">Start Date</label>
                            <input type="date" class="form-control" id="inputPassword4" value={startDate} onChange={(event) => setStartDate(event.target.value)} min={moment().format('YYYY-MM-DD')}/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Days  <small className='fw-light'>Select all that apply</small></label>
                            <div className="d-flex flex-wrap flex-md-nowrap border form-border rounded">
                                <button className={days.includes("Monday") ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleDayClick("Monday")}>Mon</button>
                                <button className={days.includes("Tuesday") ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleDayClick("Tuesday")}>Tue</button>       
                                <button className={days.includes("Wednesday") ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleDayClick("Wednesday")}>Wed</button>       
                                <button className={days.includes("Thursday") ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleDayClick("Thursday")}>Thu</button>       
                                <button className={days.includes("Friday") ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleDayClick("Friday")}>Fri</button>       
                                <button className={days.includes("Saturday") ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleDayClick("Saturday")}>Sat</button>       
                                <button className={days.includes("Sunday") ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleDayClick("Sunday")}>Sun</button>       
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Times <small className='fw-light'>Select all that apply</small></label>
                            <div className="d-flex flex-wrap flex-md-nowrap border form-border rounded">
                                <button className={times.includes("Morning") ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleTimesClick("Morning")}>Morning</button>
                                <button className={times.includes("Afternoon") ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleTimesClick("Afternoon")}>Afternoon</button>       
                                <button className={times.includes("Evening") ? "btn form-button form-button-active w-100" : "btn form-button w-100"} onClick={() => handleTimesClick("Evening")}>Evening</button>     
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="inputCity" class="form-label">Notes for your sitter</label>
                            <textarea className='form-control' rows="3" onChange={(event) => setNotes(event.target.value)}>
                                {notes}
                            </textarea>
                        </div>
                        <div class="col-12 text-center">
                            <button onClick={() => handleSubmit()} className='mt-5 btn btn-dark rounded-5 py-2 px-5 text-white schedule-button-secondary'>
                                Schedule Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}