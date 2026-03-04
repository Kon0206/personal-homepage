import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Terminal, Cpu, Gamepad2, Plane, BookOpen } from "lucide-react";

const learningRecords = [
  {
    title: "AI 学习笔记 - 3.1",
    description: "今日学习心得：深入探索大语言模型的基础原理与应用场景。",
    date: "2026.03.01",
    category: "AIGC",
    image: "https://picsum.photos/seed/ai31/800/600",
    link: "https://wcnm1eau86jl.feishu.cn/wiki/CoyZwcR0UiMfuFkeswTce8ZVnMM"
  },
  {
    title: "AI 学习笔记 - 2.28",
    description: "起步阶段：了解 AI 工具链，尝试构建第一个智能助手原型。",
    date: "2026.02.28",
    category: "AIGC",
    image: "https://picsum.photos/seed/ai228/800/600",
    link: "https://wcnm1eau86jl.feishu.cn/wiki/Ah82wDPtyiJG12kQeBzcLaqZnuh"
  },
  {
    title: "未来探索计划",
    description: "持续更新中... 计划深入研究图像生成与工作流自动化。",
    date: "进行中",
    category: "学习计划",
    image: "https://picsum.photos/seed/future/800/600",
    link: "#"
  }
];

const skills = [
  { name: "AI & 科技", icon: <Cpu className="w-5 h-5" />, items: ["AIGC 探索", "大模型应用", "科技数码", "自动化工具"] },
  { name: "游戏 & 娱乐", icon: <Gamepad2 className="w-5 h-5" />, items: ["主机游戏", "独立游戏", "电影鉴赏", "音乐制作"] },
  { name: "旅行 & 生活", icon: <Plane className="w-5 h-5" />, items: ["摄影记录", "城市漫游", "户外探索", "生活美学"] },
  { name: "学习 & 成长", icon: <BookOpen className="w-5 h-5" />, items: ["飞书笔记", "小红书分享", "持续进化", "知识管理"] }
];

const RedBookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-9 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-red-100 selection:text-red-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-6 py-3 shadow-sm">
          <div className="font-display font-bold text-xl tracking-tight">个人主页</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-red-600 transition-colors">关于我</a>
            <a href="#learning" className="hover:text-red-600 transition-colors">学习记录</a>
            <a href="#skills" className="hover:text-red-600 transition-colors">技能掌握</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">联系方式</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-zinc-100 rounded-full transition-colors" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://xhslink.com/m/9GeBj32vKme" target="_blank" rel="noreferrer" className="p-2 hover:bg-red-50 text-red-600 rounded-full transition-colors" title="小红书">
              <RedBookIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-red-50 text-red-600 rounded-full">
              AI 初学者小白 · 正在进化中
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              你好，我是 <br />
              <span className="text-gradient from-red-600 to-orange-500">AI 学习者</span> <br />
              与 生活探索家。
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-zinc-600 leading-relaxed mb-10">
              我正在开启一段 AI 探索之旅。在这里，我记录学习点滴，
              分享我对科技、游戏、旅行和电影音乐的热爱。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#learning" className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-semibold hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-zinc-200">
                查看飞书笔记
              </a>
              <a href="https://xhslink.com/m/9GeBj32vKme" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-2xl font-semibold hover:bg-zinc-50 transition-all hover:scale-[1.02] active:scale-[0.98]">
                关注小红书
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-40 w-64 h-64 bg-orange-400 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* Learning Records Section */}
      <section id="learning" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">学习记录</h2>
              <p className="text-zinc-500 max-w-md">记录我在技术、设计和个人成长道路上的每一个里程碑。</p>
            </div>
            <div className="text-sm font-bold tracking-widest uppercase text-zinc-400">
              01 / LEARNING
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningRecords.map((record, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => record.link !== "#" && window.open(record.link, "_blank")}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6 bg-zinc-100">
                  <img 
                    src={record.image} 
                    alt={record.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-wider uppercase text-zinc-900 rounded-full shadow-sm">
                      {record.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-zinc-900" />
                    </div>
                  </div>
                </div>
                <div className="text-xs font-medium text-zinc-400 mb-2">{record.date}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{record.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{record.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">技能掌握</h2>
              <p className="text-zinc-500 max-w-md">在不断的实践与学习中，我积累了以下领域的专业知识。</p>
            </div>
            <div className="text-sm font-bold tracking-widest uppercase text-zinc-400">
              02 / SKILLS
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg mb-4">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-zinc-500 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-bold tracking-widest uppercase text-red-600 mb-6">
                个人介绍
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
                AI 初学者，<br />
                也是生活的探索家。
              </h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>
                  你好！我是一名正在努力进化的 AI 初学者。我发现 AI 不仅仅是冰冷的代码，更是开启未来无限可能的钥匙。
                </p>
                <p>
                  除了在飞书记录我的 AI 学习点滴，我还是一个热爱生活的人。我沉迷于硬核科技的魅力，享受在虚拟世界的游戏冒险，
                  也喜欢背起相机去旅行，在电影和音乐中寻找共鸣。
                </p>
                <p>
                  AIGC 对我来说是一个全新的游乐场，我正在尝试将它融入我的所有爱好中。
                  如果你也对这些感兴趣，欢迎在小红书上关注我，我们一起交流！
                </p>
              </div>
              <div className="mt-10 flex gap-12">
                <div>
                  <div className="text-3xl font-bold text-zinc-900">2</div>
                  <div className="text-sm text-zinc-500">飞书深度笔记</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900">AIGC</div>
                  <div className="text-sm text-zinc-500">核心兴趣</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900">∞</div>
                  <div className="text-sm text-zinc-500">持续探索中</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-zinc-100">
                <img 
                  src="https://picsum.photos/seed/me/800/1000" 
                  alt="个人照片" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600 rounded-3xl flex items-center justify-center text-white p-6 shadow-xl">
                <div className="text-center font-bold leading-tight">
                  <div className="text-2xl">2026</div>
                  <div className="text-[10px] uppercase tracking-widest">学习中</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
              期待与你 <br />
              <span className="text-red-400">共同成长</span> 与 交流。
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-12 text-lg">
              无论是技术探讨、项目合作，还是单纯的打个招呼，我都非常欢迎。
              你也可以在小红书上找到我，那里有我更鲜活的一面。
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:841529429@qq.com" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-zinc-900 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all hover:scale-105"
              >
                <Mail className="w-6 h-6" />
                发送邮件
              </a>
              <a 
                href="https://xhslink.com/m/9GeBj32vKme" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white rounded-2xl font-bold text-lg hover:bg-red-700 transition-all hover:scale-105"
              >
                <RedBookIcon className="w-6 h-6" />
                关注小红书
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-zinc-900 border-t border-zinc-800 text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display font-bold text-white text-xl">个人主页</div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-white transition-colors">关于我</a>
            <a href="#learning" className="hover:text-white transition-colors">学习记录</a>
            <a href="#skills" className="hover:text-white transition-colors">技能掌握</a>
          </div>
          <div className="text-sm flex items-center gap-4">
            <span>© 2026 保持热爱，奔赴山海.</span>
            <span className="px-2 py-0.5 bg-zinc-800 rounded text-[10px] uppercase tracking-widest text-zinc-400"></span>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-white shadow-xl rounded-full border border-zinc-100 hover:scale-110 transition-transform z-40 group"
        title="回到顶部"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:-translate-y-1 transition-transform">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </div>
      </button>
    </div>
  );
}
