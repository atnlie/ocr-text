import {createWorker} from "tesseract.js";

export async function ocrToText(image: string) {
    try {
        const worker = await createWorker("ind");
        const ret =  await worker.recognize(image);
        const result = ret.data.text;
        await worker.terminate();
        console.log("Recognized image ", result);
        return result;
    } catch (err: any) {
        console.log("Error: ", err);
        return "";
    }
}
