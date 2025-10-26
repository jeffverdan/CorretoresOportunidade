import { useState } from "react";
import { ArrowTopRightOnSquare, MapPin, ArrowPathRoundedSquare } from "./Icons";
import { toast } from "sonner@2.0.3";

interface OpportunityListItemProps {
  daysAgo: string;
  image: string;
  location: string;
  address: string;
  oldPrice: string;
  newPrice: string;
  code?: string;
  isMobile?: boolean;
}

export function OpportunityListItem({
  daysAgo,
  image,
  location,
  address,
  oldPrice,
  newPrice,
  code,
  isMobile = false,
}: OpportunityListItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="bg-white box-border content-stretch flex items-center gap-[16px] p-[16px] relative rounded-[10px] transition-all duration-300 w-full"
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
      
      {/* Image */}
      <div className="h-[84px] w-[84px] relative rounded-[8px] shrink-0 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#d9d9d9] rounded-[8px] animate-pulse" />
        )}
        <img
          alt=""
          className={`absolute max-w-none object-cover rounded-[8px] size-full transition-all duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-[1.023]' : 'scale-100'}`}
          src={image}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Content - Left Side */}
      <div className="flex flex-col gap-[8px] flex-1">
        {/* Tags */}
        <div className="content-stretch flex gap-[8px] items-start">
          {/* Property Code Tag - Neutral */}
          {code && (
            <div className="bg-[#f0f3f5] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0">
              <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5d696f] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                {code}
              </p>
            </div>
          )}
          
          {/* Time Tag - Alert */}
          <div className="bg-[#fff7e5] box-border content-stretch flex flex-col items-center justify-center px-[6px] py-0 relative rounded-[4px] shrink-0">
            <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[#cc8e00] text-[12px] text-center text-nowrap uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              {daysAgo}
            </p>
          </div>
        </div>

        {/* Location Details */}
        <div className="content-start flex flex-wrap gap-[5px] items-start overflow-clip">
          <MapPin />
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#74848b] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            {location}
          </p>
        </div>
      </div>

      {/* Right Side - Price and Buttons */}
      <div className="flex items-center gap-[24px] shrink-0">
        {/* Price */}
        <div className="content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-[4px] items-start leading-[0] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <div className="flex flex-col justify-center relative text-[#a7b7be]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[22px] line-through text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              {oldPrice}
            </p>
          </div>
          <div className="flex flex-col justify-center relative text-[#6b9539]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[24px] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              {newPrice}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="content-stretch flex gap-[16px] items-center">
          <div className="h-[36px] relative rounded-[10px]">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full hover:bg-[#f6f8f9] transition-colors cursor-pointer">
              <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13px] py-[4px] relative whitespace-nowrap">
                <ArrowTopRightOnSquare />
                <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Ver anúncio
                </p>
              </div>
            </div>
          </div>
          <div className="h-[36px] relative rounded-[10px]">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full hover:bg-[#f6f8f9] transition-colors cursor-pointer">
              <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13px] py-[4px] relative whitespace-nowrap">
                <ArrowTopRightOnSquare />
                <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  MIDAS
                </p>
              </div>
            </div>
          </div>
          <div className="h-[36px] relative rounded-[10px]">
            <div 
              className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full hover:bg-[#f6f8f9] transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toast.success("Link compartilhado!");
              }}
            >
              <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13px] py-[4px] relative whitespace-nowrap">
                <ArrowPathRoundedSquare />
                <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Compartilhar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
