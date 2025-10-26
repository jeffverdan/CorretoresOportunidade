import Frame447 from "../imports/Frame447";
import { ArrowPath } from "./Icons";

export function Dashboard() {
  const handleRefreshPanel = () => {
    // Simulate a data refresh - in a real app, this would refetch data
    window.location.reload();
  };

  return (
    <div className="w-full">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-[24px]">
        <div className="flex items-center gap-[16px]">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] text-[#74848b] text-[14px]">
            12/05/2023
          </p>
          <p className="font-['Roboto:Regular',_sans-serif] leading-[22px] text-[#464f53] text-[16px]">
            <span className="font-['Roboto:Bold',_sans-serif] font-bold">Olá Luciana,</span>
            {` boas-vindas ao seu painel de corretor.`}
          </p>
        </div>
        <div className="flex items-center gap-[8px]">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] text-[#74848b] text-[14px]">
            Há 3 mins atrás
          </p>
          <div 
            className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
            onClick={handleRefreshPanel}
          >
            <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] relative shrink-0 text-[#464f53] text-[16px] text-nowrap whitespace-pre">
              Atualizar painel
            </p>
            <ArrowPath />
          </div>
        </div>
      </div>

      <Frame447 />
    </div>
  );
}
