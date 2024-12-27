import React, { useState, useEffect } from 'react';
import {
  FaDiscord,
  FaTelegramPlane,
  FaGithub,
  FaGitlab,    
  FaRegUser,      
  FaGlobe,
  FaProjectDiagram,
  FaUsers,
  FaEye,
  FaCogs,
  FaBriefcase,
  FaExchangeAlt,
  FaLeaf,
  FaLayerGroup,
  FaLock,
  FaSyncAlt,
  FaHandHoldingUsd,
  FaCoins,
  FaHandHoldingHeart,
} from 'react-icons/fa';
import './App.css';
import { PiAtomBold } from "react-icons/pi";
import { GoRocket } from "react-icons/go";
import { FaHandFist } from "react-icons/fa6";
import { MdOutlineSavings } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import Sketch from './sketch';



function DApp() {
  // State for active section and active page
  const [activeSection, setActiveSection] = useState('project');
  const [activePage, setActivePage] = useState('');

  // Light and Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    document.documentElement.className = isDarkMode ? '' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Get the current year for the footer
  const currentYear = new Date().getFullYear();

  // Function to toggle section visibility, allowing only one section open at a time
  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? '' : section));
  };

  // Content for each page (Removed Features from here)
  const pageContent = {
    About:
      'About <strong>dCorps</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

    Explorer:
      '<strong>dCorps</strong> Explorer: Explore the network with our comprehensive tools.',

    Vision: `
      <p>The vision behind this blockchain emerges from a fundamental belief that the way organizations are created, managed, and grown must evolve beyond rigid conventions. Instead of relying on centralized authorities and location bound entities, this perspective imagines a global framework where establishing and operating corporations, non profits, and new organizational models can occur transparently and with minimal friction. In this environment, anyone, regardless of cultural, economic, or geographic barriers, can initiate and nurture a venture while benefiting from automated trust mechanisms and verifiable truth rather than opaque intermediaries.</p>
      <p>This forward looking viewpoint arises from the understanding that legacy structures, often tethered to restrictive borders and complicated bureaucracies, limit who can participate and how quickly they can adapt. By blending advanced blockchain technology, decentralized finance principles, and a deeply rooted ethos of inclusivity, the platform seeks to remove long standing gatekeepers. This shift translates into simpler governance, more equitable distribution of resources, and a more fluid alignment between stakeholders and the communities they serve.</p>
      <p>Practical application of this vision means that small groups in remote villages can form cooperatives that enjoy the same level of secure transparency as multinational enterprises. Voting rights and resource allocations operate through smart contracts, ensuring each participant holds influence proportionate to their contributions. This approach mitigates corruption and reduces the potential for manipulation by anchoring every transaction, agreement, and governance rule in publicly verifiable code.</p>
      <p>As we move toward a more digitally interconnected future defined by <strong>Web3</strong> and beyond, the scope of this vision extends past terrestrial boundaries. Emerging off world markets, orbital research stations, and interplanetary trade networks present opportunities to shape new economies that thrive on the principles of open participation, community consensus, and seamless interoperability. With an infrastructure that replaces cumbersome paperwork and time consuming intermediaries, organizations can move freely through ever expanding economic realms, better prepared to innovate, collaborate, and scale.</p>
      <p>Ultimately, this vision centers on empowering individuals and communities to build, reimagine, and sustain the organizations that define our global future. The goal is to foster a landscape where ideas can flourish into thriving realities, where market entry is not restricted by borders, and where trust is derived from transparent cryptographic verification. This momentum paves the way for new paradigms of corporate life that are ready to serve the dynamic and inclusive economy of tomorrow.</p>
    `,

    Architecture:
      `
      <p>The architecture of the <strong>dCorps</strong> ecosystem leverages the Cosmos SDK and Tendermint-based consensus (often known as CometBFT) to construct a modular and extensible network of interconnected blockchains. At the highest level resides the main hub, implemented as a Cosmos SDK-based chain, responsible for foundational services such as entity registration, governance parameters, and interchain communication. Surrounding the main hub are optional sub-hubs and a collection of independent sub-chains. Each sub-chain, also built on the Cosmos SDK framework, implements custom logic, modules, and data structures to represent distinct corporate entities and their operational requirements.</p>
      <hr>
      <h4>The Main Hub and Sub-Hubs</h4>
      <p>The main hub chain includes core Cosmos SDK modules (Auth, Bank, Staking, Governance) enhanced by custom modules designed for the <strong>dCorps</strong> environment. These specialized modules manage entity registrations, define minimum capital requirements, and optionally interface with decentralized identity (DiD) solutions. Through on-chain governance, <strong>dCorps</strong> token holders can vote on protocol-level adjustments, such as updating collateral thresholds or integrating new sub-hub capabilities.</p>
      <p>Sub-hubs, if introduced, can be independent Cosmos SDK-based chains that aggregate certain classes of entities or provide specialized services. For example, a Compliance Sub-Hub could host advanced KYC/AML or data-validation logic for regulated sectors. Beyond compliance, communities and developer teams can create industry-focused sub-hubs that incorporate sector-specific rules, certification standards, or financial analytics. For instance, a healthcare-oriented sub-hub might integrate modules aligned with medical data privacy regulations, while a finance-focused sub-hub could enforce securities trading guidelines and advanced risk assessment algorithms. These sub-hubs connect back to the main hub via Inter-Blockchain Communication (IBC), enabling cross-chain token transfers, shared state verification, and coordinated policy enforcement.</p>
      <hr>
      <h4>Entity Creation and Registration</h4>
      <p>To form a new entity (corporation, non-profit, or otherwise), a registration transaction is submitted to the main hub’s Entity Registry module. This transaction includes hashed documentation, relevant metadata, and the required <strong>dCorps</strong> token deposit. Once approved, the main hub spawns a dedicated sub-chain for that entity. This sub-chain runs its own Cosmos SDK-based modules (such as Auth, Bank, and Governance) and can incorporate custom logic for roles, voting, and treasury operations. Node operators then instantiate and connect the new chain to the network, setting up validators and establishing secure IBC channels as needed.</p>
      <hr>
      <h4>On-Chain Data and Role Management</h4>
      <p>Each sub-chain encodes corporate structures and roles using role-based access control (RBAC) mechanisms. Authorized wallets, identified by cryptographic keys or optionally linked DiDs, are granted specific permissions. For example, the President role might propose governance amendments, while the Secretary handles record management tasks. Updates to bylaws, shareholder registers, or officer appointments occur through governance proposals or direct role-specific transactions, validated by the sub-chain’s consensus and recorded on its immutable ledger.</p>
      <hr>
      <h4>dShares, Voting Rights, and Financial Instruments</h4>
      <p>dShares, implemented as custom token modules on sub-chains, represent equity-like instruments granting voting rights and economic benefits. They integrate seamlessly with the chain’s Bank and Governance modules. Since dShares follow Cosmos token standards, they can move across IBC channels, appear on decentralized exchanges, or be bridged to centralized exchanges, extending their market reach.</p>
      <p>More complex corporate finance instruments such as dividends, stock options, and warrants are managed by additional modules or smart contracts. These components can schedule distributions, set strike prices, and respond to external events. By interfacing with DeFi protocols accessible through IBC, a sub-chain can incorporate lending, liquidity provisioning, or other financial primitives into its corporate operations.</p>
      <hr>
      <h4>Wallets, Identities, and Compliance</h4>
      <p>Wallets correspond to accounts controlled by private keys, and transaction signatures are validated by the Auth module. To meet regulatory or compliance requirements, entities may integrate DiD solutions at the application layer. Sub-chains or sub-hubs can run Identity modules that link on-chain accounts to off-chain credentials, certifications, or licenses. This approach maintains decentralization and privacy by allowing selective disclosure of verified attributes without embedding a centralized identity system into the chain.</p>
      <hr>
      <h4>Financial Operations and DeFi Integration</h4>
      <p>Treasury management, expenses, and payroll are handled by specialized treasury or accounting modules on the sub-chain. These modules can automate salary disbursements, budget approvals, and dividend payments. Through IBC, sub-chains tap into a wide array of DeFi services, including lending markets, stablecoins, and insurance products hosted on other Cosmos-based chains.</p>
      <p>Moreover, entities can diversify their holdings across various digital assets, not limited to Cosmos-native tokens. For example, they may hold portions of their treasury in stablecoins such as USDT or DAI, as well as major cryptocurrencies like BTC, ETH, or XRP. When possible, native interoperability solutions integrate these external assets directly into the ecosystem. If direct integration is not feasible, secure bridges or wrapping methods act as fallback options. All such holdings are recorded on-chain as part of the entity’s treasury, contributing to its overall valuation. In the event of a sale, buyers and sellers can negotiate how to handle these treasury assets—transferring them to the new owner, retaining them, or adjusting the sale price accordingly—ensuring flexible and transparent financial arrangements.</p>
      <hr>
      <h4>Marketplace, dApps, and Cross-Chain Services</h4>
      <p>Front-end decentralized applications (dApps) connect to node APIs, allowing users to review governance proposals, submit transactions, or inspect corporate records. Explorers track transaction histories and visualize token distributions, officer hierarchies, and voting outcomes. Marketplaces facilitate the buying and selling of sub-chains, enabling entire corporate entities to be acquired, merged, or dissolved on-chain. Similarly, investors can trade dShares on exchanges integrated with the ecosystem, including external DEXs and centralized platforms.</p>
      <p>By leveraging IBC, sub-chains connect to a broad universe of Cosmos-based services, DeFi primitives, and specialized compliance tools. This ensures that as each entity evolves—upgrading modules, adding identity checks, or integrating advanced financial instruments—it retains the ability to access new markets, liquidity sources, and service providers without complex reengineering.</p>
      <hr>
      <h4>Scalability, Interoperability, and Adaptation</h4>
      <p>Each chain runs on Tendermint/CometBFT consensus, and governance proposals orchestrate upgrades and parameter changes. Sub-chains can adopt new Cosmos SDK modules, integrate advanced identity verification solutions, or open IBC channels to cutting-edge DeFi protocols. This modularity and adaptability ensure that the architecture can grow and evolve as economic conditions, regulatory landscapes, and technological capabilities change over time.</p>
      <hr>
      <h4>In Conclusion</h4>
      <p>The <strong>dCorps</strong> architecture is a flexible and interoperable framework that leverages the Cosmos SDK’s modular design, Tendermint’s secure consensus, and IBC’s cross-chain connectivity. It unifies corporate governance, operational logic, identity frameworks, and financial integrations into a coherent ecosystem. Each sub-chain tailors its structure to the entity’s unique requirements while still benefiting from a shared trust layer, broad market access, and the limitless composability of the interchain environment.</p>
      `,

    Tokenomics:
      `
      <p>The tokenomics guiding the <strong>dCorps</strong> ecosystem is rooted in a dual-tier framework that balances operational utility, corporate equity representation, and network-wide security. At its core lies the <strong>dCorps</strong> token, a fundamental asset that fuels the network’s infrastructure, incentivizes honest participation, and underpins the entire system’s economic stability. Alongside it are the dShares, sub-chain tokens representing corporate equities, that enrich the ecosystem with diverse forms of value creation and investment opportunities.</p>
      <hr>
      <h4>The dCorps Token: The Network’s Economic Backbone</h4>
      <p>The <strong>dCorps</strong> token is more than just a means of exchange; it is the essential “fuel” that powers all hub-level operations. From registering new sub-chains to conducting on-chain transactions, verifying corporate documents, and executing governance proposals, the <strong>dCorps</strong> token ensures that every critical action within the ecosystem is tied directly to a consistent, utility-based demand. These mandatory token requirements seamlessly channel value into the network, stabilizing token flow and reducing reliance on speculative behavior.</p>
      <p>Furthermore, each new sub-chain, be it a corporation, non-profit, or other legal entity, is required to deposit a certain amount of <strong>dCorps</strong> tokens as initial capital. This minimum collateral requirement is not merely a licensing fee; it firmly aligns the interests of sub-chains with the integrity of the hub. By having literal “skin in the game,” every participant is incentivized to maintain trustworthy governance, transparent operations, and long-term reliability. Should a sub-chain stray into malicious behavior, the capital at risk ensures swift, equitable consequences, reinforcing an environment where security and accountability are paramount.</p>
      <hr>
      <h4>dShares: Equity in a Decentralized Economy</h4>
      <p>While the <strong>dCorps</strong> token secures the network and facilitates core operations, the sub-chain tokens, dShares, represent a different yet complementary dimension of value. Issued by individual sub-chains, dShares function like equity stakes in a corporation. They grant rights to dividends, corporate governance votes, or other shareholder privileges defined by the entity that issues them. Unlike the <strong>dCorps</strong> token, dShares are not used to pay network fees or secure the hub. Instead, they embody the economic destiny and brand identity of the individual corporate entities, enabling investors to align themselves more closely with specific business models, services, or markets.</p>
      <p>This dual structure creates a dynamic synergy. While <strong>dCorps</strong> tokens unify and secure the broader ecosystem, dShares tap into the unique value proposition of each sub-chain. A thriving sub-chain, buoyed by profitable ventures and strong governance, can enhance the overall appeal of the ecosystem. As more entities incorporate and issue dShares, the demand for the <strong>dCorps</strong> token intensifies, both for meeting ongoing operational costs and fulfilling the initial capital requirements that bind each sub-chain to the hub’s security framework.</p>
      <hr>
      <h4>A Balanced, Adaptive Economic Model</h4>
      <p>As the ecosystem matures, tokenomic parameters can be recalibrated. Early in the network’s life, inflation-driven rewards might be more pronounced to encourage participation, expand the validator set, and establish a broad base of stakers. Over time, as transaction volumes grow and dShares proliferate, fee-based revenue sourced from <strong>dCorps</strong> tokens will naturally rise. This transition gradually reduces reliance on inflation, stabilizing token supply and consolidating long-term value. Governance proposals, voted on by <strong>dCorps</strong> token holders, enable the community to fine-tune inflation schedules, fee structures, and collateral requirements, keeping the system responsive to evolving market conditions and stakeholder priorities.</p>
      <p>Meanwhile, dShares, backed by robust corporate governance and potentially linking into traditional markets or regulatory frameworks, can attract diverse investors. As these sub-chains flourish, their engagement with the hub’s services, document notarization, compliance checks, or interchain liquidity, fuels demand for <strong>dCorps</strong> tokens. This interdependency ensures that both <strong>dCorps</strong> token holders and dShare investors share a vested interest in the network’s steady, sustainable growth.</p>
      <hr>
      <h4>Integration with the Cosmos Ecosystem</h4>
      <p>The strength of the <strong>dCorps</strong> tokenomics model is further amplified by its integration with Cosmos’ Inter-Blockchain Communication (IBC) protocols and potential shared security models. Just as <strong>dCorps</strong> tokens anchor security for the hub, they can also enable sub-chains and their dShares to seamlessly interface with other chains and decentralized services across the Cosmos ecosystem. Liquidity can flow freely, allowing dShare investors to explore DeFi, lending, or staking opportunities in broader markets, and encouraging cross-ecosystem collaborations. As more sub-chains interact with external infrastructures, the web of value connected to <strong>dCorps</strong> tokens and dShares grows denser, more resilient, and more useful to all participants.</p>
      <hr>
      <h4>In Essence</h4>
      <p>This tokenomic framework weaves together two distinct forms of value, operationally critical <strong>dCorps</strong> tokens and equity-like dShares, into a cohesive economic tapestry. <strong>dCorps</strong> tokens ensure that the network remains secure, transparent, and governed by aligned incentives. dShares draw investors and innovators to specific corporate opportunities, enriching the ecosystem with depth and diversity. In combination, they create a powerful economic engine where each component, every token minted, every sub-chain launched, every corporate action taken, reinforces the security, prosperity, and interconnectedness of <strong>dCorps</strong>, its participants, and the expanding Cosmos universe.</p>
    `,

    Governance:
      `
      <p>Governance within the <strong>dCorps</strong> ecosystem is participatory, adaptive, and closely tied to the evolving stages of the project’s development. From the initial conceptual blueprint, through early token offerings, the launch of the main hub, the establishment of a private corporate entity, and eventually the transformation of that entity into a decentralized publicly traded company, the governance framework ensures that all stakeholders have a meaningful role in shaping the network’s direction.</p>
      <hr>
      <h4>Centralized Beginnings</h4>
      <p>In the earliest phase, when the project exists only as an idea and a rough blueprint, governance is naturally centralized. A small team of visionaries defines the foundational principles, explores technological frameworks, and outlines preliminary objectives. Although these decisions are made by a select few, it is understood that as the project matures and more participants become involved, governance responsibilities will be distributed more widely.</p>
      <hr>
      <h4>Introducing dCorp Tokens and Early Participation</h4>
      <p>As the project advances and a pre-sale or initial coin offering takes place, a limited number of dCorp tokens may be introduced. These tokens represent the technological and infrastructural backbone of the ecosystem. Early token holders, intrigued by the project’s technical vision, can now contribute their insights. They participate in discussions and vote on proposals related to network security, validator sets, interoperability features, and upgrades that enhance performance or add new functionalities. This gradual inclusion of token holders fosters a more decentralized decision-making process focused on ensuring that the network’s technical underpinnings remain robust, efficient, and forward-looking.</p>
      <hr>
      <h4>The Hub Launch and Private Corporate Governance</h4>
      <p>When the hub is launched in a production setting, the ecosystem enters a pivotal stage. At this point, <strong>dCorps</strong> registers as a private corporation. Ownership and some decision-making authority shift to this corporate entity. While dCorp token holders continue to influence and vote on technical matters related to the hub, the corporate entity takes charge of its own strategic, operational, and business-related decisions. This corporate governance encompasses aspects like strategic initiatives, internal resource allocation, and operational adjustments. During this private corporate stage, the distinction between technological and business governance becomes clearer: dCorp token holders concentrate on network-level technical policies, while the private corporation directs the entity’s growth and positioning.</p>
      <hr>
      <h4>Growing Adoption and Market Reach</h4>
      <p>As the project garners more attention and conducts additional private sales, it begins to build trust, attract new stakeholders, and establish a reputation. Eventually, a public ICO and listings on decentralized and centralized exchanges expand the network’s reach. With a larger community of participants, the technological decisions made by dCorp token holders gain depth and diversity. More validators and stakers bring new perspectives on network upgrades, software module integrations, and compatibility with other Cosmos-based chains. In parallel, the private corporation refines its internal processes and prepares for a broader, more public role.</p>
      <hr>
      <h4>Transitioning to a Decentralized Public Company</h4>
      <p>In time, <strong>dCorps</strong> reaches a level of maturity and popularity that supports its evolution into a fully decentralized public company. At this stage, the corporation issues dShares, representing actual equity ownership in the business side of the project. By acquiring dShares, investors and stakeholders who believe in the strategic and commercial potential of <strong>dCorps</strong> gain influence over corporate leadership, growth initiatives, and economic policies. Meanwhile, dCorp token holders continue to guide the hub’s technological direction, maintaining the security, scalability, and interoperability that make the ecosystem appealing.</p>
      <hr>
      <h4>A Two-Layered Governance Model</h4>
      <p>This two-layered governance model fosters balance and specialization. Individuals focused on the technical heart of the ecosystem engage with dCorp tokens, driving protocol-level decisions and safeguarding network integrity. Those more inclined toward business and economic aspects participate as dShares holders, helping steer corporate strategies and resource management. Each group concentrates on areas where their interests and expertise align most closely, ensuring that crucial decisions are made by those best equipped to understand their implications.</p>
      <hr>
      <h4>Maturing Governance and Continuous Improvement</h4>
      <p>As <strong>dCorps</strong> reaches full maturity, governance practices grow more sophisticated and well-established. Identity solutions may offer deeper insights, enabling more informed voting and constructive debates. Sub-chains and corporate entities share successful governance experiments, while proposals continually refine operational and technological parameters. Over time, the ecosystem becomes adept at accommodating new market conditions, adopting technological breakthroughs, and responding to evolving community priorities.</p>
      <hr>
      <h4>An Ever-Evolving Governance Framework</h4>
      <p>Ultimately, the governance of <strong>dCorps</strong> adapts at every step, starting from a centralized blueprint drafting process, evolving through token-based technical involvement, moving into a private corporate structure, and finally offering dShares to create a decentralized, publicly traded company. At each phase, authority shifts, responsibilities broaden, and the community gains greater influence. This dynamic arrangement ensures that the project remains transparent, accountable, and resilient, evolving seamlessly from concept to a thriving ecosystem where every participant can contribute to its sustainable growth and long-term success.</p>
      `,

    Roadmap:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

    'Use-Cases':
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

    Community:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

    Security:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

    'Get Involved':
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

    'Corporation':
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

    'Public Company':
      `Public Company: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

    'Non-Profit':
      `Non-Profit: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

    'Main Hub':
      `Main Hub: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'Sub-Hub':
      `Sub-Chain: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'Sub-Chain':
      `Sub-Chain: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    dCorp:
      `dCorp Token: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    dShares:
      `dShares Token: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    Option:
      `Option Token: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    DApp:
      `DApp: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'dShares Exchange':
      `dShares Exchange: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    '<strong>dCorps</strong> Marketplace':
      `<strong>dCorps</strong> Marketplace: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'dShares Initial Offering':
      `dShares Initial Offering: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'Initial DEX Offering':
      `Initial DEX Offering: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'Crypto Merchant':
      `Crypto Merchant: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'Invoicing & Payroll':
      `Invoicing & Payroll: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'RH System':
      `RH System: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'Treasury Management':
      `Treasury Management: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    '<strong>dCorps</strong> Explorer':
      `dCorps Explorer: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'Transfer Support':
      `Transfer Support: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'Name Service':
      `Name Service: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    Interoperability:
      `Interoperability: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    Ecosystem:
      `Ecosystem: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    Developer:
      `Developer Resources: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'Terms of Use':
      `Terms of Use: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  };

  // JSX for the Features page with updated icons
  const FeaturesContent = (
    <div className="features-container">
      <div className="feature-card">
        <div className="icon-container"><GoRocket className="feature-icon" /></div>
        <h3 className="feature-title">Interplanetary Economy</h3>
        <p className="feature-text">
          Lay the groundwork for commerce beyond Earth, ensuring that off-planet colonies 
          can establish, trade, and grow corporations without terrestrial constraints.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaGlobe className="feature-icon" /></div>
        <h3 className="feature-title">Global Accessibility</h3>
        <p className="feature-text">
          Empower entrepreneurs, visionaries, and creators from any region to form and manage 
          corporations, no matter their geographic or economic starting point.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaProjectDiagram className="feature-icon" /></div>
        <h3 className="feature-title">Decentralized Governance</h3>
        <p className="feature-text">
          Distribute decision-making power among diverse stakeholders, preventing centralized 
          authorities from dictating policy and ensuring true community leadership.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaHandFist className="feature-icon" /></div>
        <h3 className="feature-title">Censorship Resistance</h3>
        <p className="feature-text">
          Use blockchain’s immutable ledger to protect against interference or manipulation, 
          preserving corporate autonomy and safeguarding investor rights.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaUsers className="feature-icon" /></div>
        <h3 className="feature-title">Universal Participation</h3>
        <p className="feature-text">
          Offer everyone—from small investors to large institutions—direct access to equity 
          ownership, enabling broad-based wealth creation and collaboration.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaEye className="feature-icon" /></div>
        <h3 className="feature-title">Transparent Operations</h3>
        <p className="feature-text">
          Leverage on-chain records to provide full disclosure of corporate activities, 
          finances, and decisions, promoting honesty and building trust with stakeholders.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><PiAtomBold className="feature-icon" /></div>
        <h3 className="feature-title">Crypto-First Finances</h3>
        <p className="feature-text">
          Embrace a currency-agnostic model where all transactions occur in digital assets, 
          eliminating reliance on traditional banking and increasing financial freedom.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><MdOutlineSavings className="feature-icon" /></div>
        <h3 className="feature-title">Cost-Efficient Framework</h3>
        <p className="feature-text">
          Streamline corporate processes to reduce fees and overhead, making enterprise 
          formation and growth more affordable and equitable.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaCogs className="feature-icon" /></div>
        <h3 className="feature-title">Automated Governance Tools</h3>
        <p className="feature-text">
          Introduce smart contracts and algorithmic decision-making to enhance reliability, 
          reduce human error, and enable self-executing corporate policies.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaBriefcase className="feature-icon" /></div>
        <h3 className="feature-title">Comprehensive Corporate Suites</h3>
        <p className="feature-text">
          Provide integrated tools—such as invoicing, payroll, and treasury management—all 
          within a single, user-friendly digital environment.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><VscLaw className="feature-icon" /></div>
        <h3 className="feature-title">Flexible Legal Structures</h3>
        <p className="feature-text">
          Allow corporations to customize governance models, share classes, and voting rights, 
          ensuring that diverse organizational philosophies can flourish.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaExchangeAlt className="feature-icon" /></div>
        <h3 className="feature-title">Interoperable Ecosystem</h3>
        <p className="feature-text">
          Connect seamlessly with other blockchains and DeFi platforms, broadening financial 
          opportunities, encouraging innovation, and fostering open collaboration.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaLeaf className="feature-icon" /></div>
        <h3 className="feature-title">Sustainable Development</h3>
        <p className="feature-text">
          Incentivize long-term planning and responsible growth, aligning corporate incentives 
          with global well-being, environmental stewardship, and social progress.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaLayerGroup className="feature-icon" /></div>
        <h3 className="feature-title">Scalable Foundations</h3>
        <p className="feature-text">
          Build on Cosmos for high throughput, low latency, and modular upgrades, ensuring 
          that networks scale smoothly as usage intensifies.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaLock className="feature-icon" /></div>
        <h3 className="feature-title">Security and Reliability</h3>
        <p className="feature-text">
          Harness Tendermint/CometBFT consensus and robust validator sets to protect corporate 
          assets from hacks, fraud, or unauthorized access.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaSyncAlt className="feature-icon" /></div>
        <h3 className="feature-title">Future-Proof Adaptability</h3>
        <p className="feature-text">
          Implement governance mechanisms that can evolve over time, adopting new technologies, 
          methods, and policies as conditions change.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaRegUser className="feature-icon" /></div>
        <h3 className="feature-title">Privacy Controls</h3>
        <p className="feature-text">
          Let organizations choose what information to disclose or conceal, balancing 
          transparency with the confidentiality needed for strategic advantage.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaHandHoldingUsd className="feature-icon" /></div>
        <h3 className="feature-title">Democratized Capital Raising</h3>
        <p className="feature-text">
          Facilitate diverse fundraising methods—private sales, public offerings, and 
          innovative token models—to support a wide spectrum of entrepreneurial ventures.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaCoins className="feature-icon" /></div>
        <h3 className="feature-title">DeFi Integration</h3>
        <p className="feature-text">
          Tap into decentralized lending, staking, and yield generation for treasury management, 
          boosting corporate liquidity and expanding strategic financial options.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaHandHoldingHeart className="feature-icon" /></div>
        <h3 className="feature-title">Community-Centric Markets</h3>
        <p className="feature-text">
          Foster marketplaces where investors, customers, and supporters converge, 
          aligning corporate success with genuine public interest and shared values.
        </p>
      </div>

      <div className="feature-card">
        <div className="icon-container"><FaRegLightbulb className="feature-icon" /></div>
        <h3 className="feature-title">Visionary Entrepreneurship</h3>
        <p className="feature-text">
          Inspire a new era of founders who, unencumbered by borders and gatekeepers, 
          can bring ambitious ideas to life, shaping a fairer, more inclusive global economy.
        </p>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      {/* Sidebar with Logo, Slogan, and Organized Menu */}
      <aside className="sidebar">
        <a href="/" className="logo-link">
          <div className="logo-container">
            <img
              src={isDarkMode ? '/dcorps-logo-white.png' : '/dcorps-logo-black.png'}
              alt="dCorps Icon"
              className="logo-icon"
            />
            <h1 className="logo-text">dCorps</h1>
          </div>
        </a>
        <div className="under-development">UNDER DEVELOPMENT</div>

        {/* Project Section */}
        <div className="menu-section">
          <div
            className="menu-title"
            onClick={() => toggleSection('project')}
          >
            Project
          </div>
          <ul
            className={`menu-items ${
              activeSection === 'project' ? 'open' : ''
            }`}
          >
            {[
              'Vision',
              'Features',
              'Architecture',
              'Tokenomics',
              'Governance',
              'Roadmap',
              'Use-Cases',
              'Community',
              'Security',
              'Get Involved',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => {
                    setActivePage(item);
                  }}
                  className={activePage === item ? 'active' : ''}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* dCorps Section */}
        <div className="menu-section">
          <div
            className="menu-title"
            onClick={() => toggleSection('dcorps')}
          >
            dCorps
          </div>
          <ul
            className={`menu-items ${
              activeSection === 'dcorps' ? 'open' : ''
            }`}
          >
            {[
              'Corporation',
              'Public Company',
              'Non-Profit',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => {
                    setActivePage(item);
                  }}
                  className={activePage === item ? 'active' : ''}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Blockchain Section */}
        <div className="menu-section">
          <div
            className="menu-title"
            onClick={() => toggleSection('blockchain')}
          >
            Blockchain
          </div>
          <ul
            className={`menu-items ${
              activeSection === 'blockchain' ? 'open' : ''
            }`}
          >
            {['Main Hub', 'Sub-Hub', 'Sub-Chain'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => {
                    setActivePage(item);
                  }}
                  className={activePage === item ? 'active' : ''}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tokens Section */}
        <div className="menu-section">
          <div
            className="menu-title"
            onClick={() => toggleSection('tokens')}
          >
            Tokens
          </div>
          <ul
            className={`menu-items ${
              activeSection === 'tokens' ? 'open' : ''
            }`}
          >
            {['dCorp', 'dShares', 'Option'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => {
                    setActivePage(item);
                  }}
                  className={activePage === item ? 'active' : ''}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* App Section */}
        <div className="menu-section">
          <div
            className="menu-title"
            onClick={() => {
              setActivePage('DApp');
            }}
          >
            DApp
          </div>
        </div>

        {/* Suites Section */}
        <div className="menu-section">
          <div
            className="menu-title"
            onClick={() => toggleSection('suites')}
          >
            Suites
          </div>
          <ul
            className={`menu-items ${
              activeSection === 'suites' ? 'open' : ''
            }`}
          >
            {[
              'Crypto Merchant',
              'Invoicing & Payroll',
              'HR System',
              'Treasury Management',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => {
                    setActivePage(item);
                  }}
                  className={activePage === item ? 'active' : ''}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Ecosystem Section */}
        <div className="menu-section">
          <div
            className="menu-title"
            onClick={() => toggleSection('ecosystem')}
          >
            Ecosystem
          </div>
          <ul
            className={`menu-items ${
              activeSection === 'ecosystem' ? 'open' : ''
            }`}
          >
            {[
              'dCorps Explorer',
              'dShares Exchange',
              'dCorps Marketplace',
              'dShares Initial Offering',
              'Initial DEX Offering',
              'Transfer Support',
              'Name Service',
              'Interoperability',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => {
                    setActivePage(item);
                  }}
                  className={activePage === item ? 'active' : ''}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Developer Section */}
        <div className="menu-section">
          <div
            className="menu-title"
            onClick={() => {
              setActivePage('Developer');
            }}
          >
            Developer
          </div>
        </div>
      </aside>

      <div className="content-area">
        {/* Fixed Top Bar over Main Content */}
        <header className="top-bar">
          {/* Column 1: Menu */}
          <div className="top-bar-col menu-col">
            <nav className="menu">
              <a href="#" onClick={() => setActivePage('')}>
                Home
              </a>
              <a href="#" onClick={() => setActivePage('About')}>
                About
              </a>
              <a href="#" onClick={() => setActivePage('Explorer')}>
                Explorer
              </a>
            </nav>
          </div>

          {/* Column 2: Cosmos Mention */}
          <div className="top-bar-col cosmos-col">
            <p className="cosmos-sdk-text">
              Developed on C&oslash;smos
              <img
                src={isDarkMode ? "/cosmos-white.png" : "/cosmos-black.png"}
                alt="Cosmos SDK Logo"
                className="cosmos-logo"
              />
            </p>
          </div>

          {/* Column 3: Social Icons */}
          <div className="top-bar-col social-col">
            <div className="social-icons">
              <a href="https://x.com/dcorps_hub" target="_blank" rel="noopener noreferrer">
                <img
                  src={isDarkMode ? "/x-white.png" : "/x-black.png"}
                  alt="X Logo"
                  className="social-logo"
                />
              </a>
              <a
                href="https://discord.com/yourserver"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
              <a
                href="https://t.me/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://github.com/dcorps-hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://gitlab.com/yourrepo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGitlab />
              </a>
            </div>
          </div>

          {/* Column 4: Light and Dark Toggle Switch */}
          <div className="top-bar-col theme-col">
            <div className="theme-toggle">
              <label htmlFor="theme-toggle-switch">
                {isDarkMode ? 'Dark' : 'Light'}
              </label>
              <input
                id="theme-toggle-switch"
                type="checkbox"
                checked={!isDarkMode}
                onChange={toggleTheme}
              />
            </div>
          </div>

          {/* Column 5: Open App Button */}
          <div className="top-bar-col button-col">
            <button className="open-app">Open DApp</button>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <div className="content-header">
            <h1 className="main-title">{activePage || 'Interplanetary Economy...'}</h1>
            {activePage && activePage !== 'Home' && (
              <div className="breadcrumb">
                <a href="#" onClick={() => setActivePage('')}>
                  Home
                </a>{' '}
                / {activePage}
              </div>
            )}
          </div>
          <div className="content-wrapper">
            {activePage === 'Features' ? (
              // Show the FeaturesContent if activePage is 'Features'
              FeaturesContent
            ) : !activePage ? (
              // Homepage (no activePage): Show original text + 2 sections
              <div className="page-text">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      pageContent[activePage] ||
                      '<p>Well, not for now, but this hub project will trace a path toward outer space as we remove border complexities and build on Web3. Let me explain: <strong>dCorps</strong> <i>(Decentralized Corporations)</i> is a next-generation blockchain infrastructure that enables anyone, anywhere to create and manage corporations or nonprofits with total transparency. The first step is not to sell on Mars, but rather to empower people on Earth to register and run their businesses with a high level of openness, regardless of who they are, where they live, or what they believe. By blending blockchain transparency (often reducing the need for traditional regulations), integrating decentralized finance, and remaining purely digital (even when conducting physical trade), dCorps breaks down barriers, making it a perfectly suited innovative solution for an increasingly globalized digital economy. This pioneering project not only serves today’s generation but also paves the way for an <strong>interplanetary economy</strong>, shaping the future of business in a decentralized world.</p>'
                    ,
                  }}
                ></div>

                {/* First Additional Section */}
                <hr />
                <h4 className="section-one-title">Section One Title</h4>
                <p className="section-one-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod velit quis sapien commodo, vel hendrerit libero aliquet. Morbi feugiat congue lectus, et pellentesque nulla molestie vel.
                </p>

                <div className="section-one-cards-container" style={{ marginTop: '20px' }}>
                  <div className="section-one-card">
                    <h5 className="section-one-card-title">Card Title 1</h5>
                    <p className="section-one-card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sapien a augue volutpat aliquam.
                    </p>
                  </div>

                  <div className="section-one-card">
                    <h5 className="section-one-card-title">Card Title 2</h5>
                    <p className="section-one-card-text">
                      Etiam tincidunt mi in dui pretium, id ultrices massa aliquet.
                    </p>
                  </div>

                  <div className="section-one-card">
                    <h5 className="section-one-card-title">Card Title 3</h5>
                    <p className="section-one-card-text">
                      Fusce commodo orci et felis imperdiet, a ullamcorper magna imperdiet.
                    </p>
                  </div>

                  <div className="section-one-card">
                    <h5 className="section-one-card-title">Card Title 4</h5>
                    <p className="section-one-card-text">
                      Curabitur eget diam ac erat suscipit efficitur in et nisi.
                    </p>
                  </div>

                  <div className="section-one-card">
                    <h5 className="section-one-card-title">Card Title 5</h5>
                    <p className="section-one-card-text">
                      Suspendisse potenti. Morbi convallis purus purus, quis lobortis arcu imperdiet at.
                    </p>
                  </div>

                  <div className="section-one-card">
                    <h5 className="section-one-card-title">Card Title 6</h5>
                    <p className="section-one-card-text">
                      Donec vitae tellus vitae justo dignissim congue quis ac risus.
                    </p>
                  </div>

                  <div className="section-one-card">
                    <h5 className="section-one-card-title">Card Title 7</h5>
                    <p className="section-one-card-text">
                      Quisque pulvinar metus at metus commodo, eget mollis lorem vestibulum.
                    </p>
                  </div>

                  <div className="section-one-card">
                    <h5 className="section-one-card-title">Card Title 8</h5>
                    <p className="section-one-card-text">
                      Pellentesque fermentum, massa vitae vulputate accumsan, ex libero cursus enim, a convallis nisi augue at nulla.
                    </p>
                  </div>

                  <div className="section-one-card">
                    <h5 className="section-one-card-title">Card Title 9</h5>
                    <p className="section-one-card-text">
                      Sed luctus magna in mauris auctor, sed luctus enim scelerisque.
                    </p>
                  </div>
                </div>

                {/* Second Additional Section */}
                <hr />
                <h4>Section Two Title</h4>
                <p>
                  Quisque tristique suscipit elit, in dapibus erat facilisis a. Phasellus feugiat ex non arcu sodales, ac varius odio mollis. Praesent sed lorem a nunc finibus vestibulum.
                </p>
                <img
                  src="/sketch.png"
                  alt="Sketch - Section Two"
                  style={{ marginTop: '20px', maxWidth: '100%' }}
                />
              </div>
            ) : (
              // Any other page: Show its pageContent
              <div
                className="page-text"
                dangerouslySetInnerHTML={{
                  __html: pageContent[activePage],
                }}
              ></div>
            )}
          </div>
        </main>





        {/* Footer */}
        <footer className="footer">
          <div className="footer-left">
            <p>&copy; {currentYear} - dCorps.com</p>
          </div>
          <div className="footer-right">
            <a
              href="#"
              onClick={() => setActivePage('Terms of Use')}
            >
              Terms of Use
            </a>
            <a
              href="#dcorps"
              target="_blank"
              rel="noopener noreferrer"
            >
              dCorps #A0000001
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DApp;