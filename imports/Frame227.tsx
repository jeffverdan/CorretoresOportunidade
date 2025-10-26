import svgPaths from "./svg-dg2w49rywl";

function HeroiconsMiniXMark() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="heroicons-mini/x-mark">
        <path d={svgPaths.p29ad2280} fill="var(--fill-0, #01988C)" id="Union" />
      </g>
    </svg>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <HeroiconsMiniXMark />
    </div>
  );
}

function SecondarySmallIconright() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="secondary/small + iconright">
      <div className="box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip pl-[10px] pr-[12px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[20px] relative shrink-0 text-[#01988c] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Bielle
        </p>
        <Icons />
      </div>
      <div aria-hidden="true" className="absolute border border-[#01988c] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function HeroiconsMiniXMark1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="heroicons-mini/x-mark">
        <path d={svgPaths.p29ad2280} fill="var(--fill-0, #01988C)" id="Union" />
      </g>
    </svg>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <HeroiconsMiniXMark1 />
    </div>
  );
}

function SecondarySmallIconright1() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="secondary/small + iconright">
      <div className="box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip pl-[10px] pr-[12px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[20px] relative shrink-0 text-[#01988c] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          FGTS
        </p>
        <Icons1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#01988c] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function HeroiconsMiniXMark2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="heroicons-mini/x-mark">
        <path d={svgPaths.p29ad2280} fill="var(--fill-0, #01988C)" id="Union" />
      </g>
    </svg>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <HeroiconsMiniXMark2 />
    </div>
  );
}

function SecondarySmallIconright2() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="secondary/small + iconright">
      <div className="box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip pl-[10px] pr-[12px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[20px] relative shrink-0 text-[#01988c] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Manual
        </p>
        <Icons2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#01988c] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

export default function Frame227() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative size-full">
      <SecondarySmallIconright />
      <SecondarySmallIconright1 />
      <SecondarySmallIconright2 />
    </div>
  );
}