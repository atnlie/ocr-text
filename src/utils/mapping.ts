import {Page} from "tesseract.js";
import IFakturPajak from "@/models/FakturPajak";

const fpData = Array<String>(
    "Faktur Pajak", //0
    "Kode dan Nomor Seri Faktur Pajak", //1
    "Pengusaha Kena Pajak", //2
    "Nama", //3
    "Alamat", //4
    "NPWP", //5
    "Pembeli Barang Kena Pajak / Penerima Jasa Kena Pajak", //6
    "Nama", //7
    "Alamat", //8
    "NPWP", //9
    "Harga Jual / Penggantian", //10
    "Dikurangi Potongan Harga", //11
    "Dikurangi Uang Muka", // 12
    "Dasar Pengenaan Pajak", //13
    "Total PPN", //14
    "Total PPnBM (Pajak Penjualan Barang Mewah)", //15
);

function getVal(value: string[]) {
    if (value.length > 1) {
        return value[1]?.trim() ?? undefined;
    }
    return undefined;
}

export const emptyFaktur: IFakturPajak = {
    title: undefined,
    codeSeries: undefined,
    companyType: undefined,
    companyName: undefined,
    companyAddress: undefined,
    companyNpwp: undefined,
    clientType: undefined,
    clientName: undefined,
    clientAddress: undefined,
    clientNpwp: undefined,
    headerDetails: undefined,
    productDetails: undefined,
    sellPrice: undefined,
    discount: undefined,
    downPayment: undefined,
    ppnBase: undefined,
    ppnTotal: undefined,
    ppnBm: undefined,
}

export function ocrDataMapping(data: Page | null): IFakturPajak | undefined {
    let fakturData = emptyFaktur;
    data?.lines?.map((line, idx) => {
        console.log('Read ', line.text)
        //fakturData
        if (line.text.trim().toLowerCase().startsWith(fpData[0]?.toLowerCase())) {
            fakturData.title = line.text ?? undefined;
        }
        //Nomor Seri
        if(line.text.trim().toLowerCase().startsWith(fpData[1]?.toLowerCase())) {
            fakturData.codeSeries = getVal(line.text.split(":"));
        }

        //company type
        if(line.text.trim().toLowerCase().startsWith(fpData[2]?.toLowerCase())) {
            fakturData.companyType = line.text.trim();
        }

        //company name
        if(line.text.trim().toLowerCase().startsWith(fpData[3]?.toLowerCase())) {
            if (idx == 3) {
                fakturData.companyName = getVal(line.text.split(":"));
            }
        }
        //company address skip

        //NPWP
        if(line.text.trim().toLowerCase().startsWith(fpData[5]?.toLowerCase())) {
            // be aware of this
            if (idx < 10) {
                fakturData.companyNpwp = getVal(line.text.split(":"));
            }
        }
        //barang kena pajak
        if(line.text.trim().toLowerCase().startsWith(fpData[6]?.toLowerCase())) {
            fakturData.clientType = getVal(line.text.split(":"));
        }
        //client name
        if(line.text.trim().toLowerCase().startsWith(fpData[7]?.toLowerCase())) {
            fakturData.clientName = getVal(line.text.split(":"));
        }

        //client npwp
        if(line.text.trim().toLowerCase().startsWith(fpData[9]?.toLowerCase())) {
            fakturData.clientNpwp = getVal(line.text.split(":"));
        }

        //client header skip
        //client detail skip

        //harga jual
        if(line.text.trim().toLowerCase().startsWith(fpData[10]?.toLowerCase())) {
            fakturData.sellPrice = getVal(line.text.split("Penggantian"));
            if (fakturData.sellPrice?.trim()?.includes("oo")) {
                fakturData.sellPrice = "0,00";
            }
        }

        //discount
        if(line.text.trim().toLowerCase().startsWith(fpData[11]?.toLowerCase())) {
            fakturData.discount = getVal(line.text.split("Potongan Harga"));
            if (fakturData.discount?.trim()?.includes("oo")) {
                fakturData.discount = "0,00";
            }
        }

        //dp
        if(line.text.trim().toLowerCase().startsWith(fpData[12]?.toLowerCase())) {
            fakturData.downPayment = getVal(line.text.split("Uang Muka"));
            if (fakturData.downPayment?.trim()?.includes("oo") ||
                fakturData.downPayment?.trim()?.includes("De")) {
                fakturData.downPayment = "0,00";
            }
        }

        //Dasar Pengenaan Pajak
        if(line.text.trim().toLowerCase().startsWith(fpData[13]?.toLowerCase())) {
            fakturData.ppnBase = getVal(line.text.split("Pengenaan Pajak"));
            if (fakturData.ppnBase?.trim()?.includes("oo")) {
                fakturData.ppnBase = "0,00";
            }
        }

        //ppn
        if(line.text.trim().startsWith(fpData[14].toString())) {
            fakturData.ppnTotal = getVal(line.text.split("PPN "));
            if (fakturData.ppnTotal?.trim()?.includes("oo")) {
                fakturData.ppnTotal = "0,00";
            }
        }

        //ppn total
        if(line.text.trim().toLowerCase().startsWith(fpData[15]?.toLowerCase())) {
            fakturData.ppnBm = getVal(line.text.split("(Pajak Penjualan Barang Mewah)"));
            if (fakturData.ppnBm?.trim()?.includes("oo")) {
                fakturData.ppnBm = "0,00";
            }
        }
    });

    return fakturData ?? undefined;
}
