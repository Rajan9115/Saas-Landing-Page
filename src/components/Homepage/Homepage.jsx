import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DashboardPreview from "./DashboardPreview";
import Features from "./FeatureSection";
import Navbar from "./Navbar";
import Btn from "../Common/Btn";
import BgGradient from "./BgGradient";
import GuideSection from "./GuideSection";
import CompaniesSection from "./Companiessection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CTASection from "./CTASection";



export default function Hero() {
  return (
    <div>
          {/* section 1 */}
          <div>
            <section className="relative min-h-screen bg-black flex flex-col overflow-hidden">

          {/* === Vertical Grid Background === */}
            <div
              className="
              absolute inset-0
              bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_130px)]
              pointer-events-none"
            />

           {/* bg gradients */}
            <BgGradient top="70px" left="656px" size={64} />
            <BgGradient top="303px" left="1223px" size={96} />
            <BgGradient top="400px" left="122px" size={128} />
           

            <div className="
              absolute
              w-130 h-130
              -top-10 left-[451px]
              rounded-full
              bg-[radial-gradient(circle_at_50%_50%,#222228_0%,rgba(34,34,40,0)_70%)]
              backdrop-blur-xs
            "/>



          {/* === Navbar === */}
          <Navbar/>


          {/* === Hero Content === */}
          <div className="relative z-10 flex flex-col items-center text-center mt-20">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[56px] md:text-[64px] 
                        font-Poppins
                        font-semibold 

                        leading-[1.08] 
                        tracking-[-0.02em] 
                        max-w-4xl"
            >
              Beautiful Landing Page <br />
              Design for You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#9E9E9E] text-lg mt-6 max-w-xl"
            >
              A good design is not only aesthetically pleasing but also
              functional. It should be able to solve the problem.
            </motion.p>

            <div className="mt-10 px-8 py-3">
              <Link to="/signup">
                <Btn name="Signup"/>
              </Link>
            </div>


            {/* === Dashboard Glass Card === */}
            <div className="mt-10">
              <DashboardPreview/>
            </div>

          </div>
        </section>
      </div>


     {/* section 2 */}
    
      <Features/>
 
      <GuideSection />
    
      <CompaniesSection />
 
        <CTASection/>
   
      <ContactSection />
      
      <Footer />
          
    </div>
  );
}
