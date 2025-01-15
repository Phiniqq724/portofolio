"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}
interface LinkButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  link: string;
  target?: string;
}

export function Button({
  children,
  className,
  onClick,
  icon,
  variant,
  type,
}: ButtonProps) {
  const primary = variant === "primary";
  const secondary = variant === "secondary";
  if (primary) {
    return (
      <button
        className={`${className} flex p-4 rounded-full drop-shadow-secondary-c bg-primary hover:drop-shadow-secondary-c-2 hover:translate-y-2 hover:bg-[#2a2a2a] duration-500 outline-1 outline-secondary outline `}
        onClick={onClick}
        type={type}
        onMouseMove={(e) => {
          const button = e.currentTarget;
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          button.style.transition = "transform 0.1s ease-out";
          button.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(0, 0)";
        }}
      >
        {icon}
        {children}
      </button>
    );
  } else if (secondary) {
    return (
      <button
        className={`${className} flex p-4 rounded-full drop-shadow-primary-c text-primary bg-secondary hover:drop-shadow-primary-c-2 hover:translate-y-2 duration-500 outline-1 outline-primary outline hover:bg-[#E3E3E3]`}
        onClick={onClick}
        type={type}
        onMouseMove={(e) => {
          const button = e.currentTarget;
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          button.style.transition = "transform 0.1s ease-out";
          button.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(0, 0)";
        }}
      >
        {icon}
        {children}
      </button>
    );
  }
}

export function LinkButton({
  children,
  className,
  icon,
  variant,
  link,
  target,
}: LinkButtonProps) {
  const primary = variant === "primary";
  const secondary = variant === "secondary";
  if (primary) {
    return (
      <Link href={link} target={target}>
        <button
          className={`${className} text-secondary flex p-4 rounded-full drop-shadow-secondary-c bg-primary hover:drop-shadow-secondary-c-2 hover:translate-y-2 duration-500 outline-1 outline-secondary outline hover:bg-[#2a2a2a]`}
          onMouseMove={(e) => {
            const button = e.currentTarget;
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            button.style.transition = "transform 0.1s ease-out";
            button.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0, 0)";
          }}
        >
          {icon}
          {children}
        </button>
      </Link>
    );
  } else if (secondary) {
    return (
      <Link href={link} target={target}>
        <button
          className={`${className} flex p-4 rounded-full drop-shadow-primary-c text-primary bg-secondary hover:drop-shadow-primary-c-2 hover:translate-y-2 duration-500 outline-1 outline-primary outline hover:bg-[#E3E3E3]`}
          onMouseMove={(e) => {
            const button = e.currentTarget;
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            button.style.transition = "transform 0.1s ease-out";
            button.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0, 0)";
          }}
        >
          {icon}
          {children}
        </button>
      </Link>
    );
  }
}
