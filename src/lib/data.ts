export const siteConfig = {
  name: "Holmes Center for the Arts",
  shortName: "HCA",
  tagline: "The Center Stage",
  mission:
    "To provide educational and performing opportunities in the arts for individuals of all economic and social backgrounds within a wholesome, family-oriented atmosphere and to enrich our community through those artistic experiences.",
  address: "5200 State Route 39, Millersburg, OH 44654",
  phone: "330-473-2879",
  email: "info@holmescenterforthearts.org",
  website: "https://www.holmescenterforthearts.org",
  registerUrl: "https://app.jackrabbitclass.com/regv2.asp?id=553118",
  ticketsUrl: "https://search.seatyourself.biz/webstore/webstore.html?domain=holmescenterforthearts",
  merchandiseUrl: "https://6moneys.com/collections/holmes-center-for-the-arts",
};

export const stats = [
  { value: 3938, label: "Tickets Sold", suffix: "+" },
  { value: 633, label: "Students Served", suffix: "+" },
  { value: 42, label: "Classes Per Week", suffix: "" },
  { value: 21, label: "Live Performances", suffix: "" },
];

export const programs = [
  {
    id: "dance",
    title: "Dance",
    description:
      "Technique, performance, artistry.",
    image: "/images/dance4.jpeg",
    href: "/dance",
    accent: "#4B80A0",
    stats: "42 classes/week",
  },
  {
    id: "music",
    title: "Music",
    description:
      "Private lessons with experienced instructors.",
    image: "/images/Timothy%20Frye%20photo.jpg",
    href: "/music",
    accent: "#C9A87A",
    stats: "4 instructors",
  },
  {
    id: "art",
    title: "Visual Arts",
    description:
      "Studios, workshops, and hands-on making.",
    image: "/images/image0%20(8).jpeg",
    href: "/art",
    accent: "#ACD3EA",
    stats: "Year-round classes",
  },
  {
    id: "theatre",
    title: "Theatre",
    description:
      "Productions, auditions, and stage experience.",
    image: "/images/Nutcraker_2018_PRINT-90.jpg",
    href: "/theatre",
    accent: "#32566B",
    stats: "Summer & year-round",
  },
];

