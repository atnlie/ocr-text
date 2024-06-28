import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center text-red-950 min-h-full">
            <div>
                Copyright
                <Link href={"https://www.sisi.co.id"} className={"text-amber-600 font-bold"}>
                    {" "}PT. SISI{" "}
                </Link>
                - RnD@2024
            </div>
        </footer>
    );
};

