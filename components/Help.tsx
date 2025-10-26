import svgPaths from "../imports/svg-b7hjeab5xb";
import imgRectangle6339 from "figma:asset/97129847ca213c9177c387c72eb954b9c0c87574.png";
import { imgRectangle6338 } from "../imports/svg-yvux3";
import {
  Bell,
} from "./Icons";
import { BottomNav } from "./BottomNav";
import { Sidebar as SidebarComponent } from "./Sidebar";

interface HelpProps {
  isMobile?: boolean;
  isMenuExpanded: boolean;
  onMenuToggle: () => void;
  onNavigate: (page: string) => void;
}

function CodigoDoImovel() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-start justify-center px-[24px] py-[22px] relative rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full max-w-[1101px]" data-name="Código do Imóvel">
      <p className="font-['Lato:Bold',_sans-serif] leading-[36px] not-italic relative shrink-0 text-[#464f53] text-[32px] w-full">Perguntas frequentes</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
      <p className="leading-[24px] relative shrink-0 text-[#464f53] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        O que fazer se eu não concordar com o valor da comissão?
      </p>
      <p className="leading-[22px] relative shrink-0 text-[#5d696f] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Você deve entrar em contato com seu Gerente imediatamente.
      </p>
    </div>
  );
}

function CodigoDoImovel1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[22px] relative rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full max-w-[1101px]" data-name="Código do Imóvel">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <Frame163 />
      </div>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
      <p className="leading-[24px] relative shrink-0 text-[#464f53] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quanto tempo leva para a transferência ser concluída?
      </p>
      <p className="leading-[22px] min-w-full relative shrink-0 text-[#5d696f] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        O pagamento cai em até 2 dias úteis após a comissão ser paga pelo cliente, desde que você já tenha confirmado o valor e enviado o recibo ou nota fiscal.
      </p>
    </div>
  );
}

function CodigoDoImovel2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[22px] relative rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full max-w-[1101px]" data-name="Código do Imóvel">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <Frame165 />
      </div>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
      <p className="leading-[24px] relative shrink-0 text-[#464f53] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Por que ainda não recebi minha comissão?
      </p>
      <p className="leading-[22px] relative shrink-0 text-[#5d696f] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Para receber sua comissão, os clientes pagadores devem pagar ao menos um dos boletos referentes à compra do imóvel. Além disso, a comissão só é transferida depois que o corretor envia o recibo (ou NFe) assinada,
      </p>
    </div>
  );
}

function CodigoDoImovel3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[22px] relative rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full max-w-[1101px]" data-name="Código do Imóvel">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <Frame167 />
      </div>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
      <p className="leading-[24px] relative shrink-0 text-[#464f53] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Como são calculadas as temperaturas dos imóveis?
      </p>
      <div className="leading-[22px] relative shrink-0 text-[#5d696f] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0 whitespace-pre-wrap">{`A temperatura representa o tempo desde o cadastro do laudo de avaliação. Sendo: Quente: imóveis com até 90 dias de cadastro.  `}</p>
        <p>Morno: entre 91 e 180 dias. Frio: mais de 181 dias. Para aquecer a temperatura do imóvel, é preciso reduzir seu valor em 5% ou mais.</p>
      </div>
    </div>
  );
}

function CodigoDoImovel4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[22px] relative rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full max-w-[1101px]" data-name="Código do Imóvel">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <Frame169 />
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
      <p className="leading-[24px] relative shrink-0 text-[#464f53] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Como posso aumentar a temperatura do imóvel?
      </p>
      <p className="leading-[22px] relative shrink-0 text-[#5d696f] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ao atualizar o preço com um valor até 5% (a partir de) menor que o anterior, a data do laudo é zerada e o imóvel sobe um nível de temperatura: frio vira morno, e morno vira quente.
      </p>
    </div>
  );
}

function CodigoDoImovel5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[22px] relative rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full max-w-[1101px]" data-name="Código do Imóvel">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <Frame171 />
      </div>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
      <p className="leading-[24px] relative shrink-0 text-[#464f53] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Como é calculado o potencial de retorno?
      </p>
      <p className="leading-[22px] relative shrink-0 text-[#5d696f] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        O potencial de retorno é uma estimativa de quanto o corretor pode ganhar com as comissões de seus imóveis quentes. O cálculo considera valor anunciado do imóvel, comissão da opção selecionada e participação do corretor na venda.
      </p>
    </div>
  );
}

function CodigoDoImovel6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[22px] relative rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full max-w-[1101px]" data-name="Código do Imóvel">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <Frame173 />
      </div>
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

export function Help({ isMobile, isMenuExpanded, onMenuToggle, onNavigate }: HelpProps) {
  return (
    <div className="bg-[#f6f8f9] relative size-full overflow-auto">
      {/* Sidebar - Hidden on Mobile */}
      <SidebarComponent 
        currentPage="help"
        isExpanded={isMenuExpanded}
        onToggleExpanded={onMenuToggle}
        onNavigate={(page) => onNavigate(page)}
      />


      {/* Menu Top */}
      <div className="fixed bg-white h-[66px] left-0 right-0 top-0 z-20">
        <div className="h-[66px] overflow-clip relative rounded-[inherit] w-full">
          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="absolute left-[16px] top-1/2 translate-y-[-50%] box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors z-10">
              <MenuIcon />
            </div>
          )}

          <Logo />

          {/* Notificações - Desktop Only */}
          <div className="absolute box-border content-stretch md:flex hidden gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] right-[171px] rounded-[10px] top-[15px] hover:bg-[#f6f8f9] cursor-pointer transition-colors">
            <Bell />
            <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre">
              Notificações
            </p>
          </div>

          {/* Bell Icon Only - Mobile */}
          <div className="absolute md:hidden flex box-border content-stretch gap-[16px] h-[36px] items-center justify-center overflow-clip px-[8px] py-[4px] right-[13px] rounded-[10px] top-[15px] hover:bg-[#f6f8f9] cursor-pointer transition-colors">
            <Bell />
          </div>

          {/* Profile - Desktop Only */}
          <div className="absolute md:flex hidden box-border content-stretch gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] right-[13px] rounded-[10px] top-[15px] hover:bg-[#f6f8f9] cursor-pointer transition-colors">
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

      {/* Main Content */}
      <div className={`mt-[66px] transition-all duration-300 ${isMobile ? 'p-[16px] pb-[88px]' : 'p-[40px]'} ${!isMobile && (isMenuExpanded ? 'ml-[295px]' : 'ml-[106px]')}`}>
        <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
          <CodigoDoImovel />
          <CodigoDoImovel1 />
          <CodigoDoImovel2 />
          <CodigoDoImovel3 />
          <CodigoDoImovel4 />
          <CodigoDoImovel5 />
          <CodigoDoImovel6 />
        </div>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      {isMobile && <BottomNav currentPage="help" onNavigate={(page) => onNavigate(page)} />}
    </div>
  );
}
