import { motion } from "framer-motion";

const skills = {
  Languages: [
    { name: "Arabic", level: 85 },
    { name: "English", level: 70 },
    { name: "Indonesian", level: 85 },
  ],

  Science: [
    { name: "Biology", level: 70 },
    { name: "Chemistry", level: 75 },
    { name: "Physics", level: 75 },
    { name: "Mathematics", level: 85 },
  ],
};

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>

      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Academic Skills
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & Knowledge
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* LANGUAGES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🗣️</span>
              </div>

              <h3 className="font-display text-xl font-bold">
                Languages
              </h3>
            </div>

            <div className="space-y-4">
              {skills.Languages.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>

          </motion.div>

          {/* SCIENCE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🔬</span>
              </div>

              <h3 className="font-display text-xl font-bold">
                Science
              </h3>
            </div>

            <div className="space-y-4">
              {skills.Science.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}