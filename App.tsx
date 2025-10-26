import { useState, useMemo } from "react";
import svgPaths from "./imports/svg-rmw6cq1239";
import imgRectangle1 from "figma:asset/084ad8cf43442c0bf44f1269ef8934df28584422.png";
import imgRectangle2 from "figma:asset/bd6e1ee3992ee7db40c557e1c193ef3b1d1f3ccc.png";
import imgRectangle3 from "figma:asset/11075eaf77b321a035efc64c3dde3243a4f2a736.png";
import imgRectangle4 from "figma:asset/590eb05de854d606b28089bfcc6a6c9d9a592ceb.png";
import imgRectangle5 from "figma:asset/2c5ff4b6c9d48e10f6007d476ce6782cd8e17fe9.png";
import imgRectangle6 from "figma:asset/25cba880a164ca863858e9501c84d2fcc6ae8b2c.png";
import imgRectangle7 from "figma:asset/c61d066b340fe779eb8c9b037f1e9678150eb826.png";
import imgRectangle6339 from "figma:asset/97129847ca213c9177c387c72eb954b9c0c87574.png";
import { imgRectangle6338 } from "./imports/svg-5r2r2";
import { OpportunityCard } from "./components/OpportunityCard";
import { OpportunityListItem } from "./components/OpportunityListItem";
import { FilterSort, FilterOptions, SortOption, ViewMode } from "./components/FilterSort";
import { MobileHeader } from "./components/MobileHeader";
import { BottomNav } from "./components/BottomNav";
import { PriceChart } from "./components/PriceChart";
import { Help } from "./components/Help";
import { Investment } from "./components/Investment";
import { Dashboard } from "./components/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { useIsMobile } from "./components/ui/use-mobile";
import { Toaster } from "./components/ui/sonner";
import {
  ArrowPath,
  Bell,
  XMark,
  Home,
  CurrencyDollar,
  Wallet,
  Megaphone,
  Lifebuoy,
  ChevronDown,
  ChevronUp,
  ChevronDoubleLeft,
  MenuIcon,
} from "./components/Icons";

