import './App.css';

const profile = {
  name: 'Cynthia .C. Azoro',
  photo: '/codespaces-react/profile-image.png',
  roles: [
    'Front-end Developer',
    'Virtual Assistant',
    'Academic Research Writer',
    'Graphic Designer',
    'Video Editor',
  ],
  location: 'Lagos, Nigeria',
  email: 'azoro.cyn@gmail.com',
  phone: '+234 705 961 7050',
  socials: [
    { label: 'Twitter', href: 'https://twitter.com/mouseylot', icon: '🐦' },
    { label: 'GitHub', href: 'https://github.com/cheesecakes21', icon: '💻' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cynthia-azoro/', icon: '🔗' },
  ],
};

const professionalProfile = [
  'Cynthia is a multidisciplinary Virtual Assistant, Social Media Manager, and Frontend Developer with over four years of hands on experience supporting founders, executives, and brands across luxury hospitality, oil & gas, marine services, real estate, and corporate conglomerates.',
  'She specializes in building organized digital systems, executing high-performing content strategies, and providing high-level operational support that allows businesses to scale efficiently without losing structure or brand integrity.',
  'As a Certified AI Prompter, Cynthia leverages AI tools strategically to enhance content creation, systems thinking, and workflow optimization.',
  'Cynthia is known for her ability to translate complex operations into clear, functional workflows, combining strategic thinking with execution excellence.',
  'Her work sits at the intersection of operations, communication, and digital experience.',
];

const coreServices = [
  {
    title: 'Virtual Assistance (Executive & C-Suite Support)',
    description:
      'Structured, reliable support to busy executives and brand leaders — acting as a true operational partner rather than a task-based assistant.',
    highlights: [
      'Email and inbox management (prioritization, filtering, response drafting)',
      'Calendar and meeting coordination (Zoom, Google Calendar, Calendly)',
      'Client communication and follow-ups',
      'Research, documentation, and reporting',
      'Administrative systems setup and optimization',
      'Event and project coordination support',
    ],
  },
  {
    title: 'Social Media Management & Digital Strategy',
    description:
      'Results-driven content ecosystems for corporate, luxury, and multi-brand portfolios.',
    highlights: [
      'Content strategy and planning (monthly & quarterly calendars)',
      'Brand voice development and positioning',
      'Educational, corporate, and storytelling content',
      'Campaign planning and launch execution',
      'Content repurposing across platforms',
      'Community-facing engagement strategy',
      'Performance tracking and content optimization',
    ],
  },
  {
    title: 'Frontend Development & No-Code Implementation',
    description:
      'Certified Frontend Developer bridging design, content, and functionality for fast, reliable deployment.',
    highlights: [
      'HTML, CSS, JavaScript',
      'React and Vue.js frameworks',
      'Website structure optimization',
      'Landing page and one-page funnel builds',
      'No-code and low-code tools for fast deployment',
      'Collaboration with designers and backend teams',
    ],
  },
];

const tools = {
  productivity: [
    'Google Workspace (Docs, Sheets, Slides, Drive)',
    'Notion (dashboards, client portals, SOPs)',
    'Calendly',
    'Zoom',
    'Trello & task management systems',
  ],
  content: [
    'Canva (static, carousel, presentation design)',
    'CapCut (short-form video editing)',
    'AI Platforms: ChatGPT, Claude, Gemini, Copilot (prompt engineering, content strategy)',
    'Midjourney & Higgsfield (AI-assisted visual design)',
    'Motion graphics collaboration workflows',
  ],
  development: ['GitHub', 'No-code platforms', 'React', 'Vue.js', 'HTML, CSS, JavaScript'],
};

const industries = [
  'Luxury hospitality & short-let residences',
  'Oil & gas (upstream-focused education and corporate content)',
  'Marine services & dry dock operations',
  'Shipping and logistics',
  'Real estate development',
  'Corporate holding companies',
];

const strengths = [
  'Strategic thinking with execution focus',
  'Strong written communication and storytelling',
  'Systems building and operational clarity',
  'Brand positioning and authority-driven content',
  'AI-assisted content strategy and prompt engineering (Certified AI Prompter)',
  'Time management and deadline discipline',
  'Cross-functional collaboration',
  'High attention to detail',
  'Ability to work independently with minimal supervision',
];

const technicalSkills = [
  { name: 'React', level: 90 },
  { name: 'Vue.js', level: 80 },
  { name: 'Next.js', level: 60 },
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 90 },
  { name: 'Tailwind CSS', level: 50 },
  { name: 'JavaScript', level: 90 },
];

