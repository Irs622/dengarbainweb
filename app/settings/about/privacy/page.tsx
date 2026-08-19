import LegalLayout from '@/components/legal/LegalLayout';
import LegalHeader from '@/components/legal/LegalHeader';
import LegalPageIntro from '@/components/legal/LegalPageIntro';
import LegalSection from '@/components/legal/LegalSection';

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout>
      <LegalHeader />

      <main className="w-full">
        <LegalPageIntro
          title="Privacy Policy"
          subtitle="Your privacy matters to us" 
          description="DengarBain is designed to keep your learning experience private, accessible, and under your control."
          metadata="Last updated: August 19, 2026"
        />

        <div
        style={{
            width: "calc(100% - 32px)",
            padding: "32px",
            margin: "16px 16px",
            backgroundColor: "#FFFFFF",
            borderRadius: "38px",
            marginBottom: "24px",
            borderLeft: "4px solid #1A5C40",
        }}
        >
        {/* Header */}
<div
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-center",
    gap: "12px",
    marginTop: "10px",
    marginBottom: "32px",
  }}
>
  <svg 
  width="28" 
  height="28" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="#1A5C40" 
  strokeWidth="1.8" 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  style={{ 
    flexShrink: 0, 
    marginTop: "4px", 
  }} 
> 
  <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" /> 
  <circle cx="12" cy="12" r="2" /> 
</svg> 

<h3 
  style={{ 
    margin: 0, 
    fontFamily: "Playfair Display, serif", 
    fontSize: "1.5rem", 
    fontWeight: 700, 
    lineHeight: 1.3, 
    letterSpacing: "-0.02em", 
    color: "#164C3C", 
  }} 
> 
  Your privacy at a glance 
</h3>
</div>
        {/* Privacy points */}
        <div
    style={{
      width: "100%",
      margin: "16px 0 0",
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.55,
      color: "#626A66",
    }}
  >
            {/* Local-first storage */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        marginBottom: "14px",
      }}
    >

      <p style={{ margin: 0 }}>
        <strong style={{ color: "#242424", fontWeight: 700 }}>
          Local-first storage:
        </strong>{" "}
        Your data lives on your device first.
      </p>
    </div>

    {/* Sync only when signed in */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        marginBottom: "14px",
      }}
    >
      <p style={{ margin: 0 }}>
        <strong style={{ color: "#242424", fontWeight: 700 }}>
          Sync only when signed in:
        </strong>{" "}
        We only sync data if you explicitly create an account.
      </p>
    </div>

    {/* Email-only account */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        marginBottom: "14px",
      }}
    >
      <p style={{ margin: 0 }}>
        <strong style={{ color: "#242424", fontWeight: 700 }}>
          Email-only account:
        </strong>{" "}
        No names, phone numbers, or addresses required.
      </p>
    </div>

    {/* No advertising */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
      }}
    >

      <p style={{ margin: 0 }}>
        <strong style={{ color: "#242424", fontWeight: 700 }}>
          No advertising:
        </strong>{" "}
        Zero profiling, zero trackers, zero ads.
      </p>
    </div>
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
          title="Information We Collect"
        >
          <p>
            DengarBain may collect limited information that is necessary to
            provide its features and services.
          </p>

          <p>
            When you create an account or sign in, DengarBain uses your email
            address for authentication. No additional personal information
            is required for account registration.
          </p>
        </LegalSection>

        <LegalSection
          number={2}
          title="Learning and Progress Data"
        >
          <p>
            DengarBain allows you to track your learning progress for the
            forty Hadith. You may mark each Hadith as hafal, sedang, or
            belum.
          </p>

          <p>
            Learning-related information may include your progress status,
            timestamps related to listening activity, and playback
            information such as A-B Loop points.
          </p>

          <p>
            This information is designed to support your learning experience
            and is stored locally on your device using browser storage
            technology.
          </p>
        </LegalSection>

        <LegalSection
          number={3}
          title="Local Storage"
        >
          <p>
            DengarBain uses local browser storage, including IndexedDB, to
            store learning progress and related application data on your
            device.
          </p>

          <p>
            This allows core learning features to remain available without
            requiring a constant internet connection.
          </p>
        </LegalSection>

        <LegalSection
          number={4}
          title="Account and Authentication"
        >
          <p>
            DengarBain provides registration and login using an email
            address.
          </p>

          <p>
            Your email address is used to authenticate your account and
            support account-related functionality.
          </p>
        </LegalSection>

        <LegalSection
          number={5}
          title="How We Use Information"
        >
          <p>
            Information collected by DengarBain is used only to provide,
            maintain, improve, and secure the application's features.
          </p>

          <p>
            Learning data is used to provide features such as progress
            tracking, listening history, and learning-related functionality.
          </p>
        </LegalSection>

        <LegalSection
          number={6}
          title="Data Synchronization"
        >
          <p>
            DengarBain may provide synchronization functionality between
            local device data and its backend services.
          </p>

          <p>
            Where synchronization is enabled, limited learning-related data
            may be processed to support continuity of your learning
            experience across supported functionality.
          </p>
        </LegalSection>

        <LegalSection
          number={7}
          title="Data Security"
        >
          <p>
            We take reasonable measures to protect information handled by
            DengarBain and to reduce the risk of unauthorized access,
            alteration, or disclosure.
          </p>

          <p>
            However, no internet-connected service or electronic storage
            system can be guaranteed to be completely secure.
          </p>
        </LegalSection>

        <LegalSection
          number={8}
          title="Third-Party Services"
        >
          <p>
            DengarBain uses a limited number of third-party services to
            operate and deliver the application.
          </p>

          <p>
            These services may include Google Fonts for typography and
            GitHub for hosting and distributing the project's open-source
            source code.
          </p>

          <p>
            These services may process information according to their own
            privacy policies and terms.
          </p>
        </LegalSection>

        <LegalSection
          number={9}
          title="Deleting Your Learning Data"
        >
          <p>
            You can delete your local learning progress from the Settings
            page through the Danger Zone.
          </p>

          <p>
            Use the <strong>Hapus Semua Progres</strong> action to reset your
            locally stored learning progress.
          </p>
        </LegalSection>

        <LegalSection
          number={10}
          title="Children and Accessibility"
        >
          <p>
            DengarBain is designed as an educational application with a
            strong focus on accessibility, including support for children
            and users who are blind or visually impaired.
          </p>

          <p>
            We aim to minimize the collection of personal information and
            provide an accessible learning experience.
          </p>
        </LegalSection>

        <LegalSection
          number={11}
          title="Changes to This Privacy Policy"
        >
          <p>
            This Privacy Policy may be updated when DengarBain's features,
            services, or data practices change.
          </p>

          <p>
            Any updated version will be made available through the
            application.
          </p>
        </LegalSection>

        <LegalSection
          number={12}
          title="Contact"
        >
          <p>
            If you have questions or concerns about this Privacy Policy,
            please contact us at:
          </p>

          <p className="font-semibold text-[var(--clr-primary)]">
            support@dengarbain.org
          </p>
        </LegalSection>
        </div>

      </main>
    </LegalLayout>
  );
}