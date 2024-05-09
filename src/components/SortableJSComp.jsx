import { createElement, useEffect, createRef } from "react";
import Sortable from 'sortablejs';

export function SortableJSComp({ content }) {
    

    const sortable__ = createRef();

    useEffect(() => {
        debugger;
        const elem = sortable__.current.getElementsByClassName('gridtest')[0];
        Sortable.create(elem);
    });

    return <div ref={sortable__}>
            {content}
        </div>;
}
