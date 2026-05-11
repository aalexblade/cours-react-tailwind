import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type CardProps = {
  className?: string;
  title: string;
  children?: ReactNode;
};

export const Card: FC<CardProps> = ({ className, title, children }) => {
  const base =
    "flex flex-col p-4 rounded-2xl bg-white/30 backdrop-blur-md shadow-md";
  const classes = twMerge(clsx(base, className));

  return (
    <article
      className={classes}
      aria-labelledby={`${title.replace(/\s+/g, "-")}-title`}
    >
      <h3
        id={`${title.replace(/\s+/g, "-")}-title`}
        className="text-lg font-semibold text-slate-800"
      >
        {title}
      </h3>
      {children && (
        <div className="mt-2 text-sm text-slate-600">{children}</div>
      )}
    </article>
  );
};

export default Card;
