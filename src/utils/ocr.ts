import Tesseract, {createWorker} from "tesseract.js";

export async function ocrToText(image: string) {
    try {
        const worker = await createWorker("ind");
        const ret =  await worker.recognize(image);
        const result = ret.data.text;
        await worker.terminate();
        return result;
    } catch (err: any) {
        console.log("Error: ", err);
        return "";
    }
}

export async function ocrToData(image: string): Promise<Tesseract.Page | null>  {
    try {
        const worker = await createWorker("ind");
        const ret =  await worker.recognize(image);
        const result = ret.data;
        await worker.terminate();
        return result;
    } catch (err: any) {
        console.log("Error: ", err);
        return null;
    }
}
