import Services from "./components/service/Services";
import PartnerEcosystem from "./components/partner-ecosystem/PartnerEcosystem";
import JoinUs from './components/join_us/joinUs';
import IndustryVerticals from './components/Industry Verticals/IndustryVerticals'
import  Footer from './components/footer/footer';
import Whypaves from './components/whypaves/whypaves';

export default function Home() {
  return (
    
    <>
  
    <Whypaves></Whypaves>
    <Services></Services>
    <IndustryVerticals></IndustryVerticals>
    <PartnerEcosystem></PartnerEcosystem>
    <JoinUs></JoinUs>
    <Footer></Footer>
    </>

  );
}
