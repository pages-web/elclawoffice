import Link from "next/link";
import React from "react";
import { getKbArticlesByCode } from "@/lib/kb";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import NewsContent from "./component/content";

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { locale: string };
}) {
  const code = params.locale === "mn" ? "news" : "news-en";
  const { articles } = await getKbArticlesByCode(code);
  const reversedArticles = [...articles].reverse();

  return (
    <NewsContent locale={params.locale} reversedArticles={reversedArticles}/>
  );
}
