import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-orange-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            The Future of Automation, Media, & Hardware
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-medium tracking-tighter leading-[1.1] mb-8"
          >
            Scale your vision with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">agentic</span> precision.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
          >
            We build intelligent workflows, craft stunning video marketing assets, and provide sovereign hardware nodes for the decentralized future.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link to="/workflows" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Explore Workflows <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/nodes" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              View Hardware
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
