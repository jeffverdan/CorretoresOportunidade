import svgPaths from "./svg-qt3obpuzw0";
import imgFile1 from "figma:asset/97129847ca213c9177c387c72eb954b9c0c87574.png";
import imgFile2 from "figma:asset/ca2803e833c30aeeee5eabcdbc9aa3cc099e23ea.png";
import imgFile3 from "figma:asset/eb4d04f342b8b1071ac07a387275f700d5058a33.png";
import imgFile4 from "figma:asset/048e80e8290c88437d91e19f4a17d9f0fc10338d.png";
import imgFile5 from "figma:asset/4ab48f943b1e8127fb95a8c4e4e0f1e0b15ab663.png";
import imgFile6 from "figma:asset/5d8e974e0c3f01db375ea31294f79217aa41169a.png";
import imgFile7 from "figma:asset/ff62877eaaa87e16c9876d973f90aaa1b29dcfb7.png";
import imgFile8 from "figma:asset/f8d7dd7ed2fa527dae6272d6e1b6cb5c40d497c4.png";

function CardBase() {
  return (
    <div className="absolute h-[470px] left-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)] top-[358px] w-[816px]" data-name="card_base">
      <div className="absolute bg-white inset-0 rounded-[10px]" />
    </div>
  );
}

function MinimalMedium() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center left-[calc(50%+331.803px)] overflow-clip px-[13px] py-[4px] rounded-[10px] top-[366px] translate-x-[-50%] w-[105.651px]" data-name="minimal/medium">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Limpar filtros
      </p>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons />
      <div className="relative rounded-[21.5px] shrink-0 size-[28px]" data-name="file 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[21.5px] size-full" src={imgFile1} />
      </div>
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bielle
      </p>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft1() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons1 />
      <div className="relative rounded-[21.5px] shrink-0 size-[28px]" data-name="file 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[21.5px] size-full" src={imgFile2} />
      </div>
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Santusa
      </p>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft2() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons2 />
      <div className="relative rounded-[21.5px] shrink-0 size-[28px]" data-name="file 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[21.5px] size-full" src={imgFile3} />
      </div>
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Guilherme
      </p>
    </div>
  );
}

function Frame223() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[8px] items-start ml-0 mt-[32px] relative">
      <MinimalMediumIconleft />
      <MinimalMediumIconleft1 />
      <MinimalMediumIconleft2 />
    </div>
  );
}

function Group397() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame223 />
      <p className="[grid-area:1_/_1] font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] ml-[3px] mt-0 relative text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gerente
      </p>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagNeutral() {
  return (
    <div className="bg-[#f0f3f5] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/neutral">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5d696f] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        À VISTA
      </p>
    </div>
  );
}

function TagNeutral1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="tag/neutral">
      <TagNeutral />
    </div>
  );
}

function MinimalMediumIconleft3() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons3 />
      <TagNeutral1 />
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagNeutral2() {
  return (
    <div className="bg-[#f0f3f5] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/neutral">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5d696f] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        financiamento
      </p>
    </div>
  );
}

function TagNeutral3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="tag/neutral">
      <TagNeutral2 />
    </div>
  );
}

function MinimalMediumIconleft4() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons4 />
      <TagNeutral3 />
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagNeutral4() {
  return (
    <div className="bg-[#f0f3f5] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/neutral">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5d696f] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        fgts
      </p>
    </div>
  );
}

function TagNeutral5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="tag/neutral">
      <TagNeutral4 />
    </div>
  );
}

function MinimalMediumIconleft5() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons5 />
      <TagNeutral5 />
    </div>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagNeutral6() {
  return (
    <div className="bg-[#f0f3f5] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/neutral">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5d696f] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        consórcio
      </p>
    </div>
  );
}

function TagNeutral7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="tag/neutral">
      <TagNeutral6 />
    </div>
  );
}

function MinimalMediumIconleft6() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons6 />
      <TagNeutral7 />
    </div>
  );
}

