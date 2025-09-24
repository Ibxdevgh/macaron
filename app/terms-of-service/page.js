import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
        />

        {/* Preload images */}
        <link rel="preload" as="image" href="/assets/image/logo.png" />
        <link rel="preload" as="image" href="/assets/image/product-of-the-week.svg" />
        <link rel="preload" as="image" href="/assets/svg/global.svg" />

        {/* External stylesheet (optional, better handled by Next.js) */}
        {/* <link rel="stylesheet" href="/_next/static/css/0b674f4260e03a83.css" /> */}

        {/* Scripts */}
        <link rel="preload" href="https://accounts.google.com/gsi/client" as="script" />

        <meta name="theme-color" content="#ffffff" />
        <title>Macaron - Your AI Partner</title>
        <meta
          name="description"
          content="Macaron is a platform for AI, which can help you to build your life with AI"
        />

        {/* Icons & Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Mobile & Web App Config */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-navbutton-color" content="#ffffff" />
        <meta name="baidu-site-verification" content="codeva-vkuuov95vd" />

        {/* Alternate language links */}
        <link rel="alternate" hrefLang="en" href="/index.html" />
        <link rel="alternate" hrefLang="zh" href="/zh.html" />
        <link rel="alternate" hrefLang="ja" href="/ja.html" />
        <link rel="alternate" hrefLang="es" href="/es.html" />
        <link rel="alternate" hrefLang="ko" href="/ko.html" />
        <link rel="alternate" hrefLang="x-default" href="/index.html" />
      </Head>

      {/* Hidden SVG Filter */}
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

      {/* Main Page */}
      <div className="w-full relative bg-[#F9F7F1] min-h-screen overflow-x-hidden">
        {/* Navbar */}
        <NavBar />

        {/* Content */}
        <div className="flex w-full min-h-full flex-col items-center pt-[44px] md:pt-[64px]">
          <div style={{ padding: "20px 20px 80px", maxWidth: 800, margin: "0 auto" }}>
            <pre
              style={{
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
                fontSize: 14,
                color: "black"
              }}
            >
              {`Platform Service Terms
Updated Date: June 20, 2025
Effective Date: June 20, 2025

These Platform Service Terms ("Terms") govern the relationship between Macaron ("Macaron," "we," "us," "our") and the entity or individual ("Customer," "you," "your") using or accessing our service product("Services"). Please read these Terms carefully along with our Privacy Policy, which outlines how we handle your data. These Terms reference and incorporate any written purchase documents executed by you and Macaron ("Order Form"). Together, the Terms, Privacy Policy, and Order Form constitute the single binding agreement between you and Macaron ("Agreement").
You must be at least 18 years old to use the Services. If you are using the Services on behalf of a minor, you must be their parent or guardian, agree to these Terms, and understand that "you" in these Terms refers both to you personally and in your capacity as a guardian, as well as the minor you represent where applicable.
We may update these Terms periodically, and all changes will take effect from the "Last Updated" date indicated at the top of this page. By continuing to use the Services, you are deemed to have accepted the updated Terms. If you do not agree with the contents of this Agreement, please stop using or accessing the Services immediately.

1. Artificial Intelligence Disclaimer
Artificial Intelligence ("AI") and machine learning are rapidly evolving fields of research. When using or accessing the Services, you need to be aware of the following:
1.1 Basic Understanding and Responsibility
1. You acknowledge that you are interacting with an AI system.
2. AI systems are based on probabilistic models, which may result in misunderstandings or errors.
3. The service provider is not responsible for any misunderstandings or inaccuracies caused by AI.
4. Output results may contain a "Made with Macaron" watermark or other forms of identification, which are inherent components of the system and cannot be removed at this time.
1.2 User Responsibilities
1. You are responsible for independently reviewing all AI-generated output.
2. You should exercise personal judgment before relying on AI-generated output.
3. You are fully responsible for monitoring and approving the use of AI-generated output.
4. You assume responsibility for any decisions, actions, or omissions based on AI output.
1.3 Inherent Limitations of AI Functionality
1. Outputs may contain errors or inaccurate information.
2. AI lacks creative thinking and may produce repetitive or formulaic content.
3. AI may struggle to understand subtle nuances in language, including slang and cultural references.
4. AI cannot understand or express emotions like humans.
5. AI outputs may perpetuate biases present in its training data.
6. AI has limitations in performing complex reasoning and judgment tasks.
7. AI relies on large volumes of training data, and issues with data quality can affect the output.
1.4 Disclaimer
1. The service provider makes no warranties or guarantees regarding AI functionality or output.
2. The service provider is not liable for any losses resulting from the use of AI services or reliance on AI output.
3. Users should independently evaluate AI-generated output before use and are fully responsible for subsequent actions.

2. Access and Use
2.1 Access Rights
Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use our Services. We reserve the right to modify, suspend, or terminate any part of the Services at any time without prior notice. You agree not to use the Services in any way that could damage its functionality or accessibility.
2.2 Account Responsibilities
To access our Services, you must complete account registration on the website and ensure that the personal information you provide is accurate, up-to-date, and complete. You must promptly update any changes and must not impersonate others or provide false information. Your login credentials (e.g., username, password, access keys) must remain confidential, and you are responsible for all activities conducted under your account. If you detect unauthorized use or security breaches, you must notify us immediately. We reserve the right to disable your account if you violate these Terms or provide false information. By using our Services, you consent to our collection and use of information about you and your device to improve our products and provide Services. You are responsible for maintaining the confidentiality of your account and for activities under your account and agree to notify us immediately upon discovering unauthorized use or security issues.
2.3 Prohibited Conduct
It is strictly prohibited to use the Services for any unlawful or regulatory violations. Unauthorized access to the Service systems, user accounts, or related networks is forbidden. You may not use automated tools to scrape data without our written permission. Additionally, you are prohibited from uploading or transmitting content containing viruses, malicious code, or anything that could harm computer system functionality.
Furthermore, according to our general usage standards, you may not use our services to:
1. Endanger Child Safety, including but not limited to: creating, distributing, or promoting child sexual abuse materials; facilitating human trafficking, sexual extortion, or any form of exploitation involving minors; facilitating grooming of minors, including generating content intended to impersonate minors; depicting or promoting any form of child abuse; advocating or promoting pedophilic relationships; or sexualizing minors.
2. Disrupt Critical Infrastructure, including but not limited to: promoting the destruction or disruption of critical infrastructure such as power grids, water treatment facilities, telecommunications networks, or air traffic control systems; unauthorized access to critical systems such as voting machines, medical databases, and financial markets; or interfering with the operations of military bases and related infrastructure.
3. Incite Violence or Hate, including but not limited to: inciting, promoting, or advocating violent extremism, terrorism, or hateful conduct; expressing support for organizations or individuals associated with violent extremism, terrorism, or hateful conduct; promoting or advocating violence or intimidation against individuals, groups, animals, or property; or promoting discriminatory behavior based on race, ethnicity, religion, nationality, gender, sexual orientation, or any other identity characteristic.
4. Violate Privacy or Identity, including but not limited to: unauthorized access to computer systems or networks, including deception and social engineering; violating anyone's privacy rights, such as sharing personal information without consent; abusing, collecting, soliciting, or unauthorized acquisition of private information; or impersonating humans by presenting results as human-generated content.
5. Create or Facilitate Exchange of Illegal or Highly Regulated Weapons or Goods, including but not limited to: manufacturing, modifying, designing, selling, or distributing weapons, explosives, hazardous materials, or other systems intended to cause harm; or engaging in any illegal activities, such as using, obtaining, or exchanging illegal and controlled substances.
6. Create Psychologically or Emotionally Harmful Content, including but not limited to: promoting or concealing any form of self-harm; promoting unhealthy or unattainable body images or beauty standards; shaming, insulting, intimidating, bullying, or harassing individuals; coordinating harassment or intimidation against individuals or groups; generating content depicting sexual violence; or generating content depicting animal cruelty.
7. Spread False Information, including but not limited to: creating and disseminating deceptive or misleading information about groups, entities, or individuals; creating and disseminating deceptive or misleading information about laws, regulations, procedures, practices, institutions, entities, or standards set by governing bodies; or providing false or misleading information related to medical, health, or scientific issues.
8. Engage in Political Activity or Election Interference, including but not limited to: advocating or supporting specific political candidates, parties, issues, or positions; engaging in political lobbying to actively influence decisions of government officials, legislators, or regulatory bodies; or inciting, glorifying, or promoting disruption of elections or civic processes.
9. Use for Criminal Justice, Law Enforcement, Censorship, or Surveillance Purposes, including but not limited to: making decisions for criminal justice applications; tracking an individual's physical location, emotional state, or communications without consent; or analyzing or identifying specific content for censorship purposes on behalf of governmental organizations.
10. Engage in Fraud, Abuse, or Predatory Behavior, including but not limited to: facilitating forgery, acquisition, or distribution of counterfeit or illegally obtained goods; facilitating or promoting the generation or distribution of spam; or generating content for fraudulent activities, schemes, scams, phishing, or malware.
11. Abuse Our Platform, including but not limited to: coordinating malicious activities across multiple accounts; using automation to create accounts or engage in spam behavior; or unauthorized use of prompts and completions to train AI models.
12. Generate Pornographic Content, including but not limited to: depicting or soliciting sexual intercourse or sexual activities; generating content related to sexual fetishes or fantasies; or promoting or depicting incest or bestiality.
2.4 Usage Restrictions
The Services may impose usage restrictions on specific features or settings, such as limits on access frequency, storage capacity, or other system resources. You agree to comply with these restrictions, which may be updated at any time, and must not attempt to bypass them in any way.
Benefits Usage Policy
When using any benefits, privileges, or promotions provided by this service (including but not limited to invitation rewards, credit redemptions, promotional activities, etc.), you should follow the principles of good faith and normal usage patterns. It is prohibited to obtain or accumulate improper benefits through any technical means or inappropriate behavior (such as bulk registration, fraudulent transactions, automated tools, circumventing system limitations, etc.). We have implemented a risk control identification system, and once violations are detected, we reserve the right to revoke relevant benefits, disqualify eligibility, suspend or terminate account usage without prior notice, and may seek compensation for losses caused by such violations.
Requirements for High-Risk Use Cases
Certain integrations (referring to use cases involving our products and services) pose a higher risk of harm due to their impact on areas critical to public welfare and social equity. These "high-risk use cases" include:
1. Legal: Integrations related to legal interpretation, legal guidance, or decisions with legal implications.
2. Healthcare: Integrations affecting medical decisions, medical diagnosis, patient care, or medical guidance (general health advice such as sleep, stress, nutrition, and exercise are excluded from this category).
3. Insurance: Integrations related to health, life, property, disability, or other types of insurance underwriting, claims processing, or coverage decisions
4. Finance: Integrations related to financial decisions, including investment advice, loan approvals, and determining financial qualification or creditworthiness.
5. Employment and Housing: Integrations related to individual employment decisions, resume screening, recruitment tools, or housing eligibility decisions.
6. Academic Testing, Certification, and Admissions: Integrations associated with standardized testing companies managing school admissions.
7. Media or Professional Journalism Content: Integrations involving the use of our products or services to automatically generate content published for external consumption.
If your integration falls into any of the categories listed above, we require you to implement the following additional safety measures:
• Human Involvement: When using our products or services to provide advice, recommendations, or subjective decisions in high-risk areas that directly impact individuals, qualified professionals from the relevant field must review the content or decisions before dissemination or finalization.
• Disclosure: You must disclose to your customers or end-users that you are using our services to assist in forming your decisions or recommendations.
Disclosure Requirements
Finally, the following use cases (whether or not they fall under high-risk categories) must disclose clearly to users that they are interacting with an AI system rather than a human:
1. All customer-facing chatbots, including any externally facing or interactive AI agents.
2. Products serving minors: Organizations providing minors with direct interaction capabilities with products integrated with our API.
2.5 Service Changes
We reserve the right to modify or update the Services and their features without prior notice. Furthermore, we cannot guarantee that the Services will always be available, uninterrupted, or error-free.

3. Ordering of Products and Services
3.1 Ordering Process and Information
When placing an order for products through our services, you represent and warrant that you have the legal capacity to enter into binding contracts. If you wish to order available products through the services, you are required to provide certain information relevant to your order, including but not limited to your name, email address, telephone number, credit card information, billing address, and delivery details.
You represent and warrant that: (i) you have the legal right to use any credit card, debit card, or other payment methods associated with any order; and (ii) the information provided to us is true, accurate, and complete. By submitting such information, you grant us the right to provide the information to third-party payment processors to facilitate the completion of your order.
3.2 Product Availability and Pricing Policy
We regularly update the products listed on our official website and strive to provide accurate and timely product information. Due to the dynamic nature of product information, details displayed on the website (including but not limited to prices, images, and specifications) may be subject to adjustments. The actual product information at the time of ordering will prevail. In case of obvious errors caused by system malfunction or human error, we will take appropriate measures to promptly correct them and continuously update and improve product information to ensure the best purchasing experience. To protect your rights, we recommend carefully reviewing specific product details before placing an order. Should you have any questions, please feel free to contact our customer service team at any time.
We reserve the right to modify prices at any time prior to accepting an order. After accepting an order, if any event occurs that affects delivery—such as government actions, tariff changes, increased shipping costs, fluctuations in foreign exchange rates, or any other matters beyond our control—we may adjust the quoted price. In such circumstances, you retain the right to cancel your order.
3.3 Payment and Order Processing
Payments can be made using valid cards (credit or debit), subject to validation checks and authorization by your card issuer. We shall not be liable for any delay or non-delivery of your order if we do not receive the required authorization.
To maintain fairness, security, and sustainable development of the Macaron platform, ensuring all users enjoy high-quality services, we reserve the right to refuse or cancel your order at any time for reasons including but not limited to product availability issues, errors in product descriptions or pricing, or incorrect order information.
3.4 Standards for Platform Usage and Handling of Violations
To ensure fairness and protect the normal operation of our services, we specifically monitor and will take action against the following abnormal behaviors: subscribing through unofficial channels, violating the single-account principle through account sharing or resale, attempting to manipulate membership status through improper means, deliberately performing repeated cancellations to disrupt service operations, exploiting system vulnerabilities to gain undue benefits, circumventing security measures through technical means, and any other behaviors violating our terms of service.
For the aforementioned violations, we will immediately suspend or terminate relevant accounts, revoke any unlawfully obtained benefits, refuse refunds for fees incurred due to verified violations, and reserve the right to pursue legal action.

4. Subscription and Refund Policy
4.1 Subscription Management
Certain services or specific portions thereof are only available with a paid subscription. Depending on the type of subscription plan selected at the time of purchase, you will be billed periodically (monthly) in advance. At the end of each billing cycle, your subscription will automatically renew under the exact same conditions unless cancelled by either you or us.
You can cancel your subscription renewal by contacting us via email at hello@macaron.so or through the application itself. You will not receive a refund for fees already paid for the current subscription period, and you will continue to have access to the service until the end of your current subscription period.
4.2 Billing and Fee Changes
You must provide our payment system with accurate and complete billing information, including your full name, address, state, postal code, phone number, and valid payment method details. If automatic billing fails for any reason, the company will issue an electronic invoice indicating that you must manually make full payment corresponding to the billing period indicated on the invoice by a specified due date.
We reserve the right, at our sole discretion, to modify subscription fees at any time. Any changes to subscription fees will become effective at the end of the current subscription period. We will provide you with reasonable advance notice prior to any change in subscription fees taking effect, allowing you the opportunity to terminate your subscription before such changes become effective. Continuing to use the service after the subscription fee change is effective constitutes your agreement to pay the modified subscription fee amount.
4.3 Refund Policy
Macaron is committed to providing fair and transparent refund services to users. After submitting a refund request, we will manually review your order and send the review results or request additional information via the email you provided within 48 hours. Please be sure to check your email (including spam folders) and follow the instructions in the email. If you fail to complete the required steps within the specified time, we will be unable to process your refund request.
Our refund timeframes vary depending on your region and the type of product purchased:
For EU, Turkey, or UK Customers: If you reside in the European Union, Turkey, or the United Kingdom, according to local consumer protection regulations, you have the right to cancel your subscription and receive a refund within 14 days of purchase, regardless of the type of product you purchased. When applying for a refund, please indicate in your refund request that you are applying under EU, Turkish, or UK regulations.
For Users in Other Countries or Regions:
Refund timeframes depend on the product type:
Monthly Membership: Refund can be requested within 24 hours after purchase
Add-on Credit Packages: Refund can be requested within 24 hours after purchase
Annual Membership: Refund can be requested within 72 hours after purchase
For All Customers: After your refund request is approved, we will process the refund based on the proportion of unused credits. If you used discount coupons or incurred taxes during purchase, the refund amount (including taxes) will be calculated according to the corresponding proportion of the actual total payment. According to our terms of service, add-on credit packages are valid from the date of purchase and can be used during the validity period of your membership subscription.
Refunds will be returned to your payment account through the original payment method within 1-15 business days, with the exact arrival time depending on your payment institution's processing procedures.
Although we strictly adhere to our policies, Macaron may be unable to fulfill your refund request if your account has abnormal activities. We strive to make our refund policy as fair as possible.
During the use of credits, if you encounter abnormal situations such as restricted account access, we will initiate an account risk assessment procedure. The assessment results will determine subsequent actions: for accounts deemed to be used normally, we will promptly restore access and ensure your credits remain valid, but no refund will be provided; if the assessment confirms that the account has been banned due to triggering risk control mechanisms, we will be unable to restore your access rights and will not provide a refund.
If you need to inquire about refund-related issues, please communicate with us via email. We recommend users carefully consider their usage needs before purchasing add-on credit packages to ensure full utilization of purchased credits.
Please note that if you have previously received a refund for our services, we reserve the right to refuse subsequent refund requests, and the above policy will not apply to you. This policy is designed to prevent abuse of our refund system and ensure fair use of our services.
4.4 Promotional Activities
Any promotional activities provided through our service may be governed by rules separate from these terms. If you participate in any promotional activity, please review the applicable rules as well as our Privacy Policy. In case of any conflict between promotional rules and these terms, the promotional rules shall prevail.

5. Your Obligations
5.1 Access and Prompts
In consideration of your compliance with these Terms of Service and payment of the applicable subscription fees, we authorize you to access and use our Services to generate outputs based on your prompts. You may access the full list of services we provide, which may be updated periodically. You are solely responsible for ensuring that the prompts and user data you submit are lawful, reliable, complete, accurate, and of sufficient quality. Do not include unauthorized sensitive or confidential information or personal data in your prompts, including but not limited to access keys, passwords, usernames, or personal account/invitation information. You agree to implement and maintain appropriate IT security measures, follow the IT security procedures we notify you of from time to time, and are solely responsible for obtaining and maintaining any devices, software, and other services or data necessary to connect to, access, or use our Services. We are not liable for any failure on your part to obtain or maintain these necessary devices, software, and services.
5.2 Restrictions
Unless explicitly permitted in these Terms of Service (or otherwise authorized by us in writing), you must not, directly or indirectly:
• Reverse Engineering: Reverse engineer, decompile, disassemble, modify, create derivative works, or otherwise attempt to create, derive, or allow or assist any third party to create or derive the source code of the Services, except to the extent permitted by applicable law.
• Removing Notices: Remove or alter terms of use, any copyright notices, or other identifying disclaimers, even if they appear within the Services.
• Regulatory Violations: Use the Services for any purposes classified as "prohibited" or "high-risk" under applicable laws and regulations, including but not limited to AI regulatory requirements in various countries and regions.
• Security Breaches: Attempt to probe, scan, or test the vulnerability of the Services, breach the security or authentication measures of the Services without proper authorization, or intentionally make any part of the Services unavailable to any user.
• Unauthorized Testing: Conduct or solicit others to conduct any load testing or penetration testing without our prior written consent.
• Unauthorized Transfer: Transfer, lease, license, lend, provide, assign, or otherwise make the Services available, or use the Services to provide services to third parties without our prior written consent.
• Encumbrances: Make the Services to become subject to any debt, rights, or encumbrances.
• Data Scraping: Engaging in or using any data mining, crawling, readers, bots, scraping, or similar data collection or extraction methods that result in a load on the service inconsistent with normal human usage behavior.
• Reputation Damage: Use the Services in a way that may harm our name or reputation or that of any of our subsidiaries or partners.
• Improper Use: Use the Services in connection with any illegal, prohibited, discriminatory, fraudulent, deceptive, offensive, violent, pornographic, unethical, inappropriate, or harmful purposes or activities.
• Malicious Content: Can not use the Services or upload any data that results in the distribution or execution of:
◦ (a) Malicious code (e.g., viruses, worms, spyware, adware, or other harmful technologies);
◦ (b) Any software, programs, routines, applications, or technologies that significantly degrade computer performance or introduce significant security risks to computers;
◦ (c) Any illegal, prohibited, discriminatory, fraudulent, deceptive, offensive, violent, pornographic, unethical, inappropriate, or harmful content or materials.
• Exceeding Limits: Exceed the usage limits of the Services as notified to you, or use the Services in a way that excessively consumes our resources or significantly degrades the Services provided to other customers.
• Other Violations: Engage in any activities that (a) violate applicable laws, (b) infringe or violate third-party rights, or (c) are not explicitly permitted by these Terms of Service.
We may take reasonable technical measures to limit your excessive use of computing resources to ensure the overall quality of service for our customer base.
If we block your access to the Services (including by blocking your IP address), you agree not to take any actions to circumvent such blocking (e.g., by disguising your IP address, using proxy IP addresses, or virtual private networks).
If you violate these Terms of Service, we may suspend or terminate your right to use the Services. If you wish to use the Services in ways not expressly permitted by these Terms of Service, you must contact us and obtain separate authorization.

6. User Data
6.1 Your Responsibility:
You may provide prompts and other data to facilitate prompts, fine-tuning, or customization of the Macaron service, or to otherwise generate outputs. We do not claim ownership of such outputs. You or your licensors (as applicable) are the sole owners of the outputs (collectively referred to as "User Data" along with the prompts and other inputs you submit). You agree that you are fully responsible for all User Data and for obtaining all authorizations, consents, and permissions necessary to use and provide User Data to us. By uploading, submitting, or creating User Data, you represent and warrant that:
• You own or have obtained licenses for all rights, titles, and interests in the User Data, including all copyrights and publicity rights contained therein;
• The User Data, as well as our use and receipt of it as permitted under these Terms of Service, does not infringe upon any individual’s rights or violate any applicable laws or regulations;
• You have the right to grant us the license to use the User Data under these Terms of Service;
• To the best of your knowledge, all User Data you submit:
◦ Is accurate and up-to-date;
◦ Is not false, inaccurate, or misleading;
◦ Does not violate these Terms of Service.
6.2 User Data Disclaimer:
Macaron is an AI-based service that operates based on predefined rules and algorithms. You understand and agree that, due to the nature of the Macaron service, other users providing similar or identical inputs may receive outputs similar or identical to yours. We do not guarantee that the outputs you receive from Macaron will be dissimilar or unique compared to those received by other users.
We make no representations or warranties regarding the accuracy, completeness, timeliness, correctness, reliability, quality, suitability, or originality of any User Data processed by Macaron, and we disclaim all related liabilities. You bear all risks associated with the data you provide to Macaron and its transmission, and you are solely responsible for the accuracy, completeness, timeliness, correctness, reliability, quality, suitability, legality, originality, and appropriateness of the data you provide. In the event of any loss or damage to User Data, to the extent permitted by law, your sole remedy is limited to our reasonable efforts to assist you in recovering lost or damaged data.
6.3 License:
You grant us and our affiliates, successors, and assigns a non-exclusive, worldwide, royalty-free, fully paid-up, transferable, sublicensable (through multiple tiers of direct or indirect authorization) right to: (a) during your use of the Macaron service, allow us to copy, display, upload, perform, distribute, store, modify, and otherwise use your User Data to provide and operate the Macaron service and monitor your compliance with these Terms of Service; and (b) a perpetual and irrevocable license to use your User Data in an aggregated and anonymized manner to improve the Macaron service and create usage data. This helps us enhance the accuracy and overall efficiency of the Macaron service. If we process any personal data contained in your User Data (as defined under applicable data protection laws), the above license will be subject to our Privacy Policy, which is posted on our website and updated from time to time.

7. Intellectual Property
7.1 License
Subject to your compliance with these Terms of Service and payment of any applicable fees, we grant you a global, revocable, non-exclusive, non-sublicensable, and non-transferable right to use the Macaron service during the subscription term, in accordance with the provisions of these Terms of Service.
7.2 Ownership
We retain all rights, title, and interest in and to the Usage Data (as defined below), the Macaron service (including the skills, expertise, and methods used to provide the service), and any improvements, enhancements, or modifications thereof ("MINDAI PTE. LTD. Intellectual Property"), including all Intellectual Property Rights (as defined below). "Intellectual Property Rights" refers to patents, rights to inventions, copyrights and related rights, moral rights, data rights and database rights, rights to software code, domain names, trademarks, logos, and trade names, rights to goodwill and protection against passing off, design rights, rights to confidential information, and any other intellectual property rights, whether registered or unregistered, including all applications (and rights to apply) for such rights, renewals, and extensions, as well as rights to claim priority from such rights, and all similar or equivalent rights and forms of protection that exist now or in the future anywhere in the world.
The Macaron service is provided to you on a limited-access basis, and no ownership of MINDAI PTE. LTD.’s Intellectual Property is transferred to you. The names and logos of other companies, products, and services used and displayed in the Macaron service may be trademarks or service marks of their respective owners, who may or may not endorse, be affiliated with, or connected to MINDAI PTE. LTD.
You hereby authorize MINDAI PTE. LTD. and its third-party service providers to generate data, information, insights, statistics, and usage data related to our provision of the Macaron service and your use of the service and associated software, systems, programs, and technologies. We may use such Usage Data for any purpose in accordance with applicable laws and our Privacy Policy.
7.3 Third-Party Intellectual Property
The Macaron service may include intellectual property, including open-source software owned by third parties. Such third-party intellectual property may be licensed to you under separate or different terms and conditions ("Third-Party Terms"), which are not granted to you under these Terms of Service. Such Third-Party Terms will be made available to you, and you agree to comply with them, including any obligations to make payments directly to the relevant third party. MINDAI PTE. LTD. is not responsible for such third-party intellectual property, and you acknowledge and agree that we are not liable for any losses, damages, costs, or expenses you may suffer or incur in connection with any third-party intellectual property or Third-Party Terms.
7.4 Feedback
Any questions, comments, suggestions, ideas, feedback, communication via email, or other information ("Submissions") you provide to us regarding the Macaron service will be considered non-confidential, and MINDAI PTE. LTD. will have the right to use and disseminate such Submissions without restriction, for any purpose, whether commercial or otherwise, without acknowledgment, attribution, or compensation to you.

8. Term and Termination
We may immediately terminate or suspend your account for any reason without prior notice or liability, including but not limited to cases where you violate these terms and conditions.
Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply stop using the service. This agreement will remain in full effect during your use of the service.
You may terminate your use of the service at any time. The company may terminate or suspend your access to the service or your membership at any time, for any reason, without prior warning, which may result in the forfeiture and destruction of all information associated with your account. If you violate any terms or conditions of this agreement, the company may also immediately terminate or suspend any and all access to the service and applications without prior notice or liability.

9. Disclaimer
9.1 Third-Party Websites
The Macaron service may contain links to other independent websites not provided by MINDAI PTE. LTD. Such independent websites are beyond our control, and we do not guarantee their continued availability. You acknowledge that we do not pre-screen or review any such third-party content and are not responsible for the content of these websites or third-party materials, including any errors or omissions, nor are we liable for any losses or damages of any kind resulting from the use of such content. Links to such external websites are provided without implying any endorsement or association with their operators or promoters.
9.2 Service Disclaimer
If you are a consumer, you are entitled to certain rights under the law, and nothing in these Terms of Service limits or deprives you of those rights. Where prohibited by law, we do not exclude or limit liability for losses or damages, including liability for death or personal injury caused by negligence on our part or that of our employees, agents, or subcontractors, or for fraud or fraudulent misrepresentation.
To the fullest extent permitted by applicable law, the Macaron service is provided "as is" and "as available," without any express or implied warranties or conditions, including but not limited to implied warranties of merchantability, satisfactory quality, fitness for a particular purpose, and non-infringement. Specifically, MINDAI PTE. LTD. does not warrant that the Macaron service:
• Will be provided without interruptions
• Will operate properly on any specific computer system or browser
• Will generate content that is always accurate, complete, reliable, secure, useful, or timely
• Has undergone comprehensive usability testing
• Is suitable for your or any third party's use
• Fully complies with all applicable laws or regulations
You understand and agree that the Macaron service may contain errors, defects, or misunderstanding issues, and you should ensure appropriate safety measures are in place. If your use of the Macaron service results in the need for repair or replacement of equipment or data, we are not responsible for such costs. You agree to use the Macaron service at your own risk.
To the fullest extent permitted by law, MINDAI PTE. LTD. and its affiliates or partners are not liable for the truthfulness, accuracy, or completeness of any information provided through the Macaron service, nor for any errors, mistakes, or omissions, or for delays or interruptions in the flow of data or information for any reason.
We recommend that you do not overly rely on the functionality or performance of Macaron. You assume all risks and expenses associated with the use of the Macaron service. You agree that we are not responsible for any consequences that may arise from your use of the service, including technical issues related to internet connectivity (e.g., slow connections or traffic congestion) or any telecommunications or internet provider-related problems.

10. Indemnification
You agree to indemnify and hold harmless MINDAI PTE. LTD., its parent company, subsidiaries, affiliates, officers, and employees from any claims or demands (including but not limited to all damages, liabilities, settlements, costs, and attorney fees) arising from your access to or use of the Macaron service, your violation of this agreement, or any infringement of intellectual property or other rights of any individual or entity by you or any third party using your account.

11. Limitation of Liability
Notwithstanding anything to the contrary and to the fullest extent permitted by law, under no circumstances shall either party, its affiliates, or any licensors or suppliers of Macaron be liable for:
(a) Any consequential, indirect, special, incidental, or punitive damages;
(b) Any loss of profits, business, revenue, anticipated savings, or unnecessary expenses;
(c) Any loss, damage, or interruption of data, networks, information systems, reputation, or goodwill;
(d) The cost of procuring any substitute goods or services.
To the fullest extent permitted by law, the aggregate liability of MINDAI PTE. LTD. and its affiliates under or in connection with this agreement, the software, and the services shall not exceed the total amount you actually paid to MINDAI PTE. LTD. under this agreement in the three (3) months preceding the event giving rise to the liability (if any).
The above exclusions and limitations shall apply:
(a) To the fullest extent permitted by applicable law;
(b) Even if a party has been advised of, or should have been aware of, the possibility of such losses, damages, or costs;
(c) Even if any remedy provided in this agreement fails of its essential purpose;
(d) Regardless of the theory or basis of liability, whether in contract, tort (including negligence or breach of statutory duty), misrepresentation, restitution, or otherwise.

12. Dispute Resolution and Legal Terms
12.1 Governing Law
These Terms of Service and your use of the Macaron service shall be governed by the applicable laws of your country or region (excluding its conflict of law rules). Your use of the Macaron application may also be subject to U.S. and other local, state, national, or international laws.
12.2 Dispute Resolution
If you have any concerns or disputes regarding the Macaron service, you agree to first attempt to resolve the dispute informally by contacting MINDAI PTE. LTD.
12.3 Specific User Terms
For European Union (EU) Users
If you are a consumer in the European Union, you will benefit from any mandatory provisions of the law of your country of residence.
U.S. Federal Government End-Use Provisions
If you are a U.S. federal government end user, our Macaron service constitutes a "commercial item" as defined in 48 C.F.R. §2.101.
U.S. Legal Compliance
You represent and warrant that: (i) You are not located in a country that is subject to a U.S. government embargo or that has been designated by the U.S. government as a "terrorist-supporting" country; (ii) You are not listed on any U.S. government list of prohibited or restricted parties.
12.4 Severability and Waiver
Severability
If any provision of these terms is found to be unenforceable or invalid, that provision will be modified and interpreted to achieve the objectives of the provision to the greatest extent permitted under applicable law, and the remaining provisions will remain in full force and effect.
Waiver
Except as provided herein, the failure to exercise a right or to require performance of an obligation under these terms shall not affect a party’s ability to exercise such right or require such performance at any time thereafter, nor shall the waiver of a breach constitute a waiver of any subsequent breach.

13. Contact Us
If you have any questions about these terms and conditions, you can contact us via hello@macaron.so.  
`}
            </pre>
          </div>
        </div>
      </div>

      {/* Accessibility Notifications */}
      <section
        aria-label="Notifications alt+T"
        tabIndex={-1}
        aria-live="polite"
        aria-relevant="additions text"
      />
    </>
  );
}