export const danceStyles = [
  {
    id: "ballet",
    title: "Ballet",
    description:
      "Classical technique from Pre-Ballet through advanced Company level. HCA alumni have gone on to perform with City Ballet of Cleveland, Ballet 5:8, Ohio Northern University, and Kent State.",
    image: "/images/IMG_9648.jpg",
    levels: [
      "Pre-Ballet (ages 5–6): Thu 5:00–5:45 PM",
      "Ballet 1 (ages 7–8): Mon 4:00–5:00 PM",
      "Ballet 2 (ages 8–9): Thu 6:45–7:45 PM",
      "Ballet 3: Mon 5:00–6:15 PM & Thu 5:30–6:45 PM",
      "Ballet 4 (Intermediate/Advanced): Mon 5:00–6:30 PM",
      "Ballet 5 Junior Company: Sat 10:00–11:30 AM",
      "Ballet 6 (Advanced): Mon/Tue/Thu + Pointe",
      "Teen/Adult Ballet: 7:15–8:15 PM",
    ],
  },
  {
    id: "jazz-tap",
    title: "Jazz, Tap & Contemporary",
    description:
      "Dynamic classes in jazz, tap, and contemporary styles for intermediate through advanced students.",
    image: "/images/Tap%20Dancer.jpg",
    levels: [
      "Jazz 1 (advanced intermediate): Tue 6:30–7:30 PM",
      "Jazz 2/3 (advanced): Tue 4:30–5:30 PM",
      "Jazz 2/Contemporary: Tue 4:30–5:30 PM",
      "Beginning Tap: Mon 6:15–7:15 PM",
      "Adult Tap (15+): Mon 7:15–8:15 PM",
      "Intermediate/Advanced Contemporary: Wed 4:15–5:15 PM",
    ],
  },
  {
    id: "tumbling",
    title: "Tumbling",
    description:
      "Progressive tumbling program from Pre-K through advanced skills including aerial and layout.",
    image: "/images/20210609_152923_edited.jpg",
    levels: [
      "Pre-K Tumbling (ages 4–6): Sat 11:00 AM–12:00 PM",
      "Tumbling 1 (beginners, age 5+): Thu 4:30–5:30 PM",
      "Tumbling 2 (limbers, running cartwheel): Fri 5:30–6:30 PM",
      "Tumbling 3 (walkovers, front handsprings): Mon 5:15–6:15 PM",
      "Tumbling 4 (back handsprings, aerials): Mon 6:15–7:15 PM",
      "Tumbling 5/6 (layouts, tucks): Mon 4:00–5:15 PM",
    ],
  },
  {
    id: "preschool",
    title: "Preschool Dance",
    description:
      "Creative movement classes for ages 3–5. No experience required — just a love of movement and fun!",
    image: "/images/IMG_0460.jpg",
    levels: [
      "Creative Movement (Miss Ella): Wed 4:00–4:45 PM",
      "Creative Movement (Miss Shannon): Thu 10:00–10:45 AM",
    ],
  },
  {
    id: "elite",
    title: "Elite Competition Dance",
    description:
      "HCA Elite is our competitive dance team that has competed in Nashville, Las Vegas, and Orlando.",
    image: "/images/IMG_9951_edited.jpg",
    levels: [
      "Mini/Junior Elite (ages 7–11): Wed 5:15–6:15 PM",
      "Teen/Senior Elite (ages 12–18): Tue 5:30–6:30 PM",
    ],
  },
  {
    id: "adult",
    title: "Adult Fitness",
    description:
      "Club Fit / PowerFit Cardio — high-energy dance fitness classes for adults. Monthly membership, cancel anytime.",
    image: "/images/IMG_1076.jpg",
    levels: [
      "PowerFit Cardio: Mon/Wed/Fri 9–10 AM",
      "Saturday PowerFit: Sat 8–9 AM",
      "Monthly membership: $31/month",
    ],
  },
];

export const danceInstructors = [
  {
    id: "abi-besse",
    name: "Abi Besse",
    role: "Dance Director",
    disciplines: ["Ballet", "Direction"],
    image: "/images/Abi%20Besse%20Headshot_JPG.jpg",
    bio: "Abi trained at Light of the World Ballet in New York and has served as a guest artist with the City Ballet of Cleveland. As HCA's Dance Director, she brings professional artistry and a nurturing approach to every class.",
  },
  {
    id: "holley-johnson",
    name: "Holley Johnson",
    role: "Ballet Instructor",
    disciplines: ["Ballet"],
    image: "/images/HolleyJohnson.jpg",
    bio: "Holley holds a BFA from the University of Utah and has danced professionally with the Atlanta Ballet and Lexington Ballet. She has performed at the Royal Festival Hall in London and the Fox Theater in Atlanta. One of HCA's founding instructors.",
  },
  {
    id: "shannon-olsen",
    name: "Shannon Olsen",
    role: "Executive Director & Dance Instructor",
    disciplines: ["Dance", "Direction"],
    image: "/images/faith-through-fotos_gapcon-headshot-24.jpg",
    bio: "Shannon founded Take A Bow dance studio in Georgia and brings over 30 years of teaching experience to HCA. She serves as Executive Director while continuing to teach and inspire students of all ages.",
  },
  {
    id: "kori-bower",
    name: "Kori Bower",
    role: "Tumbling & Dance Instructor",
    disciplines: ["Tumbling", "Jazz", "Contemporary"],
    image: "/images/Kori.jpg",
    bio: "Kori has competed in Nashville, Las Vegas, and Orlando. She has choreographed HCA's Nutcracker, Newsies, and Lion King Jr. productions. A dynamic instructor with a passion for technique and performance.",
  },
  {
    id: "emma-yoder",
    name: "Emma Yoder",
    role: "Tumbling & Beginning Ballet",
    disciplines: ["Tumbling", "Ballet"],
    image: "/images/IMG_7228.jpg",
    bio: "Emma is an HCA alum who performed the Sugar Plum Fairy and Snow Queen roles and attended the Cincinnati Ballet summer intensive program. She brings firsthand experience of HCA's training to her students.",
  },
  {
    id: "ella-sommers",
    name: "Ella Sommers",
    role: "Ballet Instructor",
    disciplines: ["Ballet"],
    image: "/images/Ella9.jpg",
    bio: "Ella is an HCA alum with 13 years of training who attended Ballet Magnificat summer intensives. She teaches Pre-Ballet and Ballet 3 with grace and expertise.",
  },
  {
    id: "taryn-grassbaugh",
    name: "Taryn Grassbaugh",
    role: "Ballet Instructor",
    disciplines: ["Ballet", "Pointe"],
    image: "/images/P27A0906-Edit.jpg",
    bio: "Taryn studied ballet at the University of Cincinnati's College-Conservatory of Music. A returning HCA alum, she teaches advanced ballet and pointe technique.",
  },
  {
    id: "chloe-mast",
    name: "Chloe Mast",
    role: "Ballet & Jazz/Contemporary",
    disciplines: ["Ballet", "Jazz", "Contemporary"],
    image: "/images/IMG_8116.jpg",
    bio: "Chloe teaches Ballet 4/5/6 and Jazz/Contemporary. She brings technical precision and artistic expression to her classes.",
  },
];

