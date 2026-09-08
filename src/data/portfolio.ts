/**
 * =============================================================================
 *  PORTFOLIO CONTENT — EDIT THIS FILE TO UPDATE THE WEBSITE
 * =============================================================================
 *
 *  This is the ONE place to change anything visible on the website.
 *  No coding knowledge needed — just replace the text inside the quotes.
 *
 *  Tips:
 *    • Keep the quotes (" or `) and the commas (,) where they are.
 *    • Anything inside /* ... *\/ or after // is a comment, ignored by the site.
 *    • To add a new item to a list (e.g. a new project), copy an existing
 *      block including its surrounding { } and the trailing comma, then edit.
 *
 *  After editing, save the file. If the dev server is running it will auto-
 *  reload. To re-deploy, run `npm run build` and `npm start`.
 * =============================================================================
 */

// -----------------------------------------------------------------------------
// 1. PERSONAL / HERO — name, title, intro, top stats, hero CTAs
// -----------------------------------------------------------------------------
export const personal = {
  name: "Muhammad Zargaam Ullah",
  title: "International Sales Leader | ERP & SaaS | Business Development",
  location: "Helsinki, Finland",
  email: "zargaamullah@gmail.com",
  phone: "+358 41 726 7554",
  linkedin: "https://linkedin.com/in/zargaamullah",
  github: "", // optional — leave empty string to hide the GitHub button

  // Initials shown in the header logo box and profile-modal placeholder.
  // Leave as "" to auto-derive from the name (first letter of first two words).
  initials: "",

  // Profile photo shown in the header profile popup.
  // To replace: drop a new square JPG/PNG into  /public/images/profile/  and
  // update the path below.
  // Leave as "" and a navy/steel monogram badge is shown instead.
  profileImage: "/images/profile/profile.jpeg",

  // Resume / CV — file lives in /public/resume/.
  // To replace it: drop your new PDF into /public/resume/ and update the path below.
  // The path is what gets used by the "Download Resume" buttons in the Hero, Contact,
  // and profile popup sections.
  resumeUrl: "/resume/Muhammad_Zargaam_Ullah_Resume.pdf",

  // Tagline shown right below the headline
  tagline:
    "ERP · SaaS · CRM · RPA · ServiceNow · Odoo · SAP · Salesforce — Consultative Seller. Pipeline Builder. Revenue Driver.",

  // The big headline at the top of the page
  heroHeadline: "I Close Enterprise Deals. Across Continents.",

  // The supporting line under the headline
  heroIntro:
    "6 years. 4 regions. $1M+ revenue. 42 certifications. One sales professional who builds pipelines, closes boardroom deals, and scales teams across EMEA, APAC, and North America.",

  // Right-to-work badge shown in hero / contact
  rightToWork:
    "Finland Residence Permit (Type A) — Full Right to Work in the EU",

  // The stat strip under the hero
  stats: [
    { value: "$1M+", label: "Revenue Generated" },
    { value: "6+", label: "Years Experience" },
    { value: "4", label: "Global Regions" },
    { value: "42", label: "Certifications" },
  ],
};