const opportunities = [
  {
    daysAgo: "há 5 dias",
    image: imgRectangle1,
    location: "Tijuca - RJ",
    address: "Rua Barão de Mesquita, 70",
    oldPrice: "R$ 720.000,00",
    newPrice: "R$ 650.000,00",
    code: "BGAP30001",
  },
  {
    daysAgo: "há 10 dias",
    image: imgRectangle2,
    location: "Copacabana - RJ",
    address: "Rua Domingos Ferreira, 200",
    oldPrice: "R$ 1.400.000,00",
    newPrice: "R$ 1.200.000,00",
    code: "BGAP30002",
  },
  {
    daysAgo: "há 15 dias",
    image: imgRectangle3,
    location: "Leblon - RJ",
    address: "Avenida Delfim Moreira, 250",
    oldPrice: "R$ 3.000.000,00",
    newPrice: "R$ 2.800.000,00",
    code: "BGAP30003",
  },
  {
    daysAgo: "há 1 semana",
    image: imgRectangle4,
    location: "Jardim Botânico - RJ",
    address: "Rua Pacheco Leão, 80",
    oldPrice: "R$ 1.750.000,00",
    newPrice: "R$ 1.600.000,00",
    code: "BGAP30004",
  },
  {
    daysAgo: "há 2 semanas",
    image: imgRectangle5,
    location: "Santa Teresa - RJ",
    address: "Rua Benedito Silva, 45",
    oldPrice: "R$ 1.200.000,00",
    newPrice: "R$ 1.050.000,00",
    code: "BGAP30005",
  },
  {
    daysAgo: "há 1 mês",
    image: imgRectangle6,
    location: "Botafogo - RJ",
    address: "Avenida Ataulfo de Paiva, 150",
    oldPrice: "R$ 850.000,00",
    newPrice: "R$ 780.000,00",
    code: "BGAP30006",
  },
  {
    daysAgo: "há 2 meses",
    image: imgRectangle7,
    location: "Ipanema - RJ",
    address: "Avenida Vieira Souto, 150",
    oldPrice: "R$ 4.200.000,00",
    newPrice: "R$ 3.900.000,00",
    code: "BGAP30007",
  },
  {
    daysAgo: "há 3 dias",
    image: imgRectangle1,
    location: "Flamengo - RJ",
    address: "Rua Paissandu, 110",
    oldPrice: "R$ 980.000,00",
    newPrice: "R$ 890.000,00",
    code: "BGAP30008",
  },
  {
    daysAgo: "há 1 semana",
    image: imgRectangle2,
    location: "Laranjeiras - RJ",
    address: "Rua das Laranjeiras, 320",
    oldPrice: "R$ 1.100.000,00",
    newPrice: "R$ 950.000,00",
    code: "BGAP30009",
  },
  {
    daysAgo: "há 2 dias",
    image: imgRectangle3,
    location: "Gávea - RJ",
    address: "Rua Marquês de São Vicente, 52",
    oldPrice: "R$ 2.500.000,00",
    newPrice: "R$ 2.200.000,00",
    code: "BGAP30010",
  },
  {
    daysAgo: "há 4 dias",
    image: imgRectangle4,
    location: "Barra da Tijuca - RJ",
    address: "Avenida das Américas, 3500",
    oldPrice: "R$ 1.850.000,00",
    newPrice: "R$ 1.650.000,00",
    code: "BGAP30011",
  },
  {
    daysAgo: "há 6 dias",
    image: imgRectangle5,
    location: "Urca - RJ",
    address: "Rua General Urquiza, 85",
    oldPrice: "R$ 2.200.000,00",
    newPrice: "R$ 1.950.000,00",
    code: "BGAP30012",
  },
  {
    daysAgo: "há 8 dias",
    image: imgRectangle6,
    location: "Centro - RJ",
    address: "Rua da Assembléia, 120",
    oldPrice: "R$ 550.000,00",
    newPrice: "R$ 480.000,00",
    code: "BGAP30013",
  },
  {
    daysAgo: "há 12 dias",
    image: imgRectangle7,
    location: "Recreio - RJ",
    address: "Avenida Lúcio Costa, 4200",
    oldPrice: "R$ 1.600.000,00",
    newPrice: "R$ 1.450.000,00",
    code: "BGAP30014",
  },
  {
    daysAgo: "há 1 dia",
    image: imgRectangle1,
    location: "Humaitá - RJ",
    address: "Rua Visconde de Silva, 230",
    oldPrice: "R$ 1.350.000,00",
    newPrice: "R$ 1.180.000,00",
    code: "BGAP30015",
  },
  {
    daysAgo: "há 7 dias",
    image: imgRectangle2,
    location: "Vila Isabel - RJ",
    address: "Boulevard 28 de Setembro, 180",
    oldPrice: "R$ 780.000,00",
    newPrice: "R$ 690.000,00",
    code: "BGAP30016",
  },
  {
    daysAgo: "há 9 dias",
    image: imgRectangle3,
    location: "Méier - RJ",
    address: "Rua Dias da Cruz, 320",
    oldPrice: "R$ 620.000,00",
    newPrice: "R$ 550.000,00",
    code: "BGAP30017",
  },
  {
    daysAgo: "há 11 dias",
    image: imgRectangle4,
    location: "Lapa - RJ",
    address: "Rua do Lavradio, 45",
    oldPrice: "R$ 680.000,00",
    newPrice: "R$ 590.000,00",
    code: "BGAP30018",
  },
  {
    daysAgo: "há 14 dias",
    image: imgRectangle5,
    location: "Cosme Velho - RJ",
    address: "Rua Cosme Velho, 160",
    oldPrice: "R$ 1.450.000,00",
    newPrice: "R$ 1.280.000,00",
    code: "BGAP30019",
  },
  {
    daysAgo: "há 16 dias",
    image: imgRectangle6,
    location: "São Conrado - RJ",
    address: "Avenida Niemeyer, 780",
    oldPrice: "R$ 3.200.000,00",
    newPrice: "R$ 2.950.000,00",
    code: "BGAP30020",
  },
  {
    daysAgo: "há 18 dias",
    image: imgRectangle7,
    location: "Cachambi - RJ",
    address: "Rua Capitão Jesus, 240",
    oldPrice: "R$ 580.000,00",
    newPrice: "R$ 510.000,00",
    code: "BGAP30021",
  },
  {
    daysAgo: "há 20 dias",
    image: imgRectangle1,
    location: "Engenho Novo - RJ",
    address: "Rua Vinte e Quatro de Maio, 380",
    oldPrice: "R$ 640.000,00",
    newPrice: "R$ 570.000,00",
    code: "BGAP30022",
  },
  {
    daysAgo: "há 22 dias",
    image: imgRectangle2,
    location: "Andaraí - RJ",
    address: "Rua Barão de São Francisco, 95",
    oldPrice: "R$ 920.000,00",
    newPrice: "R$ 820.000,00",
    code: "BGAP30023",
  },
  {
    daysAgo: "há 25 dias",
    image: imgRectangle3,
    location: "Grajaú - RJ",
    address: "Rua Borda do Mato, 210",
    oldPrice: "R$ 1.050.000,00",
    newPrice: "R$ 930.000,00",
    code: "BGAP30024",
  },
  {
    daysAgo: "há 28 dias",
    image: imgRectangle4,
    location: "Maracanã - RJ",
    address: "Rua São Francisco Xavier, 450",
    oldPrice: "R$ 710.000,00",
    newPrice: "R$ 640.000,00",
    code: "BGAP30025",
  },
  {
    daysAgo: "há 30 dias",
    image: imgRectangle5,
    location: "Lagoa - RJ",
    address: "Avenida Epitácio Pessoa, 1200",
    oldPrice: "R$ 3.800.000,00",
    newPrice: "R$ 3.500.000,00",
    code: "BGAP30026",
  },
  {
    daysAgo: "há 3 semanas",
    image: imgRectangle6,
    location: "Alto da Boa Vista - RJ",
    address: "Estrada da Vista Chinesa, 560",
    oldPrice: "R$ 2.100.000,00",
    newPrice: "R$ 1.850.000,00",
    code: "BGAP30027",
  },
  {
    daysAgo: "há 1 mês",
    image: imgRectangle7,
    location: "Catete - RJ",
    address: "Rua do Catete, 280",
    oldPrice: "R$ 890.000,00",
    newPrice: "R$ 790.000,00",
    code: "BGAP30028",
  },
  {
    daysAgo: "há 5 semanas",
    image: imgRectangle1,
    location: "Glória - RJ",
    address: "Rua do Russel, 150",
    oldPrice: "R$ 1.150.000,00",
    newPrice: "R$ 1.020.000,00",
    code: "BGAP30029",
  },
  {
    daysAgo: "há 6 semanas",
    image: imgRectangle2,
    location: "Jacarepaguá - RJ",
    address: "Estrada dos Bandeirantes, 2800",
    oldPrice: "R$ 750.000,00",
    newPrice: "R$ 670.000,00",
    code: "BGAP30030",
  },
  {
    daysAgo: "há 2 dias",
    image: imgRectangle3,
    location: "Botafogo - RJ",
    address: "Rua São Clemente, 340",
    oldPrice: "R$ 1.280.000,00",
    newPrice: "R$ 1.150.000,00",
    code: "BGAP30031",
  },
  {
    daysAgo: "há 5 dias",
    image: imgRectangle4,
    location: "Ipanema - RJ",
    address: "Rua Garcia D'Ávila, 125",
    oldPrice: "R$ 4.500.000,00",
    newPrice: "R$ 4.100.000,00",
    code: "BGAP30032",
  },
  {
    daysAgo: "há 8 dias",
    image: imgRectangle5,
    location: "Copacabana - RJ",
    address: "Avenida Atlântica, 2600",
    oldPrice: "R$ 2.900.000,00",
    newPrice: "R$ 2.650.000,00",
    code: "BGAP30033",
  },
  {
    daysAgo: "há 10 dias",
    image: imgRectangle6,
    location: "Leblon - RJ",
    address: "Rua Dias Ferreira, 85",
    oldPrice: "R$ 3.600.000,00",
    newPrice: "R$ 3.300.000,00",
    code: "BGAP30034",
  },
  {
    daysAgo: "há 13 dias",
    image: imgRectangle7,
    location: "Jardim Botânico - RJ",
    address: "Rua Lopes Quintas, 240",
    oldPrice: "R$ 2.400.000,00",
    newPrice: "R$ 2.150.000,00",
    code: "BGAP30035",
  },
  {
    daysAgo: "há 17 dias",
    image: imgRectangle1,
    location: "Gávea - RJ",
    address: "Rua Vice-Governador Rubens Berardo, 95",
    oldPrice: "R$ 2.700.000,00",
    newPrice: "R$ 2.400.000,00",
    code: "BGAP30036",
  },
  {
    daysAgo: "há 21 dias",
    image: imgRectangle2,
    location: "Flamengo - RJ",
    address: "Praia do Flamengo, 420",
    oldPrice: "R$ 1.420.000,00",
    newPrice: "R$ 1.250.000,00",
    code: "BGAP30037",
  },
  {
    daysAgo: "há 24 dias",
    image: imgRectangle3,
    location: "Tijuca - RJ",
    address: "Rua Conde de Bonfim, 650",
    oldPrice: "R$ 850.000,00",
    newPrice: "R$ 750.000,00",
    code: "BGAP30038",
  },
  {
    daysAgo: "há 27 dias",
    image: imgRectangle4,
    location: "Barra da Tijuca - RJ",
    address: "Avenida Sernambetiba, 5400",
    oldPrice: "R$ 2.100.000,00",
    newPrice: "R$ 1.900.000,00",
    code: "BGAP30039",
  },
  {
    daysAgo: "há 4 semanas",
    image: imgRectangle5,
    location: "Santa Teresa - RJ",
    address: "Rua Almirante Alexandrino, 320",
    oldPrice: "R$ 1.380.000,00",
    newPrice: "R$ 1.220.000,00",
    code: "BGAP30040",
  },
];

