import pin1 from "../../../assets/images/projects/pinterest/pin1.webp";
import pin2 from "../../../assets/images/projects/pinterest/pin2.webp";
import pin3 from "../../../assets/images/projects/pinterest/pin3.webp";
import pin4 from "../../../assets/images/projects/pinterest/pin4.webp";


import type { ProjectContent } from "../../types";

export default {
title: "Pinterest Automation",
theme: "dark",
tags: ["n8n", "pinterest", "openai", "automation"],
videoBorder: false,
live: "https://www.pinterest.com/apartmentdecordaily/",
description:
"Hệ thống tự động hóa Pinterest sử dụng AI để tạo và đăng nội dung định kỳ. Được xây dựng với n8n và OpenAI nhằm phát triển lưu lượng truy cập tự nhiên cho các dự án Affiliate và SEO.",

 components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pin1,
        alt: "Homepage",
        caption: "Homepage",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pin2,
        alt: "Post",
        caption: "Post",
      },
    },
    
    {
      type: "media",
      props: {
        type: "image",
        src: pin3,
        alt: "Publish Pin",
        caption: "Publish Pin",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pin4,
        alt: "n8n",
        caption: "n8n",
      },
    },
  ],
} as const satisfies ProjectContent;