// -----------------------------------------------------------------------------
// 2. ABOUT — short, recruiter-friendly summary
// -----------------------------------------------------------------------------
export const about = {
  heading: "About Me",
  // Each string in the array becomes its own paragraph
  paragraphs: [
    "I am a results-driven international sales leader who has spent the last five years generating revenue and closing enterprise deals across some of the most competitive markets in the world. I started my career building pipelines from scratch on platforms like Upwork, closing $270K in my first year. Since then I have led seven-member sales teams across North America and EMEA, launched new business verticals in the Middle East from zero, represented companies at GITEX Dubai, Bett Asia Kuala Lumpur, TechCrunch, and ISE, and managed accounts at Capital One, RBC, Globe Life, and Tradeweb.",
    "I specialize in selling ERP, SaaS, CRM, and RPA solutions to C-level decision makers. I use SPIN, MEDDIC, and BANT — not because a trainer told me to, but because structured qualification is what separates professionals from people who just send LinkedIn messages and hope. From closing four Odoo ERP deals in my first week at a new role to boosting profitability from 10% to 30% at Royal Cyber by acquiring enterprise clients across the Middle East, my track record speaks for itself.",
    "I hold a Finland Residence Permit Type A with full right to work across the EU. I am currently based in Helsinki and actively building the next chapter of my career with the right company.",
  ],

  // Short proof points (the "Why Me" grid)
  whyMe: [
    {
      title: "I close fast",
      detail:
        "4 Odoo ERP deals closed in my first week in a new role. No ramp time. No excuses.",
    },
    {
      title: "I generate real revenue",
      detail:
        "$1M+ in total revenue generated. $500K in new business at Intagleo. $270K at Rolustech. Closed contracts, not leads.",
    },
    {
      title: "I sell at the C-level",
      detail:
        "I advise CFOs, COOs, and CTOs on operational transformation. I do not pitch features. I solve business problems.",
    },
    {
      title: "I build teams that perform",
      detail:
        "Led 5–7 person sales teams across multiple regions. Trained peers. Built structured outreach systems.",
    },
    {
      title: "I work across industries",
      detail:
        "FinTech, Banking, Insurance, Healthcare, Manufacturing, Retail, Digital Signage, EdTech, Logistics, Supply Chain.",
    },
    {
      title: "I represent brands globally",
      detail:
        "GITEX Dubai 2023. Bett Asia Kuala Lumpur 2024. ISE. DSE. NRF. TechCrunch.",
    },
    {
      title: "Certified at scale",
      detail:
        "42 professional certifications spanning Odoo, ServiceNow, Salesforce, UiPath, AWS, HubSpot and more.",
    },
    {
      title: "I can start tomorrow",
      detail:
        "Finland Residence Permit Type A. Full EU work authorization. No visa delays, no bureaucracy.",
    },
  ],
};

