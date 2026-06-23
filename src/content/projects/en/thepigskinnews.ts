// import thepigskin0 from "../../../assets/images/projects/thepigskinnews/thepigskinnews-0.webp";
// import thepigskin1 from "../../../assets/images/projects/thepigskinnews/thepigskinnews-1.webp";
// import thepigskin2 from "../../../assets/images/projects/thepigskinnews/thepigskinnews-2.webp";
// import thepigskin3 from "../../../assets/images/projects/thepigskinnews/thepigskinnews-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "The Pigskin News",
  theme: "dark",
  tags: ["wordpress", "n8n", "openai", "seo", "claude"],
  videoBorder: false,
  live: "https://thepigskinnews.com",
  description:
    "Nền tảng tin tức NFL tự động sử dụng AI để thu thập, viết lại và đăng tải bài viết. Hệ thống được xây dựng với WordPress, n8n và OpenAI nhằm tạo ra các nội dung được tối ưu SEO một cách hoàn toàn tự động.",

    components: [],
//   components: [
//     {
//       type: "media",
//       props: {
//         type: "image",
//         // src: thepigskin0,
//         alt: "Homepage",
//         caption: "Homepage",
//       },
//     },
//     {
//       type: "media",
//       props: {
//         type: "image",
//         // src: thepigskin1,
//         alt: "Latest News",
//         caption: "Latest News",
//       },
//     },
//     {
//       type: "media",
//       props: {
//         type: "image",
//         // src: thepigskin2,
//         alt: "Popular News",
//         caption: "Popular News",
//       },
//     },
//     {
//       type: "media",
//       props: {
//         type: "image",
//         // src: thepigskin3,
//         alt: "Mobile Layout",
//         caption: "Mobile Layout",
//       },
//     },
//   ],
} as const satisfies ProjectContent;