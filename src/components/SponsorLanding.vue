<script setup lang="ts">
import hackwashuLogo from "../assets/sponsor-page/hackwashu-logo-black.png";
import heroImage from "../assets/sponsor-page/hero-student-builds.png";
import sponsorTablesImage from "../assets/sponsor-page/fall-skandalaris.png";
import workshopImage from "../assets/sponsor-page/spring-ai-build.jpg";
import demoImage from "../assets/sponsor-page/sponsor-small-2.png";
import contactImage from "../assets/sponsor-page/contact-sponsor.jpg";
import sponsorSmallOne from "../assets/sponsor-page/sponsor-small-1.png";
import sponsorSmallTwo from "../assets/sponsor-page/sponsor-small-2.png";
import univisorScreenshot from "../assets/sponsor-page/projects/univisor.png";
import operonScreenshot from "../assets/sponsor-page/projects/operon.png";
import stocklearnScreenshot from "../assets/sponsor-page/projects/stocklearn.png";
import workoutCoachScreenshot from "../assets/sponsor-page/projects/workoutcoach.png";
import mastercardLogo from "../assets/mastercard.png";
import rgaLogo from "../assets/rga.png";
import abLogo from "../assets/ab-tech.png";

const navItems = [
  { label: "Impact", href: "#impact" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#projects" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "250+", label: "students at Skandalaris x HackWashU Hackathon" },
  { value: "100+", label: "students at AI Build Challenge" },
  { value: "37", label: "AI Build Challenge teams registered" },
  { value: "32", label: "finalist teams across recent events" },
  { value: "13", label: "winning teams across recent events" },
];

const events = [
  {
    title: "Skandalaris x HackWashU Hackathon",
    season: "Fall 2025",
    image: sponsorTablesImage,
    alt: "Students and sponsors gathering at a HackWashU event",
    description:
      "HackWashU collaborated with Skandalaris to host an entrepreneurship-focused student hackathon. More than 250 students participated, formed teams, received feedback, and presented their work to judges and mentors.",
    stats: ["250+ participants", "20 finalist teams", "8 winning teams"],
    tags: ["Hackathon", "Entrepreneurship", "Project demos", "Student innovation"],
  },
  {
    title: "AI Build Challenge",
    season: "Spring 2026",
    image: workshopImage,
    alt: "Students attending a technical workshop with laptops",
    description:
      "HackWashU organized an AI-focused build challenge where students created practical AI-powered projects with office hours support and feedback from WashU judges.",
    stats: ["100+ participants", "37 registered teams", "12 finalist teams", "5 winning teams"],
    tags: ["AI", "Product building", "Office hours", "Judges and feedback"],
  },
];

const projects = [
  {
    title: "Univisor",
    url: "https://univisorapp.com/",
    category: "Education / Student Tools",
    description: "A student-built academic planning tool designed to help students schedule classes more easily.",
    image: univisorScreenshot,
  },
  {
    title: "Operon",
    url: "https://operon-phi.vercel.app/",
    category: "AI for Business / Restaurant Analytics",
    description:
      "An AI-powered restaurant consulting tool that helps restaurant operators upload data, check business health, and receive actionable recommendations.",
    image: operonScreenshot,
  },
  {
    title: "StockLearn",
    url: "https://stock-learn-project-bhcg.vercel.app/",
    category: "Finance / Learning",
    description: "A student-built finance learning tool related to stocks, investing education, or financial understanding.",
    image: stocklearnScreenshot,
  },
  {
    title: "WorkoutCoach",
    url: "https://workoutcoach.vercel.app/",
    category: "Health / Fitness AI",
    description:
      "An AI-powered fitness tool that helps users track workouts, analyze training data, receive coaching insights, and get real-time form feedback.",
    image: workoutCoachScreenshot,
  },
];

const previousSponsors = [
  { name: "Mastercard", logo: mastercardLogo },
  { name: "Anheuser-Busch", logo: abLogo },
  { name: "RGA", logo: rgaLogo },
  { name: "Spectrum / Charter" },
];

const collaborators = [
  "Skandalaris",
  "DI2",
];

const sponsorPhotos = [
  { image: sponsorSmallOne, alt: "Sponsor tables and students at a HackWashU event" },
  { image: sponsorSmallTwo, alt: "Students speaking with a sponsor representative at a HackWashU event" },
];

const benefits = [
  {
    title: "Recruit student talent",
    description:
      "Meet motivated students interested in software engineering, AI, data science, product, design, and entrepreneurship.",
  },
  {
    title: "Build campus brand presence",
    description:
      "Introduce your company to WashU students early and build recognition in the St. Louis student technology community.",
  },
  {
    title: "Engage directly with builders",
    description:
      "Send engineers, recruiters, or product teams to mentor students, judge projects, host workshops, or meet students at a sponsor table.",
  },
  {
    title: "Showcase tools and challenges",
    description:
      "Give students APIs, platforms, datasets, or real-world problems to build with through custom challenges, demos, or prizes.",
  },
];

const tiers = [
  {
    name: "Bronze",
    price: "$3,750",
    benefits: ["Sponsor table", "Engineers and mentors at event", "Recruiting materials", "Post-event resume access", "Swag distribution"],
  },
  {
    name: "Silver",
    price: "$7,500",
    benefits: ["Bronze benefits", "Judge participant projects", "Live recruiters at event", "Medium logo placement"],
  },
  {
    name: "Gold",
    price: "$11,250",
    benefits: ["Silver benefits", "Workshop or tech talk", "Pre-event resume access", "Interviews during event"],
  },
  {
    name: "Platinum",
    price: "$15,000",
    benefits: ["Gold benefits", "API or product demo", "Custom challenge track", "Company-sponsored prize", "Awards ceremony presentation"],
  },
];
</script>

<template>
  <div class="sponsor-page">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="HackWashU home">
        <img :src="hackwashuLogo" alt="HackWashU" />
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
      <a class="header-cta" href="mailto:hackwashu@gamil.com">Sponsor</a>
    </header>

    <main id="top">
      <section class="hero section-band">
        <div class="hero-copy">
          <p class="eyebrow">Sponsor HackWashU</p>
          <h1>
            <span>Connect with</span>
            <span>the next generation</span>
            <span>of student</span>
            <span>builders</span>
            <span>at WashU.</span>
          </h1>
          <p class="hero-subtitle">
            HackWashU is a student-run technology community at Washington University in St. Louis, organizing hackathons, AI build challenges, workshops, and project events that bring students and industry partners together.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#contact">Become a Sponsor</a>
            <a class="button secondary" href="#opportunities">View Opportunities</a>
          </div>
        </div>
        <figure class="hero-media">
          <img :src="heroImage" alt="Students attending a HackWashU event in a lecture hall" />
          <figcaption>Student build events across entrepreneurship, AI, product, and software.</figcaption>
        </figure>
      </section>

      <section id="impact" class="impact section-band">
        <div class="section-heading">
          <p class="eyebrow">Recent HackWashU Impact</p>
          <h2>Recent events have brought together hundreds of student builders.</h2>
          <p>
            HackWashU has recently organized student build events across entrepreneurship and artificial intelligence, bringing together hundreds of students, dozens of project teams, campus mentors, and judges from across the WashU community.
          </p>
        </div>
        <div class="stat-grid">
          <article v-for="stat in stats" :key="stat.label" class="stat-card">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        </div>
      </section>

      <section class="about section-band">
        <div class="split-copy">
          <p class="eyebrow">About HackWashU</p>
          <h2>We help students move from ideas to working projects.</h2>
        </div>
        <div class="body-copy">
          <p>
            HackWashU is a student-run technology and hackathon community at Washington University in St. Louis. We create opportunities for students to turn ideas into working projects through hackathons, AI build challenges, workshops, mentorship, and project showcases.
          </p>
          <p>
            Our events bring together students interested in software engineering, artificial intelligence, data science, design, entrepreneurship, and product development. Through HackWashU, students build projects, learn from mentors, present to judges, and connect with companies and campus partners working on real-world problems.
          </p>
        </div>
      </section>

      <section id="events" class="events section-band">
        <div class="section-heading compact">
          <p class="eyebrow">Recent Events</p>
          <h2>Student-led events with momentum sponsors can see.</h2>
        </div>
        <div class="event-grid">
          <article v-for="event in events" :key="event.title" class="event-card">
            <img :src="event.image" :alt="event.alt" />
            <div class="event-content">
              <p class="event-season">{{ event.season }}</p>
              <h3>{{ event.title }}</h3>
              <p>{{ event.description }}</p>
              <ul class="mini-stats">
                <li v-for="item in event.stats" :key="item">{{ item }}</li>
              </ul>
              <div class="tag-row">
                <span v-for="tag in event.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" class="projects section-band">
        <div class="section-heading">
          <p class="eyebrow">Featured Student Projects</p>
          <h2>Selected projects from the Spring 2026 HackWashU AI Build Challenge.</h2>
          <p>
            At the AI Build Challenge, students moved beyond ideas and built working AI-powered tools for education, restaurants, finance, and fitness.
          </p>
        </div>
        <div class="project-grid">
          <article v-for="project in projects" :key="project.title" class="project-card">
            <img class="project-screenshot" :src="project.image" :alt="`${project.title} homepage screenshot`" />
            <p class="category">{{ project.category }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.url" target="_blank" rel="noopener noreferrer">View Project</a>
          </article>
        </div>
        <a class="text-link" href="https://linktr.ee/ericcc0331" target="_blank" rel="noopener noreferrer">View Full Project Gallery</a>
      </section>

      <section id="sponsors" class="partners section-band">
        <div class="section-heading compact">
          <p class="eyebrow">Partners and Sponsors</p>
          <h2>Previous sponsors and campus collaborators are shown separately.</h2>
        </div>
        <div class="partner-layout">
          <div>
            <h3>Previous Sponsors</h3>
            <div class="sponsor-grid">
              <article v-for="sponsor in previousSponsors" :key="sponsor.name" class="sponsor-card">
                <img v-if="sponsor.logo" :src="sponsor.logo" :alt="sponsor.name" />
                <div v-else class="text-logo">{{ sponsor.name }}</div>
              </article>
            </div>
          </div>
          <div class="collaborators">
            <h3>Campus Collaborators and Community Support</h3>
            <ul>
              <li v-for="collaborator in collaborators" :key="collaborator">{{ collaborator }}</li>
            </ul>
          </div>
        </div>
        <div class="partner-photo-strip" aria-label="HackWashU sponsor event photos">
          <img v-for="photo in sponsorPhotos" :key="photo.alt" :src="photo.image" :alt="photo.alt" />
        </div>
      </section>

      <section class="why section-band">
        <div class="visual-panel">
          <img :src="demoImage" alt="Students discussing project demos at a HackWashU event" />
        </div>
        <div class="why-content">
          <p class="eyebrow">Why Sponsor HackWashU</p>
          <h2>Sponsors connect with students who are already building.</h2>
          <p>
            Recent events have included 250+ students at the Skandalaris x HackWashU Hackathon and 100+ students at the AI Build Challenge, with students forming teams, developing projects, presenting to judges, and competing for awards.
          </p>
          <div class="benefit-grid">
            <article v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="opportunities" class="opportunities section-band">
        <div class="section-heading">
          <p class="eyebrow">Sponsorship Opportunities</p>
          <h2>Flexible ways to support student builders.</h2>
          <p>
            Pricing and benefits below come from the previous prospectus and should be confirmed before public sponsor outreach.
          </p>
        </div>
        <div class="tier-grid">
          <article v-for="tier in tiers" :key="tier.name" class="tier-card">
            <div class="tier-header">
              <h3>{{ tier.name }}</h3>
              <strong>{{ tier.price }}</strong>
            </div>
            <p class="pending">Pending current confirmation</p>
            <ul>
              <li v-for="benefit in tier.benefits" :key="benefit">{{ benefit }}</li>
            </ul>
          </article>
        </div>
        <p class="custom-note">
          All sponsorships can be discussed and customized based on the goals of both HackWashU and the sponsor.
        </p>
      </section>

      <section id="contact" class="contact section-band">
        <div class="contact-copy">
          <p class="eyebrow">Contact</p>
          <h2>Interested in sponsoring HackWashU?</h2>
          <p>
            We would be excited to discuss how your company can support HackWashU and connect with student builders at WashU. Reach out to learn more about sponsorship opportunities, event participation, and customized ways to engage with students.
          </p>
          <div class="contact-actions">
            <a class="button primary" href="mailto:hackwashu@gamil.com?subject=HackWashU%20Sponsorship">Contact Us About Sponsorship</a>
            <a class="button secondary" href="mailto:hackwashu@gamil.com">hackwashu@gamil.com</a>
          </div>
          <p class="contact-note">HackWashU Organizing Team</p>
        </div>
        <figure class="contact-image">
          <img :src="contactImage" alt="HackWashU students and collaborators at an event" />
        </figure>
      </section>
    </main>
  </div>
</template>

<style scoped>
.sponsor-page {
  --ink: #111111;
  --muted: #5f6362;
  --line: #d7ddda;
  --paper: #f8faf8;
  --white: #ffffff;
  --mint: #c5d2ce;
  --cyan: #64d3f5;
  --gold: #f4c84f;
  --red: #d8523c;
  --green: #1f7a5c;
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  font-family: spartan, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.sponsor-page,
.sponsor-page * {
  box-sizing: border-box;
}

.hero-copy,
.why-content,
.contact-copy {
  min-width: 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 2rem;
  min-height: 76px;
  padding: 0.8rem clamp(1rem, 4vw, 4rem);
  background: rgba(248, 250, 248, 0.94);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
}

.brand {
  display: inline-flex;
  align-items: center;
}

.brand img {
  width: 148px;
  height: 54px;
  object-fit: contain;
  object-position: left center;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.75rem, 2vw, 1.6rem);
  flex: 1;
}

.nav-links a,
.header-cta,
.button,
.text-link {
  color: var(--ink);
  text-decoration: none;
}

.nav-links a {
  font-family: spartan-sb, sans-serif;
  font-size: 0.86rem;
}

.header-cta,
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 1.1rem;
  border: 2px solid var(--ink);
  font-family: spartan-bold, sans-serif;
  font-size: 0.9rem;
}

.header-cta,
.button.primary {
  background: var(--cyan);
  box-shadow: 4px 4px 0 var(--ink);
}

.button.secondary {
  background: var(--white);
}

.section-band {
  padding: clamp(4rem, 8vw, 7rem) clamp(1rem, 5vw, 5.5rem);
  border-bottom: 1px solid var(--line);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  min-height: calc(100vh - 76px);
  background: var(--white);
}

.eyebrow {
  margin-bottom: 1rem;
  color: var(--green);
  font-family: spartan-bold, sans-serif;
  font-size: 0.82rem;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  font-family: spartan-bold, Inter, sans-serif;
  color: var(--ink);
  letter-spacing: 0;
}

h1 {
  max-width: 920px;
  font-size: clamp(3.2rem, 6.7vw, 6.7rem);
  line-height: 0.94;
}

h1 span {
  display: block;
}

h2 {
  max-width: 820px;
  font-size: clamp(2.15rem, 4.4vw, 4.8rem);
  line-height: 0.96;
}

h3 {
  font-size: clamp(1.18rem, 1.8vw, 1.65rem);
  line-height: 1.05;
}

p {
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.65;
}

.hero-subtitle {
  max-width: 760px;
  margin-top: 1.5rem;
  font-size: clamp(1.05rem, 1.6vw, 1.35rem);
}

.hero-actions,
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-media,
.contact-image {
  margin: 0;
}

.hero-media img,
.visual-panel img,
.contact-image img,
.event-card img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.hero-media img {
  aspect-ratio: 4 / 5;
  border: 2px solid var(--ink);
  box-shadow: 12px 12px 0 var(--mint);
}

.hero-media figcaption {
  margin-top: 1rem;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.45;
}

.section-heading {
  display: grid;
  grid-template-columns: minmax(240px, 0.75fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 4vw, 4rem);
  align-items: end;
  margin-bottom: 2.5rem;
}

.section-heading.compact {
  display: block;
}

.section-heading p:not(.eyebrow) {
  max-width: 720px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
}

.stat-card,
.event-card,
.project-card,
.sponsor-card,
.benefit-card,
.tier-card {
  background: var(--white);
  border: 1px solid var(--line);
}

.stat-card {
  min-height: 150px;
  padding: 1.25rem;
}

.stat-card strong {
  display: block;
  margin-bottom: 0.75rem;
  color: var(--red);
  font-family: spartan-bold, sans-serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1;
}

.stat-card span {
  color: var(--ink);
  font-size: 0.94rem;
  line-height: 1.35;
}

.about {
  display: grid;
  grid-template-columns: minmax(240px, 0.75fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 5vw, 5rem);
  background: var(--mint);
}

.body-copy {
  display: grid;
  gap: 1rem;
}

.body-copy p {
  color: #26302d;
  font-size: clamp(1rem, 1.4vw, 1.25rem);
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.event-card img {
  aspect-ratio: 16 / 10;
  border-bottom: 1px solid var(--line);
}

.event-content {
  padding: 1.4rem;
}

.event-season,
.category,
.pending {
  color: var(--green);
  font-family: spartan-bold, sans-serif;
  font-size: 0.82rem;
  text-transform: uppercase;
}

.event-content h3,
.project-card h3,
.benefit-card h3 {
  margin: 0.4rem 0 0.8rem;
}

.mini-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  margin-top: 1.2rem;
}

.mini-stats li {
  padding: 0.65rem;
  background: #edf4f1;
  color: var(--ink);
  font-family: spartan-sb, sans-serif;
  font-size: 0.86rem;
  line-height: 1.25;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag-row span {
  padding: 0.4rem 0.58rem;
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink);
  font-size: 0.82rem;
}

.project-grid,
.benefit-grid,
.tier-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  min-height: 440px;
  padding: 1rem;
}

