import svgPaths from "../imports/svg-54za97uwzn";
import imgRectangle6339 from "figma:asset/97129847ca213c9177c387c72eb954b9c0c87574.png";
import { imgRectangle6338 } from "../imports/svg-7hfye";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CheckboxEmptyIcon, CheckboxFilledIcon, RadioEmptyIcon, RadioFilledIcon } from "./Icons";
import { FilterOptions, SortOption } from "./FilterSort";
import { useState, useEffect } from "react";

interface MobileHeaderProps {
  onFilterChange?: (filters: FilterOptions) => void;
  onSortChange?: (sortBy: SortOption) => void;
  onMenuClick?: () => void;
}

const locations = [
  "Tijuca - RJ",
  "Copacabana - RJ",
  "Leblon - RJ",
  "Ipanema - RJ",
  "Botafogo - RJ",
  "Barra da Tijuca - RJ",
  "Flamengo - RJ",
  "Jardim Botânico - RJ",
];

const priceRanges = [
  { label: "Até R$ 200.000", min: 0, max: 200000 },
  { label: "R$ 200.000 - R$ 400.000", min: 200000, max: 400000 },
  { label: "R$ 400.000 - R$ 600.000", min: 400000, max: 600000 },
  { label: "R$ 600.000 - R$ 800.000", min: 600000, max: 800000 },
  { label: "Acima de R$ 800.000", min: 800000, max: Infinity },
];

const timePostedOptions = [
  { value: "recent", label: "Últimos 7 dias" },
  { value: "week", label: "Última semana" },
  { value: "month", label: "Último mês" },
];

const sortOptions = [
  { value: "newest", label: "Mais recentes" },
  { value: "oldest", label: "Mais antigas" },
  { value: "price-low", label: "Menor preço" },
  { value: "price-high", label: "Maior preço" },
  { value: "discount-high", label: "Maior desconto" },
];

function Group1() {
  return (
    <div className="absolute inset-[22.23%_2.7%_17.77%_-47.3%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 27">
        <g id="Group">
          <path d={svgPaths.p16b33300} fill="#1A5755" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p2a131e00} fill="#1A5755" id="Vector_2" />
            <path d={svgPaths.p7561100} fill="#1A5755" id="Vector_3" />
            <path d={svgPaths.p12b09200} fill="#1A5755" id="Vector_4" />
            <path d={svgPaths.p1e0f3900} fill="#1A5755" id="Vector_5" />
            <path d={svgPaths.pfdbf200} fill="#1A5755" id="Vector_6" />
          </g>
          <path d={svgPaths.pd922600} fill="#F2A166" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Frame159() {
  return (
    <div className="absolute h-[44px] left-[52px] top-[11px] w-[74px]">
      <Group1 />
    </div>
  );
}

function Profile() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="profile">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgRectangle6338}')` }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle6339} />
        </div>
      </div>
    </div>
  );
}

function HeroiconsMiniBell() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="heroicons-mini/bell">
        <path clipRule="evenodd" d={svgPaths.p1867da00} fill="#01988C" fillRule="evenodd" id="Union" />
      </g>
    </svg>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <HeroiconsMiniBell />
    </div>
  );
}

