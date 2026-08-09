export type VerificationStatus = "verified" | "website-taxonomy" | "unknown" | "review-required";

export type SourceReference = {
  path: string;
  note: string;
};

export type WithProvenance = {
  status: VerificationStatus;
  sources: readonly SourceReference[];
};

export type Organization = WithProvenance & {
  name: string;
  abbreviation: string;
  tagline: string;
  foundedYear: number;
  community: string;
  communityChinese: string;
  officialDomain: string;
};

export type Commissioner = WithProvenance & {
  id: string;
  name: string;
  chineseName: string;
  title: string;
  ordinal: number;
  term: string;
  incumbent: boolean;
};

export type Person = WithProvenance & {
  id: string;
  name: string;
  chineseName: string;
  publicRole: string;
  publicationApproved: boolean;
  notes: string;
};

export type Season = WithProvenance & {
  id: string;
  label: string;
  kind: "founding-era" | "academic-year";
};

export type MediaAsset = WithProvenance & {
  sourcePath: string;
  kind: "photo" | "video" | "poster" | "other";
  publicationApproved: boolean;
};

export type EventRecord = WithProvenance & {
  id: string;
  date: string;
  seasonId: string;
  title: string | null;
  eventType: string | null;
  location: string | null;
  format: readonly string[] | null;
  result: string | null;
  honors: readonly string[] | null;
  participantStatus: "not-established" | "source-present-review-required";
  unknownFields: readonly string[];
  media: readonly MediaAsset[];
};

export type DocumentRecord = WithProvenance & {
  id: string;
  title: string;
  classification: "public-rules-candidate" | "public-code-candidate" | "internal-governance" | "private";
  publicPublicationApproved: boolean;
  notes: string;
};

export type SocialChannel = WithProvenance & {
  platform: "Instagram" | "Xiaohongshu" | "Douyin" | "Bilibili";
  url: string | null;
};

export type PublicMedia = WithProvenance & {
  id: string;
  eventId: string;
  date: string;
  seasonId: string;
  publicPath: string;
  sourcePath: string;
  alt: string;
  kind: "photo" | "video-still" | "poster-page";
  width: number;
  height: number;
};

const externalSourceRoot = "../";

const source = (path: string, note: string): SourceReference => ({
  path: `${externalSourceRoot}${path}`,
  note,
});

const unknownEventFields = [
  "event title",
  "event type",
  "participants",
  "location",
  "result",
  "honors",
  "publication approval",
] as const;

