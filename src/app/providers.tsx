"use client";

import { ReactNode, useState } from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = createTheme({
  colors: {
    brand: [
      "#F2F9FF",
      "#DCEEFF",
      "#99c2ef",
      "#66a3e6",
      "#3385de",
      "#3070CA",
      "#265aa2",
      "#1d4379",
      "#132d51",
      "#0a1628",
    ],
  },
  primaryColor: "brand",
});

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications position="top-right" />
        {children}
      </MantineProvider>
    </QueryClientProvider>
  );
}
