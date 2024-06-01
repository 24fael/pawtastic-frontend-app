import './Banner.css'
import Logo from '../../assets/images/logo.png'

export default function Banner(){
    return(
        <section id="banner">
            <div className='container p-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h3>
                            <a href="#" className='text-decoration-none text-white'><img src={Logo} alt="Logo" className='img-fluid'/> PAWTASTIC</a>
                        </h3>
                    </div>
                    <div>
                        <a href="#service-details" className='me-4 text-decoration-none text-white fw-light'>About us</a>
                        <a href="#appointment-form" className='text-decoration-none text-white fw-light'>Schedule a visit</a>
                    </div>
                </div>
                <div className='row mt-5 mt-md-3'>
                    <div className="col-12 col-md-4 offset-md-8">
                        <h1 className='fw-bold text-white'>We care for your furry little loved ones while</h1>
                        <a href="#appointment-form" className='text-decoration-none'>
                            <button className='mt-5 btn btn-light rounded-5 py-2 px-5 schedule-button-primary'>
                                Schedule a visit
                            </button>
                        </a>
                    </div>
                </div>
                <div className="row d-none d-md-block mt-5 pt-5">
                    <div className="col-12">
                        <small className='text-white'>Ozzie in Brooklyn</small>
                    </div>
                </div>
            </div>
        </section>
    )
}