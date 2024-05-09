import { createElement } from "react";

import { SortableJSComp } from "./components/SortableJSComp";
import "./ui/SortableJS.css";

export function SortableJS({ content }) {
    return <SortableJSComp content={content} />;
}
