import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>M</span>
          Mohith Muvvala
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk →
        </a>
      </nav>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="small-title">
            COMPUTER SCIENCE • AI • DATA
          </p>

          <h1>
            Hi, I'm
            <br />
            <span>Mohith Muvvala.</span>
          </h1>

          <h2>
            I build intelligent solutions
            <br />
            that turn ideas into <span>impact.</span>
          </h2>

          <p className="hero-description">
            Computer Science graduate focused on AI, data analytics,
            automation and software development. I enjoy turning
            complex problems into practical digital products.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work →
            </a>

            <a href="#about" className="secondary-button">
              More About Me
            </a>
          </div>

          <div className="hero-stats">

            <div>
              <strong>3+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>3</strong>
              <span>Internships</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Focus</span>
            </div>

            <div>
              <strong>2026</strong>
              <span>Graduate</span>
            </div>

          </div>

        </div>


       {/* HERO VISUAL */}
<div className="hero-visual">

  <div className="orbital orbital-one"></div>
  <div className="orbital orbital-two"></div>
  <div className="orbital orbital-three"></div>

  {/* PROFILE ORB */}
  <div className="ai-orb">

    <div className="profile-ring">

      <img
        src="/images/profile.jpg"
        alt="Mohith Muvvala"
        className="profile-photo"
      />

    </div>

  </div>


  {/* AI / LLM */}
  <div className="floating-card card-one">

    <span>✦</span>
    AI / LLM

  </div>


  {/* DATA ANALYTICS */}
  <div className="floating-card card-two">

    <span>⌁</span>
    Data Analytics

  </div>


  {/* SOFTWARE */}
  <div className="floating-card card-three">

    <span>◈</span>
    Software

  </div>

</div>
        

      </section>


      {/* ABOUT */}
<section
  id="about"
  className="section about-section"
>

  <div className="section-label">
    01 — MY STORY
  </div>

  <div className="about-grid">

    <div>
      <h2>
        From curiosity
        <br />
        to <span>creating impact.</span>
      </h2>
    </div>

    <div className="about-text">

      <p>
        I'm a Computer Science graduate from SRM University,
        Andhra Pradesh, with a Minor in Management and a strong
        interest in AI, data and technology.
      </p>

      <p>
        I enjoy exploring how emerging technologies such as
        Generative AI and LLMs can be combined with data and
        software to solve practical problems.
      </p>

      <p>
        Through internships and projects, I've worked across
        AI/ML, data analytics and full-stack development — from
        building LLM-powered testing tools to developing an
        AI trip planner and analyzing customer churn.
      </p>

      <p>
        I'm continuously learning, building and looking for
        opportunities where I can contribute, grow and create
        meaningful solutions.
      </p>

    </div>

  </div>

</section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">

        <div className="projects-intro">

          <div>

            <div className="section-label">
              02 — SELECTED WORK
            </div>

            <h2>
              Projects that
              <br />
              <span>solve real problems.</span>
            </h2>

          </div>

          <p>
            A collection of experiments, products and analytical solutions
            built across AI, data and software development.
          </p>

        </div>


        <div className="showcase-projects">


          {/* PROJECT 01 */}
<article className="showcase-card project-purple">

  <div className="project-info">

    <div className="project-topline">

      <span className="project-index">
        01
      </span>

      <span className="project-category">
        AI / LLM
      </span>

    </div>


    <h3>
      Coverage-Guided
      <br />
      Automated Test Case
      <br />
      Generation Using LLMs
    </h3>


    <p>
      An intelligent testing tool that uses large language models
      to generate, execute and iteratively improve test cases based
      on code coverage.
    </p>


    <div className="project-technologies">

      <span>Python</span>
      <span>Gemini API</span>
      <span>FastAPI</span>
      <span>gcov</span>
      <span>LLM</span>

    </div>


    <div className="project-actions">

      <a
        href="https://github.com/MohitMuvvala04/Coverage-Guided-Automated-Test-Case-Generation-Using-Large-Language-Models/blob/main/README.md"
        className="project-action primary-project-action"
        target="_blank"
        rel="noopener noreferrer"
      >
        Project Details ↗
      </a>

      <a
        href="https://github.com/MohitMuvvala04/Coverage-Guided-Automated-Test-Case-Generation-Using-Large-Language-Models"
        className="project-action"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>

    </div>

  </div>


  <div className="project-visual">

    <div className="code-window">

      <div className="window-header">

        <div className="window-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <small>
          test_generator.py
        </small>

      </div>


      <div className="code-content">

        <div>
          <span className="code-purple">
            def
          </span>{" "}
          generate_tests
          <span className="code-white">
            ():
          </span>
        </div>

        <div className="code-indent">
          source ={" "}
          <span className="code-green">
            "program.c"
          </span>
        </div>

        <div className="code-indent">
          tests = llm.
          <span className="code-blue">
            generate
          </span>
          (source)
        </div>

        <div className="code-indent">
          coverage = run_tests(tests)
        </div>

        <div className="code-indent">
          <span className="code-purple">
            return
          </span>{" "}
          improve(coverage)
        </div>

      </div>


      <div className="coverage-panel">

        <div className="coverage-title">

          <span>
            CODE COVERAGE
          </span>

          <strong>
            90%+
          </strong>

        </div>


        <div className="coverage-bar">
          <div></div>
        </div>


        <div className="coverage-stats">

          <span>
            LINE 92%
          </span>

          <span>
            BRANCH 88%
          </span>

          <span>
            ITERATION 04
          </span>

        </div>

      </div>

    </div>

  </div>

