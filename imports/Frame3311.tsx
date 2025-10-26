import svgPaths from "./svg-cwnd6feb0d";

function Icons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17e3a380} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center left-[calc(50%-72px)] overflow-clip px-[13px] py-[4px] rounded-[10px] top-[50px] translate-x-[-50%]" data-name="minimal/medium+iconleft">
      <Icons />
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Filtrar
      </p>
    </div>
  );
}

function HeroiconsMiniBarsArrowDown() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="heroicons-mini/bars-arrow-down">
        <path clipRule="evenodd" d={svgPaths.p2c39a300} fill="var(--fill-0, #01988C)" fillRule="evenodd" id="Vector (Stroke)" />
      </g>
    </svg>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <HeroiconsMiniBarsArrowDown />
    </div>
  );
}

function MinimalMediumIconleft1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center left-[calc(50%+51px)] overflow-clip px-[13px] py-[4px] rounded-[10px] top-[50px] translate-x-[-50%]" data-name="minimal/medium+iconleft">
      <Icons1 />
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ordenar
      </p>
    </div>
  );
}

export default function Frame3311() {
  return (
    <div className="bg-white relative size-full">
      <MinimalMediumIconleft />
      <MinimalMediumIconleft1 />
    </div>
  );
}