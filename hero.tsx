import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import sge11 from "../../imports/sge_11.jfif";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${sge11}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#87a96b]/20 border border-[#87a96b]/40 text-[#87a96b] text-sm tracking-wider uppercase mb-4">
                Est. 1995 - ISO Certified <span className="text-[#87a96b]/80">(Tersertifikasi ISO)</span>
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4 text-white leading-[0.95] tracking-tight">
              Precision<br/>Engineering<br/>Excellence
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 italic">
              Presisi, Rekayasa, Keunggulan
            </p>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-2 max-w-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            World-class manufacturing solutions delivering quality products aligned with international standards
          </motion.p>
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl text-gray-400 leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Solusi manufaktur kelas dunia menghadirkan produk berkualitas sesuai standar internasional
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button size="lg" className="bg-[#87a96b] hover:bg-[#6d8a56] text-white text-lg px-8 py-6 h-auto">
              Start Your Project <span className="text-sm opacity-80">(Mulai Proyek Anda)</span> <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 h-auto transition-all">
              Our Capabilities <span className="text-sm opacity-80">(Kemampuan Kami)</span>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}