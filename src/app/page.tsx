"use client"

import "../app/globals.css"
import React, {useRef, useState} from "react";
import {ocrToText} from "@/utils/ocr";
import Image from "next/image";
import CardResult from "@/components/CardResult";
import {id} from "postcss-selector-parser";

export default function Home() {
    const imageInputRef: any = useRef(null);
    const [processing, setProcessing] = useState<boolean>(false);
    const [result, setResult] = useState<Array<string>>([]);
    const [urlFile, setUrlFile] = useState<string>();
    const openBrowseImage = async () => {
        await imageInputRef.current.click();
    };

    const ocrConvertToText = async (url: string) => {
       try {
           if (url.length) {
               setProcessing(true);
               await ocrToText(url)
                   .then((txt: string) => {
                       let copyString: Array<string> = result;
                       copyString.push(txt);
                       setResult(copyString);
                   });
               setProcessing(false);
           }
       } catch (err: any) {
           console.log(err);
           setProcessing(false);
       } finally {
           setProcessing(false);
       }
    };

  return (
      <>
      <div className="w-full md:bottom-10 flex flex-row gap-10 items-center justify-center p-5 md:p-10">
          <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.preventDefault();
                  try {
                      if (e.target.files && e.target.files[0]) {
                          let url: string = URL.createObjectURL(e.target.files?.[0]!);
                          setUrlFile(url);
                          ocrConvertToText(url);
                      }
                  } catch (err) {
                      console.log(err);
                  }
              }}
              ref={imageInputRef}
              type="file"
              hidden
              required
          />
          <div
              className="w-[10%] min-h-[10vh] md:min-h-[10vh] bg-yellow-700 cursor-pointer rounded-xl flex items-center justify-center"
          >
              <div className="w-full flex items-center justify-center flex-row gap-3"
                   onClick={() => {
                       openBrowseImage();
                   }}
              >
                  <div className="text-xl md:text-xl text-center font-[800] text-gray-200">
                      {processing ? "Processing Image..." : "Browse Your Image here"}
                  </div>
              </div>

          </div>
          {urlFile &&
              <div className={"container flex justify-center h-[20%] w-[40%] border-2 border-amber-600"}>
                  <Image alt={"testing"} src={urlFile} height={100} width={100} layout={"responsive"}/>
              </div>
          }
      </div>
        <div className={"flex items-center justify-center flex-col-reverse gap-3 mx-56"}>
            {result.map((text, index) => {
                return <CardResult str={text} idx={index} key={index}/>;
            })
            }
        </div>
      </>
  );
}
