import { Home, CurrencyDollar, Wallet, Megaphone, Lifebuoy } from "./Icons";

interface BottomNavProps {
  currentPage?: 'home' | 'help' | 'investment' | 'dashboard';
  onNavigate?: (page: 'home' | 'help' | 'investment' | 'dashboard') => void;
}

export function BottomNav({ currentPage = 'home', onNavigate }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e7eb] z-50 md:hidden">
      <div className="flex items-center justify-around h-[72px] px-[8px]">
        {/* Painel principal */}
        <div 
          className={`flex flex-col items-center justify-center gap-[4px] cursor-pointer py-[8px] px-[12px] rounded-[8px] transition-colors ${
            currentPage === 'dashboard' ? 'bg-[#edf8f7]' : 'hover:bg-[#f6f8f9]'
          }`}
          onClick={() => onNavigate?.('dashboard')}
        >
          <Home />
          <p className={`font-['Roboto:Regular',_sans-serif] text-[11px] leading-[14px] ${
            currentPage === 'dashboard' ? 'text-[#01988c]' : 'text-[#464f53]'
          }`}>
            Painel
          </p>
        </div>

        {/* Oportunidades */}
        <div 
          className={`flex flex-col items-center justify-center gap-[4px] cursor-pointer py-[8px] px-[12px] rounded-[8px] transition-colors ${
            currentPage === 'home' ? 'bg-[#edf8f7]' : 'hover:bg-[#f6f8f9]'
          }`}
          onClick={() => onNavigate?.('home')}
        >
          <CurrencyDollar />
          <p className={`font-['Roboto:Regular',_sans-serif] text-[11px] leading-[14px] ${
            currentPage === 'home' ? 'text-[#01988c]' : 'text-[#464f53]'
          }`}>
            Oport.
          </p>
        </div>

        {/* Investimento */}
        <div 
          className={`flex flex-col items-center justify-center gap-[4px] cursor-pointer py-[8px] px-[12px] rounded-[8px] transition-colors ${
            currentPage === 'investment' ? 'bg-[#edf8f7]' : 'hover:bg-[#f6f8f9]'
          }`}
          onClick={() => onNavigate?.('investment')}
        >
          <Wallet />
          <p className={`font-['Roboto:Regular',_sans-serif] text-[11px] leading-[14px] ${
            currentPage === 'investment' ? 'text-[#01988c]' : 'text-[#464f53]'
          }`}>
            Invest.
          </p>
        </div>

        {/* Marketing */}
        <div className="flex flex-col items-center justify-center gap-[4px] cursor-pointer py-[8px] px-[12px] rounded-[8px] hover:bg-[#f6f8f9] transition-colors">
          <Megaphone />
          <p className="font-['Roboto:Regular',_sans-serif] text-[#464f53] text-[11px] leading-[14px]">
            Marketing
          </p>
        </div>

        {/* Ajuda */}
        <div 
          className={`flex flex-col items-center justify-center gap-[4px] cursor-pointer py-[8px] px-[12px] rounded-[8px] transition-colors ${
            currentPage === 'help' ? 'bg-[#edf8f7]' : 'hover:bg-[#f6f8f9]'
          }`}
          onClick={() => onNavigate?.('help')}
        >
          <Lifebuoy />
          <p className={`font-['Roboto:Regular',_sans-serif] text-[11px] leading-[14px] ${
            currentPage === 'help' ? 'text-[#01988c]' : 'text-[#464f53]'
          }`}>
            Ajuda
          </p>
        </div>
      </div>
    </div>
  );
}
