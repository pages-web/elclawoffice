import React from "react";
import { getKbArticlesByCode } from "@/lib/kb";
import ServiceContent from "./component/content";

// Set the page to be an async function
export default async function Page({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { locale: string };
}) {
  // Await the params object to ensure it resolves before use
  const { locale } = await params; // Await the params to safely access `locale`

  const code = locale === "mn" ? "service" : "service-en";
  const { articles } = await getKbArticlesByCode(code);
  const reversedArticles = [...articles].reverse();

  return (
    <ServiceContent locale={locale} reversedArticles={reversedArticles} />
  );
}
