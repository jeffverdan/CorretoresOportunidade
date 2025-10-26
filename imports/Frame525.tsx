import svgPaths from "./svg-e5ah4nc52r";

function Icons() {
  return (
    <div className="absolute left-[29px] size-[20px] top-0" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.p3386db80} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons">
          <path d={svgPaths.pb253e80} fill="var(--fill-0, #01988C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame525() {
  return (
    <div className="relative size-full">
      <Icons />
      <Icons1 />
    </div>
  );
}