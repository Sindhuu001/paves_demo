import Services from "@/app/components/service/Services";
import PartnerEcosystem from "@/app/components/partner-ecosystem/PartnerEcosystem";
import JoinUs from '@/app/components/join_us/joinUs';
import IndustryVerticals from '@/app/components/Industry Verticals/IndustryVerticals'


export default function Home() {
  return (
    <main>
      <Services />
      <PartnerEcosystem />
      <JoinUs/>
      <IndustryVerticals/>
    </main>
  );
}
