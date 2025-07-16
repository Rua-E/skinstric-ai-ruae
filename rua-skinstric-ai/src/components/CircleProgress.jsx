import React from "react";

const CircleProgress = ({ percent = 24, size = 160, stroke = 8 }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <>
      <div className="flex items-center justify-center bg-[#f5f6f8] rounded-full p-4">
        <svg width={size} height={size} />
        {/* BACKGROUND CIRCLE */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#ddd"
          strokeWidth={stroke}
        />
        {/* PROGRESS CIRCLE */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="black"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {/* PERCENTAGE TEXT */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-black text-xl font-medium"
        />
        {percent}%
      </div>
    </>
  );
};

export default CircleProgress;
