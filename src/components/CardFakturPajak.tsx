import React from "react";
import IFakturPajak from "@/models/FakturPajak";


export default function CardFakturPajak ({ fp } : { fp ?: IFakturPajak }) {
    return (
        <div className="flex items-center justify-center mb-8">
            <div className="flex flex-col justify-center w-full px-96">
                <div className="relative bg-gray-50 py-6 px-6 rounded-3xl w-full my-4 shadow-xl">
                    <div
                        className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path
                                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <div className="mt-8 text-blue-900">
                        <div className="text-xl font-semibold my-2">{fp?.title ?? "-"}</div>
                        <div className="text-lg font-bold text-green-600">{fp?.companyType ?? "-"}</div>
                        <div className={"ml-8"}>
                            <div className="border-t-2 "></div>
                            <div className="flex space-x-2 text-blue-900 text-sm">
                                Nomor Pajak:<span className={"font-semibold ml-2 text-green-600"}>{fp?.codeSeries ?? "-"}</span>
                            </div>
                            <div className="flex space-x-2 text-sm my-3">
                                Nama Perusahaan: <span className={"font-semibold ml-2 text-green-600"}>{fp?.companyName ?? "-"}</span>
                            </div>
                            <div className="flex space-x-2 text-sm my-3">
                                NPWP:<span className={"font-semibold ml-2 text-green-600"}>{fp?.companyNpwp ?? "-"}</span>
                            </div>
                        </div>

                        <div className="text-lg font-bold text-red-700 mt-8">Pembeli / Penerima Kena Pajak</div>
                        <div className={"ml-8"}>
                            <div className="border-t-2 "></div>
                            <div className="flex space-x-2 text-sm my-3">
                                Nama Perusahaan: <span className={"font-semibold ml-2 text-red-700"}>{fp?.clientName ?? "-"}</span>
                            </div>
                            <div className="flex space-x-2 text-sm my-3">
                                NPWP:<span className={"font-semibold ml-2 text-red-700"}>{fp?.clientNpwp ?? "-"}</span>
                            </div>
                            <div className="flex space-x-2 text-sm my-3">
                                Harga Jual / Penggantian:<span
                                className={"font-semibold ml-2 text-red-700"}>{fp?.sellPrice ?? "0,00"}</span>
                            </div>
                            <div className="flex space-x-2 text-sm my-3">
                                Dikurangi Potongan Harga:<span
                                className={"font-semibold ml-2 text-red-700"}>{fp?.discount ?? "0,00"}</span>
                            </div>
                            <div className="flex space-x-2 text-sm my-3">
                                Dikurangi Uang Muka:<span
                                className={"font-semibold ml-2 text-red-700"}>{fp?.downPayment ?? "0,00"}</span>
                            </div>
                            <div className="flex space-x-2 text-sm my-3">
                                Dasar Pengenaan Pajak:<span
                                className={"font-semibold ml-2 text-red-700"}>{fp?.ppnBase ?? "0,00"}</span>
                            </div>
                            <div className="flex space-x-2 text-sm my-3">
                                Total PPN:<span
                                className={"font-semibold ml-2 text-red-700"}>{fp?.ppnTotal ?? "0,00"}</span>
                            </div>
                            <div className="flex space-x-2 text-sm my-3">
                                Total PPnBM:<span
                                className={"font-semibold ml-2 text-red-700"}>{fp?.ppnBm ?? "0,00"}</span>
                            </div>
                        </div>
                        <div className="border-t-2 "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
