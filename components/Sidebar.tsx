import { 
  Home, 
  CurrencyDollar, 
  Wallet, 
  Megaphone, 
  Lifebuoy,
  ChevronDown,
  ChevronDoubleLeft 
} from "./Icons";

interface SidebarProps {
  currentPage: 'dashboard' | 'home' | 'help' | 'investment';
  isExpanded: boolean;
  onToggleExpanded: () => void;
  onNavigate: (page: 'dashboard' | 'home' | 'help' | 'investment') => void;
}

export function Sidebar({ currentPage, isExpanded, onToggleExpanded, onNavigate }: SidebarProps) {
  return (
    <div className={`fixed bg-white h-screen left-0 top-[66px] z-10 transition-all duration-300 md:block hidden ${isExpanded ? 'w-[295px]' : 'w-[106px]'}`}>
      <div aria-hidden="true" className="absolute border-[#e0e7eb] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      
      {/* Painel principal */}
      <div 
        className={`absolute box-border content-stretch flex gap-[16px] h-[56px] items-center left-[25px] overflow-clip px-[16px] py-[4px] rounded-[10px] top-[89px] cursor-pointer transition-colors ${
          currentPage === 'dashboard' ? 'bg-[#edf8f7]' : 'hover:bg-[#f6f8f9]'
        }`}
        onClick={() => onNavigate('dashboard')}
      >
        <Home />
        <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap transition-all duration-300 overflow-hidden ${
          currentPage === 'dashboard' ? 'text-[#01988c]' : 'text-[#464f53]'
        } ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px] whitespace-pre">Painel principal</p>
        </div>
      </div>

      {/* Comissão */}
      <div className="absolute box-border content-stretch flex gap-[16px] h-[56px] items-center left-[25px] overflow-clip px-[16px] py-[4px] rounded-[10px] top-[145px] hover:bg-[#f6f8f9] cursor-pointer transition-colors">
        <CurrencyDollar />
        <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#464f53] text-[16px] text-nowrap transition-all duration-300 overflow-hidden ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px] whitespace-pre">Comissão</p>
        </div>
        {isExpanded && (
          <div className="ml-auto">
            <ChevronDown />
          </div>
        )}
      </div>

      {/* Investimento */}
      <div 
        className={`absolute box-border content-stretch flex gap-[16px] h-[56px] items-center left-[25px] overflow-clip px-[16px] py-[4px] rounded-[10px] top-[201px] cursor-pointer transition-colors ${
          currentPage === 'investment' ? 'bg-[#edf8f7]' : 'hover:bg-[#f6f8f9]'
        }`}
        onClick={() => onNavigate('investment')}
      >
        <Wallet />
        <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap transition-all duration-300 overflow-hidden ${
          currentPage === 'investment' ? 'text-[#01988c]' : 'text-[#464f53]'
        } ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px] whitespace-pre">Investimento</p>
        </div>
        {isExpanded && (
          <div className="ml-auto">
            <ChevronDown />
          </div>
        )}
      </div>

      {/* Oportunidades */}
      <div 
        className={`absolute box-border content-stretch flex gap-[16px] h-[56px] items-center left-[25px] overflow-clip px-[16px] py-[4px] rounded-[10px] top-[257px] cursor-pointer transition-colors ${
          currentPage === 'home' ? 'bg-[#edf8f7]' : 'hover:bg-[#f6f8f9]'
        }`}
        onClick={() => onNavigate('home')}
      >
        <Megaphone />
        <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap transition-all duration-300 overflow-hidden ${
          currentPage === 'home' ? 'text-[#01988c]' : 'text-[#464f53]'
        } ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px] whitespace-pre">Oportunidades</p>
        </div>
      </div>

      {/* Ajuda */}
      <div 
        className={`absolute box-border content-stretch flex gap-[16px] h-[56px] items-center left-[25px] overflow-clip px-[16px] py-[4px] rounded-[10px] top-[313px] cursor-pointer transition-colors ${
          currentPage === 'help' ? 'bg-[#edf8f7]' : 'hover:bg-[#f6f8f9]'
        }`}
        onClick={() => onNavigate('help')}
      >
        <Lifebuoy />
        <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap transition-all duration-300 overflow-hidden ${
          currentPage === 'help' ? 'text-[#01988c]' : 'text-[#464f53]'
        } ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px] whitespace-pre">Ajuda</p>
        </div>
      </div>

      {/* Collapse button */}
      <div 
        className={`absolute box-border content-stretch flex gap-[16px] h-[56px] items-center justify-center left-0 overflow-clip px-[16px] py-[4px] rounded-[10px] top-0 hover:bg-[#f6f8f9] cursor-pointer transition-all duration-300 ${isExpanded ? 'w-[295px]' : 'w-[106px]'}`}
        onClick={onToggleExpanded}
      >
        <div className={`transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`}>
          <ChevronDoubleLeft />
        </div>
      </div>

      <div className={`absolute h-0 left-0 top-[57px] transition-all duration-300 ${isExpanded ? 'w-[294px]' : 'w-[106px]'}`}>
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 2">
            <path d="M0 1H294" stroke="var(--stroke-0, #E0E7EB)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
