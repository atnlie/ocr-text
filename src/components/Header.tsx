import Link from "next/link";


export default function Header() {
    return (
        <>
            <div className={"text-4xl font-extrabold md:text-5xl text-center pt-4 text-amber-700"}>
                OCR <span className={"font-medium text-xl text-green-800"}>By RnD -
                <Link href={"https://www.sisi.id"} className={"text-blue-600"}>{" "}PT SISI</Link></span>
            </div>
            <div className={"mt-8 font-semibold border-2 mx-[40%] text-blue-800 text-2xl rounded-t-lg bg-yellow-500"}>
                <div className={"ml-2"}>
                Automated for :
                </div>
                <ul className={"text-left text-lg bg-gray-400 text-white px-4"}>
                    <li>1. Faktur Pajak Validation</li>
                    <li>2. Payment Validation</li>
                    <li>3. Etc.</li>
                </ul>
            </div>
        </>
    );
}