</article>


         {/* PROJECT 02 */}
<article className="showcase-card project-blue">

  <div className="project-info">

    <div className="project-topline">

      <span className="project-index">
        02
      </span>

      <span className="project-category">
        FULL STACK AI
      </span>

    </div>

    <h3>
      Prayan AI
      <br />
      Trip Planner
    </h3>

    <p>
      A full-stack AI travel planner that transforms a destination
      and travel preferences into personalized trip recommendations
      and itineraries.
    </p>

    <div className="project-technologies">
      <span>React</span>
      <span>Node.js</span>
      <span>Gemini</span>
      <span>REST APIs</span>
    </div>

    <div className="project-actions">

      {/* PROJECT DETAILS → README */}
      <a
        href="https://github.com/MohitMuvvala04/Prayan-AI-Trip-Planner/blob/main/README.md"
        className="project-action primary-project-action"
        target="_blank"
        rel="noopener noreferrer"
      >
        Project Details ↗
      </a>

      {/* GITHUB → REPOSITORY */}
      <a
        href="https://github.com/MohitMuvvala04/Prayan-AI-Trip-Planner"
        className="project-action"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>

      {/* LIVE DEMO → DEPLOYED WEBSITE */}
      <a
        href="https://prayan-ai-trip-planner.vercel.app/"
        className="project-action"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo ↗
      </a>

    </div>

  </div>

  <div className="project-visual">

    <div className="travel-ui">

      <div className="travel-header">
        <span>PRAYAN AI</span>
        <small>AI TRIP PLANNER</small>
      </div>

      <div className="travel-location">
        <small>YOUR NEXT JOURNEY</small>
        <strong>Explore India</strong>
      </div>

      <div className="route-line">

        <div className="route-point active">
          <span></span>
          Hyderabad
        </div>

        <div className="route-path"></div>

        <div className="route-point">
          <span></span>
          Goa
        </div>

      </div>

      <div className="travel-cards">

        <div>
          <strong>5 Days</strong>
          <small>Duration</small>
        </div>

        <div>
          <strong>AI Plan</strong>
          <small>Generated</small>
        </div>

        <div>
          <strong>12</strong>
          <small>Activities</small>
        </div>

      </div>

    </div>

  </div>

</article>

          {/* PROJECT 03 */}
<article className="showcase-card project-green">

  <div className="project-info">

    <div className="project-topline">

      <span className="project-index">
        03
      </span>

      <span className="project-category">
        DATA ANALYTICS
      </span>

    </div>

    <h3>
      Customer Churn
      <br />
      Analysis
    </h3>

    <p>
      SQL and Power BI analysis focused on identifying customer
      churn patterns, retention opportunities and business KPIs.
    </p>

    <div className="project-technologies">
      <span>SQL</span>
      <span>Power BI</span>
      <span>EDA</span>
      <span>Excel</span>
    </div>

    <div className="project-actions">

      {/* VIEW ANALYSIS → README */}
      <a
        href="https://github.com/MohitMuvvala04/customer-churn-analysis/blob/main/README.md"
        className="project-action primary-project-action"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Analysis ↗
      </a>

      {/* GITHUB → REPOSITORY */}
      <a
        href="https://github.com/MohitMuvvala04/customer-churn-analysis"
        className="project-action"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>

    </div>

  </div>

  <div className="project-visual">

    <div className="dashboard-ui">

      <div className="dashboard-header">

        <div>
          <small>
            CUSTOMER ANALYTICS
          </small>

          <strong>
            Retention Overview
          </strong>
        </div>

        <span>
          2026
        </span>

      </div>

      <div className="metric-row">

        <div>
          <small>CHURN RATE</small>
          <strong>18%</strong>
        </div>

        <div>
          <small>RETENTION</small>
          <strong>82%</strong>
        </div>

        <div>
          <small>CUSTOMERS</small>
          <strong>4.8K</strong>
        </div>

      </div>

      <div className="chart">

        <div className="chart-grid"></div>

        <svg
          viewBox="0 0 500 180"
          preserveAspectRatio="none"
        >

          <polyline
            points="0,140 70,120 140,130 210,80 280,100 350,55 420,70 500,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />

        </svg>

      </div>

      <div className="chart-labels">

        <span>JAN</span>
        <span>MAR</span>
        <span>MAY</span>
        <span>JUL</span>
        <span>SEP</span>
        <span>DEC</span>

      </div>

    </div>

  </div>