function MenuTop({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="bg-white h-[66px] left-0 top-0 w-full" data-name="menu_top">
      <div className="h-[66px] overflow-clip relative rounded-[inherit] w-full">
        <Frame159 />
        <div 
          className="absolute box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center left-[245px] overflow-clip px-[13px] py-[4px] rounded-[10px] top-[15px] cursor-pointer" 
          data-name="minimal/medium+iconleft"
          onClick={onMenuClick}
        >
          <Profile />
          <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Menu
          </p>
        </div>
        <div className="absolute box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] right-[115px] rounded-[10px] top-[15px]" data-name="minimal/medium+icononly">
          <Icons />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17e3a380} fill="#01988C" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SortIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="heroicons-mini/bars-arrow-down">
          <path clipRule="evenodd" d={svgPaths.p2c39a300} fill="#01988C" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

export function MobileHeader({ onFilterChange, onSortChange, onMenuClick }: MobileHeaderProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [selectedTimePosted, setSelectedTimePosted] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  useEffect(() => {
    const filters: FilterOptions = {
      locations: selectedLocations,
      priceRange: selectedPriceRange !== null ? priceRanges[selectedPriceRange] : null,
      timePosted: selectedTimePosted,
    };
    onFilterChange?.(filters);
  }, [selectedLocations, selectedPriceRange, selectedTimePosted, onFilterChange]);

  useEffect(() => {
    onSortChange?.(sortBy);
  }, [sortBy, onSortChange]);

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location]);
    } else {
      setSelectedLocations(selectedLocations.filter((l) => l !== location));
    }
  };

  const handlePriceRangeChange = (index: number) => {
    setSelectedPriceRange(selectedPriceRange === index ? null : index);
  };

  const handleTimePostedChange = (value: string, checked: boolean) => {
    if (checked) {
      setSelectedTimePosted([...selectedTimePosted, value]);
    } else {
      setSelectedTimePosted(selectedTimePosted.filter((v) => v !== value));
    }
  };

  const handleClearFilters = () => {
    setSelectedLocations([]);
    setSelectedPriceRange(null);
    setSelectedTimePosted([]);
    setFilterOpen(false);
  };

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    setSortOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20">
      <MenuTop onMenuClick={onMenuClick} />
      <div className="bg-white box-border content-stretch flex h-[56px] items-center justify-between px-[24px] py-[8px] w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#e0e7eb] border-[1px_0px] border-solid inset-0 pointer-events-none" />
        
        {/* Filtrar Button */}
        <Popover open={filterOpen} onOpenChange={setFilterOpen}>
          <PopoverTrigger asChild>
            <div className="box-border content-stretch flex gap-[16px] h-[37.333px] items-center justify-center overflow-clip px-[13px] py-[4px] rounded-[10px] shrink-0 cursor-pointer" data-name="minimal/medium+iconleft">
              <FilterIcon />
              <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                Filtrar
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[calc(100vw-32px)] p-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]" align="start" sideOffset={8}>
            <div className="bg-white rounded-[10px]">
              {/* Header */}
              <div className="flex items-center justify-between px-[16px] py-[14px]">
                <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#74848b] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Filtrar por:
                </p>
                <div 
                  className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                  onClick={handleClearFilters}
                >
                  <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Limpar filtros
                  </p>
                </div>
              </div>

              {/* Separator */}
              <div className="h-0 w-full">
                <div className="h-[1px] bg-[#f0f3f5]" />
              </div>

              {/* Content */}
              <div className="px-[16px] py-[24px] flex flex-col gap-[24px] max-h-[60vh] overflow-y-auto">
                {/* Localização */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#464f53] text-[16px] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Localização
                  </p>
                  {locations.map((location) => {
                    const isSelected = selectedLocations.includes(location);
                    return (
                      <div 
                        key={location}
                        className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-start overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                        onClick={() => handleLocationChange(location, !isSelected)}
                      >
                        {isSelected ? <CheckboxFilledIcon /> : <CheckboxEmptyIcon />}
                        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {location}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Faixa de Preço */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#464f53] text-[16px] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Faixa de preço
                  </p>
                  {priceRanges.map((range, index) => {
                    const isSelected = selectedPriceRange === index;
                    return (
                      <div 
                        key={index}
                        className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-start overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                        onClick={() => handlePriceRangeChange(index)}
                      >
                        {isSelected ? <RadioFilledIcon /> : <RadioEmptyIcon />}
                        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {range.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Tempo de Publicação */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#464f53] text-[16px] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Tempo de publicação
                  </p>
                  {timePostedOptions.map((option) => {
                    const isSelected = selectedTimePosted.includes(option.value);
                    return (
                      <div 
                        key={option.value}
                        className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-start overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                        onClick={() => handleTimePostedChange(option.value, !isSelected)}
                      >
                        {isSelected ? <CheckboxFilledIcon /> : <CheckboxEmptyIcon />}
                        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {option.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Ordenar Button */}
        <Popover open={sortOpen} onOpenChange={setSortOpen}>
          <PopoverTrigger asChild>
            <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0 cursor-pointer" data-name="minimal/medium+iconleft">
              <SortIcon />
              <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                Ordenar
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[calc(100vw-32px)] p-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]" align="end" sideOffset={8}>
            <div className="bg-white rounded-[10px]">
              {/* Header */}
              <div className="flex items-center justify-between px-[16px] py-[14px]">
                <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#74848b] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Ordenar por:
                </p>
              </div>

              {/* Separator */}
              <div className="h-0 w-full">
                <div className="h-[1px] bg-[#f0f3f5]" />
              </div>

              {/* Content */}
              <div className="px-[16px] py-[24px] flex flex-col gap-[8px]">
                {sortOptions.map((option) => {
                  const isSelected = sortBy === option.value;
                  return (
                    <div 
                      key={option.value}
                      className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-start overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                      onClick={() => handleSortChange(option.value as SortOption)}
                    >
                      {isSelected ? <RadioFilledIcon /> : <RadioEmptyIcon />}
                      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {option.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