function Frame224() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[8px] items-start ml-0 mt-[32px] relative">
      <MinimalMediumIconleft3 />
      <MinimalMediumIconleft4 />
      <MinimalMediumIconleft5 />
      <MinimalMediumIconleft6 />
    </div>
  );
}

function Group398() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame224 />
      <p className="[grid-area:1_/_1] font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] ml-0 mt-0 relative text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Forma de pagamento
      </p>
    </div>
  );
}

function Icons7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft7() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons7 />
      <div className="relative rounded-[21.5px] shrink-0 size-[28px]" data-name="file 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[21.5px] size-full" src={imgFile4} />
      </div>
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Val
      </p>
    </div>
  );
}

function Icons8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft8() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons8 />
      <div className="relative rounded-[21.5px] shrink-0 size-[28px]" data-name="file 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[21.5px] size-full" src={imgFile5} />
      </div>
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nayara
      </p>
    </div>
  );
}

function Icons9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft9() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons9 />
      <div className="relative rounded-[21.5px] shrink-0 size-[28px]" data-name="file 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[21.5px] size-full" src={imgFile6} />
      </div>
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tatiana
      </p>
    </div>
  );
}

function Icons10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft10() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons10 />
      <div className="relative rounded-[21.5px] shrink-0 size-[28px]" data-name="file 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[21.5px] size-full" src={imgFile7} />
      </div>
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mariana
      </p>
    </div>
  );
}

function Icons11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft11() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons11 />
      <div className="relative rounded-[21.5px] shrink-0 size-[28px]" data-name="file 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[21.5px] size-full" src={imgFile8} />
      </div>
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ana
      </p>
    </div>
  );
}

function Frame227() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[8px] items-start ml-0 mt-[32px] relative">
      <MinimalMediumIconleft7 />
      <MinimalMediumIconleft8 />
      <MinimalMediumIconleft9 />
      <MinimalMediumIconleft10 />
      <MinimalMediumIconleft11 />
    </div>
  );
}

function Group399() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame227 />
      <p className="[grid-area:1_/_1] font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] ml-[3px] mt-0 relative text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pós-venda
      </p>
    </div>
  );
}

function Icons12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagDone() {
  return (
    <div className="bg-[#e7f4d7] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/done">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b9539] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        entrada
      </p>
    </div>
  );
}

function MinimalMediumIconleft12() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons12 />
      <TagDone />
    </div>
  );
}

function Icons13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagDone1() {
  return (
    <div className="bg-[#e7f4d7] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/done">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b9539] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        análise
      </p>
    </div>
  );
}

function MinimalMediumIconleft13() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons13 />
      <TagDone1 />
    </div>
  );
}

function Icons14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagDone2() {
  return (
    <div className="bg-[#e7f4d7] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/done">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b9539] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        certidões
      </p>
    </div>
  );
}

function MinimalMediumIconleft14() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons14 />
      <TagDone2 />
    </div>
  );
}

function Icons15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagDone3() {
  return (
    <div className="bg-[#e7f4d7] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/done">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b9539] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        averbação
      </p>
    </div>
  );
}

function MinimalMediumIconleft15() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons15 />
      <TagDone3 />
    </div>
  );
}

function Icons16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagDone4() {
  return (
    <div className="bg-[#e7f4d7] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/done">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b9539] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        taxas
      </p>
    </div>
  );
}

function MinimalMediumIconleft16() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons16 />
      <TagDone4 />
    </div>
  );
}

function Icons17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagDone5() {
  return (
    <div className="bg-[#e7f4d7] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/done">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b9539] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        escritura
      </p>
    </div>
  );
}

function MinimalMediumIconleft17() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons17 />
      <TagDone5 />
    </div>
  );
}

function Icons18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagDone6() {
  return (
    <div className="bg-[#e7f4d7] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/done">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b9539] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        registro
      </p>
    </div>
  );
}

function MinimalMediumIconleft18() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons18 />
      <TagDone6 />
    </div>
  );
}

function Icons19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p17d93400} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagDone7() {
  return (
    <div className="bg-[#e7f4d7] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0" data-name="tag/done">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6b9539] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        finalizado
      </p>
    </div>
  );
}