</article>
</div>

      </section>


      {/* EXPERIENCE */}
<section
  id="experience"
  className="section experience-section"
>

  <div className="section-label">
    03 — EXPERIENCE
  </div>

  <h2>
    Learning by
    <br />
    <span>building.</span>
  </h2>

  <div className="timeline">


    {/* EXPERIENCE 01 */}
    <div className="timeline-item">

      <div className="timeline-year">
        2026
      </div>

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <div className="experience-tag">
          DATA ANALYTICS
        </div>

        <h3>
          Data Analyst Intern
        </h3>

        <p className="company">
          Bluestock Fintech
        </p>

        <p>
          Worked with financial datasets, ETL workflows and
          exploratory data analysis to identify trends and
          generate insights.
        </p>

      </div>

    </div>


    {/* EXPERIENCE 02 */}
    <div className="timeline-item">

      <div className="timeline-year">
        2025
      </div>

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <div className="experience-tag">
          SOCIAL IMPACT
        </div>

        <h3>
          Social Impact Intern
        </h3>

        <p className="company">
          ISKCON, Vijayawada
        </p>

        <p>
          Managed data for 800+ students and coordinated
          participation in activities focused on culture, arts,
          heritage preservation and environmental sustainability,
          ensuring every student participated in at least one activity.
        </p>

      </div>

    </div>


    {/* EXPERIENCE 03 */}
    <div className="timeline-item">

      <div className="timeline-year">
        2024
      </div>

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <div className="experience-tag purple">
          AI / ML
        </div>

        <h3>
          AI & ML Intern
        </h3>

        <p className="company">
          EDUNET Foundation • IBM SkillsBuild
        </p>

        <p>
          Built Python-based ETL workflows and worked with
          Power BI dashboards for data analysis and reporting.
        </p>

      </div>

    </div>


  </div>

</section>

      {/* EDUCATION */}
<section
  id="education"
  className="education-section"
>

  <div className="education-heading">

    <div>

      <div className="section-label">
        04 — EDUCATION
      </div>

      <h2>
        The foundation
        <br />
        <span>behind my journey.</span>
      </h2>

    </div>

    <p>
      From school to computer science and management,
      each stage shaped how I approach technology and
      problem solving.
    </p>

  </div>


  <div className="education-timeline">


    {/* BTECH */}
    <div className="education-item education-featured">

      <div className="education-year">
        2022
        <span>→</span>
        2026
      </div>

      <div className="education-dot"></div>

      <div className="education-main">

        <span className="education-degree">
          B.TECH — COMPUTER SCIENCE & ENGINEERING
        </span>

        <div className="education-institution">

          <h3>
            SRM UNIVERSITY, AP
          </h3>

          <img
            src="/images/srm-logo.png"
            alt="SRM University logo"
          />

        </div>

        <p>
          Minor in Management
        </p>

        <div className="education-result">
          CGPA <strong>7.57</strong>
        </div>

      </div>

      <div className="education-status">
        GRADUATED
      </div>

    </div>


    {/* INTERMEDIATE */}
    <div className="education-item">

      <div className="education-year">
        2020
        <span>→</span>
        2022
      </div>

      <div className="education-dot"></div>

      <div className="education-main">

        <span className="education-degree">
          INTERMEDIATE — MPC
        </span>

        <div className="education-institution">

          <h3>
            Sri Sarada Educational Institutions
          </h3>

          <img
            src="/images/sarada-logo.png"
            alt="Sri Sarada Educational Institutions logo"
          />

        </div>

        <p>
          Mathematics · Physics · Chemistry
        </p>

        <div className="education-result">
          Marks <strong>947 / 1000</strong>
          <span> · 94.7%</span>
        </div>

      </div>

    </div>


    {/* SCHOOL */}
    <div className="education-item">

      <div className="education-year">
        2020
      </div>

      <div className="education-dot"></div>

      <div className="education-main">

        <span className="education-degree">
          SSC — CLASS 10
        </span>

        <div className="education-institution">

          <h3>
            Sri Telaprolu Bapanaiah English Medium High School
          </h3>

          <img
            src="/images/school-logo.png"
            alt="Sri Telaprolu Bapanaiah English Medium High School logo"
          />

        </div>

        <p>
          Secondary School Education
        </p>

        <div className="education-result">
          Marks <strong>564 / 600</strong>
          <span> · 94%</span>
        </div>

      </div>

    </div>


  </div>

