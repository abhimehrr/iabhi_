"use client";

import { Toaster } from "sonner";
import { useTheme } from "@/components/providers/ThemeProvider";

export function AppToaster(): React.JSX.Element {
  const { theme, mounted } = useTheme();

  return (
    <Toaster
      theme={mounted ? theme : "system"}
      position="top-center"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: "border border-border bg-surface text-primary",
        },
      }}
    />
  );
}
