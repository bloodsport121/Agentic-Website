import React from 'react';
import { motion } from 'motion/react';
import { Video, Home, Cuboid, PlayCircle } from 'lucide-react';

export default function VideoMarketing() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-sm text-orange-400 mb-6"
          >
            <Video className="w-4 h-4" />
            Creative Studio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
          >
            Visuals that <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">convert</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            From high-performance ad creatives to cinematic real estate flythroughs generated entirely from standard photos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Custom Video Ads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#141414] rounded-[2rem] overflow-hidden border border-white/5 group"
          >
            <div className="h-48 bg-zinc-900 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <PlayCircle className="w-12 h-12 text-white/80 relative z-10 group-hover:text-orange-500 transition-colors" />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <Video className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-medium mb-3">Custom Video Ads</h3>
              <p className="text-zinc-400 mb-6">Data-driven video creatives designed specifically for social media platforms to maximize ROAS and engagement.</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• UGC-style content</li>
                <li>• Motion graphics</li>
                <li>• A/B tested hooks</li>
              </ul>
            </div>
          </motion.div>

          {/* Cinematic Real Estate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#141414] rounded-[2rem] overflow-hidden border border-white/5 group"
          >
            <div className="h-48 bg-zinc-900 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <PlayCircle className="w-12 h-12 text-white/80 relative z-10 group-hover:text-orange-500 transition-colors" />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-medium mb-3">Cinematic Real Estate</h3>
              <p className="text-zinc-400 mb-6">Send us standard property photos, and we'll generate breathtaking drone flythroughs and cinematic 3D walkthroughs.</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• No on-site filming needed</li>
                <li>• 4K resolution output</li>
                <li>• 24-hour turnaround</li>
              </ul>
            </div>
          </motion.div>

          {/* 3D Graphics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#141414] rounded-[2rem] overflow-hidden border border-white/5 group"
          >
            <div className="h-48 bg-zinc-900 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <PlayCircle className="w-12 h-12 text-white/80 relative z-10 group-hover:text-orange-500 transition-colors" />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <Cuboid className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-medium mb-3">3D Graphics</h3>
              <p className="text-zinc-400 mb-6">Transform flat 2D images into immersive 3D graphics, product renders, and marketing assets.</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• Product visualizations</li>
                <li>• 3D logo animations</li>
                <li>• Interactive web assets</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