</section>


      {/* SKILLS */}
<section
  id="skills"
  className="section skills-section"
>

  <div className="section-label">
    05 — TECHNOLOGY
  </div>

  <div className="skills-heading">

    <h2>
      My
      <br />
      <span>tech universe.</span>
    </h2>

    <p>
      Technologies and tools I use to build, analyze and
      experiment.
    </p>

  </div>


  <div className="skills-grid">


    {/* AI / LLM */}
    <div className="skill-box">

      <div className="skill-icon">
        ✦
      </div>

      <h3>
        AI / LLM
      </h3>

      <p>
        Generative AI · LLM Integration · AI Agents · Gemini API ·
        ChatGPT · Claude · RAG · Prompt Engineering · Machine Learning
      </p>

    </div>


    {/* DATA ANALYTICS */}
    <div className="skill-box">

      <div className="skill-icon">
        ◈
      </div>

      <h3>
        Data Analytics
      </h3>

      <p>
        Python · SQL · Power BI · Excel · EDA · Data Visualization
      </p>

    </div>


    {/* DEVELOPMENT */}
    <div className="skill-box">

      <div className="skill-icon">
        ⌘
      </div>

      <h3>
        Development
      </h3>

      <p>
        JavaScript · React · FastAPI · REST APIs · Git · HTML · CSS
      </p>

    </div>


    {/* CLOUD & TOOLS */}
    <div className="skill-box">

      <div className="skill-icon">
        ◇
      </div>

      <h3>
        Cloud & Tools
      </h3>

      <p>
        AWS · Docker · Streamlit · MySQL · GitHub · Agile
      </p>

    </div>


  </div>


  {/* MANAGEMENT */}
  <div className="skill-card management-card">

    <div className="skill-icon">
      ◇
    </div>

    <h3>
      Management
    </h3>

    <p>
      Consumer Behaviour · Retail Banking · Brand Management ·
      Wealth Management · Managerial Skills · Interpersonal Dynamics
    </p>

    <span className="management-label">
      MINOR IN MANAGEMENT
    </span>

  </div>


</section>


{/* CERTIFICATIONS */}
<section id="certifications" className="certifications-section">

  <div className="certifications-heading">

    <span className="certifications-label">
      CERTIFICATIONS
    </span>

    <h2>
      Professional Certifications
    </h2>

    <p>
      Industry-recognized certifications across cloud computing,
      artificial intelligence, and management.
    </p>

  </div>


  <div className="certifications-grid">

    {/* AWS */}
    <div className="certificate-card">

      <div className="certificate-top">

        <div className="certificate-icon aws-icon">
          AWS
        </div>

        <span className="certificate-number">
          01
        </span>

      </div>


      <div className="certificate-content">

        <span className="certificate-category">
          CLOUD COMPUTING
        </span>

        <h3>
          AWS Certified Solutions Architect – Associate
        </h3>

        <p className="certificate-issuer">
          Amazon Web Services (AWS)
        </p>

        <div className="certificate-meta">
          <span>Issued Aug 9, 2026</span>
          <span>Valid until Aug 9, 2029</span>
        </div>

        <p className="credential-id">
          Credential ID: be4ae93ec01b4405bc9d4062bd115c6d
        </p>

        <a
          href="https://www.credly.com/badges/846a39f9-c747-421a-9953-f3a6b75bd1f3/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          Verify Credential ↗
        </a>

      </div>

    </div>


    {/* ORACLE */}
    <div className="certificate-card">

      <div className="certificate-top">

        <div className="certificate-icon oracle-icon">
          ORACLE
        </div>

        <span className="certificate-number">
          02
        </span>

      </div>


      <div className="certificate-content">

        <span className="certificate-category">
          ARTIFICIAL INTELLIGENCE
        </span>

        <h3>
          Oracle Certified Foundations Associate – Agentic AI Certified Foundations Associate
        </h3>

        <p className="certificate-issuer">
          Oracle
        </p>

        <div className="certificate-meta">
          <span>Issued Aug 2026</span>
          <span>Valid until Aug 10, 2028</span>
        </div>

        <a
          href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=FB62FE9140161ECDCDE8E2D508DB7BBA1CEF714ADBB2F62C30140A36EA2635C1"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          Verify Credential ↗
        </a>

      </div>

    </div>


    {/* NPTEL */}
    <div className="certificate-card">

      <div className="certificate-top">

        <div className="certificate-icon nptel-icon">
          NPTEL
        </div>

        <span className="certificate-number">
          03
        </span>

      </div>


      <div className="certificate-content">

        <span className="certificate-category">
          MANAGEMENT
        </span>

        <h3>
          Managerial Skills for Interpersonal Dynamics
        </h3>

        <p className="certificate-issuer">
          NPTEL
        </p>

        <div className="certificate-meta">
          <span>Issued Oct 2025</span>
        </div>

        <p className="credential-id">
          Credential ID: NPTEL25MG91S672100948
        </p>

        <a
          href="https://nptel.ac.in/noc/E_Certificate/NPTEL25MG91S67210094810652347"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          Verify Certificate ↗
        </a>

      </div>

    </div>

  </div>

