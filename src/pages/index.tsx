import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import styles from "./index.module.css";

function ResumeHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.resumeHeader}>
      <div className={styles.puzzlePiece1}>🧩</div>
      <div className={styles.puzzlePiece2}>🧩</div>
      <div className={styles.puzzlePiece3}>🧩</div>
      <div className={styles.puzzlePiece4}>🧩</div>
      <div className="container">
        <div className={styles.profileSection}>
          <div className={styles.profileImage}>
            <img src="/img/logo-ho.svg" alt="Herwin Ochoa" className={styles.logoImage} />
          </div>
          <div className={styles.profileInfo}>
            <Heading as="h1" className={styles.name}>
              Herwin Ochoa
            </Heading>
            <p className={styles.title}>Senior Software Engineer</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:herwin.ochoa@gmail.com">herwin.ochoa@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Madrid, Spain</span>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/herwindo" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  const { siteConfig } = useDocusaurusContext();

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>About Me</Heading>
        <p className={styles.aboutText}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/introduction"
          >
            View Full Resume
          </Link>
          <button
            className="button button--secondary button--lg"
            onClick={handleDownloadPDF}
          >
            <FontAwesomeIcon icon={faDownload} /> Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "Angular", "HTML/CSS", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "C#", "REST APIs", "GraphQL", "Microservices"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Buildkite", "Cloudflare"]
    },
    {
      category: "Database & Tools",
      items: ["PostgreSQL", "DynamoDB", "Elasticsearch", "Redis", "Datadog"]
    }
  ];

  return (
    <section className={clsx(styles.section, styles.skillsSection)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Technical Skills</Heading>
        <div className={styles.skillsGrid}>
          {skills.map((skillGroup, idx) => (
            <div key={idx} className={styles.skillCard}>
              <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
              <div className={styles.skillTags}>
                {skillGroup.items.map((skill, skillIdx) => (
                  <span key={skillIdx} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Seek Asia / Jobstreet",
      location: "Kuala Lumpur, Malaysia",
      period: "Nov 2018 - Jul 2024",
      description: [
        "Led and developed features of Jora's Employer System by doing requirements gathering, analysis and system design, development, release and maintenance",
        "Mentored junior developers, promoting best practices and fostering a culture of continuous learning",
        "Utilized modern technologies such as serverless to optimize system events and reduce costs",
        "Streamlined development workflows through CI/CD pipelines, enhancing team productivity",
        "Conducted code reviews and provided constructive feedback to maintain high quality code across the team"
      ],
      techStack: "Node, React, TypeScript, AWS (SQS, SNS, Elasticsearch, Elasticbeanstalk, Postgres, DynamoDB, Lambda, CDK), Datadog, Buildkite, Terraform, Cloudflare"
    },
    {
      title: "Software Engineer",
      company: "Ambition Global Services",
      location: "Kuala Lumpur, Malaysia",
      period: "Feb 2017 - Oct 2018",
      description: [
        "Worked as a consultant for Seek Asia",
        "Developed features for employer systems using modern web technologies",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Absorbed by Seek Asia after demonstrating strong performance"
      ],
      techStack: "Node, React, TypeScript, AWS"
    },
    {
      title: "Software Engineer III",
      company: "Blast Asia",
      location: "Mandaluyong, Philippines",
      period: "Jun 2014 - Oct 2016",
      description: [
        "Coordinated with client development teams to ensure feature work is understood from both ends",
        "Collaborated with client development team to implement best practices including code reviews and testing",
        "Engaged in problem solving activities to identify and resolve complex technical issues",
        "Contributed to project planning and estimation, ensuring timely delivery of features",
        "Presented feature updates to clients at end of sprint"
      ],
      techStack: "C# MVC and Webforms, Angular, React, Azure"
    },
    {
      title: "Senior Software Engineer",
      company: "Accenture",
      location: "Pasig, Philippines",
      period: "Apr 2010 - Jun 2014",
      description: [
        "Gathered requirements from clients on current processes and created design documents to improve them",
        "Created automation scripts to eliminate manual human intervention",
        "Deployed end to end automation solutions on servers",
        "Mentored junior developers on automation tools and guided them on their first projects"
      ],
      techStack: "VBScript, Shell Script (Bash), BMC Arium Orchestrator, Opalis, C# Webforms"
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Work Experience</Heading>
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.jobTitle}>{exp.title}</h3>
                <div className={styles.companyInfo}>
                  <div className={styles.companyWrapper}>
                    <span className={styles.company}>{exp.company}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                {exp.techStack && (
                  <div className={styles.techStack}>
                    <strong>Tech Stack:</strong> {exp.techStack}
                  </div>
                )}
                <ul className={styles.jobDescription}>
                  {exp.description.map((item, descIdx) => (
                    <li key={descIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const highlights = [
    {
      icon: "🚀",
      title: "10+ Years Experience",
      description: "Over a decade of experience in web development"
    },
    {
      icon: "💡",
      title: "Problem Solver",
      description: "Passionate about solving complex technical challenges"
    },
    {
      icon: "🎯",
      title: "Results Driven",
      description: "Focused on delivering high-quality, scalable solutions"
    }
  ];

  return (
    <section className={clsx(styles.section, styles.highlightsSection)}>
      <div className="container">
        <div className={styles.highlightsGrid}>
          {highlights.map((highlight, idx) => (
            <div key={idx} className={styles.highlightCard}>
              <div className={styles.highlightIcon}>{highlight.icon}</div>
              <h3 className={styles.highlightTitle}>{highlight.title}</h3>
              <p className={styles.highlightDescription}>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(
      `.${styles.section}, .${styles.highlightCard}, .${styles.skillCard}, .${styles.timelineItem}`
    );

    elementsToAnimate.forEach((el) => {
      el.classList.add(styles.fadeInUp);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title="Resume"
      description="Professional resume of Herwin Ochoa - Software Engineer"
    >
      <ResumeHeader />
      <main>
        <AboutSection />
        <HighlightsSection />
        <SkillsSection />
        <ExperienceSection />
      </main>
    </Layout>
  );
}