function MinimalMediumIconleft19() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons19 />
      <TagDone7 />
    </div>
  );
}

function Frame228() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[8px] items-start ml-0 mt-[32px] relative">
      <MinimalMediumIconleft12 />
      <MinimalMediumIconleft13 />
      <MinimalMediumIconleft14 />
      <MinimalMediumIconleft15 />
      <MinimalMediumIconleft16 />
      <MinimalMediumIconleft17 />
      <MinimalMediumIconleft18 />
      <MinimalMediumIconleft19 />
    </div>
  );
}

function Group401() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame228 />
      <p className="[grid-area:1_/_1] font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] ml-0 mt-0 relative text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Status
      </p>
    </div>
  );
}

function Frame225() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-start leading-[0] left-[61.17px] top-[426px] w-[647.646px]">
      <Group397 />
      <Group398 />
      <Group399 />
      <Group401 />
    </div>
  );
}

function Group406() {
  return (
    <div className="absolute contents left-[50px] top-[358px]">
      <CardBase />
      <MinimalMedium />
      <Frame225 />
      <div className="absolute h-0 left-[50px] top-[410px] w-[816px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 816 2">
            <path d="M0 1H816" id="Vector 618" stroke="var(--stroke-0, #F0F3F5)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] left-[64.6px] text-[#74848b] text-[16px] top-[373px] w-[62.703px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Filtrar por:
      </p>
    </div>
  );
}

function CardBase1() {
  return (
    <div className="absolute h-[207px] left-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)] top-[80px] w-[550px]" data-name="card_base">
      <div className="absolute bg-white inset-0 rounded-[10px]" />
    </div>
  );
}

function MinimalMedium1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center left-[calc(50%+39px)] overflow-clip px-[13px] py-[4px] rounded-[10px] top-[88px] translate-x-[-50%]" data-name="minimal/medium">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Limpar ordenação
      </p>
    </div>
  );
}

function Icons20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p1e32100} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft20() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons20 />
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mais recentes
      </p>
    </div>
  );
}

function Icons21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p1e32100} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft21() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons21 />
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mais antigos
      </p>
    </div>
  );
}

function Frame229() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[8px] items-start ml-0 mt-[32px] relative">
      <MinimalMediumIconleft20 />
      <MinimalMediumIconleft21 />
    </div>
  );
}

function Group400() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame229 />
      <p className="[grid-area:1_/_1] font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] ml-0 mt-0 relative text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Data de entrada
      </p>
    </div>
  );
}

function Icons22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p1e32100} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft22() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons22 />
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mais próximo
      </p>
    </div>
  );
}

function Icons23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p1e32100} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinimalMediumIconleft23() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] relative rounded-[10px] shrink-0" data-name="minimal/medium+iconleft">
      <Icons23 />
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mais distante
      </p>
    </div>
  );
}

function Frame230() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[8px] items-start ml-0 mt-[32px] relative">
      <MinimalMediumIconleft22 />
      <MinimalMediumIconleft23 />
    </div>
  );
}

function Group402() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame230 />
      <p className="[grid-area:1_/_1] font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] ml-[3px] mt-0 relative text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Prazo de status
      </p>
    </div>
  );
}

function Frame226() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-start leading-[0] left-[66px] top-[148px]">
      <Group400 />
      <Group402 />
    </div>
  );
}

function Group407() {
  return (
    <div className="absolute contents left-[50px] top-[80px]">
      <CardBase1 />
      <MinimalMedium1 />
      <Frame226 />
      <div className="absolute h-0 left-[50px] top-[132px] w-[550px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 550 2">
            <path d="M0 1H550" id="Vector 618" stroke="var(--stroke-0, #F0F3F5)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] left-[66px] text-[#74848b] text-[16px] text-nowrap top-[95px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ordenar por:
      </p>
    </div>
  );
}

export default function Frame547() {
  return (
    <div className="bg-white relative size-full">
      <Group406 />
      <Group407 />
    </div>
  );
}