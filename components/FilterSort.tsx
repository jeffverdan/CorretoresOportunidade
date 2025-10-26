import { useState } from "react";
import svgPaths from "../imports/svg-cwnd6feb0d";
import svgPathsQt from "../imports/svg-qt3obpuzw0";
import { ViewGridIcon, ViewListIcon, CheckboxEmptyIcon, CheckboxFilledIcon, RadioEmptyIcon, RadioFilledIcon, ChartBarIcon } from "./Icons";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { FilterTag } from "./FilterTag";

export type ViewMode = "grid" | "list";

interface FilterSortProps {
  onFilterChange?: (filters: FilterOptions) => void;
  onSortChange?: (sortBy: SortOption) => void;
  onViewModeChange?: (viewMode: ViewMode) => void;
  onChartToggle?: () => void;
  viewMode?: ViewMode;
  showChart?: boolean;
  isMobile?: boolean;
}

export interface FilterOptions {
  locations: string[]
;
  priceRange: {
    min: number;
    max: number;
  } | null;
  timePosted: string[];
}

export type SortOption = 
  | "newest" 
  | "oldest" 
  | "price-low" 
  | "price-high" 
  | "discount-high";

const locations = [
  "Botafogo",
  "Catete",
  "Copacabana",
  "Flamengo",
  "Ipanema",
  "Jardim Oceânico",
  "Jardim Botânico",
  "Leblon",
  "Tijuca",
];

const timePostedOptions = [
  { value: "recent", label: "Últimos 7 dias" },
  { value: "week", label: "Última semana" },
  { value: "month", label: "Último mês" },
  { value: "older", label: "Mais de 1 mês" },
];

const priceRanges = [
  { label: "Até R$ 500 mil", min: 0, max: 500000 },
  { label: "R$ 500 mil - R$ 1 milhão", min: 500000, max: 1000000 },
  { label: "R$ 1 milhão - R$ 2 milhões", min: 1000000, max: 2000000 },
  { label: "R$ 2 milhões - R$ 3 milhões", min: 2000000, max: 3000000 },
  { label: "Acima de R$ 3 milhões", min: 3000000, max: Infinity },
];

const sortOptions = [
  { value: "newest", label: "Mais recentes" },
  { value: "oldest", label: "Mais antigos" },
  { value: "price-low", label: "Menor preço" },
  { value: "price-high", label: "Maior preço" },
  { value: "discount-high", label: "Maior desconto" },
];

function FilterIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p17e3a380} fill="var(--fill-0, #01988C)" />
      </svg>
    </div>
  );
}

function SortIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d={svgPaths.p2c39a300} fill="var(--fill-0, #01988C)" />
      </svg>
    </div>
  );
}

