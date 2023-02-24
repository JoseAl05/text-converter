'use client'

import Grammar from "@/components/Grammar/Grammar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Translate from "@/components/Translate/Translate";
import { useState } from "react";

const Page = () => {

    const [activeTabId, setActiveTabId] = useState(1);

    return (
        <>
            <Sidebar activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
            <Grammar activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
            <Translate activeTabId={activeTabId} setActiveTabId={setActiveTabId}/>
        </>
    );
}

export default Page;