const philosophy = [
  'Clear systems before scaling',
  'Thoughtful communication over noise',
  'Sustainable workflows over burnout',
  'Quality execution over vanity metrics',
];

const idealEngagements = [
  'Founders and executives who value structure',
  'Brands seeking long-term digital growth',
  'Corporate teams needing dependable operational support',
  'Businesses ready to professionalize their online presence',
];

const experiences = [
  {
    title: 'Virtual Assistant & Digital Operations Specialist',
    period: '2022 – Present',
    company: 'Freelance / Contract',
    highlights: [
      'Provide high-level virtual assistance and digital operations support to founders, executives, and structured teams across luxury hospitality, energy, marine services, real estate, and corporate groups.',
      'Executive email and inbox management, calendar scheduling, meeting coordination, and follow-ups.',
      'Client communication, documentation, research, reporting, and internal records.',
      'Workflow organization and operational support with minimal supervision.',
    ],
  },
  {
    title: 'Social Media Manager & Content Strategist',
    period: '2022 – Present',
    company: 'Freelance / Contract',
    highlights: [
      'Manage social media strategy and execution for corporate, luxury, and multi-brand businesses.',
      'Support industries including corporate holding structures, luxury hospitality, oil & gas, shipping, and marine services.',
      'Content strategy and monthly planning, educational and authority-based content development.',
      'Campaign build-ups, launches, and multi-subsidiary content coordination.',
      'Collaborate with designers and internal teams for cohesive brand presence.',
    ],
  },
  {
    title: 'Frontend Developer (Certified)',
    period: '2022 – Present',
    company: 'Freelance / Integrated Role',
    highlights: [
      'Built and structured frontend interfaces using HTML, CSS, and JavaScript.',
      'Worked with React and Vue.js frameworks for dynamic web applications.',
      'Supported landing pages, one-page funnels, and digital assets.',
      'Implemented no-code and low-code solutions for fast deployment.',
      'Collaborated with designers and backend teams for cohesive delivery.',
    ],
  },
  {
    title: 'Data Entry Clerk & No-Code Website Administrator',
    period: '2021 – 2022',
    company: 'International Fashion Brand — Contract',
    highlights: [
      'Handled accurate product and inventory data entry.',
      'Managed and updated a no-code e-commerce website.',
      'Maintained product pages, collections, and content consistency.',
      'Supported operational accuracy for online sales.',
    ],
  },
  {
    title: 'CV Writer & Professional Template Designer',
    period: '2021 – Present',
    company: 'Freelance',
    highlights: [
      'Created professional, ATS-friendly CVs and résumés.',
      'Designed clean, modern CV and document templates.',
      'Developed cover letters and professional layouts.',
      'Supported clients applying for local and international roles.',
    ],
  },
  {
    title: 'Academic Researcher',
    period: '2020 – 2023',
    company: 'Freelance',
    highlights: [
      'Conducted academic research for both national and international clients.',
      'Worked on undergraduate and postgraduate theses.',
      'Handled literature reviews, academic writing, formatting, and referencing.',
      'Met institutional and international research standards.',
    ],
  },
  {
    title: 'Protocol Team Lead (V.A)',
    period: '2019 – 2021',
    company: 'Solution Innovation District (SID), Nigeria',
    highlights: [
      'Led logistics, protocol, and guest relations teams to deliver efficient events.',
      'Managed travel logistics including flight bookings and transportation.',
      'Coordinated speaker and guest arrivals and departures.',
      'Arranged concierge services and ensured VIP experiences.',
    ],
  },
  {
    title: 'General Virtual Assistant',
    period: '2017 – 2018',
    company: 'Jeff Bryan — San Francisco, California, United States',
    highlights: [
      'Edited and proofread manuscripts for clients.',
      'Optimized web pages with keyword-rich meta titles, descriptions, headers, and alt text.',
      'Tracked ad performance metrics and supported learning with feedback.',
      'Consistently met deadlines without sacrificing quality or accuracy.',
    ],
  },
  {
    title: 'Data Entry Clerk (V.A)',
    period: '2016 – 2017',
    company: 'Family Search Organisation — Remote',
    highlights: [
      'Improved daily operations, communications, recordkeeping, and data entry for efficiency.',
      'Completed business correspondence, transcription, and data entry.',
      'Maintained accurate electronic and paper filing systems.',
    ],
  },
];

const education = {
  degree: 'Bachelor of Science',
  period: '2017 - 2021',
  school: 'University of Nnamdi Azikiwe, Nigeria',
};

const certifications = [
  'Virtual Assistant Certification',
  'Frontend Development Certification',
  'AI Fluency Certification (Certified AI Prompter)',
];