export const zmbaContent = {
  organization: {
    name: "ZhongMei Basketball Association",
    abbreviation: "ZMBA",
    tagline: "Not just a game. It's a legacy.",
    foundedYear: 2023,
    community: "Jinling High School ZhongMei",
    communityChinese: "金陵中美",
    officialDomain: "https://zmbasketball.org",
    status: "verified",
    sources: [source("project brief", "Confirmed project information")],
  } satisfies Organization,

  commissioners: [
    {
      id: "henry-wu",
      name: "Henry Wu",
      chineseName: "吴昱贤",
      title: "Founder & 1st Commissioner",
      ordinal: 1,
      term: "May 2023-May 2025",
      incumbent: false,
      status: "verified",
      sources: [source("ZMBA图鉴.docx", "Leadership profile")],
    },
    {
      id: "lucian",
      name: "Lucian",
      chineseName: "鲁东言",
      title: "2nd Commissioner",
      ordinal: 2,
      term: "May 2025-present",
      incumbent: true,
      status: "verified",
      sources: [
        source("project brief", "Confirmed incumbent commissioner"),
        source("ZMBA图鉴.docx", "Leadership profile"),
      ],
    },
  ] satisfies readonly Commissioner[],

  seasons: [
    {
      id: "founding-era",
      label: "Founding Era / Inaugural Events",
      kind: "founding-era",
      status: "website-taxonomy",
      sources: [source("project brief", "Website taxonomy; not a historical formal-season claim")],
    },
    {
      id: "2023-24",
      label: "2023-24",
      kind: "academic-year",
      status: "website-taxonomy",
      sources: [source("project brief", "Website taxonomy; not a historical formal-season claim")],
    },
    {
      id: "2024-25",
      label: "2024-25",
      kind: "academic-year",
      status: "website-taxonomy",
      sources: [source("project brief", "Website taxonomy; not a historical formal-season claim")],
    },
    {
      id: "2025-26",
      label: "2025-26",
      kind: "academic-year",
      status: "website-taxonomy",
      sources: [source("project brief", "Website taxonomy; not a historical formal-season claim")],
    },
    {
      id: "2026-27",
      label: "2026-27",
      kind: "academic-year",
      status: "website-taxonomy",
      sources: [source("project brief", "Website taxonomy; not a historical formal-season claim")],
    },
  ] satisfies readonly Season[],

  events: [
    {
      id: "2023-05-25",
      date: "2023-05-25",
      seasonId: "founding-era",
      title: null,
      eventType: null,
      location: null,
      format: null,
      result: null,
      honors: null,
      participantStatus: "not-established",
      unknownFields: unknownEventFields,
      status: "unknown",
      sources: [source("2023.5.25.JPG", "Dated photograph filename")],
      media: [{ sourcePath: "2023.5.25.JPG", kind: "photo", publicationApproved: false, status: "review-required", sources: [source("2023.5.25.JPG", "Original source asset")] }],
    },
    {
      id: "2023-06-01",
      date: "2023-06-01",
      seasonId: "founding-era",
      title: null,
      eventType: null,
      location: null,
      format: null,
      result: null,
      honors: null,
      participantStatus: "not-established",
      unknownFields: unknownEventFields,
      status: "unknown",
      sources: [source("2023.6.1.JPG", "Dated photograph filename"), source("2023.6.1罚球.MP4", "Filename references free throws only")],
      media: [
        { sourcePath: "2023.6.1.JPG", kind: "photo", publicationApproved: false, status: "review-required", sources: [source("2023.6.1.JPG", "Original source asset")] },
        { sourcePath: "2023.6.1罚球.MP4", kind: "video", publicationApproved: false, status: "review-required", sources: [source("2023.6.1罚球.MP4", "Original source asset")] },
      ],
    },
    {
      id: "2024-05-24",
      date: "2024-05-24",
      seasonId: "2023-24",
      title: null,
      eventType: null,
      location: null,
      format: null,
      result: null,
      honors: null,
      participantStatus: "not-established",
      unknownFields: unknownEventFields,
      status: "unknown",
      sources: [source("2024.5.24/", "Dated source folder")],
      media: [
        { sourcePath: "2024.5.24/38C4AD68DB704DD301E635A9A7258D21.PNG", kind: "photo", publicationApproved: false, status: "review-required", sources: [source("2024.5.24/38C4AD68DB704DD301E635A9A7258D21.PNG", "Original source asset")] },
        { sourcePath: "2024.5.24/F64E5C8258A277CFEDF1DC881BB8DC03.PNG", kind: "photo", publicationApproved: false, status: "review-required", sources: [source("2024.5.24/F64E5C8258A277CFEDF1DC881BB8DC03.PNG", "Original source asset")] },
      ],
    },
    {
      id: "2025-04-03",
      date: "2025-04-03",
      seasonId: "2024-25",
      title: null,
      eventType: null,
      location: null,
      format: null,
      result: null,
      honors: null,
      participantStatus: "not-established",
      unknownFields: unknownEventFields,
      status: "unknown",
      sources: [source("2025.4.3/", "Dated source folder")],
      media: [
        { sourcePath: "2025.4.3/2b21a5db5641b2432c8faf00e248ddc9.mp4", kind: "video", publicationApproved: false, status: "review-required", sources: [source("2025.4.3/2b21a5db5641b2432c8faf00e248ddc9.mp4", "Original source asset")] },
        { sourcePath: "2025.4.3/3ca4f81123f955aeeff4044f5a709c43.mp4", kind: "video", publicationApproved: false, status: "review-required", sources: [source("2025.4.3/3ca4f81123f955aeeff4044f5a709c43.mp4", "Original source asset")] },
        { sourcePath: "2025.4.3/50b830b71791eb2f3ccb873eca954513.mp4", kind: "video", publicationApproved: false, status: "review-required", sources: [source("2025.4.3/50b830b71791eb2f3ccb873eca954513.mp4", "Original source asset")] },
        { sourcePath: "2025.4.3/6a5dc1aa29b67c650d3eca170fa69201.mp4", kind: "video", publicationApproved: false, status: "review-required", sources: [source("2025.4.3/6a5dc1aa29b67c650d3eca170fa69201.mp4", "Original source asset")] },
        { sourcePath: "2025.4.3/Background.png", kind: "other", publicationApproved: false, status: "review-required", sources: [source("2025.4.3/Background.png", "Original source asset")]}],
    },
    {
      id: "2025-04-27",
      date: "2025-04-27",
      seasonId: "2024-25",
      title: null,
      eventType: null,
      location: null,
      format: null,
      result: null,
      honors: null,
      participantStatus: "not-established",
      unknownFields: unknownEventFields,
      status: "unknown",
      sources: [source("2025.4.27/", "Dated source folder")],
      media: [
        "IMG_20250427_170102.jpg", "IMG_20250427_170128.jpg", "IMG_20250427_170230.jpg", "IMG_20250427_170336.jpg", "image_1745754263743.png", "image_1745754269919.jpg", "image_1745754303731.jpg", "image_1745754347725.jpg", "image_1745754360872.jpg", "image_1745754401672.jpg", "image_1745754420551.jpg",
      ].map((file) => ({ sourcePath: `2025.4.27/${file}`, kind: "photo" as const, publicationApproved: false, status: "review-required" as const, sources: [source(`2025.4.27/${file}`, "Original source asset")] })),
    },
    {
      id: "2025-05-29-all-star",
      date: "2025-05-29",
      seasonId: "2024-25",
      title: "2025 ZMB All-Star Game",
      eventType: "All-Star Game",
      location: "Northern Basketball Court",
      format: ["Five 10-minute periods", "Boys' 5v5", "Girls' 3v3"],
      result: null,
      honors: null,
      participantStatus: "source-present-review-required",
      unknownFields: ["final result", "awards/honors", "participant publication approval", "photo publication approval"],
      status: "verified",
      sources: [source("2025.5.29 All-Star/All Star Poster.pdf", "Event poster")],
      media: [
        { sourcePath: "2025.5.29 All-Star/All Star Poster.pdf", kind: "poster", publicationApproved: false, status: "review-required", sources: [source("2025.5.29 All-Star/All Star Poster.pdf", "Original source asset")] },
        { sourcePath: "2025.5.29 All-Star/IMG_7498.JPG", kind: "photo", publicationApproved: false, status: "review-required", sources: [source("2025.5.29 All-Star/IMG_7498.JPG", "Original source asset")] },
        { sourcePath: "2025.5.29 All-Star/IMG_7499.JPG", kind: "photo", publicationApproved: false, status: "review-required", sources: [source("2025.5.29 All-Star/IMG_7499.JPG", "Original source asset")] },
        { sourcePath: "2025.5.29 All-Star/c667932f4cfd32fd550a039c386e6b4c.HEIC", kind: "photo", publicationApproved: false, status: "review-required", sources: [source("2025.5.29 All-Star/c667932f4cfd32fd550a039c386e6b4c.HEIC", "Original source asset")] },
      ],
    },
    {
      id: "2025-10-09",
      date: "2025-10-09",
      seasonId: "2025-26",
      title: null,
      eventType: null,
      location: null,
      format: null,
      result: null,
      honors: null,
      participantStatus: "not-established",
      unknownFields: unknownEventFields,
      status: "unknown",
      sources: [source("2025.10.9/", "Dated source folder")],
      media: ["IMG_7108.JPG", "IMG_7180.JPG", "IMG_7183.JPG", "IMG_7185.JPG", "IMG_7232.JPG"].map((file) => ({ sourcePath: `2025.10.9/${file}`, kind: "photo" as const, publicationApproved: false, status: "review-required" as const, sources: [source(`2025.10.9/${file}`, "Original source asset")] })),
    },
  ] satisfies readonly EventRecord[],

  documents: [
    { id: "2025-26-rulebook", title: "ZMBA 25-26赛季规则手册", classification: "public-rules-candidate", publicPublicationApproved: false, notes: "Confirm current status and web-publication approval before publishing.", status: "review-required", sources: [source("ZMBA 25-26赛季规则手册.docx", "Bilingual competition rulebook")] },
    { id: "2025-code-of-conduct", title: "ZMBA群规行为准则(2025 Edition)", classification: "public-code-candidate", publicPublicationApproved: false, notes: "Review administrative enforcement details before publishing.", status: "review-required", sources: [source("ZMBA群规行为准则(2025 Edition).docx", "Community conduct document")] },
    { id: "2025-commissioner-handbook", title: "Handbook for ZMBA Commissioner (2025 Edition)", classification: "internal-governance", publicPublicationApproved: false, notes: "Internal governance guidance; contains sensitive account-operation material.", status: "review-required", sources: [source("Handbook for ZMBA Commissioner (2025 Edition).docx", "Internal commissioner handbook")] },
    { id: "birthdays", title: "Birthdays.xlsx", classification: "private", publicPublicationApproved: false, notes: "Personal birthday roster; never expose in public content without explicit instruction and appropriate consent.", status: "review-required", sources: [source("Birthdays.xlsx", "Private workbook")] },
  ] satisfies readonly DocumentRecord[],

  people: [
    {
      id: "henry-wu",
      name: "Henry Wu",
      chineseName: "吴昱贤",
      publicRole: "Founder & 1st Commissioner",
      publicationApproved: true,
      notes: "Leadership role is confirmed. Do not add player profile, position, biography, or evaluation without explicit approval.",
      status: "verified",
      sources: [source("ZMBA图鉴.docx", "Leadership profile")],
    },
    {
      id: "lucian",
      name: "Lucian",
      chineseName: "鲁东言",
      publicRole: "Incumbent 2nd Commissioner",
      publicationApproved: true,
      notes: "Leadership role is confirmed. Do not add player profile, position, biography, or evaluation without explicit approval.",
      status: "verified",
      sources: [source("project brief", "Confirmed incumbent commissioner")],
    },
  ] satisfies readonly Person[],

  socialChannels: [
    "Instagram", "Xiaohongshu", "Douyin", "Bilibili",
  ].map((platform): SocialChannel => ({ platform: platform as SocialChannel["platform"], url: null, status: "verified", sources: [source("project brief", "Confirmed platform; URL not supplied")] })),
} as const;

