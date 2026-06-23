export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"

  | "wordpress"
  | "n8n"
  | "openai"
  | "seo"

  | "pinterest"
  | "automation"

  | "docker"
  | "vps"
  | "cloudflare"
  | "caddy"

  | "claude"

  | "typescript"
  | "vue"
  | "mongodb"

  | "ai"
;

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  wordpress: "WordPress",
n8n: "n8n",
openai: "OpenAI",
seo: "SEO",

pinterest: "Pinterest",
automation: "Automation",

docker: "Docker",
vps: "VPS",
cloudflare: "Cloudflare",
caddy: "Caddy",

claude: "Claude",

typescript: "TypeScript",
vue: "Vue.js",

mongodb: "MongoDB",

ai: "AI",
} as const satisfies Record<TagVariant, string>;
