export interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  // --- Greetings & General ---
  {
    keywords: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon"],
    response: "Hello! Welcome to Acriotech. How can I help you today? I can answer questions about our software solutions, cloud services, industries we serve, or direct you to our sales team."
  },
  {
    keywords: ["about", "company", "who are you", "mission", "what is acriotech"],
    response: "Acriotech is a global engineering and digital transformation company. We specialize in building robust enterprise software, AI integrations, and highly scalable cloud architectures for ambitious businesses worldwide."
  },
  
  // --- Solutions ---
  {
    keywords: ["solutions", "software", "custom software"],
    response: "Our core solutions include Enterprise Software Development (ERP/CRM), Digital Transformation, Data Analytics, Legacy System Modernization, and Business Process Automation. We build custom platforms from the ground up."
  },
  {
    keywords: ["enterprise", "erp", "crm", "large scale"],
    response: "We build custom Enterprise Software including advanced ERPs and CRMs tailored to your exact workflows, eliminating the bloat of off-the-shelf software."
  },
  {
    keywords: ["ai", "artificial intelligence", "machine learning", "automation", "intelligent", "chatbots"],
    response: "We specialize in AI & Intelligent Automation! We can integrate machine learning models, predictive analytics, custom LLMs, and generative AI into your existing products to streamline operations."
  },
  {
    keywords: ["legacy", "modernize", "old system", "refactor", "update"],
    response: "Our Legacy System Modernization service helps companies transition from outdated, monolithic architectures to modern, scalable microservices without business disruption."
  },
  {
    keywords: ["data", "analytics", "business intelligence", "big data"],
    response: "We build Data Analytics solutions including secure data lakes, real-time streaming pipelines, and custom BI dashboards to help you make data-driven decisions."
  },

  // --- Services ---
  {
    keywords: ["services", "what do you do", "offer", "capabilities"],
    response: "Our engineering services cover the entire software lifecycle: Software Consulting, UI/UX Design, Web & Mobile App Development, Cloud Architecture, DevOps & CI/CD, QA Testing, and Dedicated Engineering Teams."
  },
  {
    keywords: ["web", "frontend", "backend", "react", "node", "nextjs"],
    response: "We develop high-performance web applications using modern stacks like React, Next.js, Node.js, and TypeScript, ensuring your app is fast, secure, and SEO-optimized."
  },
  {
    keywords: ["mobile", "app", "ios", "android", "react native", "flutter"],
    response: "We build native and cross-platform mobile applications for iOS and Android using frameworks like React Native and Flutter, delivering a seamless native experience."
  },
  {
    keywords: ["cloud", "aws", "azure", "gcp", "hosting", "infrastructure", "security"],
    response: "Our Cloud Architecture experts can migrate your infrastructure to AWS, Azure, or GCP. We design highly scalable, zero-trust security cloud topologies."
  },
  {
    keywords: ["devops", "ci/cd", "deployment", "pipeline", "docker", "kubernetes"],
    response: "We implement robust DevOps practices, including automated CI/CD pipelines, Docker containerization, and Kubernetes orchestration for zero-downtime deployments."
  },
  {
    keywords: ["design", "ui", "ux", "interface", "user experience"],
    response: "Our UI/UX design team conducts user research, wireframing, and creates pixel-perfect, highly responsive interfaces tailored to your target audience."
  },
  {
    keywords: ["team", "dedicated", "staff augmentation", "hire developers", "engineers"],
    response: "Need to scale your engineering capacity quickly? We offer Dedicated Development Teams—you can hire our vetted engineers (Node.js, React, Flutter, Rust) to work directly with your internal team."
  },

  // --- Industries ---
  {
    keywords: ["industries", "domain", "sector", "verticals"],
    response: "We have deep engineering expertise across multiple industries: Financial Services (FinTech), Healthcare, Education, Logistics, Manufacturing, Retail, and high-growth Startups."
  },
  {
    keywords: ["finance", "fintech", "banking", "payment"],
    response: "In Financial Services, we build highly secure banking portals, payment gateways, and blockchain solutions with strict regulatory compliance."
  },
  {
    keywords: ["health", "healthcare", "telemedicine", "medical", "hipaa"],
    response: "For Healthcare, we develop telemedicine platforms, patient management systems, and HIPAA-compliant data portals."
  },
  {
    keywords: ["education", "edtech", "lms", "school", "university"],
    response: "In EdTech, we build scalable Learning Management Systems (LMS), virtual classrooms, and student data tracking platforms."
  },
  {
    keywords: ["logistics", "supply chain", "fleet", "shipping"],
    response: "For Logistics, we create real-time fleet tracking, inventory management, and automated supply chain routing software."
  },
  {
    keywords: ["retail", "ecommerce", "shopping", "pos"],
    response: "We build robust e-commerce platforms, omnichannel retail experiences, and point-of-sale (POS) integrations."
  },
  {
    keywords: ["startup", "mvp", "seed", "scale"],
    response: "We love working with startups! We offer rapid MVP development and scalable product architecture to help you go from seed to series A and beyond."
  },

  // --- Company & Contact ---
  {
    keywords: ["contact", "sales", "support", "talk to human", "phone", "email"],
    response: "You can reach our sales team easily! Just switch to the 'Contact Sales' tab in this chat widget to send us a direct message, or email us at sales@acriotech.com."
  },
  {
    keywords: ["career", "job", "hiring", "internship", "work for you"],
    response: "We are currently hiring for Node.js, React, Flutter, Rust, and Go developers (both internships and full-time). Please visit our Careers page (acriotech.com/company/careers) to apply!"
  },
  {
    keywords: ["pricing", "cost", "budget", "quote", "how much"],
    response: "Because our engineering solutions are custom-tailored to your unique business needs, we don't have standard pricing tiers. Please use the 'Contact Sales' tab to give us some details, and we'll provide a custom technical quote."
  },
  {
    keywords: ["location", "address", "headquarters", "where are you", "country", "india"],
    response: "Our Global Headquarters is located at: 14, Shiv Narayan Complex, Virani Circle, Kaliyabid, Bhavnagar - 364002, Gujarat, India."
  },
  {
    keywords: ["partner", "partnership", "affiliate"],
    response: "We partner with major technology providers like AWS, Microsoft, and Google. If you're interested in a strategic partnership, please contact sales@acriotech.com."
  },
  {
    keywords: ["open source", "github"],
    response: "We strongly believe in giving back to the developer community! Check out our Open Source projects under the 'Work' menu to see our public contributions."
  },
  
  // --- Catch-all (for specific tech queries) ---
  {
    keywords: ["rust", "go", "golang", "c++"],
    response: "Yes, we have specialized systems engineers proficient in high-performance languages like Rust and Go for building ultra-fast microservices and robust backends."
  }
];
