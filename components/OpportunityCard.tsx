import { useState } from "react";
import { ArrowTopRightOnSquare, MapPin, ArrowPathRoundedSquare } from "./Icons";
import { toast } from "sonner@2.0.3";

interface OpportunityCardProps {
  daysAgo: string;
  image: string;
  location: string;
  address: string;
  oldPrice: string;
  newPrice: string;
  code?: string;
  isMobile?: boolean;
}

export function OpportunityCard({
  daysAgo,
  image,
  location,
  address,
  oldPrice,
  newPrice,
  code,
  isMobile = false,
}: OpportunityCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Check if it's a hot opportunity (up to 3 days)
  const isHot = () => {
    const normalized = daysAgo.toLowerCase();
    if (normalized.includes("1 dia") || normalized.includes("2 dias") || normalized.includes("3 dias")) {
      return true;
    }
    return false;
  };

  return (
    <div
      className="bg-white relative rounded-[10px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        aria-hidden="true"
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[10px] transition-all duration-300 ${
          isHovered 
            ? 'border-[#85e0d9] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]' 
            : 'border-[#e0e7eb] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)]'
        }`}
      />
      
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative size-full">
          
          {/* Top Row: Tags and Share Button */}
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
            {/* Tags */}
            <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
              {/* Property Code Tag - Neutral */}
              {code && (
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="bg-[#f0f3f5] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0">
                    <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5d696f] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {code}
                    </p>
                  </div>
                </div>
              )}
              
              {/* Time Tag - Alert */}
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="bg-[#fff7e5] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0">
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#cc8e00] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {daysAgo}
                  </p>
                </div>
              </div>
            </div>

            {/* Share Button - Show on hover (desktop) or always (mobile) */}
            <div 
              className={`box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip pl-[10px] pr-[12px] py-[4px] relative rounded-[10px] shrink-0 hover:bg-[#f6f8f9] transition-all duration-300 cursor-pointer ${
                isMobile || isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                toast.success("Link compartilhado!");
              }}
            >
              <ArrowPathRoundedSquare />
              <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[20px] relative shrink-0 text-[#464f53] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                Compartilhar
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="h-[177px] relative rounded-[8px] shrink-0 w-full overflow-hidden">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#d9d9d9] rounded-[8px] animate-pulse" />
            )}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
              <img
                alt=""
                className={`absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full transition-all duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } ${isHovered ? 'scale-[1.023]' : 'scale-100'}`}
                src={image}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="content-start flex flex-wrap gap-[5px] items-start overflow-clip relative shrink-0 w-[284.946px]">
            <MapPin />
            <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#74848b] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              {location}
            </p>
          </div>

          {/* Price */}
          <div className="content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-[4px] items-start leading-[0] relative shrink-0 text-[0px] text-nowrap text-right">
            <div className="flex flex-col justify-center relative shrink-0 text-[#a7b7be]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[22px] line-through text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                {oldPrice}
              </p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 text-[#6b9539]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[24px] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                {newPrice}
              </p>
            </div>
          </div>

          {/* Buttons - Show on hover (desktop) or always (mobile) */}
          <div className={`content-stretch flex gap-[16px] items-start relative shrink-0 w-full transition-opacity duration-300 ${
            isMobile || isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Ver anúncio Button */}
            <div className="basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[10px] shrink-0">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full hover:bg-[#f6f8f9] transition-colors cursor-pointer">
                <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center px-[13px] py-[4px] relative w-full">
                  <ArrowTopRightOnSquare />
                  <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Ver anúncio
                  </p>
                </div>
              </div>
            </div>

            {/* MIDAS Button */}
            <div className="basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[10px] shrink-0">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full hover:bg-[#f6f8f9] transition-colors cursor-pointer">
                <div className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center px-[13px] py-[4px] relative w-full">
                  <ArrowTopRightOnSquare />
                  <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    MIDAS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
