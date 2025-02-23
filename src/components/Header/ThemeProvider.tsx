"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps } from "react";

type NextThemesProviderProps = ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...props }: NextThemesProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
