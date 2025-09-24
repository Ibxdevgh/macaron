import Head from "next/head";
import NavBar from "../components/NavBar";


export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
        />

        {/* Preload assets */}
        <link rel="preload" as="image" href="/assets/image/logo.png" />
        <link
          rel="preload"
          as="image"
          href="/assets/image/product-of-the-week.svg"
        />
        <link rel="preload" as="image" href="/assets/svg/global.svg" />

        {/* SEO and PWA meta */}
        <meta name="theme-color" content="#ffffff" />
        <title>Macaron - Your AI Partner</title>
        <meta
          name="description"
          content="Macaron is a platform for AI, which can help you to build your life with AI"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Internationalization */}
        <link rel="alternate" hrefLang="en" href="/" />
        <link rel="alternate" hrefLang="zh" href="/zh" />
        <link rel="alternate" hrefLang="ja" href="/ja" />
        <link rel="alternate" hrefLang="es" href="/es" />
        <link rel="alternate" hrefLang="ko" href="/ko" />
        <link rel="alternate" hrefLang="x-default" href="/" />
      </Head>

      {/* SVG Noise Filter */}
      <svg
        width={0}
        height={0}
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute" }}
      >
        <filter
          id="noiseFilter"
          x={0}
          y={0}
          width={100}
          height={100}
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves={3}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values={0} />
        </filter>
      </svg>

      {/* Page Content */}
      <div className="w-full relative bg-gradient-to-br bg-[#F9F7F1] min-h-screen overflow-x-hidden">
        <NavBar />

        {/* Privacy Policy Section */}
        <div className="flex w-full min-h-full flex-col items-center pt-[44px] md:pt-[64px]">
          <div
            style={{
              padding: "20px 20px 80px 20px",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            <pre
              style={{
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
                fontSize: 14,
                color: "black"
              }}
            >
              {`Privacy Policy  
Updated Date: June 20, 2025  
Effective Date: June 20, 2025  

MINDAI PTE. LTD. (hereinafter referred to as "we," "us," "our") has established this Privacy Policy to explain how we collect, use, disclose, and protect your information when you use our software-as-a-service products provided through the www.macaron.im. These services include related software, applications, and websites (collectively referred to as the "Services").
By using our Services, you acknowledge that you have read and agree to all terms of this Privacy Policy. If you do not agree to these terms, please immediately cease using or accessing our applications. We strongly recommend that you read this policy in detail before taking any action.
To optimize your user experience, we need to process your personal information. If you do not wish to have your personal information processed as described in this policy, or if you are under 18 years of age, please stop using our Services.
We primarily collect and use your information to:
Provide and improve our Services and user experience
Ensure the security and integrity of the platform
Fulfill our legal obligations
When necessary, we will share your information with trusted third parties and service providers to provide services, meet legal requirements, and achieve other purposes detailed later in this policy.

1. Information We Collect
We collect personal information that you provide to us (including basic information such as first name, last name, email address, password), user content (any personal information collected when you use our Services, including information provided in inputs, file uploads, feedback, or outputs), and communication content (any communications we exchange, including chatbot interface communications, survey responses, or feedback).
We also automatically collect information, including application, browser, and device information (such as device type, operating system, browser information, IP address, and other device characteristics), service usage data (including activity information, diagnostic and troubleshooting information), and information from cookies and similar technologies. Personal information does not include de-identified, anonymized, or aggregated information, and when data is de-identified or anonymized, we maintain it in that form and do not attempt to re-identify the information.

2. How We Use Your Information
We use your personal information primarily for the following purposes: delivering services, personalizing experiences, operational management, improving services, creating and developing new features, while ensuring you receive a secure, smooth, efficient, and customized experience. Additionally, we also use your information based on legal compliance needs and loss prevention. Rest assured, your account password is only used to create and maintain your account and to provide you with services.
We use your basic information to create and maintain your account, which is necessary for fulfilling our contract with you.
To provide you with services, we use your basic information, communication content, application information, browser and device information, service usage data, and other information you submit to us, which is also necessary for fulfilling our contract with you.
When providing customer support, we use your basic information, communication content, service usage data (including location information), application information, browser and device information. We rely on legitimate interests to process this information, particularly the interest in ensuring you can optimally use the Services. In the European Economic Area and the United Kingdom, you have the right to object to and request restriction of such processing (i.e., "legitimate interest" processing).
When sending service-related communications, we use your basic information, communication content, application information, browser and device information, service usage data, and other information you submit, which is necessary for fulfilling the contract and also based on the legitimate interest of ensuring you can optimally use the Services.
To facilitate the security, integrity, and protection of the Services, we process your basic information, communication content, application information, browser and device information, service usage data, and other information you submit, based on the legitimate interest of maintaining effective operation and delivery of the Services.
To comply with legal and regulatory obligations, we use your basic information, communication content, application information, browser and device information, service usage data, and other information you submit, based on the legitimate interest of complying with laws in the jurisdictions where we operate, responding to requests, and fulfilling corporate responsibilities.
To customize your service experience and improve our Services, we process your basic information, communication content, application information, browser and device information, and service usage data, based on the legitimate interest of understanding how users interact with the Services to customize and improve products, and to ensure reports are accurate and reliable.
To promote the safety and integrity of the Services, network, users, employees, and the public, we use your basic information, communication content, application information, browser and device information, and service usage data, based on the legitimate interest of preventing fraud, unauthorized use, violations, protecting the safety of all parties, resolving disputes, verifying accounts, combating harmful behavior, and preventing harm.
For research and innovation purposes, we use your basic information, communication content, and service usage data, based on the legitimate interest of improving and iterating the Services through user feedback.

3. How and Why We Share Your Information
We commit not to sell or share your personal information with third parties for targeted advertising purposes. Additionally, we have never sold or shared personal information of individuals under 16 years of age for targeted advertising purposes.
To provide the Services, we may need to share necessary information with the following categories of third parties:
1. Service Supporters: Disclosure of necessary personal information to third-party service providers who assist in providing the Services.
Our service supporters include Mixpanel, a data analytics platform that helps us understand how users interact with our services, optimize user experience, and improve our product features. Mixpanel does not store any chat data you provided; it only stores event data, such as the number of “Clicks on New task.”
2. User-Initiated Sharing: When you use active sharing features such as conversation links, the information recipients will depend on whom you choose to share with.
3. Legal Compliance Scenarios: Sharing information with advisors, regulatory bodies, or government agencies in the following situations:
Responding to legal and regulatory requirements, court orders, or government requests
Fulfilling statutory obligations and regulatory requirements
Investigating and preventing fraud and security issues
Protecting the rights and personal safety of all parties
4. Corporate Account Association: If you register using a corporate email, we may share account existence and basic information (such as email address) with that organization to allow corporate administrators to manage account permissions.
5. Group Internal Collaboration: Based on service efficiency requirements, information may be shared among affiliated companies or group members.
6. Asset Transaction Scenarios: During company mergers, acquisitions, reorganizations, bankruptcy, or other changes in control, your information may be transferred as a transaction asset.
7. Disclosure at Your Request: When you explicitly instruct or contractually stipulate disclosure.
Please note: Our Services may include links to third-party websites (such as social media), whose privacy policies are independent of ours. Please be aware that when you leave Macaron Services for other websites or use other services, even if accessed through links provided by Macaron, we cannot and have no obligation to protect the personal information you provide on these third-party platforms.

4. Security
We have implemented a series of reasonable technical, administrative, and organizational measures aimed at comprehensively protecting the security of your personal information. These protective measures cover both online and offline environments, with the purpose of preventing the loss, misuse, unauthorized access, disclosure, alteration, or destruction of your personal information.
However, we must honestly point out that in today's digital world, no security system can provide absolute 100% protection. Therefore, when using our Services, you need to understand and accept this reality: despite our best efforts to protect your information, the risks associated with using our Services ultimately must be borne by you personally.

5. Retention
We retain your personal information only for as long as necessary to provide the Services, fulfill legal obligations, or protect relevant rights. We consider factors such as when the information was collected, service requirements, legal requirements, and security factors to determine retention periods. When information is no longer needed or you request deletion, we will promptly process it. We are committed to respecting your control over your personal data while meeting our business needs.

6. Children's Personal Information
Our Services are designed for adults and not intended for children. We do not knowingly solicit or collect personal information from children. According to our Terms of Service, all users must be at least 18 years old to use our Services. If you discover that we have collected personal information from minors without guardian consent, please contact us immediately, and we will promptly delete the relevant data.

7. International Data Transfers
To support global business operations, we and our partners may transfer, store, and process your personal information worldwide (including in the European Union, United Kingdom, and United States). For residents of the European Union, Switzerland, or the United Kingdom, we strictly adhere to lawful data transfer mechanisms, such as the European Commission's Standard Contractual Clauses and relevant local regulations (such as the UK's International Data Transfer Addendum), ensuring your personal data receives appropriate protection during cross-border transfers.

8. How You Can Exercise Your Personal Rights
Depending on the laws in your region, you may have the following rights related to your personal information. Even if local laws do not explicitly provide for these rights, we may at our discretion offer you these choices.
Right to Access Information and Data Portability: You have the right to obtain a copy of your personal information that we hold, understand how we use and disclose your information, and how we have processed your data in the past. You can also request that we provide specific information in a standardized, commonly used machine-readable format and transfer it to you or a third party you designate.
Right to Deletion: You can request that we delete your personal information. After account termination, we will process or delete your related information according to our data retention policy.
Right to Correction: You can request that we update or correct personal information that you believe is incomplete or inaccurate.
Right to Restrict Processing and Object: You can limit or object to our use or transfer of your personal information based on legitimate interests, public interest, or direct marketing purposes. However, we may continue to process your information in situations permitted or required by law.
Right to Withdraw Consent: When we process information based on your consent, you can withdraw that consent at any time. This will not affect the lawfulness of our processing of your information prior to your withdrawal.
Right to Appeal: If we refuse your request, you can appeal our decision.
Right to Complain: You have the right to file a complaint with your local data protection authority.
You can submit requests by sending an email to our privacy mailbox. We will not discriminate against you for exercising your legal rights. To protect your privacy and security, we may verify your identity before processing your request, including asking for additional information. If we cannot verify your identity, we may refuse your request.
Under certain U.S. privacy laws, you can designate an authorized agent to make requests on your behalf. We will require the agent to provide proof of your authorization and may need you to directly confirm your identity.
Please note that the above rights are not absolute and may only apply in specific situations or may be reasonably refused.

9. Contact Us
If you have any questions or concerns about this Privacy Policy, or if you have a complaint, please contact us via hello@macaron.so.

10. Changes to This Privacy Policy
To continuously optimize our service quality, we may periodically update this Privacy Policy. All policy changes will be posted on this page, and significant changes will be communicated to you with reasonable notice as required by law. You can always check the date at the top of the page to see when the policy was last updated. We encourage you to review this policy regularly to stay informed about how we protect your personal information.  
`}
            </pre>
          </div>
        </div>
      </div>

      <section
        aria-label="Notifications alt+T"
        tabIndex={-1}
        aria-live="polite"
        aria-relevant="additions text"
        aria-atomic="false"
      />
    </>
  );
}
