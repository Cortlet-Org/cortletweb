export const PRIVACY_POLICY = `
<h1>Privacy Policy</h1>

<div class="legal-meta">
  <p><strong>Effective Date:</strong> 2026-08-30</p>
  <p><strong>Last Updated:</strong> 2026-08-30</p>
</div>

<p>
  This Privacy Policy explains how Cortlet ("Cortlet", "we", "us", or "our")
  collects, uses, processes, stores, and discloses information when you visit
  our website, join our waitlist, contact us, or use the Cortlet WebSocket
  gateway and related services.
</p>

<p>
  Cortlet is a WebSocket gateway designed for serverless architectures.
  Cortlet maintains persistent WebSocket connections and translates messages
  received through those connections into stateless HTTP webhook requests sent
  to a user's backend. Where supported, responses from that backend may then be
  transmitted back through the originating WebSocket connection.
</p>

<p>
  By using Cortlet, you acknowledge the practices described in this Privacy
  Policy.
</p>

<div class="legal-toc">
  <h2>Table of Contents</h2>

  <ol>
    <li><a href="#scope">Scope of This Policy</a></li>
    <li><a href="#information-provided">Information You Provide to Us</a></li>
    <li><a href="#automatic-information">Information Collected Automatically</a></li>
    <li><a href="#gateway-data">Data Processed Through the Cortlet Gateway</a></li>
    <li><a href="#processing">How We Use Information</a></li>
    <li><a href="#legal-bases">Legal Bases for Processing</a></li>
    <li><a href="#sharing">When We Share Information</a></li>
    <li><a href="#third-parties">Third-Party Services and Infrastructure</a></li>
    <li><a href="#cookies">Cookies, Analytics, and Performance Measurement</a></li>
    <li><a href="#retention">Data Retention</a></li>
    <li><a href="#security">Security</a></li>
    <li><a href="#international">International Data Processing</a></li>
    <li><a href="#children">Children's Privacy</a></li>
    <li><a href="#rights">Your Privacy Rights</a></li>
    <li><a href="#dnt">Do Not Track Signals</a></li>
    <li><a href="#changes">Changes to This Privacy Policy</a></li>
    <li><a href="#contact">Contact Us</a></li>
  </ol>
</div>


<h2 id="scope">1. Scope of This Policy</h2>

<p>
  This Privacy Policy applies to information processed in connection with:
</p>

<ul>
  <li>The Cortlet website</li>
  <li>The Cortlet waitlist</li>
  <li>Cortlet documentation</li>
  <li>The Cortlet WebSocket gateway</li>
  <li>Webhook translation and delivery functionality</li>
  <li>Connection handling and authentication mechanisms</li>
  <li>Support or other communications with Cortlet</li>
  <li>Related Cortlet services that reference this Privacy Policy</li>
</ul>

<p>
  This Privacy Policy does not govern third-party websites, cloud platforms,
  serverless providers, webhook endpoints, applications, or other services
  that are not operated by Cortlet.
</p>


<h2 id="information-provided">2. Information You Provide to Us</h2>

<h3>2.1 Waitlist Information</h3>

<p>
  If you join the Cortlet waitlist, we collect your email address.
</p>

<p>
  Cortlet uses Resend to process and deliver waitlist-related email
  communications. Your email address may therefore be transmitted to and
  processed by Resend for those purposes.
</p>

<p>
  Joining the waitlist does not create a Cortlet account.
</p>

<p>
  We may use your email address to:
</p>

<ul>
  <li>Record your waitlist registration</li>
  <li>Contact you about Cortlet availability or access</li>
  <li>Send relevant launch, beta, preview, or product updates</li>
  <li>Respond to questions regarding your waitlist registration</li>
</ul>

<h3>2.2 Communications</h3>

<p>
  If you contact Cortlet by email or another support channel, we may receive
  information you choose to provide, including:
</p>

<ul>
  <li>Your email address</li>
  <li>The contents of your message</li>
  <li>Technical information you voluntarily include</li>
  <li>Attachments or diagnostic information you send to us</li>
</ul>

<p>
  Please avoid sending sensitive personal information unless it is necessary
  for us to respond to your request.
</p>

<h3>2.3 Sensitive Information</h3>

<p>
  Cortlet does not intentionally request or require sensitive personal
  information through the waitlist.
</p>


<h2 id="automatic-information">3. Information Collected Automatically</h2>

<p>
  When you visit or interact with Cortlet's website or infrastructure, certain
  technical information may be generated or collected automatically.
</p>

<p>This may include:</p>

<ul>
  <li>Internet Protocol (IP) address</li>
  <li>Browser type and version</li>
  <li>Operating system or device type</li>
  <li>Referring URL</li>
  <li>Requested pages or resources</li>
  <li>Date and time of requests</li>
  <li>HTTP status codes</li>
  <li>Basic request and response metadata</li>
  <li>Error and diagnostic information</li>
  <li>Security-related event information</li>
  <li>Website performance and responsiveness information</li>
</ul>

<p>
  We may use this information to operate, secure, troubleshoot, monitor, and
  improve Cortlet and the Cortlet website.
</p>

<p>
  We do not intend to use automatically collected technical information to
  identify you personally unless necessary for security, abuse prevention,
  legal compliance, or operation of the Service.
</p>


<h2 id="gateway-data">4. Data Processed Through the Cortlet Gateway</h2>

<p>
  Because Cortlet operates as an intermediary between WebSocket clients and
  HTTP backends, the Service may process application data transmitted through
  the gateway.
</p>

<h3>4.1 WebSocket Messages</h3>

<p>
  Cortlet may receive messages or payloads transmitted by a Client over a
  WebSocket Connection.
</p>

<p>
  Depending on how a User integrates Cortlet, these payloads may contain
  information chosen by that User or the User's own application users.
</p>

<h3>4.2 Connection and Client Metadata</h3>

<p>
  Cortlet may process technical identifiers and connection information
  necessary to establish, maintain, authenticate, route, secure, and
  troubleshoot WebSocket Connections.
</p>

<p>This may include:</p>

<ul>
  <li>Connection identifiers</li>
  <li>Client identifiers</li>
  <li>Short-lived handshake tickets or authentication tokens</li>
  <li>Connection timestamps</li>
  <li>Connection status</li>
  <li>Network metadata</li>
  <li>IP address</li>
  <li>Error information</li>
</ul>

<h3>4.3 Handshake Credentials</h3>

<p>
  Cortlet may use short-lived opaque handshake tickets or similar credentials
  to authorize WebSocket Connections.
</p>

<p>
  Where designed for single use, such credentials may be invalidated after a
  successful connection.
</p>

<h3>4.4 CortletPacket Processing</h3>

<p>
  Cortlet may transform information received through a WebSocket Connection
  into a structured request format, including a CortletPacket, before sending
  that information to a User-configured HTTP Webhook Endpoint.
</p>

<p>
  Such requests may include the original application payload together with
  operational metadata necessary to route and process the request.
</p>

<h3>4.5 Webhook Requests</h3>

<p>
  Cortlet may transmit User Data to the Webhook Endpoint selected or configured
  by the User.
</p>

<p>
  The Webhook Endpoint is controlled by the User or another third party and is
  not controlled by Cortlet unless expressly stated otherwise.
</p>

<h3>4.6 Backend Responses</h3>

<p>
  Where supported, Cortlet may receive an HTTP response from a User's backend
  and process information from that response in order to transmit it to the
  originating WebSocket Connection.
</p>

<h3>4.7 Application Data</h3>

<p>
  Cortlet does not claim ownership of application payloads, WebSocket messages,
  webhook data, backend responses, or other User Data merely because that
  information is transmitted through Cortlet.
</p>

<p>
  Users are responsible for determining what information their applications
  transmit through Cortlet and for ensuring that they have any permissions,
  notices, consents, or other lawful bases required to process that information.
</p>


<h2 id="processing">5. How We Use Information</h2>

<p>
  We may process information for the following purposes:
</p>

<ul>
  <li>To operate and provide the Cortlet Service</li>
  <li>To establish, authenticate, maintain, route, and terminate WebSocket Connections</li>
  <li>To translate WebSocket messages into HTTP webhook requests</li>
  <li>To transmit webhook requests to User-configured Webhook Endpoints</li>
  <li>To receive and transmit backend responses</li>
  <li>To maintain connection and request routing information</li>
  <li>To detect, investigate, and prevent abuse, fraud, attacks, or unauthorized access</li>
  <li>To protect Cortlet infrastructure and connected systems</li>
  <li>To diagnose errors, failed requests, connection failures, and performance problems</li>
  <li>To monitor reliability, capacity, latency, and availability</li>
  <li>To improve Cortlet's functionality and technical performance</li>
  <li>To measure website usage and website performance</li>
  <li>To operate and administer the waitlist</li>
  <li>To communicate with you about the Service</li>
  <li>To respond to support requests or other communications</li>
  <li>To comply with applicable legal obligations</li>
  <li>To establish, exercise, or defend legal rights</li>
</ul>


<h2 id="legal-bases">6. Legal Bases for Processing</h2>

<p>
  Depending on where you are located and the circumstances of the processing,
  Cortlet may process personal information on one or more of the following
  grounds:
</p>

<ul>
  <li>
    <strong>Consent:</strong> where you have given us permission to process
    information for a particular purpose.
  </li>

  <li>
    <strong>Providing the Service:</strong> where processing is necessary to
    provide functionality you have requested.
  </li>

  <li>
    <strong>Legitimate interests:</strong> where processing is reasonably
    necessary to operate, secure, maintain, troubleshoot, measure, or improve
    Cortlet, provided those interests are not overridden by applicable privacy
    rights.
  </li>

  <li>
    <strong>Legal obligations:</strong> where processing is necessary to comply
    with applicable law or a lawful request.
  </li>

  <li>
    <strong>Protection of rights and security:</strong> where processing is
    reasonably necessary to prevent fraud, abuse, attacks, security incidents,
    or other harmful activity.
  </li>
</ul>


<h2 id="sharing">7. When We Share Information</h2>

<p>
  Cortlet does not sell personal information.
</p>

<p>
  We may disclose or make information available in the following circumstances:
</p>

<h3>7.1 Service Providers</h3>

<p>
  We use third-party providers to help operate Cortlet, including website
  hosting, analytics, performance monitoring, email delivery, infrastructure,
  security, and related technical services.
</p>

<p>
  These providers may process information as necessary to perform services on
  our behalf.
</p>

<h3>7.2 User-Configured Webhook Endpoints</h3>

<p>
  Cortlet sends application data to Webhook Endpoints configured by Users.
</p>

<p>
  A User's decision to configure a particular endpoint instructs Cortlet to
  transmit relevant gateway data to that endpoint as part of providing the
  Service.
</p>

<h3>7.3 Legal Requirements</h3>

<p>
  We may disclose information where we reasonably believe disclosure is
  required by applicable law, legal process, court order, or valid governmental
  request.
</p>

<h3>7.4 Security and Protection</h3>

<p>
  We may disclose information where reasonably necessary to:
</p>

<ul>
  <li>Protect Cortlet or its infrastructure</li>
  <li>Investigate fraud or abuse</li>
  <li>Prevent or investigate security incidents</li>
  <li>Protect users or third parties</li>
  <li>Establish or defend legal claims</li>
</ul>

<h3>7.5 Business Transfers</h3>

<p>
  If Cortlet or substantially all assets associated with Cortlet are acquired,
  reorganized, transferred, or otherwise become subject to a business
  transaction, information may be transferred as part of that transaction,
  subject to applicable law.
</p>


<h2 id="third-parties">8. Third-Party Services and Infrastructure</h2>

<p>
  Cortlet uses third-party providers to operate parts of the website,
  waitlist, and Service.
</p>

<h3>8.1 Resend</h3>

<p>
  Cortlet uses Resend for waitlist-related email processing and delivery.
</p>

<p>
  If you join the Cortlet waitlist, your email address may be transmitted to
  and processed by Resend in order to record your waitlist submission and
  deliver relevant Cortlet communications.
</p>

<h3>8.2 Vercel</h3>

<p>
  Cortlet uses Vercel for website hosting and related web infrastructure.
</p>

<p>
  Cortlet also uses Vercel Analytics and Vercel Speed Insights on the Cortlet
  website.
</p>

<p>
  Vercel may process limited technical, usage, and performance information as
  necessary to provide these services.
</p>

<h3>8.3 Other Infrastructure Providers</h3>

<p>
  Cortlet may also depend on other third-party infrastructure or software
  providers where necessary to operate the WebSocket gateway or related
  functionality.
</p>

<p>
  Depending on Cortlet's current infrastructure, third-party providers may
  perform functions such as:
</p>

<ul>
  <li>Cloud computing</li>
  <li>Serverless computing</li>
  <li>Website hosting</li>
  <li>Network delivery</li>
  <li>Database or storage services</li>
  <li>Performance monitoring</li>
  <li>Error monitoring</li>
  <li>Security and abuse prevention</li>
  <li>Email delivery</li>
</ul>

<p>
  Third-party services may process information according to their own terms
  and privacy policies when acting independently of Cortlet.
</p>

<p>
  Cortlet is not responsible for the privacy practices of a User's own Webhook
  Endpoint, backend, cloud provider, application, or other independently
  operated service.
</p>


<h2 id="cookies">9. Cookies, Analytics, and Performance Measurement</h2>

<h3>9.1 Vercel Analytics</h3>

<p>
  Cortlet uses Vercel Analytics on the Cortlet website to understand general
  website usage and traffic patterns.
</p>

<p>
  Vercel Analytics may process limited technical and usage information
  associated with visits to the website, such as page views, referral
  information, browser or device characteristics, and other information
  necessary to provide website analytics.
</p>

<p>
  Cortlet uses this information to understand how the website is used and to
  improve its usability, reliability, content, and navigation.
</p>

<h3>9.2 Vercel Speed Insights</h3>

<p>
  Cortlet uses Vercel Speed Insights to measure and understand the performance
  of the Cortlet website.
</p>

<p>
  Speed Insights may process technical performance information relating to
  page loading, responsiveness, rendering performance, browser or device
  characteristics, and similar website-performance metrics.
</p>

<p>
  Cortlet uses this information to identify performance issues and improve the
  speed and responsiveness of the website.
</p>

<h3>9.3 Cookies and Browser Technologies</h3>

<p>
  Cortlet may use cookies, local storage, or similar browser technologies
  where necessary for basic website functionality, security, preferences, or
  technical operation.
</p>

<p>
  You can generally control cookies through your browser settings. Blocking
  certain essential technologies may affect website functionality.
</p>

<h3>9.4 Website Analytics Are Separate From Software Telemetry</h3>

<div class="legal-notice">
  <p>
    <strong>
      VERCEL ANALYTICS AND VERCEL SPEED INSIGHTS APPLY TO CORTLET'S WEBSITE.
      THEY DO NOT REPRESENT BEHAVIORAL ANALYTICS BUILT INTO CORTLET SOFTWARE
      PACKAGES.
    </strong>
  </p>
</div>

<p>
  Cortlet Software covered by Cortlet's End User License Agreement does not
  include analytics or telemetry designed to report local Software usage back
  to Cortlet unless a specific package clearly states otherwise.
</p>

<p>
  Operational network communications required to use the Cortlet WebSocket
  gateway or another intentionally requested online feature are separate from
  behavioral software analytics.
</p>


<h2 id="retention">10. Data Retention</h2>

<p>
  Cortlet retains information only for as long as reasonably necessary for the
  purposes described in this Privacy Policy, subject to operational, security,
  backup, and legal requirements.
</p>

<h3>10.1 Waitlist Information</h3>

<p>
  We may retain a waitlist email address while the relevant waitlist or
  pre-release program remains active, or until the information is no longer
  reasonably required for the purpose for which it was collected.
</p>

<p>
  You may request removal of your waitlist information by contacting Cortlet.
</p>

<h3>10.2 Gateway Payloads</h3>

<p>
  Cortlet processes WebSocket messages, webhook payloads, and backend
  responses as necessary to perform gateway operations.
</p>

<p>
  Cortlet is designed primarily to transport and translate application
  traffic, rather than to function as long-term application-data storage.
</p>

<p>
  Gateway payloads may be handled temporarily where reasonably necessary for
  delivery, routing, retries, security, diagnostics, troubleshooting, or
  technical operation of the Service.
</p>

<h3>10.3 Website Analytics and Performance Data</h3>

<p>
  Website usage and performance information processed through Vercel Analytics
  and Vercel Speed Insights may be retained according to Cortlet's
  configuration and the applicable Vercel service practices.
</p>

<h3>10.4 Operational Logs</h3>

<p>
  Technical, security, diagnostic, connection, and request metadata may be
  retained for a limited period where reasonably necessary for:
</p>

<ul>
  <li>Security monitoring</li>
  <li>Incident investigation</li>
  <li>Abuse prevention</li>
  <li>Debugging</li>
  <li>Reliability monitoring</li>
  <li>Performance analysis</li>
  <li>Legal compliance</li>
</ul>

<h3>10.5 Deletion and Backups</h3>

<p>
  When information is no longer reasonably required, we may delete, anonymize,
  aggregate, or otherwise remove it from active systems.
</p>

<p>
  Residual copies may remain temporarily in backups, logs, or disaster-recovery
  systems until those systems are overwritten or rotated.
</p>


<h2 id="security">11. Security</h2>

<p>
  Cortlet uses technical and organizational measures intended to protect
  information processed through the Service.
</p>

<p>
  Depending on the relevant part of the Service, these measures may include:
</p>

<ul>
  <li>Short-lived connection credentials</li>
  <li>Authentication and authorization controls</li>
  <li>Network security controls</li>
  <li>Transport encryption</li>
  <li>Access restrictions</li>
  <li>Logging and monitoring</li>
  <li>Abuse and threat detection</li>
  <li>Operational security practices</li>
</ul>

<p>
  No Internet transmission, WebSocket connection, cloud platform, HTTP
  request, storage system, or security mechanism can be guaranteed to be
  completely secure.
</p>

<p>
  Users are responsible for securing their own Clients, Webhook Endpoints,
  credentials, backend systems, serverless functions, infrastructure, and
  application data.
</p>


<h2 id="international">12. International Data Processing</h2>

<p>
  Cortlet and the third-party providers used to operate the Service may
  process information in countries other than the country in which you are
  located.
</p>

<p>
  Data protection laws in those countries may differ from the laws of your
  jurisdiction.
</p>

<p>
  Where required by applicable law, Cortlet will take appropriate steps
  regarding international transfers of personal information.
</p>


<h2 id="children">13. Children's Privacy</h2>

<p>
  Cortlet is a developer infrastructure service and is not specifically
  directed toward children.
</p>

<p>
  We do not knowingly request personal information from children through the
  Cortlet waitlist where doing so would violate applicable law.
</p>

<p>
  If you believe a child has provided personal information to Cortlet in a way
  that is not permitted by applicable law, please contact us at
  <a href="mailto:support@cortlet.com">support@cortlet.com</a>.
</p>

<p>
  If appropriate, we will take reasonable steps to review and delete the
  information.
</p>


<h2 id="rights">14. Your Privacy Rights</h2>

<p>
  Depending on your location and applicable law, you may have rights regarding
  personal information Cortlet processes about you.
</p>

<p>These may include the right to:</p>

<ul>
  <li>Request access to personal information</li>
  <li>Request correction of inaccurate information</li>
  <li>Request deletion of personal information</li>
  <li>Request restriction of certain processing</li>
  <li>Object to certain processing</li>
  <li>Withdraw consent where processing is based on consent</li>
  <li>Request a portable copy of certain information where applicable</li>
  <li>Complain to an appropriate data protection authority where applicable</li>
</ul>

<p>
  These rights are not absolute and may be subject to legal exceptions,
  verification requirements, technical limitations, or other applicable
  conditions.
</p>

<p>
  To submit a privacy request, contact
  <a href="mailto:support@cortlet.com">support@cortlet.com</a>.
</p>

<h3>14.1 Verification</h3>

<p>
  We may request information reasonably necessary to verify that a privacy
  request relates to you before fulfilling the request.
</p>

<p>
  Information submitted for verification will be used for verification,
  security, and fraud-prevention purposes.
</p>

<h3>14.2 User-Controlled Application Data</h3>

<p>
  If personal information was transmitted through Cortlet by an application
  operated by one of our Users, Cortlet may not control the underlying
  application relationship or independently maintain that information.
</p>

<p>
  In those circumstances, you may need to contact the operator of the
  application or Webhook Endpoint responsible for determining how that data is
  processed.
</p>


<h2 id="dnt">15. Do Not Track Signals</h2>

<p>
  Some browsers provide a "Do Not Track" or similar privacy signal.
</p>

<p>
  Because there is not a universally accepted technical standard governing all
  such signals, Cortlet may not respond to every Do Not Track mechanism.
</p>

<p>
  If applicable law requires Cortlet to recognize a particular browser-based
  privacy preference or opt-out mechanism, we will comply as required and may
  update this Privacy Policy accordingly.
</p>


<h2 id="changes">16. Changes to This Privacy Policy</h2>

<p>
  Cortlet may update this Privacy Policy from time to time to reflect changes
  to:
</p>

<ul>
  <li>The Cortlet Service</li>
  <li>Our infrastructure</li>
  <li>Our data-processing practices</li>
  <li>Security practices</li>
  <li>Third-party service providers</li>
  <li>Applicable laws or regulations</li>
</ul>

<p>
  When this policy is updated, the "Last Updated" date at the top of this page
  will be revised.
</p>

<p>
  If a change materially affects how personal information is processed, we may
  provide additional notice where appropriate or required by applicable law.
</p>


<h2 id="contact">17. Contact Us</h2>

<p>
  If you have questions about this Privacy Policy, Cortlet's privacy practices,
  or a privacy request, you may contact us at:
</p>

<ul>
  <li>
    <strong>Email:</strong>
    <a href="mailto:support@cortlet.com">support@cortlet.com</a>
  </li>

  <li>
    <strong>Website:</strong>
    <a href="https://www.cortlet.com">https://www.cortlet.com</a>
  </li>
</ul>

<hr>

<p>
  <em>This Privacy Policy was last updated on 2026-08-30.</em>
</p>
`;