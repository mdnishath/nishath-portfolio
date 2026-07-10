import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import GoldText from "@/components/GoldText";
import HeroIntro from "@/components/HeroIntro";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Sparkle from "@/components/Sparkle";
import SplitHeading from "@/components/SplitHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { journey, services, site, testimonials } from "@/lib/data";
import styles from "./page.module.css";

const stats = ["7+ Years Experience", "Any Stack", "AI-Powered Delivery", "End-to-End Ownership"];

export default function HomePage() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <HeroIntro className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <div data-hero="0.1">
              <Eyebrow large marginBottom={32}>
                Premium · Full-Stack · AI-Powered
              </Eyebrow>
            </div>
            <SplitHeading as="h1" className={`serif ${styles.heroTitle}`} onScroll={false} delay={0.25}>
              Full-Stack
              <br />
              <GoldText>Developer</GoldText>
              <br />
              &amp; AI Builder.
            </SplitHeading>
            <p className={styles.heroLede} data-hero="0.7">
              Full-stack websites, desktop &amp; mobile apps, automation and SEO — delivered fast.
              I use AI (Claude Code) to build production-grade products across any stack, solo.
            </p>
            <div className={styles.heroActions} data-hero="0.85">
              <Link href="/work" className="btnGold">
                View My Work
              </Link>
              <Link href="/contact" className="btnDark">
                Hire Me
              </Link>
            </div>
          </div>

          <div className={styles.portraitCol} data-hero-portrait="0.35">
            <Parallax className={styles.portraitWrap} offset={70}>
              <div className={styles.portraitHalo} />
              <Sparkle
                size={28}
                fill="#D9B876"
                values="0.15;0.9;0.15"
                dur="3.6s"
                style={{ position: "absolute", top: "-2%", right: "4%", zIndex: 2 }}
              />
              <Sparkle
                size={18}
                fill="#C9A24E"
                values="0.8;0.15;0.8"
                dur="4.4s"
                style={{ position: "absolute", bottom: "10%", left: "-6%", zIndex: 2 }}
              />
              <Sparkle
                size={14}
                fill="#F4D58D"
                values="0.2;0.7;0.2"
                dur="2.8s"
                style={{ position: "absolute", top: "18%", left: "-10%", zIndex: 2 }}
              />
              <div className={styles.portraitRing}>
                <Image
                  src={site.photo}
                  alt={site.name}
                  width={860}
                  height={860}
                  priority
                  className={styles.portraitImg}
                />
              </div>
            </Parallax>
          </div>
        </HeroIntro>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className={styles.stats}>
        <Reveal className={`container ${styles.statsInner}`}>
          {stats.map((stat, i) => (
            <span key={stat} style={{ display: "contents" }}>
              {i > 0 && <span className={styles.statDot} />}
              <span className={styles.stat}>{stat}</span>
            </span>
          ))}
        </Reveal>
      </section>

      {/* ============ ABOUT ============ */}
      <section className={styles.about}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={styles.aboutHead}>
            <Reveal variant="fade">
              <Eyebrow>About Me</Eyebrow>
            </Reveal>
            <SplitHeading as="h2" className={`serif ${styles.aboutTitle}`}>
              One developer.
              <br />
              <GoldText>Full team output.</GoldText>
            </SplitHeading>
          </div>
          <Reveal className={styles.aboutBody} stagger>
            <p className={styles.aboutPara}>
              For over seven years I&apos;ve shipped across the whole spectrum — websites, desktop
              and mobile apps, automation and SEO. I own projects end to end: strategy, design,
              build, launch, and everything after.
            </p>
            <p className={styles.aboutPara}>
              Now I build AI-native, with Claude Code as my force multiplier. That means faster
              delivery, no stack limits, and one reliable point of contact — agency-quality output
              without the agency overhead.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ VERIFIED FREELANCER ============ */}
      <section className={styles.verified}>
        <Reveal className="container" variant="scale">
          <Eyebrow centered marginBottom={36}>
            Verified Credentials
          </Eyebrow>
          <a href={site.idCardPdf} target="_blank" rel="noreferrer" className={styles.verifiedCard}>
            <div className={styles.verifiedGlow} />
            <div className={styles.verifiedHead}>
              <span className={styles.verifiedLabel}>
                Verified Freelancer · Govt. of Bangladesh
              </span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A24E"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <path d="M12 2l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V5z" />
                <path d="M8.5 12l2.4 2.4L15.5 9.5" stroke="#F4D58D">
                  <animate
                    attributeName="stroke-dasharray"
                    values="0 12;12 0"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
            <div className={styles.verifiedBody}>
              <span className={styles.verifiedAvatar}>
                <Image
                  src={site.photo}
                  alt={site.name}
                  width={180}
                  height={180}
                  className={styles.verifiedAvatarImg}
                />
              </span>
              <span className={styles.verifiedInfo}>
                <span className={styles.verifiedName}>{site.name}</span>
                <span className={styles.verifiedRole}>Full Stack Web Developer</span>
                <span className={styles.verifiedId}>
                  Freelancer ID: <span className={styles.verifiedIdNum}>{site.freelancerId}</span>
                </span>
                <span className={styles.verifiedIssued}>
                  Issued by Dept. of ICT, ICT Division · Valid till Jan 2029
                </span>
              </span>
            </div>
            <div className={styles.verifiedFoot}>
              <span className={styles.verifiedFootNote}>View official ID card (PDF)</span>
              <span className={styles.verifiedFootOpen}>Open →</span>
            </div>
          </a>
        </Reveal>
      </section>

      {/* ============ SERVICES ============ */}
      <section className={styles.band}>
        <div className="container">
          <SectionHeading eyebrow="Services" ornament>
            Everything you need, <GoldText>one builder.</GoldText>
          </SectionHeading>
          <Reveal className="gridCards" stagger>
            {services.map((svc) => (
              <ServiceCard key={svc.title} service={svc} />
            ))}
          </Reveal>
          <Reveal className={styles.sectionLinkRow}>
            <Link href="/services" className="linkUnderline">
              All services &amp; how I work →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ JOURNEY ============ */}
      <section className={styles.journey}>
        <div className={`container ${styles.journeyInner}`}>
          <div className={styles.journeyHead}>
            <Reveal variant="fade">
              <Eyebrow>The Journey</Eyebrow>
            </Reveal>
            <SplitHeading as="h2" className={`serif ${styles.journeyTitle}`}>
              Seven years of <GoldText>shipping.</GoldText>
            </SplitHeading>
            <Reveal delay={0.2}>
              <p className={styles.journeyLede}>
                From first client website to AI-native builder — every year added a new capability
                to the stack.
              </p>
            </Reveal>
          </div>
          <Reveal className={styles.journeyList} stagger>
            {journey.map((jn) => (
              <div key={jn.year} className={styles.journeyItem}>
                <div className={styles.journeyRail}>
                  <span className={styles.journeyYear}>{jn.year}</span>
                  <span className={styles.journeyLine} />
                </div>
                <div className={styles.journeyBody}>
                  <h3 className={`serif ${styles.journeyItemTitle}`}>{jn.title}</h3>
                  <p className={styles.journeyItemDesc}>{jn.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className={styles.band}>
        <div className="container">
          <SectionHeading eyebrow="Client Words" ornament>
            Trusted by clients <GoldText>worldwide.</GoldText>
          </SectionHeading>
          <Reveal className="gridCards" stagger>
            {testimonials.map((tm, i) => (
              <TestimonialCard key={i} testimonial={tm} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className={styles.cta}>
        <Parallax className={styles.ctaGlow} offset={90} />
        <div className={styles.ctaInner}>
          <SplitHeading as="h2" className={`serif ${styles.ctaTitle}`}>
            Let&apos;s build something <GoldText>premium.</GoldText>
          </SplitHeading>
          <Reveal delay={0.2}>
            <p className={styles.ctaLede}>
              One message away. WhatsApp, email or socials — I reply within a day.
            </p>
          </Reveal>
          <Reveal className={styles.ctaActions} delay={0.35}>
            <Link href="/contact" className="btnGold wide">
              Contact Me
            </Link>
            <Link href="/work" className="btnDark wide">
              See My Work
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
