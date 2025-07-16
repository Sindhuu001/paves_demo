import Services from "@/app/components/service/Services";
import PartnerEcosystem from "@/app/components/partner-ecosystem/PartnerEcosystem";
import JoinUs from '@/app/components/join_us/joinUs';
import IndustryVerticals from '@/app/components/Industry Verticals/IndustryVerticals'
import  Footer from './components/footer/footer';
import Whypaves from './components/whypaves/whypaves';

export default function Home() {
  return (
    <main>
      <Whypaves></Whypaves>
      <Services />
      <IndustryVerticals/>
      <PartnerEcosystem />
      <JoinUs/>
      <Footer></Footer>
      
 
    </main>

  );
}