export const musicInstructors = [
  {
    id: "daniel-bolton",
    name: "Daniel Bolton",
    role: "Strings Instructor",
    disciplines: ["Violin", "Cello", "Viola"],
    image: "/images/DSC08686_JPG.jpg",
    bio: "Daniel holds a B.S. in Violin Performance from Otterbein College and has performed with the Ohio Light Opera and Westerville Symphony Orchestra. He teaches violin, cello, and viola for all skill levels.",
    pricing: "$25 / 30 min",
  },
  {
    id: "timothy-frye",
    name: "Timothy Frye",
    role: "Vocal Instructor & Choir Director",
    disciplines: ["Voice", "Choir"],
    image: "/images/Timothy%20Frye%20photo.jpg",
    bio: "Timothy holds a BM from Bowling Green State University and an MM from the University of Arizona. An international barbershop quartet champion with over 40 years of professional experience.",
    pricing: "$30 / 30 min",
  },
  {
    id: "susan-weaver",
    name: "Susan Weaver",
    role: "Piano Instructor",
    disciplines: ["Piano"],
    image: "/images/IMG_3530_JPG.jpg",
    bio: "Susan holds degrees in Sacred Music and Piano Performance, with a career spanning Colorado, Iowa, and Ohio. She teaches piano for all ages and levels.",
    pricing: "Contact for pricing",
  },
  {
    id: "brad-olsen",
    name: "Brad Olsen",
    role: "Guitar Instructor",
    disciplines: ["Guitar"],
    image: "/images/Brad%20Olsen.jpg",
    bio: "Brad is a member of the Dove Award-nominated Christian rock band The Waiting and has called Holmes County home for over 12 years. He brings professional musicianship and a love of teaching to his guitar students.",
    pricing: "$25 / 30 min",
  },
];

export const artInstructors = [
  {
    id: "cathie-lynch",
    name: "Cathie Lynch",
    role: "Art Instructor & Outreach Director",
    disciplines: ["Drawing", "Painting"],
    image: "/images/IMG_7228.jpg",
    bio: "Cathie holds a BFA from Cleveland State University and brings 31 years of K-12 teaching experience to HCA. As Outreach Director, she also leads community arts initiatives throughout Holmes County.",
  },
  {
    id: "mary-gilmore",
    name: "Mary Gilmore",
    role: "Ceramics & Installation Art",
    disciplines: ["Ceramics", "Installation", "Performance Art"],
    image: "/images/image2%20(1).jpeg",
    bio: "Mary holds an MFA from East Tennessee State University. She spearheaded acclaimed art walks in Millersburg and brings a contemporary studio practice to HCA's ceramics program.",
  },
  {
    id: "eric-yoder",
    name: "Eric Yoder",
    role: "Ceramics & Pottery",
    disciplines: ["Ceramics", "Pottery", "Wheel-Throwing"],
    image: "/images/image0%20(8).jpeg",
    bio: "Eric studied at Eastern Mennonite and James Madison Universities and opened Yoder's Pottery in Holmes County. He teaches wheel-throwing and hand-building in HCA's ceramics studio.",
  },
  {
    id: "diane-graebner",
    name: "Diane Graebner",
    role: "Landscape Painting",
    disciplines: ["Painting", "Landscape"],
    image: "/images/IMG_0258.jpg",
    bio: "Award-winning landscape painter Diane Graebner teaches seasonal painting workshops at HCA, helping students capture the beauty of Ohio's countryside.",
  },
  {
    id: "karen-drongowski",
    name: "Karen Drongowski",
    role: "Fine Arts Instructor",
    disciplines: ["Drawing", "Painting", "Art Therapy"],
    image: "/images/IMG_1614.jpg",
    bio: "Karen holds a BFA from Wittenberg University and taught K-12 in Kent and Dublin. She also provides art therapy sessions at local retirement homes.",
  },
];

