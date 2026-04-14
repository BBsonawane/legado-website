export const metadata = {
  title: 'Privacy Policy | Legado',
};

export default function PrivacyPage() {
  return (
    <main className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)', minHeight: '60vh' }}>
      <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
        Last updated: April 12, 2026
      </p>

      <div style={{ lineHeight: '1.8', maxWidth: '800px' }}>

        <p>
          This Privacy Notice for <strong>Legado</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) describes how and why we might access,
          collect, store, use, and/or share (&quot;process&quot;) your personal information when you use our services (&quot;Services&quot;), including when you:
        </p>
        <ul>
          <li>Download and use our mobile application (legado), or any other application of ours that links to this Privacy Notice</li>
          <li>Engage with us in other related ways, including any marketing or events</li>
        </ul>

        <p>
          <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices.
          If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns,
          please contact us at <a href="mailto:contact.support.legado@gmail.com">contact.support.legado@gmail.com</a>.
        </p>

        <h2 id="toc">Table of Contents</h2>
        <ol>
          <li><a href="#infocollect">What Information Do We Collect?</a></li>
          <li><a href="#infouse">How Do We Process Your Information?</a></li>
          <li><a href="#whoshare">When and With Whom Do We Share Your Personal Information?</a></li>
          <li><a href="#cookies">Do We Use Cookies and Other Tracking Technologies?</a></li>
          <li><a href="#ai">Do We Offer Artificial Intelligence-Based Products?</a></li>
          <li><a href="#inforetain">How Long Do We Keep Your Information?</a></li>
          <li><a href="#infosafe">How Do We Keep Your Information Safe?</a></li>
          <li><a href="#infominors">Do We Collect Information From Minors?</a></li>
          <li><a href="#privacyrights">What Are Your Privacy Rights?</a></li>
          <li><a href="#DNT">Controls for Do-Not-Track Features</a></li>
          <li><a href="#uslaws">Do United States Residents Have Specific Privacy Rights?</a></li>
          <li><a href="#policyupdates">Do We Make Updates to This Notice?</a></li>
          <li><a href="#contact">How Can You Contact Us About This Notice?</a></li>
          <li><a href="#request">How Can You Review, Update, or Delete the Data We Collect From You?</a></li>
        </ol>

        <h2 id="infocollect">1. What Information Do We Collect?</h2>

        <h3 id="personalinfo">Personal Information You Disclose to Us</h3>
        <p><em>In Short: We collect personal information that you provide to us.</em></p>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in
          obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise
          when you contact us.
        </p>
        <p><strong>Personal Information Provided by You.</strong> The personal information we collect may include:</p>
        <ul>
          <li>Names</li>
          <li>Email addresses</li>
          <li>Usernames</li>
          <li>Passwords</li>
          <li>Contact or authentication data</li>
          <li>Billing addresses</li>
          <li>Financial information and bank account data</li>
        </ul>

        <p id="sensitiveinfo"><strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
        <ul>
          <li>Student data</li>
          <li>Financial data</li>
          <li>Credit worthiness data</li>
          <li>Bank account and transaction data accessed via Plaid</li>
        </ul>

        <p>
          <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases.
          All payment data is handled and stored by Stripe. You may find their privacy notice at{' '}
          <a href="https://stripe.com/privacy">https://stripe.com/privacy</a>.
          Legado does not store or have access to your full card details. Bank account connections are handled by Plaid using read-only access.
        </p>

        <p><strong>Application Data.</strong> If you use our application(s), we may also collect:</p>
        <ul>
          <li>
            <em>Mobile Device Access.</em> We may request access to certain features from your mobile device, including storage and reminders.
            You may change our access in your device&apos;s settings.
          </li>
          <li>
            <em>Mobile Device Data.</em> We automatically collect device information such as your mobile device ID, model, manufacturer,
            operating system, browser type, IP address, and related configuration information.
          </li>
          <li>
            <em>Push Notifications.</em> We may request to send you push notifications regarding your account. You may opt out in your device&apos;s settings.
          </li>
        </ul>

        <h3>Information Automatically Collected</h3>
        <p><em>In Short: Some information — such as your IP address and browser/device characteristics — is collected automatically when you visit our Services.</em></p>
        <p>
          This information does not reveal your specific identity but may include device and usage data such as your IP address,
          browser and device characteristics, operating system, language preferences, and other technical information needed to
          maintain the security and operation of our Services.
        </p>
        <ul>
          <li>
            <em>Log and Usage Data.</em> Service-related diagnostic, usage, and performance information our servers automatically collect,
            including IP address, device information, browser type, and activity in the Services.
          </li>
          <li>
            <em>Device Data.</em> Information about your computer, phone, tablet, or other device used to access the Services.
          </li>
        </ul>

        <h3>Google API</h3>
        <p>
          Our use of information received from Google APIs will adhere to the{' '}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>,
          including the Limited Use requirements.
        </p>

        <h3 id="othersources">Information Collected From Other Sources</h3>
        <p><em>In Short: We may collect limited data from public databases, marketing partners, and other outside sources.</em></p>
        <p>
          We may obtain information about you from public databases, joint marketing partners, affiliate programs, data providers,
          and other third parties to enhance our ability to provide relevant marketing and services to you.
        </p>

        <h2 id="infouse">2. How Do We Process Your Information?</h2>
        <p><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></p>
        <p>We process your personal information for a variety of reasons, including:</p>
        <ul>
          <li><strong>To facilitate account creation and authentication</strong> and otherwise manage user accounts.</li>
          <li><strong>To deliver and facilitate delivery of services</strong> to the user.</li>
          <li><strong>To respond to user inquiries/offer support</strong> to users.</li>
          <li><strong>To send administrative information</strong> to you about our products, services, and policy changes.</li>
          <li><strong>To request feedback</strong> and contact you about your use of our Services.</li>
          <li><strong>To send marketing and promotional communications,</strong> in accordance with your marketing preferences. You can opt out at any time.</li>
          <li><strong>To protect our Services</strong> through fraud monitoring and prevention.</li>
          <li><strong>To evaluate and improve</strong> our Services, products, marketing, and your experience.</li>
          <li><strong>To identify usage trends</strong> so we can improve our Services.</li>
          <li><strong>To comply with our legal obligations</strong> and respond to legal requests.</li>
        </ul>

        <h2 id="whoshare">3. When and With Whom Do We Share Your Personal Information?</h2>
        <p><em>In Short: We may share information in specific situations with the following categories of third parties.</em></p>
        <p>
          <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors
          who perform services for us. We have contracts in place with all third parties designed to safeguard your personal information.
        </p>
        <p>The categories of third parties we may share personal information with include:</p>
        <ul>
          <li>AI Platforms</li>
          <li>Cloud Computing Services</li>
          <li>Data Analytics Services</li>
          <li>Data Storage Service Providers</li>
          <li>Finance &amp; Accounting Tools</li>
          <li>Payment Processors</li>
          <li>Performance Monitoring Tools</li>
          <li>Product Engineering &amp; Design Tools</li>
          <li>Sales &amp; Marketing Tools</li>
          <li>User Account Registration &amp; Authentication Services</li>
          <li>Website Hosting Service Providers</li>
        </ul>
        <p>
          We may also share your personal information in connection with any merger, sale of company assets, financing,
          or acquisition of all or a portion of our business.
        </p>

        <h2 id="cookies">4. Do We Use Cookies and Other Tracking Technologies?</h2>
        <p><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
        <p>
          We may use cookies and similar tracking technologies to gather information when you interact with our Services,
          helping us maintain security, prevent crashes, fix bugs, save preferences, and assist with basic site functions.
          For further information, please see our Cookie Notice at{' '}
          <a href="https://legado.vercel.app/cookies">https://legado.vercel.app/cookies</a>.
        </p>

        <h3>Google Analytics</h3>
        <p>
          We may share your information with Google Analytics to track and analyze the use of the Services. To opt out, visit{' '}
          <a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.
        </p>

        <h2 id="ai">5. Do We Offer Artificial Intelligence-Based Products?</h2>
        <p><em>In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em></p>
        <p>
          We provide AI Products through third-party service providers including OpenAI. Your input, output, and personal information
          will be shared with and processed by these AI Service Providers to enable your use of our AI Products. You must not use the
          AI Products in any way that violates the terms or policies of any AI Service Provider.
        </p>
        <p>
          Our AI Products are designed to enhance your financial management and insights experience within the Legado platform.
          All personal information processed using our AI Products is handled in line with this Privacy Notice.
        </p>
        <p>
          <strong>How to Opt Out:</strong> You can opt out by logging in to your account settings and updating your preferences,
          or by contacting us directly.
        </p>

        <h2 id="inforetain">6. How Long Do We Keep Your Information?</h2>
        <p><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></p>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice.
          No purpose in this notice will require us keeping your personal information for longer than the period of time in which users
          have an account with us.
        </p>
        <p>
          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it,
          or securely store and isolate it from any further processing until deletion is possible.
        </p>

        <h2 id="infosafe">7. How Do We Keep Your Information Safe?</h2>
        <p><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
        <p>
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal
          information we process. However, no electronic transmission over the Internet or information storage technology can be guaranteed
          to be 100% secure. Transmission of personal information to and from our Services is at your own risk. You should only access
          the Services within a secure environment.
        </p>

        <h2 id="infominors">8. Do We Collect Information From Minors?</h2>
        <p><em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em></p>
        <p>
          We do not knowingly collect, solicit data from, or market to children under 18 years of age. By using the Services, you
          represent that you are at least 18, or that you are the parent or guardian of a minor and consent to their use of the Services.
          If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account
          and take reasonable measures to promptly delete such data. If you become aware of any data we may have collected from children
          under age 18, please contact us at{' '}
          <a href="mailto:contact.support.legado@gmail.com">contact.support.legado@gmail.com</a>.
        </p>

        <h2 id="privacyrights">9. What Are Your Privacy Rights?</h2>
        <p><em>In Short: You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></p>
        <p>
          <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have
          the right to withdraw your consent at any time by contacting us. This will not affect the lawfulness of processing before its withdrawal.
        </p>
        <p>
          <strong>Opting out of marketing communications:</strong> You can unsubscribe from our marketing communications at any time
          by clicking the unsubscribe link in our emails or by contacting us. We may still send you service-related messages necessary
          for the administration of your account.
        </p>

        <h3>Account Information</h3>
        <p>
          To review or change the information in your account or terminate your account, log in to your account settings.
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
          However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with investigations,
          or comply with legal requirements.
        </p>
        <p>
          If you have questions or comments about your privacy rights, email us at{' '}
          <a href="mailto:contact.support.legado@gmail.com">contact.support.legado@gmail.com</a>.
        </p>

        <h2 id="DNT">10. Controls for Do-Not-Track Features</h2>
        <p>
          Most web browsers and some mobile operating systems include a Do-Not-Track (&quot;DNT&quot;) feature. Because there is currently
          no uniform technology standard for recognizing and implementing DNT signals, we do not currently respond to DNT browser signals.
          If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a
          revised version of this Privacy Notice.
        </p>
        <p>
          California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an
          industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
        </p>

        <h2 id="uslaws">11. Do United States Residents Have Specific Privacy Rights?</h2>
        <p>
          <em>
            In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland,
            Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may
            have specific privacy rights regarding your personal information.
          </em>
        </p>

        <h3>Your Rights</h3>
        <p>You have rights under certain US state data protection laws, including:</p>
        <ul>
          <li><strong>Right to know</strong> whether or not we are processing your personal data</li>
          <li><strong>Right to access</strong> your personal data</li>
          <li><strong>Right to correct</strong> inaccuracies in your personal data</li>
          <li><strong>Right to request</strong> the deletion of your personal data</li>
          <li><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</li>
          <li><strong>Right to non-discrimination</strong> for exercising your rights</li>
          <li><strong>Right to opt out</strong> of the processing of your personal data for targeted advertising, sale, or profiling</li>
        </ul>

        <h3>How to Exercise Your Rights</h3>
        <p>
          To exercise these rights, visit{' '}
          <a href="https://legado.vercel.app/contact">https://legado.vercel.app/contact</a> or email us at{' '}
          <a href="mailto:contact.support.legado@gmail.com">contact.support.legado@gmail.com</a>.
        </p>

        <h3>Appeals</h3>
        <p>
          If we decline to take action regarding your request, you may appeal our decision by emailing us at{' '}
          <a href="mailto:contact.support.legado@gmail.com">contact.support.legado@gmail.com</a>.
          If your appeal is denied, you may submit a complaint to your state attorney general.
        </p>

        <h3>California &quot;Shine The Light&quot; Law</h3>
        <p>
          California residents may request information about personal information we disclosed to third parties for direct marketing
          purposes once a year, free of charge. Submit your request in writing using the contact details in Section 13.
        </p>

        <h2 id="policyupdates">12. Do We Make Updates to This Notice?</h2>
        <p><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
        <p>
          We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date
          at the top of this Privacy Notice. If we make material changes, we may notify you by posting a prominent notice or by sending
          you a notification directly. We encourage you to review this Privacy Notice frequently.
        </p>

        <h2 id="contact">13. How Can You Contact Us About This Notice?</h2>
        <p>If you have questions or comments about this notice, you may contact us by post at:</p>
        <address style={{ fontStyle: 'normal', lineHeight: '1.8' }}>
          Legado<br />
          Kalyan<br />
          Maharashtra 421004<br />
          India
        </address>
        <p>
          Or by email at{' '}
          <a href="mailto:contact.support.legado@gmail.com">contact.support.legado@gmail.com</a>.
        </p>

        <h2 id="request">14. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
        <p>
          Based on the applicable laws of your country or state of residence, you may have the right to request access to the personal
          information we collect from you, correct inaccuracies, or delete your personal information. To request to review, update,
          or delete your personal information, please visit:{' '}
          <a href="https://legado.vercel.app/contact">https://legado.vercel.app/contact</a>.
        </p>

      </div>
    </main>
  );
}
