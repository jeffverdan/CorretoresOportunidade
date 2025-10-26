import svgPathsDg from "../imports/svg-dg2w49rywl";

interface FilterTagProps {
  label: string;
  onRemove: () => void;
}

export function FilterTag({ label, onRemove }: FilterTagProps) {
  return (
    <div className="relative rounded-[10px] shrink-0">
      <div className="box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip pl-[10px] pr-[12px] py-[4px] relative rounded-[inherit]">
        <p 
          className="font-['Roboto:Bold',_sans-serif] font-bold leading-[20px] relative shrink-0 text-[#01988c] text-[14px] text-nowrap whitespace-pre" 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {label}
        </p>
        <div 
          className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity"
          onClick={onRemove}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="heroicons-mini/x-mark">
              <path d={svgPathsDg.p29ad2280} fill="var(--fill-0, #01988C)" id="Union" />
            </g>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#01988c] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}
