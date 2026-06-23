import thumbnailWebite from "../../../assets/thumbnails/website.webp";
import thumbnailn8n from "../../../assets/thumbnails/n8n.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailAapanel from "../../../assets/thumbnails/aapanel.webp";
import thumbnail247Phim from "../../../assets/thumbnails/247phim.webp";
import thumbnailPinterest from "../../../assets/thumbnails/pinterest.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ThePigskinNews",
    slug: "thepigskinnews",
    thumbnail: thumbnailWebite,
    description: "Tự động thu thập và đăng tin NFL bằng AI.",
  },
  {
    title: "Pinterest Automation",
    slug: "pinterest",
    thumbnail: thumbnailPinterest,
    description: "Tự động tạo và đăng nội dung lên Pinterest.",
  },
  {
    title: "AI Content System (n8n)",
    slug: "n8n",
    thumbnail: thumbnailn8n,
    description: "Xây dựng các workflow AI và tự động hóa bằng n8n.",
  },
  {
    title: "247Phim",
    slug: "247phim",
    thumbnail: thumbnail247Phim,
    description: "Website xem phim trực tuyến, dự án đầu tiên đánh dấu hành trình học lập trình web.",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
  {
    title: "Self-hosted Infrastructure",
    slug: "Self-hosted-Infrastructure",
    thumbnail: thumbnailAapanel,
    description: "Triển khai và quản lý các dịch vụ tự lưu trữ bằng Docker và VPS.",
  },
] as const satisfies ProjectPreview[];