export const adminStaff = [
  {
    name: "Shannon Olsen",
    role: "Executive Director",
    email: "shannon@holmescenterforthearts.org",
    image: "/images/faith-through-fotos_gapcon-headshot-24.jpg",
  },
  {
    name: "Abi Besse",
    role: "Dance Director",
    email: "Abi@holmescenterforthearts.org",
    image: "/images/Abi%20Besse%20Headshot_JPG.jpg",
  },
  {
    name: "Cathie Lynch",
    role: "Outreach Director & Art Instructor",
    email: "cathie@holmescenterforthearts.org",
    image: "/images/IMG_7228.jpg",
  },
  {
    name: "Lydia Johnson",
    role: "Marketing Director",
    email: "marketing@holmescenterforthearts.org",
    image: "/images/DSC_0058_edited.png",
  },
];

export const boardOfTrustees = [
  { name: "Cheryl Shaver", role: "Board President" },
  { name: "Angela O'Shea", role: "Vice President" },
  { name: "Olivia Biltz", role: "Secretary" },
  { name: "Mike Palmer", role: "Treasurer" },
  { name: "Mark Miller", role: "Trustee" },
  { name: "Troy Miller", role: "Trustee" },
  { name: "Holley Johnson", role: "Trustee" },
];

export const performances = [
  {
    title: "The Nutcracker",
    description:
      "HCA's signature December production at the Ohio Star Theater. All Creative Movement and Ballet students are invited to participate in this pre-professional production.",
    image: "/images/Nutcraker_2018_PRINT-90.jpg",
    season: "December",
    venue: "Ohio Star Theater",
  },
  {
    title: "Spring Recital",
    description:
      "A full-cast children's ballet with professional production quality. Past themes include Peter Pan and The Princess and the Pea.",
    image: "/images/IMG_9951_edited.jpg",
    season: "Spring",
    venue: "Center Stage Theater",
  },
  {
    title: "Elite Tumblers Showcase",
    description:
      "HCA Elite performs at local high school basketball games, the Spring Recital, and other community events throughout the year.",
    image: "/images/20210609_152923_edited.jpg",
    season: "Year-round",
    venue: "Various",
  },
];

export const theatreProductions = [
  { title: "The Prince of Egypt", year: "2026", status: "upcoming" },
  { title: "Newsies", year: "2025", status: "past" },
  { title: "Matilda Jr.", year: "2025", status: "past" },
  { title: "Frozen Jr.", year: "2024", status: "past" },
  { title: "Guys and Dolls", year: "2023", status: "past" },
  { title: "The Music Man", year: "2022", status: "past" },
  { title: "A Night at the Art Museum", year: "2022", status: "past" },
  { title: "Lion King Jr.", year: "2021", status: "past" },
  { title: "Newsies", year: "2020", status: "past" },
  { title: "Artists and Athletes", year: "2019", status: "past" },
  { title: "The Nutcracker", year: "2018", status: "past" },
  { title: "Snow White", year: "2017", status: "past" },
];