.project-screenshot {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  margin-bottom: 1rem;
  border: 1px solid var(--line);
  object-fit: cover;
  object-position: top center;
  background: #f1f5f3;
}

.project-card p {
  margin-bottom: 1rem;
}

.project-card a,
.text-link {
  margin-top: auto;
  color: var(--green);
  font-family: spartan-bold, sans-serif;
}

.text-link {
  display: inline-flex;
  margin-top: 1.5rem;
}

.partners {
  background: var(--white);
}

.partner-layout {
  display: grid;
  grid-template-columns: minmax(420px, 0.95fr) minmax(320px, 0.65fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: start;
}

.partner-layout h3 {
  margin-bottom: 1rem;
}

.sponsor-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  max-width: 680px;
}

.sponsor-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 178px;
  padding: 1.2rem;
}

.sponsor-card img {
  width: 100%;
  max-height: 92px;
  object-fit: contain;
  object-position: center center;
}

.text-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 76px;
  color: var(--ink);
  font-family: spartan-bold, sans-serif;
  font-size: 1.2rem;
  text-align: center;
}

.collaborators {
  padding: 1.25rem;
  background: #edf4f1;
  border: 1px solid var(--line);
}

.collaborators ul {
  display: grid;
  gap: 0.75rem;
}

.collaborators li,
.tier-card li {
  color: var(--ink);
  line-height: 1.45;
}

