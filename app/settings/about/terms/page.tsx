import LegalLayout from '@/components/legal/LegalLayout';
import LegalHeader from '@/components/legal/LegalHeader';
import LegalPageIntro from '@/components/legal/LegalPageIntro';
import LegalSection from '@/components/legal/LegalSection';


export default function TermsOfServicePage() {
  return (
    <LegalLayout>
      <LegalHeader />

      <main className="w-full">
        <LegalPageIntro
          title="Terms of Service"
          subtitle="Welcome to DengarBain"
          metadata="Last updated: August 19, 2026"
        />

        <div
        style={{
            width: "calc(100% - 32px)",
            padding: "32px",
            margin: "16px 16px",
            position: "relative",
            background: "#E8F5EE",
            borderRadius: "48px",
            outline: "1px rgba(0, 53, 39, 0.10) solid",
            outlineOffset: "-1px",
            boxShadow: "0px 4px 20px -2px rgba(6, 78, 59, 0.05)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
        }}
        >
        {/* Title */}
            <h2
            style={{
                width: "100%",
                margin: 0,
                fontFamily: "Playfair Display, serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: "#164c3c",
            }}
            >
            Using DengarBain
            </h2>

            {/* Content */}
            <div
            style={{
                width: "100%",
                margin: "12px 0 0",
                fontFamily: "inherit",
                fontSize: "1.125rem",
                fontWeight: 500,
                lineHeight: 1.65,
                color: "#626a66",
                textAlign: "justify",
            }}
            >
            <p
                style={{
                margin: 0,
                }}
            >
                DengarBain is a non-profit, open-source educational platform designed
                to aid in the memorization and study of Hadith.
            </p>

            <p
                style={{
                margin: "12px 0 0",
                }}
            >
                Our terms are structured to protect the integrity of the educational
                material and ensure a safe, focused environment for all users.
            </p>
            </div>

        </div>

        <div
            style={{
              minHeight: "145px",
              boxSizing: "border-box",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              backgroundColor: "#FFFFFF",
              borderRadius: "48px",
              width: "calc(100% - 32px)",
            padding: "24px",
            margin: "16px 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
        <LegalSection
          number={1}
          title="About DengarBain"
        >
          <p>
            These Terms of Service ("Terms") govern your use of the
            DengarBain application and website ("Service"). By accessing or
            using the Service, you agree to be bound by these Terms.
          </p>

          <p>
            If you disagree with any part of the Terms, you may not access
            the Service.
          </p>
        </LegalSection>

        <LegalSection
          number={2}
          title="Acceptable Use"
        >
          <p>
            You agree to use DengarBain only for lawful, educational
            purposes.
          </p>

          <p>
            You must not use the Service in any way that causes, or may cause,
            damage to the Service or impairment of the availability or
            accessibility of the Service; or in any way which is unlawful,
            illegal, fraudulent, or harmful.
          </p>
        </LegalSection>

        <LegalSection
          number={3}
          title="Open Source"
        >
          <p>
            The software powering DengarBain is open-source and released
            under the MIT License. You are free to view, modify, and
            distribute the source code subject to the terms of that license.
          </p>

          <a
            href="/settings/about/license"
            className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-[var(--clr-primary)] underline"
          >
            Read Full License
            <span aria-hidden="true">↗</span>
          </a>
        </LegalSection>

        <LegalSection
          number={4}
          title="Educational Content"
        >
          <p>
            The Hadith texts, translations, and audio recordings provided on
            DengarBain are curated for educational purposes.
          </p>

          <p>
            While we strive for absolute accuracy, DengarBain relies on
            community contributions and established public domain texts.
          </p>

          <p>
            We do not guarantee the perfection of the content and recommend
            consulting with qualified scholars for definitive rulings.
          </p>
        </LegalSection>

        <LegalSection
          number={5}
          title="Learning Progress"
        >
          <p>
            Features tracking your memorization progress, such as streaks
            and completion badges, are provided to encourage consistent
            study.
          </p>

          <p>
            We reserve the right to modify the gamification mechanics or
            algorithms without prior notice to improve the educational
            experience.
          </p>
        </LegalSection>

        <LegalSection
          number={6}
          title="Accessibility"
        >
          <p>
            DengarBain is committed to ensuring digital accessibility for
            people with disabilities.
          </p>

          <p>
            We continually improve the user experience for everyone and
            apply the relevant accessibility standards.
          </p>

          <p>
            If you encounter any accessibility barriers, please contact us.
          </p>
        </LegalSection>

        <LegalSection
          number={7}
          title="User Accounts"
        >
          <p>
            To utilize synchronization features across devices, you may need
            to create an account.
          </p>

          <p>
            You are responsible for safeguarding the password that you use to
            access the Service and for any activities or actions under your
            password.
          </p>
        </LegalSection>

        <LegalSection
          number={8}
          title="Learning Data and Synchronization"
        >
          <p>
            Your memorization data is stored securely. We use this data
            solely to provide the synchronization service and aggregate
            anonymous usage statistics to improve the platform.
          </p>

          <p>
            We will never sell your personal data.
          </p>

          <a
            href="/settings/about/privacy"
            className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-[var(--clr-primary)] underline"
          >
            Read Privacy Policy
            <span aria-hidden="true">↗</span>
          </a>
        </LegalSection>

        <LegalSection
          number={9}
          title="Application Availability"
        >
          <p>
            We aim to provide consistent availability, but the Service is
            provided "as is".
          </p>

          <p>
            We may experience hardware, software, or other problems or need
            to perform maintenance resulting in interruptions, delays, or
            errors.
          </p>
        </LegalSection>

        <LegalSection
          number={10}
          title="Third-Party Services and Content"
        >
          <p>
            The Service may contain links to third-party web sites or
            services that are not owned or controlled by DengarBain.
          </p>

          <p>
            We have no control over, and assume no responsibility for, the
            content, privacy policies, or practices of any third-party web
            sites or services.
          </p>
        </LegalSection>

        <LegalSection
          number={11}
          title="Changes to DengarBain"
        >
          <p>
            We reserve the right, at our sole discretion, to modify or
            replace these Terms at any time.
          </p>

          <p>
            If a revision is material, we will try to provide at least 30
            days' notice prior to any new terms taking effect.
          </p>
        </LegalSection>

        <LegalSection
          number={12}
          title="Contact"
        >
          <p>
            If you have any questions about these Terms, please contact us
            at:
          </p>

          <a
            href="mailto:support@dengarbain.org"
            className="mt-2 inline-block font-semibold text-[var(--clr-primary)] underline"
          >
            support@dengarbain.org
          </a>
        </LegalSection>
        </div>
        <div />
      </main>
    </LegalLayout>
  );
}