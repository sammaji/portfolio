import NotFoundSuggestion from "@/components/not-found-suggestion";
import {
  TypographyH1,
  TypographyH2,
  TypographySmall,
} from "@/components/typography";
import React from "react";

export default function PageNotFound() {
  return (
    <div className="min-h-[calc(100dvh-56px)] h-full px-6 flex flex-col gap-8 items-center justify-center">
      <TypographyH1>{"( ╥﹏╥) ノシ"}</TypographyH1>
      <NotFoundSuggestion />
    </div>
  );
}
