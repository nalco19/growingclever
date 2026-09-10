import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/chrome/PageHero";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Tell us what you are trying to solve, build, understand or change.",
  socialTitle: "Contact — Growing Clever",
  path: "/contact",
});

const routes = [
  { title: "Academy", body: "Executive and tailored learning." },
  { title: "Lab", body: "Advisory and consulting." },
  { title: "Stage", body: "Keynotes and executive conversations." },
  { title: "Voice", body: "Content, interviews and collaborations." },
  { title: "Other", body: "Something else?" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Growing Clever — Contact"
        headline="Start with the right conversation."
        lead="Tell us what you are trying to solve, build, understand or change."
        imageSrc="/assets/contact-hero.jpg"
        imageAlt="Executive on a call in an office"
      />

      <section className={styles.routes}>
        <div className="eyebrow">01 — What are you looking for?</div>
        <div className={styles.routesGrid}>
          {routes.map((route) => (
            <div key={route.title} className={styles.route}>
              <h3 className={styles.routeTitle}>{route.title}</h3>
              <p className={styles.routeBody}>{route.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.conversation}>
        <div className={styles.conversationIntro}>
          <div className="eyebrow">02 — Start a conversation</div>
          <h2 className={styles.conversationHeadline}>
            {"Tell us what you’re working on."}
          </h2>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
