// @flow strict

export type CommandType = {|
  name: string,
  url: string,
  searchurl?: string,
  category: string,
|};

export type CommandNames =
  | "fb"
  | "m"
  | "mw"
  | "wa"
  | "waw"
  | "gm"
  | "yt"
  | "gh"
  | "r"
  | "l"
  | "ig"
  | "tw"
  | "n"
  | "pv"
  | "gd"
  | "wiki"
  | "g"
  | "kz"
  | "nhs"
  | "ol"
  | "db"
  | "al"
  | "bl"
  | "DEFAULT";

export type CommandDataTableType = {|
  name: string,
  url: string,
  command: CommandNames,
|};

export type ColumnDataTableType = {|
  data: string,
  title: string,
|};

export const COMMANDS: { [CommandNames]: CommandType } = {
  fb: {
    name: "Facebook",
    url: "https://facebook.com/",
    searchurl: "https://www.facebook.com/search/top/?q=",
    category: "Search",
  },
  mw: {
    name: "Messenger Web",
    url: "https://www.messenger.com/",
    category: "Social Media",
  },
  wa: {
    name: "WhatsApp Desktop App",
    url: "whatsapp://",
    category: "Social Media",
  },
  waw: {
    name: "WhatsApp Web",
    url: "https://web.whatsapp.com/",
    category: "Social Media",
  },
  gm: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0",
    searchurl: "https://mail.google.com/mail/u/",
    category: "Mail",
  },
  gd: {
    name: "Google Drive",
    url: "https://drive.google.com/drive/u/0",
    searchurl: "https://drive.google.com/drive/u/",
    category: "File Storage",
  },
  yt: {
    name: "YouTube",
    url: "https://youtube.com/",
    searchurl: "https://www.youtube.com/results?search_query=",
    category: "Search",
  },
  gh: {
    name: "GitHub",
    url: "https://github.com/",
    searchurl: "https://www.github.com/search?q=",
    category: "Programming",
  },
  r: {
    name: "Reddit",
    url: "https://reddit.com/",
    searchurl: "https://www.reddit.com/search?q=",
    category: "Social Media",
  },
  l: {
    name: "Linkedin",
    url: "https://linkedin.com/",
    category: "Social Media",
  },
  ig: {
    name: "Instagram",
    url: "https://instagram.com/",
    searchurl: "https://instagram.com/",
    category: "Social Media",
  },
  tw: {
    name: "Twitter",
    url: "https://twitter.com/",
    searchurl: "https://twitter.com/search?q=",
    category: "Social Media",
  },
  g: {
    name: "Google",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
    category: "Search",
  },
  n: {
    name: "Netflix",
    url: "https://netflix.com/",
    searchurl: "https://www.netflix.com/search?q=",
    category: "Streaming",
  },
  pv: {
    name: "Amazon Prime Video",
    url: "https://www.amazon.co.uk/Amazon-Video/",
    searchurl: "https://www.amazon.co.uk/s?i=instant-video&ref=nb_sb_noss_2&k=",
    category: "Streaming",
  },
  wiki: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org",
    searchurl: "https://en.wikipedia.org/wiki/",
    category: "Search",
  },
  kz: {
    name: "Kaizen",
    url: "http://kaizenep.com",
    category: "Medical",
  },
  nhs: {
    name: "NHS Portal",
    url: "https://portal.nhs.net",
    category: "Medical",
  },
  ol: {
    name: "Outlook",
    url: "https://outlook.office.com/mail/",
    category: "Mail",
  },
  db: {
    name: "Dribbble",
    url: "https://dribbble.com",
    searchurl: "https://dribbble.com/search/",
    category: "Design",
  },
  al: {
    name: "Anaesthetic Logbook",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfRhY3pg_lgrP_GKhr9ch1ix_32ZdFGDfWdGn7dit01JdAyYw/viewform",
    category: "Medical",
  },
  bl: {
    name: "jchui bunnylol",
    url: "jchui.github.io/bunnylol",
    category: "Search",
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
    category: "Search",
  },
};
