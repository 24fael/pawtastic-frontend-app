import Banner from "./components/banner/Banner";
import ServiceDetails from "./components/servicedetails/ServiceDetails";
import AppointmentForm from './components/appointmentform/AppointmentForm';
function App() {
  return (
    <>
      <main>
        <Banner/>
        <ServiceDetails/>
        <AppointmentForm/>
      </main>
    </>
  );
}

export default App;
