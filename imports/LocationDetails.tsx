import svgPaths from "./svg-54y3qx4vk9";

function HeroiconsMiniMapPin() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="heroicons-mini/map-pin">
        <path d={svgPaths.p31de3380} fill="var(--fill-0, #01988C)" id="Subtract" />
      </g>
    </svg>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <HeroiconsMiniMapPin />
    </div>
  );
}

export default function LocationDetails() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] items-start relative size-full" data-name="Location Details">
      <Icons />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#74848b] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tijuca - RJ
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rua Barão de Mesquita, 70
      </p>
    </div>
  );
}