import Navbar from "./components/Navbar/Navbar";
import Services from "./components/service/Services";
import PartnerEcosystem from "./components/partner-ecosystem/PartnerEcosystem";
import JoinUs from "./components/join_us/joinUs";
import IndustryVerticals from "./components/Industry Verticals/IndustryVerticals";
import Footer from "./components/footer/footer";
import Whypaves from "./components/whypaves/whypaves";
import Hero from './components/hero/hero'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Whypaves></Whypaves>
      <Services></Services>
      <IndustryVerticals></IndustryVerticals>
      <PartnerEcosystem></PartnerEcosystem>
      <JoinUs></JoinUs>
      <Footer></Footer>
      </>
      );
}