</section>


           {/* CONTACT */}
<section
  id="contact"
  className="contact-section"
>

  <div className="contact-glow"></div>

  <div className="section-label">
    06 — LET'S CONNECT
  </div>

  <h2>
    Let's build something
    <br />
    <span>intelligent.</span>
  </h2>

  <p>
    Have an opportunity, idea or interesting problem?
    <br />
    I'd love to hear from you.
  </p>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=mohithmuvvala471@gmail.com"
    className="primary-button contact-button"
    target="_blank"
    rel="noreferrer"
  >
    Send a Message →
  </a>

  <div className="social-links">

    {/* LINKEDIN */}
    <a
  href="https://www.linkedin.com/in/mohith-muvvala/"
  target="_blank"
  rel="noreferrer"
>
  <svg
    className="social-icon linkedin-icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="22"
      height="22"
      rx="4"
      fill="#0A66C2"
    />

    <path
      d="M7.2 9.1H4.9V19h2.3V9.1ZM6.05 4.4C5.3 4.4 4.7 5 4.7 5.75S5.3 7.1 6.05 7.1 7.4 6.5 7.4 5.75 6.8 4.4 6.05 4.4ZM19.1 13.3C19.1 10.3 17.5 8.8 15.3 8.8C13.5 8.8 12.7 9.8 12.3 10.4V9.1H10V19h2.3v-4.9C12.3 12.8 12.7 11 14.3 11C15.9 11 15.9 12.5 15.9 13.8V19h2.3v-5.7Z"
      fill="#FFFFFF"
    />
  </svg>

  <span>LinkedIn</span>
</a>


    {/* GITHUB */}
    <a
      href="https://github.com/MohitMuvvala04"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://cdn.simpleicons.org/github/ffffff"
        alt="GitHub"
        className="social-icon"
      />
      <span>GitHub</span>
    </a>


    {/* GMAIL */}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=mohithmuvvala471@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://cdn.simpleicons.org/gmail/ffffff"
        alt="Email"
        className="social-icon"
      />
      <span>Email</span>
    </a>


    {/* PHONE */}
    <a href="tel:+917285945541">

      <svg
        className="social-icon phone-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 16.92V19.92C22 20.48 21.56 20.95 21 20.99C20.53 21.03 20.07 21.05 19.62 21.05C10.43 21.05 3 13.62 3 4.43C3 3.98 3.02 3.52 3.06 3.05C3.1 2.49 3.57 2.05 4.13 2.05H7.13C7.62 2.05 8.03 2.4 8.11 2.88C8.2 3.42 8.33 3.95 8.5 4.46C8.63 4.88 8.53 5.34 8.21 5.66L6.48 7.39C7.89 10.18 10.14 12.43 12.93 13.84L14.66 12.11C14.98 11.79 15.44 11.69 15.86 11.82C16.37 11.99 16.9 12.12 17.44 12.21C17.92 12.29 18.27 12.7 18.27 13.19V16.19C18.27 16.75 17.83 17.19 17.27 17.23C16.83 17.26 16.38 17.28 15.93 17.28"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>Phone</span>

    </a>

  </div>

</section>


<div className="footer">
  © 2026 Mohith Muvvala. Built with curiosity & code.
</div>

</div>
);
}

export default App;