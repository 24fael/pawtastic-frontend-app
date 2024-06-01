import Banner from "./components/banner/Banner";
import ServiceDetails from "./components/servicedetails/ServiceDetails";
import AppointmentForm from './components/appointmentform/AppointmentForm';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";

function App() {
  useEffect(() => {
      AOS.init({
          duration: 1200, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
      });
  }, []);


  return (
    <>
      <header>
        <Banner/>
      </header>
      <main>
        <ServiceDetails/>
        <AppointmentForm/>
      </main>
    </>
  );
}

export default App;