.collaborators li::before,
.tier-card li::before {
  content: "";
  display: inline-block;
  width: 0.45rem;
  height: 0.45rem;
  margin-right: 0.55rem;
  background: var(--gold);
  border: 1px solid var(--ink);
  vertical-align: 0.08rem;
}

.partner-photo-strip {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  max-width: 920px;
  margin-top: 1.5rem;
}

.partner-photo-strip img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid var(--line);
  object-fit: cover;
}

.why {
  display: grid;
  grid-template-columns: minmax(300px, 0.8fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: start;
}

.visual-panel img {
  aspect-ratio: 4 / 5;
  border: 2px solid var(--ink);
  box-shadow: -10px 10px 0 var(--gold);
}

.benefit-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 1.5rem;
}

.benefit-card {
  padding: 1.1rem;
}

.opportunities {
  background: #f0f4f2;
}

.tier-card {
  padding: 1.1rem;
}

.tier-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--line);
}

.tier-header strong {
  color: var(--red);
  font-family: spartan-bold, sans-serif;
  font-size: 1.35rem;
  white-space: nowrap;
}

.pending {
  margin: 0.9rem 0;
  color: var(--muted);
}

.tier-card ul {
  display: grid;
  gap: 0.72rem;
}

.custom-note {
  max-width: 780px;
  margin-top: 1.5rem;
  color: #26302d;
}

