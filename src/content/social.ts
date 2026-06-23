export const social = [
  { url: "mailto:huynhquoctoan@gmail.com", name: "mail" },
  { url: "https://github.com/QuocToan1604", name: "github" },
  { url: "https://www.facebook.com/huynhquoctoan1642002", name: "facebook" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "facebook" }[];
