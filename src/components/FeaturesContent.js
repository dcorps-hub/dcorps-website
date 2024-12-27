import React from 'react';
import { GoRocket } from "react-icons/go";
import {
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
  FaRegUser,
  FaHandHoldingUsd,
  FaCoins,
  FaHandHoldingHeart,
} from 'react-icons/fa';
import { PiAtomBold } from "react-icons/pi";
import { FaHandFist } from "react-icons/fa6";
import { MdOutlineSavings } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";

function FeaturesContent() {
  return (
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
}

export default FeaturesContent;