/**
 * A flat media index for future Media pages. Assets remain in their original
 * source-material directory and are all review-required until approved.
 */
export const media = zmbaContent.events.flatMap((event) =>
  event.media.map((asset) => ({ ...asset, eventId: event.id })),
);

export const publicMedia = [
  {
    id: "2023-05-25-court",
    eventId: "2023-05-25",
    date: "2023-05-25",
    seasonId: "founding-era",
    publicPath: "/images/events/2023-05-25-court.jpg",
    sourcePath: "2023.5.25.JPG",
    alt: "ZMBA group photograph on the outdoor basketball court, dated May 25, 2023.",
    kind: "photo",
    width: 1600,
    height: 1200,
    status: "verified",
    sources: [source("2023.5.25.JPG", "Web-sized derivative approved for this public implementation")],
  },
  {
    id: "2023-06-01-free-throw",
    eventId: "2023-06-01",
    date: "2023-06-01",
    seasonId: "founding-era",
    publicPath: "/images/events/2023-06-01-free-throw.jpg",
    sourcePath: "2023.6.1罚球.MP4",
    alt: "Video still of a free throw on the outdoor basketball court, dated June 1, 2023.",
    kind: "video-still",
    width: 1280,
    height: 720,
    status: "verified",
    sources: [source("2023.6.1罚球.MP4", "One-second video still approved for this public implementation")],
  },
  {
    id: "2024-05-24-court",
    eventId: "2024-05-24",
    date: "2024-05-24",
    seasonId: "2023-24",
    publicPath: "/images/events/2024-05-24-court.jpg",
    sourcePath: "2024.5.24/38C4AD68DB704DD301E635A9A7258D21.PNG",
    alt: "ZMBA group photograph beside the outdoor court, dated May 24, 2024.",
    kind: "photo",
    width: 1600,
    height: 1200,
    status: "verified",
    sources: [source("2024.5.24/38C4AD68DB704DD301E635A9A7258D21.PNG", "Web-sized derivative approved for this public implementation")],
  },
  {
    id: "2025-04-03-court",
    eventId: "2025-04-03",
    date: "2025-04-03",
    seasonId: "2024-25",
    publicPath: "/images/events/2025-04-03-court.jpg",
    sourcePath: "2025.4.3/2b21a5db5641b2432c8faf00e248ddc9.mp4",
    alt: "Video still of basketball activity on the outdoor courts, dated April 3, 2025.",
    kind: "video-still",
    width: 1280,
    height: 720,
    status: "verified",
    sources: [source("2025.4.3/2b21a5db5641b2432c8faf00e248ddc9.mp4", "One-second video still approved for this public implementation")],
  },
  {
    id: "2025-04-27-court",
    eventId: "2025-04-27",
    date: "2025-04-27",
    seasonId: "2024-25",
    publicPath: "/images/events/2025-04-27-court.jpg",
    sourcePath: "2025.4.27/IMG_20250427_170230.jpg",
    alt: "Basketball play on the outdoor court, dated April 27, 2025.",
    kind: "photo",
    width: 1800,
    height: 1350,
    status: "verified",
    sources: [source("2025.4.27/IMG_20250427_170230.jpg", "Web-sized derivative approved for this public implementation")],
  },
  {
    id: "2025-05-29-all-star-poster",
    eventId: "2025-05-29-all-star",
    date: "2025-05-29",
    seasonId: "2024-25",
    publicPath: "/images/events/2025-05-29-all-star-poster.jpg",
    sourcePath: "2025.5.29 All-Star/All Star Poster.pdf#page=1",
    alt: "First page of the 2025 ZMB All-Star Game poster.",
    kind: "poster-page",
    width: 1000,
    height: 1254,
    status: "verified",
    sources: [source("2025.5.29 All-Star/All Star Poster.pdf", "Public event-information page rendered as a web image; roster pages omitted")],
  },
  {
    id: "2025-10-09-court-01",
    eventId: "2025-10-09",
    date: "2025-10-09",
    seasonId: "2025-26",
    publicPath: "/images/events/2025-10-09-court-01.jpg",
    sourcePath: "2025.10.9/IMG_7185.JPG",
    alt: "Basketball play on the outdoor court, dated October 9, 2025.",
    kind: "photo",
    width: 1200,
    height: 1800,
    status: "verified",
    sources: [source("2025.10.9/IMG_7185.JPG", "Web-sized derivative approved for this public implementation")],
  },
  {
    id: "2025-10-09-court-02",
    eventId: "2025-10-09",
    date: "2025-10-09",
    seasonId: "2025-26",
    publicPath: "/images/events/2025-10-09-court-02.jpg",
    sourcePath: "2025.10.9/IMG_7183.JPG",
    alt: "A player with the ball on the outdoor court, dated October 9, 2025.",
    kind: "photo",
    width: 1200,
    height: 1800,
    status: "verified",
    sources: [source("2025.10.9/IMG_7183.JPG", "Web-sized derivative approved for this public implementation")],
  },
] satisfies readonly PublicMedia[];
