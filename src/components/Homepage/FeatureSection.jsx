import { motion } from "framer-motion";

const features = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: "Fully Customizable",
  desc: "A good design is not only aesthetically pleasing but functional it should be able to solve the problem.",
}));


export default function Features() {
  return (
    <section className="p-24 relative">
      <div className="mb-6 p-6">
        <h2 className="text-3xl  font-bold text-start ">
        Feature Boxes
      </h2>
      <p className="text-gray-400 text-sm ">{features[0].desc}</p>
      </div>
      

      <div className="grid md:grid-cols-3 gap-8  mx-auto px-6">
        {features.map((feature, id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: id * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#18181C] p-6 rounded-xl backdrop-blur-md border  h-371px w-350px border-white/5"
          >
           <div className="flex flex-col items-center justify-center">
             <div className="w-18 h-18 bg-[#222228] flex  items-center justify-center rounded-lg mb-4">
              <div
                  className="w-11 h-12 bg-no-repeat bg-contain bg-center"
                  style={{ backgroundImage: `url(/Group${feature.id}.png)` }}
                />

            </div>
             <h3 className="font-semibold text-lg">{feature.title}</h3>
           </div>
           
            <p className="text-gray-400 text-sm mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
