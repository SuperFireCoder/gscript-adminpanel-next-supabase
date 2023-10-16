"use client";
import React from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
}) => {
  return (
    <div className="py-5">
      <div className="rounded-sm py-6 pl-12">
        <div className="flex flex-col justify-between">
          <div className="flex gap-4">
            <h4 className="text-title-lg font-bold text-primary dark:text-white">
              {total}
            </h4>
            <span
              className={`flex items-center gap-1 text-sm font-medium ${
                levelUp && "text-meta-3"
              } ${levelDown && "text-meta-5"} `}
            >
              {levelUp && (
                <svg
                  className="fill-meta-3"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                    fill=""
                  />
                </svg>
              )}
              {levelDown && (
                <svg
                  className="fill-meta-5"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                    fill=""
                  />
                </svg>
              )}
              {rate}
            </span>
          </div>
          <span className="text-sm font-medium text-gray">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
