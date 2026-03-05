import React from 'react';
import { motion } from 'motion/react';
import { Workflow, Bot, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AgenticWorkflows() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-sm text-orange-400 mb-6"
          >
            <Workflow className="w-4 h-4" />
            Agentic Workflows
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
          >
            Automate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">impossible</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            We build custom AI agents that don't just answer questions—they take action, use tools, and complete complex multi-step processes across your business.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#141414] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden h-[400px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1)_0%,transparent_70%)]" />
            <div className="grid grid-cols-2 gap-4 relative z-10 w-full max-w-sm">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 aspect-square">
                  <Bot className="w-8 h-8 text-orange-500" />
                  <div className="w-16 h-2 bg-white/10 rounded-full" />
                  <div className="w-10 h-2 bg-white/5 rounded-full" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-medium mb-6">How it works</h2>
            <div className="space-y-6">
              {[
                { title: 'Process Discovery', desc: 'We analyze your current manual workflows to identify high-ROI automation targets.' },
                { title: 'Agent Architecture', desc: 'We design specialized AI agents equipped with the exact tools and APIs they need.' },
                { title: 'Deployment & Monitoring', desc: 'Agents are deployed into your environment with full observability and human-in-the-loop controls.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 font-mono text-sm">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-zinc-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
