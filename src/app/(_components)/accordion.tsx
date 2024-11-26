"use client";

import clsx from "clsx";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export interface AccordionContextType {
  open: boolean;
  toggle: () => void;
  iconMode: boolean;
}

interface Props {
  defaultValue?: boolean | null;
  iconMode?: boolean;
  children: React.ReactNode;
}

export const AccordionContext = createContext<AccordionContextType | null>(
  null
);

export default function Accordion({
  defaultValue = false,
  iconMode = true,
  children,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (defaultValue === null) return;
    setOpen(defaultValue);
  }, [defaultValue]);

  const toggle = () => setOpen(!open);

  return (
    <AccordionContext.Provider
      value={{
        open,
        toggle,
        iconMode,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
}

function Summary({
  children,
  className,
}: PropsWithChildren<{
  className?: React.ComponentProps<"div">["className"];
}>) {
  const context = useContext(AccordionContext);
  if (!context) return <></>;
  return (
    <div
      onClick={context?.toggle}
      className={`relative hover:cursor-pointer  ${className}`}
    >
      {children}
      {context.iconMode && (
        <div className="text-right h-6 absolute top-1/2 -translate-y-1/2 right-0">
          <div className="self-right">
            {context.open ? (
              <svg
                className="w-6 h-6 p-1"
                viewBox="0 0 21 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3128 10.7273C19.4082 10.8176 19.5205 10.8881 19.6433 10.9349C19.766 10.9817 19.8967 11.0039 20.028 11.0002C20.1593 10.9965 20.2886 10.9669 20.4085 10.9133C20.5284 10.8596 20.6365 10.7828 20.7268 10.6873C20.817 10.5919 20.8875 10.4796 20.9343 10.3568C20.9811 10.2341 21.0033 10.1034 20.9996 9.97206C20.9959 9.84076 20.9663 9.71147 20.9127 9.59159C20.859 9.4717 20.7822 9.36356 20.6868 9.27334L11.6868 0.773343C11.5011 0.597806 11.2553 0.5 10.9998 0.5C10.7442 0.5 10.4984 0.597806 10.3128 0.773343L1.31175 9.27334C1.21419 9.36296 1.13541 9.47108 1.07998 9.59141C1.02456 9.71173 0.993595 9.84187 0.988892 9.97427C0.984188 10.1067 1.00584 10.2387 1.05258 10.3626C1.09933 10.4866 1.17024 10.6 1.26119 10.6963C1.35215 10.7927 1.46133 10.8699 1.58241 10.9237C1.70349 10.9775 1.83404 11.0067 1.96649 11.0095C2.09893 11.0124 2.23063 10.989 2.35394 10.9405C2.47724 10.8921 2.58969 10.8196 2.68475 10.7273L10.9998 2.87534L19.3128 10.7273Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 p-1"
                viewBox="0 0 21 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.68725 0.272657C1.59178 0.182439 1.47947 0.11191 1.35674 0.065094C1.23401 0.0182781 1.10327 -0.00390625 0.971965 -0.000191689C0.840663 0.00352287 0.711378 0.0330629 0.591492 0.0867414C0.471606 0.14042 0.363467 0.217186 0.273249 0.312657C0.183031 0.408129 0.112501 0.520435 0.0656852 0.643164C0.0188697 0.765892 -0.00331434 0.89664 0.000400002 1.02794C0.00411435 1.15924 0.0336542 1.28853 0.0873329 1.40841C0.141012 1.5283 0.217778 1.63644 0.313249 1.72666L9.31325 10.2267C9.49892 10.4022 9.74474 10.5 10.0002 10.5C10.2558 10.5 10.5016 10.4022 10.6872 10.2267L19.6882 1.72666C19.7858 1.63704 19.8646 1.52892 19.92 1.40859C19.9754 1.28827 20.0064 1.15813 20.0111 1.02573C20.0158 0.893337 19.9942 0.761328 19.9474 0.637371C19.9007 0.513414 19.8298 0.399981 19.7388 0.30366C19.6479 0.20734 19.5387 0.130052 19.4176 0.0762854C19.2965 0.0225191 19.166 -0.00665283 19.0335 -0.0095377C18.9011 -0.0124226 18.7694 0.0110388 18.6461 0.0594826C18.5228 0.107926 18.4103 0.180387 18.3153 0.272657L10.0002 8.12466L1.68725 0.272657Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Details({ children }: PropsWithChildren) {
  const context = useContext(AccordionContext);

  return (
    <div
      className={clsx(
        "transition-all",
        !context?.open
          ? "hidden"
          : // "animate-slideDown duration-500"
            ""
      )}
    >
      {children}
    </div>
  );
}

Accordion.Summary = Summary;
Accordion.Details = Details;
