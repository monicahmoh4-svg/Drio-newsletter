import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DRIO Newsletter — Issue No. 1 | May 2026</title>
      </Head>

      <div className="wrap">

        {/* ══ MASTHEAD ══ */}
        <header className="masthead">
          <div className="mast-top">
            <div className="mast-stripe"></div>
            <div className="mast-logo-wrap">
              <img className="mast-logo" src="/images/image1.png" alt="KAFU Logo" />
            </div>
            <div className="mast-center">
              <div className="mast-sup">A Publication from the</div>
              <div className="mast-title">
                Directorate of Research,<br />
                <span>Innovation &amp; Outreach</span>
              </div>
              <div className="mast-sub">Kaimosi Friends University — KAFU</div>
            </div>
            <div className="mast-right">
              <img className="mast-logo" src="/images/image48.png" alt="KAFU Logo" />
            </div>
            <div className="mast-stripe"></div>
          </div>
          <div className="mast-bar">
            <span>Issue No.&nbsp;1</span>
            <span>✦ &nbsp; DRIO Newsletter &nbsp; ✦</span>
            <span>May 2026</span>
          </div>
        </header>

        {/* ══ HERO ══ */}
        <div className="hero">
          <img className="hero-img" src="/images/image2.png" alt="KAFU Campus" />
          <div className="hero-overlay">
            <span className="hero-kicker">Annual Research Report · 2025</span>
            <h1 className="hero-h">
              Driving Research Excellence,<br />
              <em>Innovation &amp; Impact</em><br />
              at KAFU
            </h1>
            <p className="hero-sub">
              A year of milestone grants, national awards, student innovation
              and expanding global partnerships.
            </p>
          </div>
          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </div>

        {/* ══ TABLE OF CONTENTS ══ */}
        <div className="toc-wrap reveal">
          <div className="sec-eyebrow">Inside This Issue</div>
          <div className="sec-h">Table of Contents</div>
          <div className="rule"></div>
          <div className="toc-grid">
            {[
              'Leadership Messages',
              'DRIO Mandate & Goals',
              'Key Activities (2025)',
              'Research Performance Highlights',
              'Publications & Citation Visibility',
              'Grants, Fellowships & Funding',
              'Conferences & Scholarly Engagement',
              'Awards & National Recognition',
              'Science Fair & Open Day',
              'Innovation & Intellectual Property',
              'Collaborations & Research Themes',
              'Citizen Science Project Spotlight',
              'Students Corner',
              'Outlook 2026–2027',
            ].map((title, i) => (
              <div className="toc-row" key={i}>
                <span className="toc-dot">{i + 1}</span>{title}
              </div>
            ))}
          </div>
        </div>

        {/* ══ 1. LEADERSHIP ══ */}
        <section className="sec sec-alt">
          <div className="sec-eyebrow reveal">Section 1</div>
          <div className="sec-h reveal">Leadership Messages</div>
          <div className="rule reveal"></div>
          <div className="lead-grid">
            <div className="lead-card reveal reveal-left">
              <div className="lead-head">
                <img className="lead-photo" src="/images/image4.jpeg" alt="Prof. Fred Amimo" />
                <div>
                  <div className="lead-name">Prof. Fred Amimo</div>
                  <div className="lead-role">Deputy Vice Chancellor — Academic,<br />Student Affairs &amp; Research</div>
                </div>
              </div>
              <div className="lead-body">
                <p>The Directorate of Research, Innovation and Outreach remains a central pillar in advancing KAFU&apos;s academic mission. In 2025, the University prioritised research quality, postgraduate training, and staff development, leading to improved research outputs and increased participation in competitive funding calls. The deliberate focus on mentorship, ethics, and multidisciplinary collaboration has strengthened the research culture across all Schools. I encourage staff and students to continue engaging actively with DRIO as we consolidate these gains and scale our research impact in 2026.</p>
              </div>
            </div>
            <div className="lead-card reveal reveal-right">
              <div className="lead-head">
                <img className="lead-photo" src="/images/image5.jpeg" alt="Dr. Victor Shikuku" />
                <div>
                  <div className="lead-name">Dr. Victor Shikuku, AMRSC</div>
                  <div className="lead-role">Director — Research,<br />Innovation &amp; Outreach</div>
                </div>
              </div>
              <div className="lead-body">
                <p>The year 2025 marked significant progress in strengthening research coordination, grant support, innovation systems, and partnerships at KAFU. DRIO focused on creating an enabling environment for researchers, improving compliance, and positioning the University for competitive funding. This bulletin reflects the collective effort of staff, students, and partners. As we look to 2026, DRIO remains committed to supporting multidisciplinary research, innovation commercialisation, and impactful community engagement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. MANDATE & GOALS ══ */}
        <section className="sec">
          <div className="sec-eyebrow reveal">Section 2</div>
          <div className="sec-h reveal">DRIO Mandate &amp; Strategic Goals</div>
          <div className="rule reveal"></div>
          <div className="mandate-layout">
            <div className="reveal reveal-left">
              <p>DRIO is driven by a focused set of objectives that cultivate a strong research culture, stimulate innovation and expand opportunities for collaboration and funding — positioning KAFU as a hub of knowledge generation and practical solutions to emerging societal challenges.</p>
              <div className="mandate-2col">
                {[
                  ['🔬', 'Coordinate, regulate and support research activities across all Schools'],
                  ['💡', 'Promote innovation, technology transfer and intellectual property development'],
                  ['🤝', 'Facilitate multidisciplinary and inter-institutional research collaboration'],
                  ['💰', 'Mobilise resources through strategic grant positioning and partnerships'],
                  ['🌍', 'Strengthen community outreach and societal impact of research'],
                  ['⚖️', 'Ensure compliance with research ethics, biosafety and integrity standards'],
                ].map(([icon, text], i) => (
                  <div className="mandate-pill" key={i}>
                    <span>{icon}</span><p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-right">
              <div className="pi" style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '10px' }}>
                <img src="/images/image6.jpeg" alt="DRIO Activities" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="pi" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <img src="/images/image60.jpeg" alt="DRIO Activities" style={{ width: '100%', height: '130px', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
          <h3 className="reveal" style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '15px', fontWeight: 700, color: 'var(--navy)', margin: '26px 0 13px' }}>
            DRIO Goals (2025–2027)
          </h3>
          <div className="goals-3">
            {[
              'Enhance quality & quantity of research outputs',
              'Increase success in competitive research grants',
              'Promote multidisciplinary & problem-oriented research',
              'Strengthen internationalisation & partnerships',
              'Foster innovation, entrepreneurship & commercialisation',
              'Build research capacity among staff & postgraduates',
            ].map((g, i) => (
              <div className="goal-box reveal reveal-scale" key={i}>{g}</div>
            ))}
          </div>
        </section>

        {/* ══ 3. KEY ACTIVITIES ══ */}
        <section className="sec sec-alt">
          <div className="sec-eyebrow reveal">Section 3</div>
          <div className="sec-h reveal">Key Activities Undertaken (January–December 2025)</div>
          <div className="rule reveal"></div>
          <p className="reveal">Throughout 2025, DRIO implemented a wide range of strategic activities aimed at strengthening research capacity, advancing innovation and deepening community engagement, reflecting the Directorate&apos;s commitment to fostering a vibrant research ecosystem.</p>

          <div className="act-photos">
            <div className="pi reveal reveal-scale">
              <img src="/images/image8.jpeg" alt="Research Governance" />
              <div className="pc">Research Governance &amp; Capacity Building</div>
            </div>
            <div className="pi reveal reveal-scale reveal-delay-1">
              <img src="/images/image9.jpeg" alt="Grant Development" />
              <div className="pc">Grant Development &amp; Partnerships</div>
            </div>
            <div className="pi reveal reveal-scale reveal-delay-2">
              <img src="/images/image3.jpg" alt="Outreach Activities" />
              <div className="pc">Innovation &amp; Community Outreach</div>
            </div>
          </div>

          <div className="act-3col">
            <div className="act-box nb reveal">
              <h4>🏛️ Research Governance &amp; Capacity Building</h4>
              <ul>
                <li>Proposal development clinics</li>
                <li>Grant-writing workshops</li>
                <li>Research ethics, integrity &amp; biosafety training</li>
                <li>Mentorship of early-career researchers &amp; postgraduate students</li>
                <li>Coordination of institutional research approvals</li>
              </ul>
            </div>
            <div className="act-box gb reveal reveal-delay-1">
              <h4>🌐 Grant Development &amp; Partnerships</h4>
              <ul>
                <li>Submissions to National Treasury, ESSA, TWAS</li>
                <li>Alexander von Humboldt engagements</li>
                <li>Inter-institutional collaboration facilitation</li>
                <li>County government &amp; industry engagement</li>
                <li>Development partner linkages</li>
              </ul>
            </div>
            <div className="act-box tb reveal reveal-delay-2">
              <h4>🚀 Innovation &amp; Outreach</h4>
              <ul>
                <li>IP protection initiative support</li>
                <li>Community outreach coordination</li>
                <li>Impact-driven research facilitation</li>
                <li>Innovation disclosure sensitisation</li>
                <li>Science Fair organisation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ══ 4. RESEARCH PERFORMANCE ══ */}
        <section className="sec">
          <div className="sec-eyebrow reveal">Section 4</div>
          <div className="sec-h reveal">Research Performance Highlights (2025)</div>
          <div className="rule reveal"></div>
          <div className="stats-bar reveal reveal-scale">
            <div className="stat"><div className="stat-n">35</div><div className="stat-l">Peer-Reviewed Publications</div></div>
            <div className="stat"><div className="stat-n">28</div><div className="stat-l">Internal Funding Proposals</div></div>
            <div className="stat"><div className="stat-n">4</div><div className="stat-l">National Awards Won</div></div>
            <div className="stat"><div className="stat-n">2</div><div className="stat-l">IP Registrations</div></div>
          </div>
          <p className="reveal">The year under review recorded measurable growth in research productivity, visibility, innovation, and external engagement. Guided by DRIO, KAFU researchers actively disseminated findings, competed for funding, protected innovations, and strengthened collaborations at national and international levels.</p>
        </section>

        {/* ══ 5. PUBLICATIONS ══ */}
        <section className="sec sec-alt">
          <div className="sec-eyebrow reveal">Section 5</div>
          <div className="sec-h reveal">Publications &amp; Citation Visibility</div>
          <div className="rule reveal"></div>
          <p className="reveal">DRIO continued to strengthen the University&apos;s scholarly output and global research visibility through enhanced support for publications and citation impact. Efforts were directed toward encouraging high-quality research dissemination in peer-reviewed journals and promoting visibility on international academic platforms.</p>

          <div className="hl-box reveal">
            📌 &nbsp;<strong>35 peer-reviewed publications</strong> recorded by December 2025, spanning Schools of Science, Business, Health Sciences, Computing, Education and Social Sciences — with strong citation visibility through indexed journals and Google Scholar.
          </div>

          <div className="pub-photos">
            <div className="pi reveal reveal-left">
              <img src="/images/image10.jpeg" alt="Research Publications" style={{ height: '170px' }} />
              <div className="pc">Research output &amp; scholarly dissemination</div>
            </div>
            <div className="pi reveal reveal-right">
              <img src="/images/image12.jpeg" alt="Citation Visibility" style={{ height: '170px' }} />
              <div className="pc">Citation visibility &amp; indexed journal presence</div>
            </div>
          </div>

          <div className="charts-2">
            <div className="chart-box reveal reveal-left">
              <img src="/images/image14.png" alt="Bar Chart: Publications by School" />
              <div className="chart-cap"><strong>Fig. 1:</strong> Research output by discipline — Chemistry and Environmental Science lead KAFU&apos;s 2025 output, with strong contributions from Medicine and Materials Science. The portfolio reflects a well-diversified research base with particular strength in science-driven disciplines.</div>
            </div>
            <div className="chart-box reveal reveal-right">
              <img src="/images/image17.png" alt="Pie Chart: Author Contributions" />
              <div className="chart-cap"><strong>Fig. 2:</strong> Author contribution share. Shikuku V.O. leads at 56.2%, followed by Okenwa-Vincent E.E. (18.8%), and Manyali G.S. &amp; Ngeno E. (12.5% each), highlighting both excellence and opportunity to broaden authorship.</div>
            </div>
          </div>
        </section>

        {/* ══ 6. GRANTS & FELLOWSHIPS ══ */}
        <section className="sec">
          <div className="sec-eyebrow reveal">Section 6</div>
          <div className="sec-h reveal">Research Grants, Fellowships &amp; External Funding</div>
          <div className="rule reveal"></div>
          <p className="reveal">In 2025, DRIO&apos;s targeted efforts in identifying funding opportunities, supporting competitive proposal development and facilitating linkages with agencies significantly enhanced the institution&apos;s capacity to attract and manage research resources.</p>

          <div className="grants-photo-row reveal">
            <div className="pi">
              <img src="/images/image19.jpeg" alt="Fellowship Award" />
              <div className="pc">Fellowship Award Presentation</div>
            </div>
            <div className="pi">
              <img src="/images/image20.png" alt="AREF Fellowship Recipient" style={{ objectPosition: 'top' }} />
              <div className="pc">Dr. Okenwa-Vincent — AREF Fellowship Recipient</div>
            </div>
          </div>

          <div className="grants">
            {[
              ['KES 100M Grant', 'STEM Laboratory Infrastructure — State Department for Higher Education', 'Concept Note approved to strengthen STEM laboratory equipment across SOHES, SOSCI and SCIT, led by Dr. Mabonga. The investment supports state-of-the-art teaching and research equipment, significantly enhancing laboratory infrastructure and innovation spaces — transformative for hands-on learning and readiness for the CBE cohort expected in 2029.'],
              ['AREF Fellowship', 'Africa Research Excellence Fund — Dr. Okenwa-Vincent', 'Project: "Impact of Myopia and its Management on Behavioral and Educational Performance of Kenyan School Children." Hosted at the Centre of Public Health, Queen\u2019s University Belfast, UK. Enhances advanced analytical capacities to be brought back for research training and health policy engagement at KAFU.'],
              ['ISSBD Fellowship', 'ISSBD Developing Country Fellowship — Dr. Okenwa-Vincent (October 2025)', 'Supporting research, travel, subsistence and conference participation for the project "Impact of Early-Onset Myopia and Its Management on the Behavioral Development of Kenyan Schoolchildren (Aged 5 to 12 Years)".'],
              ['TWAS Postdoc', 'TWAS Postdoctoral Fellowship — Dr. Shikuku (December 2025)', 'Six-month research visit at CSIR–National Metallurgical Laboratory, India. Project: "Development of Cu\u2082O/Ferrite based composite modified waste materials as solar photocatalyst." Fosters joint publications between KAFU and CSIR-NML and provides instrument access for postgraduate research.'],
            ].map(([badge, title, body], i) => (
              <div className="grant reveal" key={i}>
                <div className="gbadge" dangerouslySetInnerHTML={{ __html: badge.replace(' ', '<br>') }} />
                <div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ 7. CONFERENCES ══ */}
        <section className="sec sec-alt">
          <div className="sec-eyebrow reveal">Section 7</div>
          <div className="sec-h reveal">Conferences, Dissemination &amp; Scholarly Engagement</div>
          <div className="rule reveal"></div>
          <p className="reveal">The Directorate actively promoted and disseminated research findings through conferences, exhibitions and symposia. KAFU staff made presentations at national and regional forums, strengthening interdisciplinary collaboration and positioning the University as an active contributor to scholarly dialogue and evidence-based solutions.</p>

          <div className="pg3">
            <div className="pi wide reveal reveal-scale">
              <img src="/images/image21.jpeg" alt="Kenya National Research Festival" />
              <div className="pc">Kenya National Research Festival — Egerton University, Aug 2025</div>
            </div>
            <div className="pi wide reveal reveal-scale reveal-delay-1">
              <img src="/images/image12.jpeg" alt="Conference Presentations" />
              <div className="pc">Scholarly Presentations &amp; Engagement</div>
            </div>
            <div className="pi wide reveal reveal-scale reveal-delay-2">
              <img src="/images/image32.jpeg" alt="Research Symposium" />
              <div className="pc">Regional Symposium — Uganda, Oct 2025</div>
            </div>
          </div>

          <p className="reveal" style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 14px' }}>
            The Kenya National Research Festival (18–22 August 2025, Egerton University) concluded with a strong focus on turning scientific research into practical solutions. Principal Secretary Prof. Shaukat Abdulrazak emphasised that Kenya&apos;s development depends on effectively applying research findings to solve societal challenges.
          </p>

          <div className="conf-3">
            <div className="conf-box gb reveal">
              <div className="conf-date">September 2025 · Mombasa</div>
              <h4>CEIL Summit 2025</h4>
              <p>Commercialization &amp; Entrepreneurial Institutions Leaders&apos; Summit</p>
            </div>
            <div className="conf-box tb reveal reveal-delay-1">
              <div className="conf-date">October 2025</div>
              <h4>Murang&apos;a University International Conference</h4>
              <p>Digital education platforms &amp; climate-smart agrifood systems</p>
            </div>
            <div className="conf-box nb reveal reveal-delay-2">
              <div className="conf-date">October 2025 · Uganda</div>
              <h4>3rd Busitema STI Symposium</h4>
              <p>Mental health modelling presentations &amp; research engagement</p>
            </div>
          </div>
        </section>

        {/* ══ 8. AWARDS ══ */}
        <section className="sec sec-navy">
          <div className="sec-eyebrow reveal">Section 8</div>
          <div className="sec-h reveal">Awards, Recognition &amp; National Visibility</div>
          <div className="rule reveal"></div>
          <p className="reveal">KAFU participated in the Kenya National Research Festival (18–22 August 2025, Egerton University), organized by the National Research Fund (NRF), receiving multiple prestigious recognitions in the presence of Prof. Fred Amimo, DVC Academics, Student Affairs &amp; Research.</p>

          <div className="awards-4">
            {[
              ['🏅', "Judge's Special Recognition Award", 'Kaimosi Friends University — KAFU'],
              ['💡', 'Most Innovative Research Idea', 'Bonface Jiveri — KAFU'],
              ['⭐', 'Best Youth Research (Under 30)', 'Lucy Mbugua — KAFU'],
              ['🌱', 'Best Community Engagement Research', 'Linda Makhakha — KAFU'],
            ].map(([icon, title, sub], i) => (
              <div className="award-card reveal reveal-scale" key={i} style={{ animationDelay: `${i * 0.5}s` }}>
                <span className="award-icon">{icon}</span>
                <div><h4>{title}</h4><p>{sub}</p></div>
              </div>
            ))}
          </div>

          <div className="pg4 reveal">
            <div className="pi"><img src="/images/image23.jpeg" alt="NRF Award Ceremony" /><div className="pc">Award Ceremony</div></div>
            <div className="pi"><img src="/images/image24.jpeg" alt="NRF Award Presentation" /><div className="pc">Award Presentation</div></div>
            <div className="pi"><img src="/images/image25.jpeg" alt="NRF Research Festival" /><div className="pc">Research Festival</div></div>
            <div className="pi"><img src="/images/image26.jpeg" alt="KAFU at NRF" /><div className="pc">KAFU at NRF</div></div>
          </div>
          <div className="pg4 reveal">
            <div className="pi"><img src="/images/image27.jpeg" alt="Award Recipient" /><div className="pc">Bonface Jiveri</div></div>
            <div className="pi"><img src="/images/image28.jpeg" alt="Award Recipient" /><div className="pc">Lucy Mbugua</div></div>
            <div className="pi"><img src="/images/image29.jpeg" alt="Award Recipient" /><div className="pc">Linda Makhakha</div></div>
            <div className="pi"><img src="/images/image30.jpeg" alt="KAFU Team at NRF" /><div className="pc">KAFU Research Team</div></div>
          </div>

          <div className="kafuora-box reveal">
            <h4>🏆 Inaugural KAFU Outstanding Researcher Awards (KAFUORA) — 2025</h4>
            <p>The inaugural KAFUORA was instituted in 2025 to recognise best-performing researchers of the previous calendar year. DRIO appreciates this initiative that sets a benchmark for research excellence recognition among universities in Kenya. Researchers are encouraged to pursue excellence to win these worthy awards.</p>
          </div>
        </section>

        {/* ══ 9. SCIENCE FAIR ══ */}
        <section className="sec">
          <div className="sec-eyebrow reveal">Section 9</div>
          <div className="sec-h reveal">First KAFU Science Fair &amp; Open Day — 8 August 2025</div>
          <div className="rule reveal"></div>

          <img className="fair-banner reveal reveal-scale" src="/images/image33.jpeg" alt="KAFU Science Fair and Open Day" />

          <p className="reveal">On 8 August 2025, KAFU successfully hosted its inaugural Science Fair and Open Day — a significant milestone in the University&apos;s efforts to promote science, innovation and public engagement. The event provided a dynamic platform for students, researchers, and innovators to showcase their projects, exchange ideas and engage with industry partners, schools and the wider community.</p>
          <p className="reveal">The chief guest, <strong>Prof. F. Orata</strong>, Director of Research at Masinde Muliro University of Science and Technology (MMUST), delivered the keynote address, highlighting the University&apos;s growing capacity in applied research and innovation.</p>

          <div className="full-pi reveal">
            <img src="/images/image31.png" alt="KAFU Science Fair Event" />
            <div className="pc">Students, researchers and innovators at the inaugural KAFU Science Fair &amp; Open Day</div>
          </div>

          <h3 className="reveal" style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '15.5px', fontWeight: 700, color: 'var(--navy)', margin: '20px 0 13px' }}>
            🏆 Science Fair Awards
          </h3>
          <div className="fair-awards">
            <div className="fair-card reveal reveal-left">
              <img src="/images/image19.jpeg" alt="Best Poster — Yohana Obiye" />
              <div className="fair-card-body">
                <div className="fair-tag">🥇 Best Poster</div>
                <h4>Yohana Obiye</h4>
                <p>Online Voting System — a secure digital voting platform enabling transparent, tamper-proof elections</p>
              </div>
            </div>
            <div className="fair-card reveal reveal-right">
              <img src="/images/image38.jpeg" alt="Best Innovation — Lucy Mbugua" />
              <div className="fair-card-body">
                <div className="fair-tag">🥇 Best Innovation</div>
                <h4>Lucy Mbugua</h4>
                <p>Bio Pad — eco-friendly biodegradable sanitary solution from locally available materials</p>
              </div>
            </div>
          </div>

          <div className="pg4 reveal" style={{ marginTop: '10px' }}>
            <div className="pi tall"><img src="/images/image44.jpeg" alt="Science Fair Exhibit" /><div className="pc">Runners-up: Ayuya Stephen</div></div>
            <div className="pi tall"><img src="/images/image45.jpeg" alt="AI Chatbot Demo" /><div className="pc">Brian Saitabau — AI Chatbot</div></div>
            <div className="pi tall"><img src="/images/image22.jpeg" alt="Innovation Showcase" /><div className="pc">Innovation Showcase</div></div>
            <div className="pi tall"><img src="/images/image36.png" alt="Open Day Exhibit" /><div className="pc">Open Day Exhibit</div></div>
          </div>
        </section>

        {/* ══ 10. IP & INNOVATION ══ */}
        <section className="sec sec-alt">
          <div className="sec-eyebrow reveal">Section 10</div>
          <div className="sec-h reveal">Innovation, Intellectual Property &amp; Commercialisation</div>
          <div className="rule reveal"></div>
          <p className="reveal">Innovation remained a key focus area throughout 2025. Two technology innovations were successfully registered for intellectual property protection, marking a significant milestone for KAFU&apos;s innovation ecosystem.</p>
          <div className="ip-2">
            <div className="ip-card reveal reveal-left">
              <div className="ici">🗳️</div>
              <h4>KAFU Online Voting System</h4>
              <p>Registered by Mr. Yohana Obiye, Dr. Hillan Ronoh &amp; Prof. Remmy Shiundu. A secure digital platform enabling transparent, real-time and tamper-proof institutional elections.</p>
            </div>
            <div className="ip-card reveal reveal-right">
              <div className="ici">📋</div>
              <h4>ExamFlow Management System</h4>
              <p>Registered by Mr. Yohana Obiye, Dr. Hillan Ronoh &amp; Prof. Remmy Shiundu. A digital system for managing exam workflows, results processing and academic records.</p>
            </div>
          </div>
          <div className="kipi-note reveal">Sensitisation activities on innovation disclosure and commercialisation organized by <strong>KIPI</strong> were conducted across the year. Researchers are encouraged to attend such initiatives to protect and commercialise their work.</div>
        </section>

        {/* ══ 11. COLLABORATIONS & THEMES ══ */}
        <section className="sec sec-teal">
          <div className="sec-eyebrow reveal">Section 11</div>
          <div className="sec-h reveal">Collaborations, Proposals &amp; Priority Research Themes</div>
          <div className="rule reveal"></div>
          <p className="reveal">Throughout 2025, DRIO facilitated the submission of <strong>28 proposals</strong> for internal funding, reflecting growing research engagement across Schools. Strategic collaborations were expanded with government ministries, international universities, NGOs and private sector partners.</p>
          <p className="reveal">In 2026, DRIO looks forward to more strategic partnerships for joint proposal development, research supervision, innovation scaling, and community outreach initiatives.</p>

          <h3 className="reveal" style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '15px', fontWeight: 700, color: 'white', margin: '18px 0 13px' }}>
            KAFU Priority Research Themes
          </h3>
          <div className="themes-7">
            {[
              ['🌾', 'Agriculture, Food Security & Agroecology'],
              ['🏥', 'Health, Life Sciences & Biotechnology'],
              ['⚗️', 'STEM Innovations'],
              ['💻', 'Digital Transformation & Smart Systems'],
              ['📚', 'Social Sciences, Humanities & Education'],
              ['🌿', 'Environment, Climate Change & Natural Resources'],
              ['📈', 'Entrepreneurship, Trade & Sustainable Development'],
            ].map(([icon, title], i) => (
              <div className="theme-card reveal reveal-scale" key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="theme-icon">{icon}</div>
                <div className="theme-title">{title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ 12. CITIZEN SCIENCE SPOTLIGHT ══ */}
        <section className="sec">
          <div className="sec-eyebrow reveal">Section 12 · Project Spotlight</div>
          <div className="sec-h reveal">KAFU Citizen Science Project — Kaimosi Forest</div>
          <div className="rule reveal"></div>
          <div className="cs-layout">
            <div className="cs-photo reveal reveal-left">
              <img src="/images/image46.png" alt="Kaimosi Forest — Citizen Science" />
            </div>
            <div className="reveal reveal-right">
              <p>Founded and led by <strong>Professor Manyali</strong> under the Environment, Climate Change and Natural Resource Management theme, the KAFU Citizen Science Project was launched in partnership with the <strong>Centre for International Forestry Research (CIFOR)</strong> and <strong>World Agroforestry (ICRAF)</strong>. It empowers local communities — including Tiriki elders — to participate directly in scientific research and environmental stewardship in the Kaimosi Forest biodiversity hotspot.</p>
              <ul className="cs-objectives">
                <li>Integrate traditional ecological knowledge with modern scientific tools for forest monitoring</li>
                <li>Combat biodiversity loss while supporting livelihoods dependent on the forest</li>
                <li>Foster intergenerational commitment to conservation through community-led actions</li>
                <li>Inform evidence-based policies for sustainable forest management</li>
              </ul>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Simple mobile apps enable participants to track biodiversity, record observations on tree health, wildlife and encroachment and contribute real-time data. Communities have collaboratively developed practical solutions such as sustainable harvesting and agroforestry to address deforestation.</p>
            </div>
          </div>
          <div className="cs-photos reveal">
            <div className="pi"><img src="/images/image47.png" alt="Field Monitoring — Kaimosi Forest" /><div className="pc">Field Monitoring — Kaimosi Forest</div></div>
            <div className="pi"><img src="/images/image34.png" alt="Community Engagement" /><div className="pc">Community Engagement Sessions</div></div>
            <div className="pi"><img src="/images/image8.jpeg" alt="Data Collection Activities" /><div className="pc">Biodiversity Data Collection</div></div>
          </div>
        </section>

        {/* ══ 13. STUDENTS CORNER ══ */}
        <section className="sec sec-alt">
          <div className="sec-eyebrow reveal">Section 13</div>
          <div className="sec-h reveal">Students Corner — Innovators in Action</div>
          <div className="rule reveal"></div>
          <p className="reveal">KAFU students are not only learners — they are problem-solvers, innovators and community change-makers. Through platforms such as the Science Fair and Innovation Hub, these projects demonstrate practical, community-driven solutions aligned with national development priorities and global challenges.</p>
          <div className="projects-6">
            {[
              ['image39.png', 'Health Tech', 'MediRemind System', 'Dennis Wafula — BSc Computer Science, Year 4',
                'Poor medication adherence in rural, low-connectivity areas',
                'SMS & WhatsApp reminder system for low-internet environments',
                'Improved treatment compliance & reduced hospital readmissions'],
              ['image40.png', 'Civic Tech', 'KAFU Online Voting System', 'Yohana Obiye',
                'Lack of transparency & manipulation in manual voting systems',
                'Secure digital platform for transparent, tamper-proof elections',
                'Promotes democratic participation & institutional trust'],
              ['image35.png', 'Green Innovation', 'Bio Pads — Eco-Friendly Sanitary Solution', 'Lucy Mbugua',
                'Limited affordable sanitary products & environmental pollution',
                'Biodegradable pads from locally available materials',
                'Improved menstrual hygiene & reduced school absenteeism'],
              ['image41.png', 'AI & EdTech', 'AI Chatbot for Student Support', 'Brian Saitabau',
                'Limited access to timely university service information',
                'AI chatbot providing instant responses to student queries',
                'Reduces admin workload & improves student experience'],
              ['image42.png', 'Admin Tech', 'ExamFlow Management System', 'Yohana Obiye, Remmy Shiundu & Hillan Ronoh',
                'Inefficient exam processing & management in universities',
                'Digital system for exam workflows & results processing',
                'Streamlines academic administration & reduces errors'],
              ['image43.png', 'Admin Tech', 'Integrated Graduation Lifecycle Management', 'Yohana Obiye, Kelvin Omieno & Victor Shikuku',
                'Complex & inefficient graduation clearance & certification',
                'Centralized system managing the full graduation lifecycle',
                'Faster graduation processing & improved student satisfaction'],
            ].map(([img, tag, title, by, problem, solution, impact], i) => (
              <div className="proj-card reveal reveal-scale" key={i} style={{ transitionDelay: `${(i % 2) * 0.1}s` }}>
                <img className="proj-img" src={`/images/${img}`} alt={title} />
                <div className="proj-body">
                  <div className="proj-tag">{tag}</div>
                  <h4>{title}</h4>
                  <div className="proj-by">{by}</div>
                  <div className="proj-row"><span className="pr-lbl">Problem:</span><span className="pr-val">{problem}</span></div>
                  <div className="proj-row"><span className="pr-lbl">Solution:</span><span className="pr-val">{solution}</span></div>
                  <div className="proj-row"><span className="pr-lbl">Impact:</span><span className="pr-val">{impact}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ 14. OUTLOOK ══ */}
        <section className="sec sec-navy">
          <div className="sec-eyebrow reveal">Section 14</div>
          <div className="sec-h reveal">Outlook &amp; Strategic Focus 2026–2027</div>
          <div className="rule reveal"></div>
          <p className="reveal">The 2026–2027 outlook for KAFU-DRIO sets a clear and forward-looking strategic direction anchored in innovation, resilience and impact-driven growth. Building on recent achievements, the University will prioritize strengthening research excellence, expanding strategic partnerships and enhancing capacity in STEM, digital transformation and sustainable development.</p>
          <div className="outlook-6">
            {[
              ['🏆', 'Increased success in large-scale and multi-partner research grants'],
              ['🌐', 'Strengthening international research consortia and networks'],
              ['🚀', 'Expansion of innovation commercialisation and industry engagement'],
              ['🔬', 'Infrastructure enhancement of research laboratories'],
              ['🎓', 'Enhanced postgraduate research training and supervision'],
              ['🤲', 'Deepening community-engaged and impact-oriented research'],
            ].map(([icon, text], i) => (
              <div className="ol-item reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="ol-icon">{icon}</span><p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ APPRECIATION ══ */}
        <section className="sec">
          <div className="sec-eyebrow reveal">Appreciation &amp; Call to Action</div>
          <div className="sec-h reveal">Thank You — Together We Advance Research</div>
          <div className="rule reveal"></div>
          <div className="appr reveal reveal-scale">
            <h3>Advancing Knowledge · Inspiring Innovation · Creating Impact</h3>
            <p>The DRIO appreciates the unwavering support of University Management, Senate, all staff, students and partners. All members of the KAFU community are encouraged to actively engage with DRIO in advancing research excellence, innovation and outreach. Your participation drives our collective impact.</p>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="footer">
          <div className="ft-brand">
            <img src="/images/image1.png" alt="KAFU Logo" />
            <h3>Kaimosi Friends University</h3>
            <p>Directorate of Research, Innovation &amp; Outreach</p>
          </div>
          <div className="ft-info">
            <div><strong>Issue No. 1 — May 2026</strong></div>
            <div>DRIO Newsletter · Annual Research Report</div>
            <div className="ft-tagline">Advancing Knowledge · Inspiring Innovation · Creating Impact</div>
          </div>
        </footer>

      </div>
    </>
  );
}
