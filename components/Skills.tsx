import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Server, Database, Sparkles, Cpu, Wrench, Code2 } from "lucide-react";

const INITIAL_SKILLS = [
  { 
    id: "frontend",
    title: "Frontend", 
    icon: Layout, 
    span: "md:col-span-3",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
    ]
  },
  { 
    id: "backend",
    title: "Backend & APIs", 
    icon: Server, 
    span: "md:col-span-3",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
      { name: "Supabase", level: "Advanced" },
      { name: "Firebase", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
    ]
  },
  { 
    id: "ai",
    title: "Automation & AI", 
    icon: Cpu, 
    span: "md:col-span-3",
    skills: [
      { name: "n8n", level: "Advanced" },
      { name: "Groq API", level: "Advanced" },
      { name: "Claude API", level: "Advanced" },
      { name: "Gemini", level: "Advanced" },
      { name: "AI-assisted dev", level: "Advanced" },
    ]
  },
  { 
    id: "tools",
    title: "Tools", 
    icon: Wrench, 
    span: "md:col-span-3",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vercel", level: "Advanced" },
      { name: "Netlify", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "Postman", level: "Intermediate" },
      { name: "Google Sheets", level: "Advanced" },
    ]
  },
];

const familiarWith = ["Python", "PHP", "React Native", "Expo", "MySQL", "Docker", "AWS", "Laravel"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  const [items, setItems] = useState(INITIAL_SKILLS);

  const moveItem = (fromIndex: number, toIndex: number) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <section id="skills" className="py-16 md:py-32 flex justify-center" suppressHydrationWarning>
      <div className="w-full max-w-[860px] px-6" suppressHydrationWarning>
        <header className="mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-bold">Expertise</span>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 gap-4"
          suppressHydrationWarning
        >
          {/* Frontend - Medium Card (3 cols) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 group relative p-8 rounded-3xl bg-background border border-white/10 overflow-hidden transition-all duration-500 hover:border-white"
            suppressHydrationWarning
          >
            <div className="relative z-10" suppressHydrationWarning>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-background border border-white/10 flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-background transition-all duration-500">
                  <Layout size={20} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-medium text-text-primary">Frontend</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {INITIAL_SKILLS[0].skills.map((skill) => (
                  <span key={skill.name} className="px-3 py-1.5 rounded-lg bg-background border border-white/10 text-[11px] font-medium text-text-primary/50 hover:text-text-primary hover:border-white transition-all">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend - Medium Card (3 cols) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 group p-8 rounded-3xl bg-background border border-white/10 transition-all duration-500 hover:border-white"
            suppressHydrationWarning
          >
            <div className="flex items-center gap-4 mb-8" suppressHydrationWarning>
              <div className="w-10 h-10 rounded-xl bg-background border border-white/10 flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-background transition-all duration-500">
                <Server size={20} strokeWidth={2} />
              </div>
              <h3 className="text-sm font-medium text-text-primary">Backend & APIs</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {INITIAL_SKILLS[1].skills.map((skill) => (
                <span key={skill.name} className="px-3 py-1.5 rounded-lg bg-background border border-white/10 text-[11px] font-medium text-text-primary/50 hover:text-text-primary hover:border-white transition-all">
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Automation & AI - Medium Card (3 cols) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 group p-8 rounded-3xl bg-background border border-white/10 transition-all duration-500 hover:border-white"
            suppressHydrationWarning
          >
            <div className="flex items-center gap-4 mb-8" suppressHydrationWarning>
              <div className="w-10 h-10 rounded-xl bg-background border border-white/10 flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-background transition-all duration-500">
                <Cpu size={20} strokeWidth={2} />
              </div>
              <h3 className="text-sm font-medium text-text-primary">Automation & AI</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {INITIAL_SKILLS[2].skills.map((skill) => (
                <span key={skill.name} className="px-3 py-1.5 rounded-lg bg-background border border-white/10 text-[11px] font-medium text-text-primary/50 hover:text-text-primary hover:border-white transition-all">
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools - Medium Card (3 cols) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 group p-8 rounded-3xl bg-background border border-white/10 transition-all duration-500 hover:border-white"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-background border border-white/10 flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-background transition-all duration-500">
                <Wrench size={20} strokeWidth={2} />
              </div>
              <h3 className="text-sm font-medium text-text-primary">Tools</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {INITIAL_SKILLS[3].skills.map((skill) => (
                <span key={skill.name} className="px-3 py-1.5 rounded-lg bg-background border border-white/10 text-[11px] font-medium text-text-primary/50 hover:text-text-primary hover:border-white transition-all">
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Learning - Full Width (6 cols) */}
          <motion.div
            layout
            variants={itemVariants}
            className="md:col-span-6 p-8 rounded-3xl border-2 border-dashed border-white/10 bg-white/[0.01] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-primary">
                  <Sparkles size={18} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">Familiar With</h3>
                  <p className="text-[11px] text-text-primary/50 mt-0.5 font-medium uppercase tracking-wider">Prior Experience</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:justify-end">
                {familiarWith.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-xl bg-background border border-white/10 text-[12px] font-medium text-text-primary/70 shadow-sm hover:border-white transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


