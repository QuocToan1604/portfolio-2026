import phim1 from "../../../assets/images/projects/phim/phim1.webp";
import phim2 from "../../../assets/images/projects/phim/phim2.webp";
import phim3 from "../../../assets/images/projects/phim/phim3.webp";

import type { ProjectContent } from "../../types";

export default {
title: "247Phim",
theme: "dark",
tags: ["html", "css", "javascript"],
videoBorder: false,
live: "https://quoctoan1604.github.io/247quoctoan/",
description:
"Website xem phim trực tuyến được xây dựng bằng HTML, CSS và JavaScript. Đây là dự án đầu tiên đánh dấu hành trình học lập trình web, giúp tôi làm quen với thiết kế giao diện, xử lý dữ liệu và xây dựng các chức năng cơ bản của một website.",

components: [
    {
      type: "media",
      props: {
        type: "image",
        src: phim1,
        alt: "Desktop Layout",
        caption: "Desktop Layout",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: phim2,
        alt: "Desktop Layout",
        caption: "Desktop Layout",
      },
    },
    
    {
      type: "media",
      props: {
        type: "image",
        src: phim3,
        alt: "Mobie Layout",
        caption: "Mobie Layout",
      },
    },
    
  ],
} as const satisfies ProjectContent;
