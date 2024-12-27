import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExplorerPage from './pages/ExplorerPage';
import VisionPage from './pages/VisionPage';
import ArchitecturePage from './pages/ArchitecturePage';
import TokenomicsPage from './pages/TokenomicsPage';
import GovernancePage from './pages/GovernancePage';
import RoadmapPage from './pages/RoadmapPage';
import UseCasesPage from './pages/UseCasesPage';
import CommunityPage from './pages/CommunityPage';
import SecurityPage from './pages/SecurityPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import DeveloperPage from './pages/DeveloperPage';
import TermsOfUsePage from './pages/TermsOfUsePage';

// dCorps sub-pages
import CorporationPage from './pages/dCorps/CorporationPage';
import PublicCompanyPage from './pages/dCorps/PublicCompanyPage';
import NonProfitPage from './pages/dCorps/NonProfitPage';

// Blockchain sub-pages
import MainHubPage from './pages/blockchain/MainHubPage';
import SubHubPage from './pages/blockchain/SubHubPage';
import SubChainPage from './pages/blockchain/SubChainPage';

// Tokens sub-pages
import DcorpPage from './pages/tokens/DcorpPage';
import DsharesPage from './pages/tokens/DsharesPage';
import OptionPage from './pages/tokens/OptionPage';

// Suites sub-pages
import CryptoMerchantPage from './pages/suites/CryptoMerchantPage';
import InvoicingPayrollPage from './pages/suites/InvoicingPayrollPage';
import HrSystemPage from './pages/suites/HrSystemPage';
import TreasuryManagementPage from './pages/suites/TreasuryManagementPage';

// Ecosystem sub-pages
import DCorpsExplorerPage from './pages/ecosystem/DCorpsExplorerPage';
import DSharesExchangePage from './pages/ecosystem/DSharesExchangePage';
import DCorpsMarketplacePage from './pages/ecosystem/DCorpsMarketplacePage';
import DSharesInitialOfferingPage from './pages/ecosystem/DSharesInitialOfferingPage';
import InitialDexOfferingPage from './pages/ecosystem/InitialDexOfferingPage';
import TransferSupportPage from './pages/ecosystem/TransferSupportPage';
import NameServicePage from './pages/ecosystem/NameServicePage';
import InteroperabilityPage from './pages/ecosystem/InteroperabilityPage';

// DApp
import DAppPage from './pages/DAppPage';

// NEW: Features page
import FeaturesPage from './pages/FeaturesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* General pages */}
        <Route path="about" element={<AboutPage />} />
        <Route path="explorer" element={<ExplorerPage />} />
        <Route path="vision" element={<VisionPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="architecture" element={<ArchitecturePage />} />
        <Route path="tokenomics" element={<TokenomicsPage />} />
        <Route path="governance" element={<GovernancePage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="use-cases" element={<UseCasesPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="get-involved" element={<GetInvolvedPage />} />
        <Route path="developer" element={<DeveloperPage />} />
        <Route path="terms-of-use" element={<TermsOfUsePage />} />

        {/* dCorps */}
        <Route path="corporation" element={<CorporationPage />} />
        <Route path="public-company" element={<PublicCompanyPage />} />
        <Route path="non-profit" element={<NonProfitPage />} />

        {/* Blockchain */}
        <Route path="main-hub" element={<MainHubPage />} />
        <Route path="sub-hub" element={<SubHubPage />} />
        <Route path="sub-chain" element={<SubChainPage />} />

        {/* Tokens */}
        <Route path="dcorp" element={<DcorpPage />} />
        <Route path="dshares" element={<DsharesPage />} />
        <Route path="option" element={<OptionPage />} />

        {/* DApp */}
        <Route path="dapp" element={<DAppPage />} />

        {/* Suites */}
        <Route path="crypto-merchant" element={<CryptoMerchantPage />} />
        <Route path="invoicing-payroll" element={<InvoicingPayrollPage />} />
        <Route path="hr-system" element={<HrSystemPage />} />
        <Route path="treasury-management" element={<TreasuryManagementPage />} />

        {/* Ecosystem */}
        <Route path="dcorps-explorer" element={<DCorpsExplorerPage />} />
        <Route path="dshares-exchange" element={<DSharesExchangePage />} />
        <Route path="dcorps-marketplace" element={<DCorpsMarketplacePage />} />
        <Route path="dshares-initial-offering" element={<DSharesInitialOfferingPage />} />
        <Route path="initial-dex-offering" element={<InitialDexOfferingPage />} />
        <Route path="transfer-support" element={<TransferSupportPage />} />
        <Route path="name-service" element={<NameServicePage />} />
        <Route path="interoperability" element={<InteroperabilityPage />} />
      </Route>
    </Routes>
  );
}

export default App;
