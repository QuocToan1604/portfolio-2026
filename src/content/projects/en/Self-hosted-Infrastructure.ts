import aapanel1 from "../../../assets/images/projects/aapanel/aapanel1.webp";
import aapanel2 from "../../../assets/images/projects/aapanel/aapanel2.webp";

import type { ProjectContent } from "../../types";

export default {
title: "Self-hosted Infrastructure",
theme: "dark",
tags: ["docker", "vps", "cloudflare", "caddy"],
videoBorder: false,
description:
"Hệ thống hạ tầng tự quản lý được triển khai trên VPS với Docker, Caddy và Cloudflare. Dự án phục vụ việc vận hành các website và workflow tự động, đồng thời hỗ trợ quản lý dịch vụ, bảo mật và mở rộng hệ thống một cách linh hoạt.",

components: [
    {
      type: "media",
      props: {
        type: "image",
        src: aapanel1,
        alt: "aaPanel",
        caption: "aaPanel",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: aapanel2,
        alt: "Cloudflare",
        caption: "Cloudflare",
      },
    },
    
   
    
  ],
} as const satisfies ProjectContent;