.contact {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.7fr);
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: center;
  background: var(--ink);
}

.contact .eyebrow,
.contact h2,
.contact p,
.contact-note {
  color: var(--white);
}

.contact p {
  max-width: 760px;
}

.contact .button.secondary {
  border-color: var(--white);
  background: transparent;
  color: var(--white);
}

.contact-image img {
  aspect-ratio: 16 / 11;
  border: 2px solid var(--white);
}

.contact-note {
  margin-top: 1rem;
  opacity: 0.76;
}

@media (max-width: 1100px) {
  .nav-links {
    display: none;
  }

  .site-header {
    justify-content: space-between;
  }

  .hero,
  .about,
  .section-heading,
  .why,
  .contact,
  .partner-layout {
    grid-template-columns: 1fr;
  }

  .stat-grid,
  .project-grid,
  .tier-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero {
    min-height: auto;
  }

  .hero-media img,
  .visual-panel img {
    aspect-ratio: 16 / 10;
  }
}

@media (max-width: 760px) {
  .site-header {
    min-height: 68px;
    padding: 0.65rem 1rem;
  }

  .brand img {
    width: 122px;
    height: 44px;
  }

  .header-cta {
    min-height: 40px;
    padding: 0 0.9rem;
  }

  .section-band {
    padding: 3.2rem 1rem;
  }

  h1 {
    max-width: 100%;
    font-size: clamp(2.45rem, 12.4vw, 3.45rem);
    line-height: 1;
    overflow-wrap: break-word;
  }

  h2 {
    font-size: clamp(2rem, 11vw, 3.25rem);
  }

  .hero-actions,
  .contact-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .button {
    width: 100%;
  }

  .stat-grid,
  .event-grid,
  .project-grid,
  .sponsor-grid,
  .partner-photo-strip,
  .benefit-grid,
  .tier-grid {
    grid-template-columns: 1fr;
  }

  .mini-stats {
    grid-template-columns: 1fr;
  }

  .project-card {
    min-height: auto;
  }

  .hero-media img,
  .visual-panel img,
  .contact-image img {
    box-shadow: none;
  }
}
</style>
