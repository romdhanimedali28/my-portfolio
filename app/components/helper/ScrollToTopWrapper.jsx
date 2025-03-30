"use client";

import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("./scroll-to-top"), { ssr: false });

const ScrollToTopWrapper = () => <ScrollToTop />;

export default ScrollToTopWrapper;