function App() {
  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <span className="brand">{profile.name}</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Welcome</p>
            <h1>{profile.name}</h1>
            <p className="roles">{profile.roles.join(' • ')}</p>
            <p className="hero-text">
              Multidisciplinary Virtual Assistant, Social Media Manager, and Frontend Developer focused on
              structured systems, high-performing content, and operational clarity that scales.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#contact">
                Let’s Connect
              </a>
              <a className="ghost" href="#services">
                Explore Services
              </a>
            </div>
            <div className="socials">
              {profile.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  <span className="icon" aria-hidden="true">
                    {social.icon}
                  </span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-avatar">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} className="avatar-image" />
              ) : (
                'CA'
              )}
            </div>
            <div className="hero-detail">
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>
            <div className="hero-detail">
              <span>Email</span>
              <strong>{profile.email}</strong>
            </div>
            <div className="hero-detail">
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="about">
        <div className="section-heading">
          <h2>Professional Profile</h2>
          <p>Operations, communication, and digital experience — aligned for scale.</p>
        </div>
        <div className="two-column">
          <div className="card">
            {professionalProfile.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className="card highlight">
            <h3>Professional Philosophy</h3>
            <ul className="list">
              {philosophy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt" id="services">
        <div className="section-heading">
          <h2>Core Professional Services</h2>
          <p>High-level support designed for founders, executives, and brand leaders.</p>
        </div>
        <div className="grid">
          {coreServices.map((service) => (
            <div className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="list">
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <h2>Professional Strengths & Skills</h2>
          <p>Strategic thinking, execution excellence, and reliable delivery.</p>
        </div>
        <div className="grid">
          <div className="card">
            <h3>Strengths</h3>
            <ul className="list">
              {strengths.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Technical Proficiency</h3>
            <div className="skill-list">
              {technicalSkills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <span>{skill.name}</span>
                  <span className="percentage">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="tools">
        <div className="section-heading">
          <h2>Tools & Platforms Proficiency</h2>
          <p>Productivity, content, and development tools to keep projects moving.</p>
        </div>
        <div className="grid">
          <div className="card">
            <h3>Productivity & Operations</h3>
            <ul className="list">
              {tools.productivity.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Content & Design</h3>
            <ul className="list">
              {tools.content.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Development & Tech</h3>
            <ul className="list">
              {tools.development.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="section-heading">
          <h2>Industry & Brand Experience</h2>
          <p>Experience spanning corporate, luxury, and operationally complex environments.</p>
        </div>
        <div className="card">
          <ul className="list">
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt" id="engagements">
        <div className="section-heading">
          <h2>Ideal Engagements</h2>
          <p>Best-fit partnerships where structure and long-term growth matter.</p>
        </div>
        <div className="card">
          <ul className="list">
            {idealEngagements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt" id="experience">
        <div className="section-heading">
          <h2>Work Experience</h2>
          <p>Trusted support across virtual assistance, coordination, and operations.</p>
        </div>
        <div className="grid">
          {experiences.map((role) => (
            <article className="card" key={role.title}>
              <h3>{role.title}</h3>
              <p className="muted">{role.company}</p>
              <p className="muted">{role.period}</p>
              <ul className="list">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="card compact">
          <h3>Education</h3>
          <p className="muted">{education.degree}</p>
          <p className="muted">{education.period}</p>
          <p>{education.school}</p>
        </div>        <div className="education-card">
          <h3>Certifications</h3>
          <ul className="list">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>      </section>

      <section className="section" id="contact">
        <div className="section-heading">
          <h2>Contact</h2>
          <p>Let’s discuss how I can support your next project.</p>
        </div>
        <div className="two-column">
          <div className="card">
            <h3>Get in Touch</h3>
            <p>
              I’m available for freelance projects and ongoing support. Reach out and let’s make a positive
              impact on your business.
            </p>
            <div className="contact-list">
              <a href={`mailto:${profile.email}`}>
                <span className="icon" aria-hidden="true">
                  ✉️
                </span>
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`}>
                <span className="icon" aria-hidden="true">
                  📞
                </span>
                {profile.phone}
              </a>
              <span>
                <span className="icon" aria-hidden="true">
                  📍
                </span>
                {profile.location}
              </span>
            </div>
          </div>
          <div className="card highlight">
            <h3>Online</h3>
            <p>Follow along for updates, insights, and recent work.</p>
            <div className="contact-list">
              {profile.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  <span className="icon" aria-hidden="true">
                    {social.icon}
                  </span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 {profile.name}. All rights reserved.</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
