"use client";
import React from "react";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import Link from "next/link";
import { useParams } from "next/navigation";

const Footer = () => {
  const params = useParams();
  const t = useTranslations("Footer");
  return (
    <footer>
      <div className="copyright">
        <div className="container">
          {t("Copyright")} 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
