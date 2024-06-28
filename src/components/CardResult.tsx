import React from "react";
import getJakartaDate from "@/utils/date";

export default function CardResult ({ str, idx }: { str: string; idx: number }) {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between px-5 gap-10">
                <p className="text-amber-800 text-sm md:text-lg">
                    {"(#" + (idx + 1) + ") "}
                    {getJakartaDate()}
                </p>
            </div>
            <textarea
                className="w-full outline-none rounded-xl text-white min-h-[25vh] md:min-h-[50vh] bg-[#202020] p-5 tracking-wider font-[300] text-sm"
                defaultValue={str}
            ></textarea>
        </div>
    );
};
