import React from "react";
import { useStore } from "effector-react";
import Link from "next/link";

import { $data } from "../models";

export default function StaticOptimizedPage() {
    const data = useStore($data);

    return (
        <div>
            <h1>Static Page</h1>
            <h2>Store state: {JSON.stringify(data)}</h2>
            <br />
            <Link href="/">
                to server page
            </Link>
        </div>
    );
}