function UndrawIllustration() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.47%] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 70">
        <g clipPath="url(#clip0_1_8269)">
          <path d={svgPaths.pf0ec700} fill="var(--fill-0, #CCCCCC)" />
          <g>
            <path d={svgPaths.p2ffc7c00} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p39a9900} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p24bfd700} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.pd8c2800} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p220af300} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p2be3e700} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p1ede58c0} fill="var(--fill-0, #F2F2F2)" />
          </g>
          <path d={svgPaths.p1b6fb1f0} fill="var(--fill-0, #E6E6E6)" />
          <g>
            <g>
              <path d={svgPaths.pada7a80} fill="var(--fill-0, #FFB6B6)" />
              <path d={svgPaths.p16334980} fill="var(--fill-0, #2F2E41)" />
            </g>
            <path d={svgPaths.p1c7a6b40} fill="var(--fill-0, #FFB6B6)" />
            <path d={svgPaths.p62a700} fill="var(--fill-0, #FFB6B6)" />
            <path d={svgPaths.p62a700} fill="var(--fill-0, black)" opacity="0.1" />
            <path d={svgPaths.p20e03500} fill="var(--fill-0, #FFB6B6)" />
            <path d={svgPaths.p50d37c0} fill="var(--fill-0, #FF7A11)" />
            <path d={svgPaths.p3b7a6b00} fill="var(--fill-0, #2F2E41)" />
            <path d={svgPaths.p120c0180} fill="var(--fill-0, #2F2E41)" />
            <path d={svgPaths.p3e870500} fill="var(--fill-0, #2F2E41)" />
            <path d={svgPaths.p33e64a00} fill="var(--fill-0, #2F2E41)" />
            <path d={svgPaths.p1abcc100} fill="var(--fill-0, #FFB6B6)" />
            <path d={svgPaths.p21000680} fill="var(--fill-0, #2F2E41)" />
            <path d={svgPaths.p16047b80} fill="var(--fill-0, #2F2E41)" />
            <path d={svgPaths.p1cbc4300} fill="var(--fill-0, #2F2E41)" />
            <g>
              <path d={svgPaths.p7b41b00} fill="var(--fill-0, #FFB6B6)" />
              <path d={svgPaths.p1a62a80} fill="var(--fill-0, #2F2E41)" />
            </g>
            <path d={svgPaths.pba5d000} fill="var(--fill-0, #FF7A11)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_8269">
            <rect fill="white" height="70" width="62.8258" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[44px] left-[16px] top-1/2 translate-y-[-50%] w-[201.304px]">
      <div className="absolute bottom-[17.77%] left-0 right-[46.85%] top-[22.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 27">
          <g>
            <path d={svgPaths.p16b33300} fill="var(--fill-0, #1A5755)" />
            <g>
              <path d={svgPaths.p1f3a6680} fill="var(--fill-0, #1A5755)" />
              <path d={svgPaths.p7561100} fill="var(--fill-0, #1A5755)" />
              <path d={svgPaths.p12b09200} fill="var(--fill-0, #1A5755)" />
              <path d={svgPaths.p1e0f3900} fill="var(--fill-0, #1A5755)" />
              <path d={svgPaths.pfdbf200} fill="var(--fill-0, #1A5755)" />
            </g>
            <path d={svgPaths.pd922600} fill="var(--fill-0, #F2A166)" />
          </g>
        </svg>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[131.3px] top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "44", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[44px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
                <line stroke="var(--stroke-0, #E0E7EB)" x2="44" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState<'home' | 'help' | 'investment' | 'dashboard'>('home');
  const [showBanner, setShowBanner] = useState(true);
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showChart, setShowChart] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    locations: [],
    priceRange: null,
    timePosted: [],
  });
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  // Reset filters and sorting
  const handleRefreshPanel = () => {
    setFilters({
      locations: [],
      priceRange: null,
      timePosted: [],
    });
    setSortBy("newest");
    setViewMode("grid");
    setShowChart(false);
  };

  // Parse price from string like "R$ 720.000,00"
  const parsePrice = (priceString: string): number => {
    return parseFloat(priceString.replace(/[R$\s.]/g, "").replace(",", "."));
  };

  // Parse days ago from string like "há 5 dias", "há 1 semana", "há 2 meses"
  const parseDaysAgo = (daysAgoString: string): number => {
    const normalized = daysAgoString.toLowerCase();
    
    if (normalized.includes("dia")) {
      const match = normalized.match(/(\d+)\s*dia/);
      return match ? parseInt(match[1]) : 0;
    } else if (normalized.includes("semana")) {
      const match = normalized.match(/(\d+)\s*semana/);
      return match ? parseInt(match[1]) * 7 : 7;
    } else if (normalized.includes("mês") || normalized.includes("mes")) {
      const match = normalized.match(/(\d+)\s*m[eê]s/);
      return match ? parseInt(match[1]) * 30 : 30;
    }
    
    return 0;
  };

  // Filter and sort opportunities
  const filteredAndSortedOpportunities = useMemo(() => {
    let result = [...opportunities];

    // Apply filters
    if (filters.locations.length > 0) {
      result = result.filter((opp) => filters.locations.includes(opp.location));
    }

    if (filters.priceRange) {
      result = result.filter((opp) => {
        const price = parsePrice(opp.newPrice);
        return price >= filters.priceRange!.min && price <= filters.priceRange!.max;
      });
    }

    if (filters.timePosted.length > 0) {
      result = result.filter((opp) => {
        const days = parseDaysAgo(opp.daysAgo);
        
        return filters.timePosted.some((filter) => {
          if (filter === "recent" && days <= 7) return true;
          if (filter === "week" && days > 7 && days <= 14) return true;
          if (filter === "month" && days > 14 && days <= 30) return true;
          if (filter === "older" && days > 30) return true;
          return false;
        });
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return parseDaysAgo(a.daysAgo) - parseDaysAgo(b.daysAgo);
        case "oldest":
          return parseDaysAgo(b.daysAgo) - parseDaysAgo(a.daysAgo);
        case "price-low":
          return parsePrice(a.newPrice) - parsePrice(b.newPrice);
        case "price-high":
          return parsePrice(b.newPrice) - parsePrice(a.newPrice);
        case "discount-high": {
          const discountA = ((parsePrice(a.oldPrice) - parsePrice(a.newPrice)) / parsePrice(a.oldPrice)) * 100;
          const discountB = ((parsePrice(b.oldPrice) - parsePrice(b.newPrice)) / parsePrice(b.oldPrice)) * 100;
          return discountB - discountA;
        }
        default:
          return 0;
      }
    });

    return result;
  }, [filters, sortBy]);

  // If on dashboard page, render Dashboard component
  if (currentPage === 'dashboard') {
    return (
      <div className="bg-[#f6f8f9] relative size-full overflow-auto">
        {/* Sidebar - Hidden on Mobile */}
        <Sidebar 
          currentPage={currentPage}
          isExpanded={isMenuExpanded}
          onToggleExpanded={() => setIsMenuExpanded(!isMenuExpanded)}
          onNavigate={(page) => setCurrentPage(page)}
        />

        {/* Menu Top */}
        {isMobile ? (
          <MobileHeader 
            onFilterChange={setFilters}
            onSortChange={setSortBy}
            onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        ) : (
          <div className="fixed bg-white h-[66px] left-0 right-0 top-0 z-20">
            <div className="h-[66px] overflow-clip relative rounded-[inherit] w-full">
              <Logo />

              {/* Notificações - Desktop */}
              <div className="absolute box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] right-[171px] rounded-[10px] top-[15px] hover:bg-[#f6f8f9] cursor-pointer transition-colors">
                <Bell />
                <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre">
                  Notificações
                </p>
              </div>

              {/* Profile - Desktop */}
              <div className="absolute flex box-border content-stretch gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] right-[13px] rounded-[10px] top-[15px] hover:bg-[#f6f8f9] cursor-pointer transition-colors">
                <div className="relative shrink-0 size-[20px]">
                  <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgRectangle6338}')` }}>
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                      <div className="absolute bg-[#d9d9d9] inset-0" />
                      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle6339} />
                    </div>
                  </div>
                </div>
                <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre">
                  Olá, Luciana
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#e0e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          </div>
        )}

        {/* Main Content */}
        <div className={`${isMobile ? 'mt-[122px] p-[16px] pb-[88px]' : 'mt-[66px] p-[40px]'} ${!isMobile && (isMenuExpanded ? 'ml-[295px]' : 'ml-[106px]')}`}>
          <Dashboard />
        </div>

        {/* Mobile Bottom Navigation */}
        {isMobile && (
          <BottomNav 
            currentPage={currentPage}
            onNavigate={(page) => setCurrentPage(page as 'home' | 'help' | 'investment' | 'dashboard')}
          />
        )}
      </div>
    );
  }

  // If on help page, render Help component
  if (currentPage === 'help') {
    return (
      <Help 
        isMobile={isMobile}
        isMenuExpanded={isMenuExpanded}
        onMenuToggle={() => setIsMenuExpanded(!isMenuExpanded)}
        onNavigate={(page) => setCurrentPage(page as 'home' | 'help' | 'investment' | 'dashboard')}
      />
    );
  }

  // If on investment page, render Investment component
  if (currentPage === 'investment') {
    return (
      <Investment 
        isMobile={isMobile}
        isMenuExpanded={isMenuExpanded}
        onMenuToggle={() => setIsMenuExpanded(!isMenuExpanded)}
        onNavigate={(page) => setCurrentPage(page as 'home' | 'help' | 'investment' | 'dashboard')}
      />
    );
  }

  return (
    <div className="bg-[#f6f8f9] relative size-full overflow-auto">
      {/* Sidebar - Hidden on Mobile */}
      <Sidebar 
        currentPage={currentPage}
        isExpanded={isMenuExpanded}
        onToggleExpanded={() => setIsMenuExpanded(!isMenuExpanded)}
        onNavigate={(page) => setCurrentPage(page)}
      />

        {/* Collapse button */}
        <div 
          className={`absolute box-border content-stretch flex gap-[16px] h-[56px] items-center justify-center left-0 overflow-clip px-[16px] py-[4px] rounded-[10px] top-0 hover:bg-[#f6f8f9] cursor-pointer transition-all duration-300 ${isMenuExpanded ? 'w-[295px]' : 'w-[106px]'}`}
          onClick={() => setIsMenuExpanded(!isMenuExpanded)}
        >
          <div className={`transition-transform duration-300 ${isMenuExpanded ? '' : 'rotate-180'}`}>
            <ChevronDoubleLeft />
          </div>
        </div>

        <div className={`absolute h-0 left-0 top-[57px] transition-all duration-300 ${isMenuExpanded ? 'w-[294px]' : 'w-[106px]'}`}>
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 2">
              <path d="M0 1H294" stroke="var(--stroke-0, #E0E7EB)" />
            </svg>
          </div>
        </div>

        {isMenuExpanded && (
          <>
            <div className="absolute left-[251px] size-[20px] top-[163px]">
              <ChevronDown />
            </div>
            <div className="absolute flex items-center justify-center left-[251px] size-[20px] top-[219px]">
              <div className="flex-none rotate-[180deg]">
                <ChevronUp />
              </div>
            </div>
          </>
        )}

        {/* Investimento */}
        <div 
          className="absolute box-border content-stretch flex gap-[16px] h-[56px] items-center left-[25px] overflow-clip px-[16px] py-[4px] rounded-[10px] top-[201px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
          onClick={() => setCurrentPage('investment')}
        >
          <Wallet />
          <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#464f53] text-[16px] text-nowrap transition-all duration-300 overflow-hidden ${isMenuExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
            <p className="leading-[22px] whitespace-pre">Investimento</p>
          </div>
        </div>

        {/* Oportunidades - Active */}
        <div className="absolute bg-[#edf8f7] box-border content-stretch flex gap-[16px] h-[56px] items-center left-[25px] overflow-clip px-[16px] py-[4px] rounded-[10px] top-[257px]">
          <Megaphone />
          <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#01988c] text-[16px] text-nowrap transition-all duration-300 overflow-hidden ${isMenuExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
            <p className="leading-[22px] whitespace-pre">Oportunidades</p>
          </div>
        </div>



      {/* Menu Top */}
      {isMobile ? (
        <MobileHeader 
          onFilterChange={setFilters}
          onSortChange={setSortBy}
          onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      ) : (
        <div className="fixed bg-white h-[66px] left-0 right-0 top-0 z-20">
          <div className="h-[66px] overflow-clip relative rounded-[inherit] w-full">
            <Logo />

            {/* Notificações - Desktop */}
            <div className="absolute box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] right-[171px] rounded-[10px] top-[15px] hover:bg-[#f6f8f9] cursor-pointer transition-colors">
              <Bell />
              <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre">
                Notificações
              </p>
            </div>

            {/* Profile - Desktop */}
            <div className="absolute flex box-border content-stretch gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] right-[13px] rounded-[10px] top-[15px] hover:bg-[#f6f8f9] cursor-pointer transition-colors">
              <div className="relative shrink-0 size-[20px]">
                <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgRectangle6338}')` }}>
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                    <div className="absolute bg-[#d9d9d9] inset-0" />
                    <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle6339} />
                  </div>
                </div>
              </div>
              <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre">
                Olá, Luciana
              </p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e0e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isMobile ? 'mt-[122px] p-[16px] pb-[88px]' : 'mt-[66px] p-[40px]'} ${!isMobile && (isMenuExpanded ? 'ml-[295px]' : 'ml-[106px]')}`}>
        {/* Header Info - Desktop Only */}
        {!isMobile && (
          <div className="flex items-center justify-between mb-[24px]">
            <div className="flex items-center gap-[16px]">
              <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] text-[#74848b] text-[14px]">
                12/05/2023
              </p>
              <p className="font-['Roboto:Regular',_sans-serif] leading-[22px] text-[#464f53] text-[16px]">
                <span className="font-['Roboto:Bold',_sans-serif] font-bold">Olá Luciana,</span>
                {` boas-vindas ao seu painel de corretor.`}
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] text-[#74848b] text-[14px]">
                Há 3 mins atrás
              </p>
              <div 
                className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                onClick={handleRefreshPanel}
              >
                <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre">
                  Atualizar painel
                </p>
                <ArrowPath />
              </div>
            </div>
          </div>
        )}

        {/* Banner - Desktop Only */}
        {!isMobile && showBanner && (
          <div className="bg-white h-[102px] relative rounded-[10px] mb-[24px]">
            <div aria-hidden="true" className="absolute border border-[#e0e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)]" />
            <div className="size-full">
              <div className="box-border content-stretch flex gap-[16px] h-[102px] items-center px-[24px] py-[16px] relative w-full">
                <div className="aspect-[101/112] h-full relative shrink-0">
                  <div className="absolute bg-[#01988c] bottom-[2.15%] left-[4.26%] right-0 rounded-tl-[300px] rounded-tr-[300px] top-[11.16%]" />
                  <UndrawIllustration />
                </div>
                <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[22px] relative shrink-0 text-[#464f53] text-[16px] flex-1">
                  <p>Explore as oportunidades mais quentes com seus clientes!</p>
                </div>
                <div 
                  className="absolute box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] right-[8px] rounded-[10px] top-[8px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                  onClick={() => setShowBanner(false)}
                >
                  <XMark />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Filter and Sort */}
        {!isMobile && (
          <FilterSort 
            onFilterChange={setFilters}
            onSortChange={setSortBy}
            onViewModeChange={setViewMode}
            onChartToggle={() => setShowChart(true)}
            viewMode={viewMode}
            showChart={showChart}
            isMobile={isMobile}
          />
        )}

        {/* Price Chart */}
        {showChart && (
          <PriceChart onClose={() => setShowChart(false)} />
        )}

        {/* Content - Grid or List */}
        {viewMode === "grid" ? (
          <div className="grid gap-[19px]" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(354px, 1fr))' }}>
            {filteredAndSortedOpportunities.length > 0 ? (
              filteredAndSortedOpportunities.map((opportunity, index) => (
                <OpportunityCard key={index} {...opportunity} isMobile={isMobile} />
              ))
            ) : (
              <div className="col-span-full text-center py-[60px]">
                <p className="font-['Roboto:Bold',_sans-serif] font-bold text-[#74848b] text-[18px]">
                  Nenhuma oportunidade encontrada
                </p>
                <p className="font-['Roboto:Regular',_sans-serif] text-[#74848b] text-[14px] mt-[8px]">
                  Tente ajustar os filtros para ver mais resultados
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-[16px]">
            {filteredAndSortedOpportunities.length > 0 ? (
              filteredAndSortedOpportunities.map((opportunity, index) => (
                <OpportunityListItem key={index} {...opportunity} isMobile={isMobile} />
              ))
            ) : (
              <div className="text-center py-[60px]">
                <p className="font-['Roboto:Bold',_sans-serif] font-bold text-[#74848b] text-[18px]">
                  Nenhuma oportunidade encontrada
                </p>
                <p className="font-['Roboto:Regular',_sans-serif] text-[#74848b] text-[14px] mt-[8px]">
                  Tente ajustar os filtros para ver mais resultados
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Navigation - Mobile Only */}
      {isMobile && <BottomNav currentPage={currentPage} onNavigate={(page) => setCurrentPage(page)} />}
      
      {/* Toaster for notifications */}
      <Toaster position="top-center" />
    </div>
  );
}