// -----------------------------------------------------------------------------
// 3. SKILLS / TOOLS — grouped categories shown as badges
// -----------------------------------------------------------------------------
export const skills = [
  {
    category: "CRM Platforms",
    items: ["Salesforce", "HubSpot", "SugarCRM", "SuiteCRM", "Odoo CRM"],
  },
  {
    category: "ERP & ITSM",
    items: ["Odoo (Certified v19)", "SAP", "ServiceNow"],
  },
  {
    category: "Lead Generation & Prospecting",
    items: [
      "LinkedIn Sales Navigator",
      "Apollo.io",
      "ZoomInfo",
      "Hunter.io",
      "Lusha",
      "Upwork",
    ],
  },
  {
    category: "Sales Methodologies",
    items: ["SPIN Selling", "MEDDIC", "BANT", "Value Selling", "Challenger"],
  },
  {
    category: "Automation & RPA",
    items: ["UiPath", "ServiceNow Agentic AI", "MuleSoft", "BizTalk", "Apigee"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (Cloud Practitioner)", "IBM Mainframes", "IBM IIB / ACE"],
  },
  {
    category: "Outreach & Communication",
    items: ["Outreach.io", "Reply.io", "Lemlist", "LinkedIn InMail", "Zoom", "Loom"],
  },
  {
    category: "Commercial & Documentation",
    items: ["SOW Drafting", "MSA Negotiation", "RFP Responses", "Pricing Models"],
  },
];

// -----------------------------------------------------------------------------
// 4. WORK EXPERIENCE — companies, dates, achievements
//    To change a company logo: drop a new image into /public/images/logos/ (for
//    official brand logos) or /public/images/companies/ (for photographs), and
//    update the `logo` path below. Leave logo as "" to show a monogram badge.
// -----------------------------------------------------------------------------
export const experience = [
  {
    role: "Direct Sales Manager",
    company: "Odoo",
    period: "Jan 2026 – Apr 2026",
    region: "UAE, Qatar, Bahrain, Kuwait, KSA (Middle East)",
    industries:
      "Manufacturing, Supply Chain, Retail, Logistics, Industrial Trading",
    logo: "/images/logos/odoo.png",
    achievements: [
      "4 ERP deals closed in the first week of starting the role.",
      "12 custom user licenses sold on annual contracts within the first two weeks.",
      "Advised C-level executives on full operational transformation using Odoo ERP.",
      "Ran the full sales cycle from lead generation to contract signature without channel partner reliance.",
      "Applied SPIN, MEDDIC, and BANT to qualify and accelerate deal cycles.",
      "Certified Odoo 19 Functional Consultant with hands-on configuration expertise.",
    ],
    note:
      "Role concluded due to regional department closure driven by geopolitical instability in the Middle East market.",
  },
  {
    role: "Business Development Manager + Senior Account Executive",
    company: "Royal Cyber Inc.",
    period: "Jan 2024 – Dec 2025 (2 years)",
    region: "Chicago, IL (North America), EMEA, Middle East",
    industries:
      "FinTech, Banking, Insurance, Healthcare, Manufacturing, Retail",
    logo: "/images/logos/royal_cyber.jpeg",
    achievements: [
      "$1M in total revenue generated across North American ServiceNow ITSM accounts.",
      "Boosted company profitability from 10% to 30% by acquiring enterprise clients in the Middle East.",
      "Closed a $65K RPA automation deal in the Middle East hospitality sector.",
      "Led and mentored a 7-member sales team across North America and EMEA.",
      "Launched a new SAP vertical in the Middle East — closed Qatar manufacturing client within one month of launch.",
      "Represented the company at Bett Asia 2024 in Kuala Lumpur, generating 9 qualified EdTech opportunities.",
      "Managed key enterprise accounts: Capital One, RBC, Globe Life, PSCU, Tradeweb, Mattress Firm, Discount Tire.",
      "Drove ServiceNow licensing strategy across ITSM, ITOM, ITBM, HRSD, CSM, SecOps, GRC, and App Engine.",
    ],
  },
  {
    role: "Senior Business Development Executive",
    company: "Intagleo Systems",
    period: "Oct 2022 – Jan 2024 (1 year 4 months)",
    region: "Dubai, UAE | North America | Europe | Middle East",
    industries: "Digital Signage, Staff Augmentation, UX/UI Services",
    logo: "/images/logos/intagleo.png",
    achievements: [
      "$500K in new business generated across North America.",
      "Represented company at GITEX Dubai 2023 — stayed on-site for 3 months to win enterprise clients.",
      "Contracted as Product Manager for U.S. client Snap Raise, driving $50K revenue through resource deployment.",
      "Generated high-value C-level meetings at ISE, DSE, NRF, and TechCrunch.",
      "Led a 5-member lead generation team with structured outreach, coaching, and CRM discipline.",
    ],
  },
  {
    role: "Business Development Executive",
    company: "Rolustech",
    period: "Jun 2021 – Oct 2022 (1 year 5 months)",
    region: "San Francisco, CA (Remote) | North America",
    industries: "CRM Implementations: Salesforce, SugarCRM, SuiteCRM",
    logo: "/images/logos/rolustech.jpeg",
    achievements: [
      "$270K in revenue by acquiring 6 new enterprise clients through Upwork.",
      "Consistently set 3–5 meetings per week and converted 2–3 new opportunities monthly.",
      "Led and mentored 3 sales professionals; built structured pipeline and hit monthly targets.",
      "Drafted and negotiated MSAs and SOWs, accelerating deal closures through clear commercial structuring.",
      "Maintained accurate CRM data in Salesforce, streamlining reporting and cross-team collaboration.",
    ],
  },
];

// -----------------------------------------------------------------------------
// 4b. WORKPLACE GALLERY — photographs from companies / events / on-site work.
//     These render as image cards inside the Experience section.
//     To add another: drop a JPG/PNG into /public/images/companies/ and add an
//     entry below. Leave the array empty [] to hide the gallery entirely.
// -----------------------------------------------------------------------------
export const workplaces = [
  {
    image: "/images/companies/companyimage.jpeg",
    caption: "Odoo — Direct Sales, Middle East",
    alt: "On-site at Odoo",
  },
  {
    image: "/images/companies/comapnyimage2.jpeg",
    caption: "Royal Cyber Inc. — North America & EMEA",
    alt: "On-site at Royal Cyber",
  },
];

// -----------------------------------------------------------------------------
// 5. PROJECTS / KEY WINS — flagship deals & initiatives
//    Each card shows: title, short description, tags, optional link.
// -----------------------------------------------------------------------------
export const projects = [
  {
    title: "ServiceNow ITSM Expansion — North America",
    description:
      "Closed $1M+ in ServiceNow ITSM revenue across enterprise accounts including Capital One, RBC, Globe Life, PSCU, and Tradeweb. Drove licensing strategy across ITSM, ITOM, HRSD, CSM, SecOps, GRC, and App Engine.",
    tags: ["ServiceNow", "Enterprise", "North America", "$1M+"],
    link: "",
  },
  {
    title: "SAP Vertical Launch — Middle East",
    description:
      "Built a new SAP go-to-market vertical from zero at Royal Cyber. Closed a Qatar manufacturing client within one month of launch and helped boost company profitability from 10% to 30%.",
    tags: ["SAP", "Middle East", "GTM Launch", "Manufacturing"],
    link: "",
  },
  {
    title: "Odoo ERP Sprint — GCC SME & Mid-Market",
    description:
      "4 ERP deals closed in the first week, 12 user licenses on annual contracts within two weeks. Full-cycle sales — lead gen to contract — across UAE, Qatar, Bahrain, Kuwait, and KSA.",
    tags: ["Odoo ERP", "GCC", "SPIN", "MEDDIC"],
    link: "",
  },
  {
    title: "GITEX Dubai 2023 — On-site Enterprise Acquisition",
    description:
      "Represented Intagleo Systems at GITEX Dubai 2023 and stayed on-site for 3 months post-event to convert booth conversations into signed enterprise contracts.",
    tags: ["GITEX", "EMEA", "Field Sales", "Enterprise"],
    link: "",
  },
  {
    title: "Bett Asia 2024 — EdTech Pipeline (Kuala Lumpur)",
    description:
      "Generated 9 qualified EdTech pipeline opportunities for Royal Cyber in a single event in Kuala Lumpur. Built APAC presence in education technology.",
    tags: ["EdTech", "APAC", "Events"],
    link: "",
  },
  {
    title: "RPA Automation Deal — Middle East Hospitality",
    description:
      "Closed a $65K UiPath RPA automation deal in the Middle East hospitality sector, replacing manual back-office workflows with automated bots.",
    tags: ["UiPath", "RPA", "Hospitality", "$65K"],
    link: "",
  },
  {
    title: "Upwork Enterprise Pipeline — $270K Y1",
    description:
      "Built a pipeline from scratch on Upwork at Rolustech: 6 new enterprise CRM clients, $270K revenue, 3–5 meetings per week converted into 2–3 monthly opportunities.",
    tags: ["Upwork", "Salesforce", "CRM", "Inbound"],
    link: "",
  },
  {
    title: "North America Webinar Series",
    description:
      "Hosted independent lead-generation webinars at Royal Cyber to convert warm leads and train peers on pipeline scaling. Drove inbound demand across North American accounts.",
    tags: ["Webinars", "Demand Gen", "North America"],
    link: "",
  },
];

// -----------------------------------------------------------------------------
// 6. EDUCATION — degrees and academic credentials
// -----------------------------------------------------------------------------
export const education = [
  {
    degree: "Masters in Business Analytics",
    institution:
      "University of Oulu, Finland",
    period: "Aug 2026 – Aug 2028",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution:
      "National University of Computer and Emerging Sciences (FAST-NUCES), Pakistan",
    period: "Aug 2017 – May 2021",
  },
  {
    degree: "Data Analytics Certification",
    institution: "Lahore University of Management Sciences (LUMS)",
    period: "2023",
  },
  {
    degree: "Entrepreneurship Certification",
    institution: "Institute of Business Administration (IBA)",
    period: "2018",
  },
  {
    degree: "A Levels — Computer Science",
    institution: "Lahore Grammar School",
    period: "",
  },
  {
    degree: "O Levels — Computer Science",
    institution: "Lahore Grammar School",
    period: "",
  },
];

// -----------------------------------------------------------------------------
// 7. FEATURED CERTIFICATIONS — top picks shown on the site
// -----------------------------------------------------------------------------
export const certifications = [
  "Odoo 19 Functional Consultant",
  "ServiceNow Agentic AI Executive",
  "Salesforce Business Analyst",
  "UiPath Automation Implementation",
  "UiPath Business Analyst",
  "HubSpot Frictionless Sales",
  "AWS Cloud Practitioner Essentials",
  "Data Analytics (LUMS)",
  "IELTS Band 8 (Academic)",
  "Business Development for Startups & Tech",
  "Lead Generation Machine: Cold Email B2B",
  "B2B Sales & LinkedIn Lead Generation",
];

// -----------------------------------------------------------------------------
// 8. LANGUAGES
// -----------------------------------------------------------------------------
export const languages = [
  { name: "English", level: "Fluent / Professional" },
  { name: "Urdu", level: "Native" },
  { name: "Arabic", level: "Conversational" },
  { name: "Finnish", level: "Conversational" },
  { name: "Swedish", level: "Conversational" },
  { name: "Mandarin Chinese", level: "Basic" },
];

// -----------------------------------------------------------------------------
// 9. NAVIGATION — labels in the top nav bar (matches section IDs in components)
// -----------------------------------------------------------------------------
export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
