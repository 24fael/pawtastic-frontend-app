import './ServiceDetails.css'
import Muffin from '../../assets/images/muffinbg.png'
import Peep from '../../assets/images/peepbg.png'
import Natasha from '../../assets/images/natashabg.png'
import Marlon from '../../assets/images/marlonbg.png'

export default function ServiceDetails(){
    return(
        <section className="container p-5 my-5" id='service-details'>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1 className='primary-text fw-bold'>Expert care for your furry, feathery, or scaley friend</h1>
                    <p className='primary-text'>We know how stressful it is to leave your pets at home alone. We’re a team of experienced animal caregivers, well connected to local veterinarians. Trust to us to love them like our own, and to keep them safe and happy till you’re home.</p>
                    <a href="#appointment-form">
                        <button className='mt-5 btn btn-dark rounded-5 py-2 px-5 text-white schedule-button-secondary'>
                            Schedule a visit
                        </button>
                    </a>
                </div>
                <div className="col-12 col-md-6 mt-5 mt-md-0">
                    <div className="row">
                        <div className="col col-md-6" id='muffin'>
                            <img src={Muffin} className="m-3 img-fluid" alt="Muffin"/>
                        </div>
                        <div className="col col-md-6" id='peep'>
                            <img src={Peep} className="m-3 img-fluid" alt="Peep"/>
                        </div>
                        <div className="col col-md-6" id='natasha'>
                            <img src={Natasha} className="m-3 img-fluid" alt="Natasha"/>
                        </div>
                        <div className="col col-md-6" id='marlon'>
                            <img src={Marlon} className="m-3 img-fluid" alt="Marlon"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}