export const artClasses = [
  {
    category: "Kids",
    title: "Cartooning with Dylan Olsen",
    description: "Kids explore cartooning techniques in fun Saturday workshops.",
    schedule: "Saturdays (alternating): 9:00–10:00 AM",
    price: "$13 per class",
    ageRange: "Kids",
  },
  {
    category: "Kids",
    title: "Homeschool Art",
    description:
      "Drawing and painting with art history for middle-high school level homeschoolers.",
    schedule: "Thursdays, March–April",
    price: "Contact for pricing",
    ageRange: "Middle/High School",
  },
  {
    category: "Kids",
    title: "Fun with Fabric",
    description: "Textile arts workshop for ages 9 and up.",
    schedule: "Saturday workshops",
    price: "$25",
    ageRange: "Ages 9+",
  },
  {
    category: "Teen After School",
    title: "NextGen Free After-School Program",
    description:
      "FREE Thursday program with snacks, homework help, devotional, and a 5–6 PM arts activity (painting, stained glass, woodworking, etc.). Transportation provided.",
    schedule: "Thursdays after school until 6:00 PM",
    price: "FREE",
    ageRange: "Teens",
  },
  {
    category: "Adults & Teens",
    title: "Open Ceramics Studio",
    description:
      "Open studio time with 25 lbs clay, glazes, and firing included.",
    schedule: "Tuesdays 4:00–8:00 PM",
    price: "$75 registration + $15/first hr + $10/additional hr",
    ageRange: "Ages 16+",
  },
  {
    category: "Adults & Teens",
    title: "Wheel-Throwing Ceramics",
    description:
      "7-week wheel-throwing course with Sonny Grzybowski. All skill levels welcome.",
    schedule: "Thursdays 6:15–8:15 PM (7 weeks)",
    price: "$160 + $40 supply fee",
    ageRange: "Adults & Teens",
  },
  {
    category: "Adults & Teens",
    title: "Landscape Painting",
    description:
      "Award-winning artist Diane Graebner guides students through plein air and studio landscape painting.",
    schedule: "Saturdays 12:30–3:00 PM (monthly sessions)",
    price: "$30 per session",
    ageRange: "Ages 16+",
  },
  {
    category: "Adults & Teens",
    title: "Watercolor — Pets in Paint",
    description:
      "Paint your pet in watercolor with instructor Michelle Steffen.",
    schedule: "Fridays 6:00–7:30 PM (4 sessions)",
    price: "$60 for 4 sessions",
    ageRange: "Adults & Teens",
  },
  {
    category: "Adults & Teens",
    title: "Quilting",
    description:
      "Beginner and intermediate quilting course with Pat Dutton.",
    schedule: "Tuesdays (6 sessions)",
    price: "$75",
    ageRange: "Adults",
  },
  {
    category: "Adults & Teens",
    title: "Spanish Language",
    description:
      "6-week beginner/returning Spanish course with Collette Propri.",
    schedule: "Mondays 5:00–6:15 PM (6 weeks)",
    price: "$75 + $18 book",
    ageRange: "Adults & Teens",
  },
];

export const partyPackages = [
  {
    title: "Painting & Arts Party",
    description:
      "A creative arts and crafts party where guests get hands-on with painting and creative projects.",
    price: "$280",
    capacity: "12 guests",
    duration: "1.5 hours",
    includes: ["Walnut Creek cupcakes", "Lemonade & water", "HCA host", "Tablecloths & paper products"],
    icon: "🎨",
  },
  {
    title: "Tumbling Party",
    description:
      "An energetic gymnastics-style party in HCA's professional tumbling space.",
    price: "$250",
    capacity: "12 guests",
    duration: "1.5 hours",
    includes: ["Walnut Creek cupcakes", "Lemonade & water", "HCA host", "Tablecloths & paper products"],
    icon: "🤸",
  },
  {
    title: "Ballerina Princess Party",
    description:
      "A magical ballet-themed party where little ones dress up and dance like ballerinas.",
    price: "$250",
    capacity: "12 guests",
    duration: "1.5 hours",
    includes: ["Walnut Creek cupcakes", "Lemonade & water", "HCA host", "Tablecloths & paper products"],
    icon: "🩰",
  },
];

