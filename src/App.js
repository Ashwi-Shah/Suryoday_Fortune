import React from 'react';
import HomeSection from './components/HomeSection';
import './index.css';
import ArchitecturalViews from './components/ArchitecturalViews';
import SalientFeatures from './components/SalientFeatures';
import Amenities from './components/Amenities';
import Details from './components/Details';
import FooterDetails from './components/FooterDetails';
import InquiryForm from './components/InquiryForm';
import LastFooter from './components/LastFooter';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <HomeSection />
      <ArchitecturalViews />
      <SalientFeatures />
      <Amenities />
      <Details />
      <FooterDetails />
      <InquiryForm />
      <LastFooter />
    </div>
  );
}

export default App;
