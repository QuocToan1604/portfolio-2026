import n8n1 from "../../../assets/images/projects/n8n/n8n1.webp";
import n8n2 from "../../../assets/images/projects/n8n/n8n2.webp";
import n8n3 from "../../../assets/images/projects/n8n/n8n3.webp";
import n8n4 from "../../../assets/images/projects/n8n/n8n4.webp";

import type { ProjectContent } from "../../types";

export default {
title: "AI Content System (n8n)",
theme: "dark",
tags: ["n8n", "openai", "wordpress", "automation", "claude"],
videoBorder: false,
description:
"Hệ thống workflow AI được xây dựng với n8n nhằm tự động hóa việc xử lý nội dung và dữ liệu. Tích hợp OpenAI, Claude và WordPress để tạo, xử lý và xuất bản nội dung một cách hoàn toàn tự động.",

components: [
    {
      type: "media",
      props: {
        type: "image",
        src: n8n1,
        alt: "Homepage",
        caption: "Homepage",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: n8n2,
        alt: "Post",
        caption: "Post",
      },
    },
    
    {
      type: "media",
      props: {
        type: "image",
        src: n8n3,
        alt: "Publish Pin",
        caption: "Publish Pin",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: n8n4,
        alt: "n8n",
        caption: "n8n",
      },
    },
  ],
} as const satisfies ProjectContent;