export const sponsorTiers = [
  {
    name: "Performance Sponsor",
    price: "$2,500",
    description: "Full show sponsorship with premium recognition in all programs and marketing materials.",
  },
  {
    name: "Program Ad – Full Page",
    price: "$450",
    description: "Full-page advertisement in the performance program.",
  },
  {
    name: "Program Ad – Half Page",
    price: "$250",
    description: "Half-page advertisement in the performance program.",
  },
  {
    name: "Program Ad – Quarter Page",
    price: "$150",
    description: "Quarter-page advertisement in the performance program.",
  },
];

export const communityPrograms = [
  {
    title: "Arts for Developmental Disabilities",
    description:
      "HCA offers arts classes for people with developmental disabilities at our facility, funded through the Save & Serve and Talty Foundation grants.",
    icon: "heart",
  },
  {
    title: "Sensory Friendly Shows",
    description:
      "Special performances adapted for individuals with sensory sensitivities, ensuring everyone can experience the joy of live theatre.",
    icon: "star",
  },
  {
    title: "Senior Outreach",
    description:
      "Regular performances and classes for seniors at Walnut Hills Retirement Home, Majora Lane Retirement Home, and other facilities.",
    icon: "users",
  },
  {
    title: "NextGen Teen After School",
    description:
      "Free Thursday program funded by United Way, offering arts activities, homework help, and mentorship for local teens. Transportation provided.",
    icon: "book",
  },
  {
    title: "Scholarship Program",
    description:
      "42 students received scholarships in 2024. HCA believes financial circumstances should never be a barrier to arts education.",
    icon: "award",
  },
  {
    title: "Community Performances",
    description:
      "HCA performs at the Holmes County Fair, Share-a-Christmas, Broadway Showcase at Hiland High School, the Chamber of Commerce Christmas luncheon, and more.",
    icon: "music",
  },
];

export const galleryImages = [
  { src: "/images/dance3.jpeg", alt: "Dance ensemble on stage" },
  { src: "/images/dance4.jpeg", alt: "Young dancers performing on stage" },
  { src: "/images/dance2.jpeg", alt: "Solo dance performance under stage lights" },
  { src: "/images/dance%60.jpeg", alt: "Dance team backstage before a performance" },
  { src: "/images/P27A0317_edited.jpg", alt: "Ballet performance" },
  { src: "/images/IMG_9648.jpg", alt: "Dance recital" },
  { src: "/images/IMG_9176%20(1).jpg", alt: "Performance" },
  { src: "/images/IMG_1614.jpg", alt: "Dancer" },
  { src: "/images/IMG_0460.jpg", alt: "Dance class" },
  { src: "/images/Tap%20Dancer.jpg", alt: "Tap dancer" },
  { src: "/images/IMG_9951_edited.jpg", alt: "Spring recital" },
  { src: "/images/IMG_9952_edited.jpg", alt: "Performance" },
  { src: "/images/IMG_9953_edited.jpg", alt: "Dance" },
  { src: "/images/IMG_9954_edited.jpg", alt: "Recital" },
  { src: "/images/IMG_9955_edited.jpg", alt: "Ballet" },
  { src: "/images/Nutcraker_2018_PRINT-90.jpg", alt: "Nutcracker 2018" },
  { src: "/images/A%20Night%20at%20the%20Art%20Museum%20April%202022%20nw-193.jpg", alt: "Art Museum Night 2022" },
  { src: "/images/A%20Night%20at%20the%20Art%20Museum%20April%202022%20nw-205.jpg", alt: "Art Museum Night 2022" },
  { src: "/images/20210609_152923_edited.jpg", alt: "Tumbling" },
  { src: "/images/Dancing%20Under%20the%20Stars.jpg", alt: "Dancing Under the Stars" },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Dance", href: "/dance" },
  { label: "Music", href: "/music" },
  { label: "Art", href: "/art" },
  { label: "Theatre", href: "/theatre" },
  { label: "Community", href: "/community" },
  { label: "Instructors", href: "/instructors" },
  { label: "Contact", href: "/contact" },
];