export function FilterSort({ onFilterChange, onSortChange, onViewModeChange, onChartToggle, viewMode = "grid", showChart = false, isMobile = false }: FilterSortProps) {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [selectedTimePosted, setSelectedTimePosted] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const handleLocationChange = (location: string, checked: boolean) => {
    const newLocations = checked
      ? [...selectedLocations, location]
      : selectedLocations.filter((l) => l !== location);
    setSelectedLocations(newLocations);
    
    onFilterChange?.({
      locations: newLocations,
      priceRange: selectedPriceRange !== null ? priceRanges[selectedPriceRange] : null,
      timePosted: selectedTimePosted,
    });
  };

  const handlePriceRangeChange = (index: number, checked: boolean) => {
    const newIndex = checked ? index : null;
    setSelectedPriceRange(newIndex);
    
    onFilterChange?.({
      locations: selectedLocations,
      priceRange: newIndex !== null ? priceRanges[newIndex] : null,
      timePosted: selectedTimePosted,
    });
  };

  const handleTimePostedChange = (value: string, checked: boolean) => {
    const newTimePosted = checked
      ? [...selectedTimePosted, value]
      : selectedTimePosted.filter((t) => t !== value);
    setSelectedTimePosted(newTimePosted);
    
    onFilterChange?.({
      locations: selectedLocations,
      priceRange: selectedPriceRange !== null ? priceRanges[selectedPriceRange] : null,
      timePosted: newTimePosted,
    });
  };

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    onSortChange?.(value);
  };

  const handleClearFilters = () => {
    setSelectedLocations([]);
    setSelectedPriceRange(null);
    setSelectedTimePosted([]);
    
    onFilterChange?.({
      locations: [],
      priceRange: null,
      timePosted: [],
    });
  };

  const handleClearSort = () => {
    setSortBy("newest");
    onSortChange?.("newest");
  };

  const activeFiltersCount = 
    selectedLocations.length + 
    (selectedPriceRange !== null ? 1 : 0) + 
    selectedTimePosted.length;

  const handleRemoveLocation = (location: string) => {
    const newLocations = selectedLocations.filter((l) => l !== location);
    setSelectedLocations(newLocations);
    
    onFilterChange?.(({
      locations: newLocations,
      priceRange: selectedPriceRange !== null ? priceRanges[selectedPriceRange] : null,
      timePosted: selectedTimePosted,
    }));
  };

  const handleRemovePriceRange = () => {
    setSelectedPriceRange(null);
    
    onFilterChange?.({
      locations: selectedLocations,
      priceRange: null,
      timePosted: selectedTimePosted,
    });
  };

  const handleRemoveTimePosted = (value: string) => {
    const newTimePosted = selectedTimePosted.filter((t) => t !== value);
    setSelectedTimePosted(newTimePosted);
    
    onFilterChange?.({
      locations: selectedLocations,
      priceRange: selectedPriceRange !== null ? priceRanges[selectedPriceRange] : null,
      timePosted: newTimePosted,
    });
  };

  const handleRemoveSort = () => {
    setSortBy("newest");
    onSortChange?.("newest");
  };

  const getSortLabel = (value: SortOption): string => {
    const option = sortOptions.find((opt) => opt.value === value);
    return option?.label || "";
  };

  const getTimePostedLabel = (value: string): string => {
    const option = timePostedOptions.find((opt) => opt.value === value);
    return option?.label || "";
  };

  return (
    <div className="flex flex-col gap-[16px] mb-[24px]">
      <div className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-[16px]">
        <div className="flex items-center gap-[16px] md:w-auto w-full md:justify-start justify-center flex-wrap">
        {/* Filtrar - Hidden on Mobile */}
        {!isMobile && (
          <Popover open={filterOpen} onOpenChange={setFilterOpen}>
            <PopoverTrigger asChild>
              <div className="box-border content-stretch flex gap-[16px] h-[44px] items-center justify-center overflow-clip px-[20px] py-[10px] rounded-[10px] bg-white border border-[#e0e7eb] hover:bg-[#f6f8f9] cursor-pointer transition-colors shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)]">
                <FilterIcon />
                <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre">
                  Filtrar
                </p>
              </div>
            </PopoverTrigger>
          <PopoverContent className="w-[816px] p-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]" align="start" sideOffset={8}>
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
              <div className="px-[16px] py-[32px] flex gap-[32px]">
                {/* Localização */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#464f53] text-[16px] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#464f53] text-[16px] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Faixa de preço
                  </p>
                  {priceRanges.map((range, index) => {
                    const isSelected = selectedPriceRange === index;
                    return (
                      <div 
                        key={index}
                        className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-start overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                        onClick={() => handlePriceRangeChange(index, !isSelected)}
                      >
                        {isSelected ? <CheckboxFilledIcon /> : <CheckboxEmptyIcon />}
                        <div className="bg-[#f0f3f5] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 rounded-[4px]">
                          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] text-[#5d696f] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {range.label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tempo de Publicação */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#464f53] text-[16px] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Publicado
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
                        <div className="bg-[#e7f4d7] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 rounded-[4px]">
                          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] text-[#6b9539] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {option.label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        )}

        {/* Ordenar - Hidden on Mobile */}
        {!isMobile && (
          <Popover open={sortOpen} onOpenChange={setSortOpen}>
            <PopoverTrigger asChild>
              <div className="box-border content-stretch flex gap-[16px] h-[44px] items-center justify-center overflow-clip px-[20px] py-[10px] rounded-[10px] bg-white border border-[#e0e7eb] hover:bg-[#f6f8f9] cursor-pointer transition-colors shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)]">
                <SortIcon />
                <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre">
                  Ordenar
                </p>
              </div>
            </PopoverTrigger>
          <PopoverContent className="w-[550px] p-0 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]" align="start" sideOffset={8}>
            <div className="bg-white rounded-[10px]">
              {/* Header */}
              <div className="flex items-center justify-between px-[16px] py-[14px]">
                <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#74848b] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Ordenar por:
                </p>
                <div 
                  className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                  onClick={handleClearSort}
                >
                  <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Limpar ordenação
                  </p>
                </div>
              </div>

              {/* Separator */}
              <div className="h-0 w-full">
                <div className="h-[1px] bg-[#f0f3f5]" />
              </div>

              {/* Content */}
              <div className="px-[16px] py-[32px] flex gap-[32px]">
                {/* Data de entrada */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#464f53] text-[16px] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Data de entrada
                  </p>
                  <div 
                    className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-start overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                    onClick={() => handleSortChange("newest")}
                  >
                    {sortBy === "newest" ? <RadioFilledIcon /> : <RadioEmptyIcon />}
                    <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Mais recentes
                    </p>
                  </div>
                  <div 
                    className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-start overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                    onClick={() => handleSortChange("oldest")}
                  >
                    {sortBy === "oldest" ? <RadioFilledIcon /> : <RadioEmptyIcon />}
                    <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Mais antigos
                    </p>
                  </div>
                </div>

                {/* Preço */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[#464f53] text-[16px] mb-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Preço
                  </p>
                  <div 
                    className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-start overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                    onClick={() => handleSortChange("price-low")}
                  >
                    {sortBy === "price-low" ? <RadioFilledIcon /> : <RadioEmptyIcon />}
                    <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Menor preço
                    </p>
                  </div>
                  <div 
                    className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-start overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
                    onClick={() => handleSortChange("price-high")}
                  >
                    {sortBy === "price-high" ? <RadioFilledIcon /> : <RadioEmptyIcon />}
                    <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Maior preço
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        )}
      </div>

        {/* View Mode Toggle - Hidden on Mobile */}
        {!isMobile && (
        <div className="flex items-center gap-[8px] bg-white border border-[#e0e7eb] rounded-[10px] p-[4px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)]">
          <div
            className={`box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[6px] cursor-pointer transition-all ${
              viewMode === "grid" 
                ? 'bg-[#edf8f7] text-[#01988c]' 
                : 'hover:bg-[#f6f8f9] text-[#464f53]'
            }`}
            onClick={() => onViewModeChange?.("grid")}
          >
            <ViewGridIcon />
          </div>
          <div
            className={`box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[6px] cursor-pointer transition-all ${
              viewMode === "list" 
                ? 'bg-[#edf8f7] text-[#01988c]' 
                : 'hover:bg-[#f6f8f9] text-[#464f53]'
            }`}
            onClick={() => onViewModeChange?.("list")}
          >
            <ViewListIcon />
          </div>
        </div>
        )}
      </div>

      {/* Active Filters Tags */}
      {(selectedLocations.length > 0 || selectedPriceRange !== null || selectedTimePosted.length > 0 || sortBy !== "newest") && (
        <div className="flex items-center gap-[8px] flex-wrap">
          {selectedLocations.map((location) => (
            <FilterTag
              key={location}
              label={location}
              onRemove={() => handleRemoveLocation(location)}
            />
          ))}
          {selectedPriceRange !== null && (
            <FilterTag
              label={priceRanges[selectedPriceRange].label}
              onRemove={handleRemovePriceRange}
            />
          )}
          {selectedTimePosted.map((timeValue) => (
            <FilterTag
              key={timeValue}
              label={getTimePostedLabel(timeValue)}
              onRemove={() => handleRemoveTimePosted(timeValue)}
            />
          ))}
          {sortBy !== "newest" && (
            <FilterTag
              label={getSortLabel(sortBy)}
              onRemove={handleRemoveSort}
            />
          )}
        </div>
      )}
    </div>
  );
}