import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { XMark } from "./Icons";

const priceData = [
  { neighborhood: "Botafogo", avgPrice: 1065000, color: "#01988c" },
  { neighborhood: "Flamengo", avgPrice: 1155000, color: "#01988c" },
  { neighborhood: "Copacabana", avgPrice: 2025000, color: "#01988c" },
  { neighborhood: "Barra da Tijuca", avgPrice: 1825000, color: "#01988c" },
  { neighborhood: "Tijuca", avgPrice: 700000, color: "#01988c" },
  { neighborhood: "Catete", avgPrice: 840000, color: "#01988c" },
  { neighborhood: "Ipanema", avgPrice: 4200000, color: "#F2A166" }, // Destaque para o mais caro
];

interface PriceChartProps {
  onClose: () => void;
}

export function PriceChart({ onClose }: PriceChartProps) {
  const formatPrice = (value: number) => {
    if (value >= 1000000) {
      return `R$ ${(value / 1000000).toFixed(1)}M`;
    }
    return `R$ ${(value / 1000).toFixed(0)}k`;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-[#e0e7eb] rounded-[10px] p-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]">
          <p className="font-['Roboto:Bold',_sans-serif] font-bold text-[#464f53] text-[14px] mb-[4px]">
            {payload[0].payload.neighborhood}
          </p>
          <p className="font-['Roboto:Regular',_sans-serif] text-[#01988c] text-[16px]">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-[10px] mb-[24px] relative overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#e0e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)]" />
      
      <div className="p-[24px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-[24px]">
          <div>
            <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[22px] text-[#464f53] text-[18px] mb-[4px]">
              Média de Preços por Bairro
            </p>
            <p className="font-['Roboto:Regular',_sans-serif] leading-[20px] text-[#74848b] text-[14px]">
              Preços médios de imóveis no Rio de Janeiro
            </p>
          </div>
          <div 
            className="box-border content-stretch flex gap-[16px] h-[36px] items-center justify-center overflow-clip px-[13px] py-[4px] rounded-[10px] hover:bg-[#f6f8f9] cursor-pointer transition-colors"
            onClick={onClose}
          >
            <XMark />
          </div>
        </div>

        {/* Chart */}
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={priceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f3f5" />
              <XAxis 
                dataKey="neighborhood" 
                angle={-45}
                textAnchor="end"
                height={100}
                tick={{ 
                  fill: '#464f53', 
                  fontSize: 12,
                  fontFamily: 'Roboto, sans-serif'
                }}
              />
              <YAxis 
                tickFormatter={formatPrice}
                tick={{ 
                  fill: '#74848b', 
                  fontSize: 12,
                  fontFamily: 'Roboto, sans-serif'
                }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#edf8f7' }} />
              <Bar 
                dataKey="avgPrice" 
                radius={[8, 8, 0, 0]}
              >
                {priceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-[24px] mt-[16px] flex-wrap">
          <div className="flex items-center gap-[8px]">
            <div className="w-[16px] h-[16px] rounded-[4px] bg-[#01988c]" />
            <p className="font-['Roboto:Regular',_sans-serif] text-[#74848b] text-[12px]">
              Preço médio
            </p>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="w-[16px] h-[16px] rounded-[4px] bg-[#F2A166]" />
            <p className="font-['Roboto:Regular',_sans-serif] text-[#74848b] text-[12px]">
              Bairro mais valorizado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
