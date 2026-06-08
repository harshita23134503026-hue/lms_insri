import React from "react";
import { ChevronRight } from "lucide-react";

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  bgColor,
  iconBgColor,
}) => {
  return (
    <div
      className="flex items-center gap-3 px-4 py-4 rounded-2xl cursor-pointer transition-all duration-150 hover:-translate-y-0.5"
      style={{
        backgroundColor: bgColor,
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.6) inset",
      }}
    >
      {/* Icon Box */}
      <div
        className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
        style={{
          backgroundColor: iconBgColor,
          boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
        }}
      >
        <Icon size={20} strokeWidth={2} className="text-white" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-medium text-[#8A94A6] leading-tight">
          {title}
        </p>
        <p className="mt-0.5 text-[17px] font-semibold text-[#101828] leading-none tracking-tight tabular-nums">
          {value}
        </p>
        {subtitle && (
          <p className="mt-0.5 text-[10px] font-normal text-[#A0AAB8] leading-none">
            {subtitle}
          </p>
        )}
      </div>

      {/* Chevron */}
      <ChevronRight
        size={15}
        strokeWidth={2.5}
        className="shrink-0 text-[#C5CDD8]"
      />
    </div>
  );
};

export default StatCard;
