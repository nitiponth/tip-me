"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showQR, setShowQR] = useState<number>(0);
  const [amount, setAmount] = useState<number | undefined>(0);

  const onclickHandler = (amount: number) => {
    setShowQR(amount);
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
        {/* Get started by editing&nbsp; */}
        {/* <code className="font-mono font-bold">app/page.tsx</code> */}
        {/* </p> */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full  flex-1 items-end justify-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none text-end">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <h2>Ice.</h2>
          </a>
        </div>
      </div>

      {!showQR && (
        <>
          <div className="relative -z-[1px] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>

          <div className="flex flex-col gap-4 items-center z-20">
            <div className="flex gap-4">
              <div
                className="border-solid border w-[200px] h-[75px] flex justify-center items-center rounded-lg cursor-pointer"
                onClick={() => onclickHandler(1)}
              >
                1฿
              </div>
              <div
                className="border-solid border w-[200px] h-[75px] flex justify-center items-center rounded-lg cursor-pointer"
                onClick={() => onclickHandler(5)}
              >
                5฿
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="border-solid border w-[200px] h-[75px] flex justify-center items-center rounded-lg cursor-pointer"
                onClick={() => onclickHandler(20)}
              >
                20฿
              </div>
              <div
                className="border-solid border w-[200px] h-[75px] flex justify-center items-center rounded-lg cursor-pointer"
                onClick={() => onclickHandler(50)}
              >
                50฿
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="border-solid border w-[200px] h-[75px] flex justify-center items-center rounded-lg cursor-pointer"
                onClick={() => onclickHandler(100)}
              >
                100฿
              </div>
              <div
                className="border-solid border w-[200px] h-[75px] flex justify-center items-center rounded-lg cursor-pointer"
                onClick={() => onclickHandler(500)}
              >
                500฿
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="border-solid border w-[200px] h-[75px] flex justify-center items-center rounded-lg cursor-pointer"
                onClick={() => onclickHandler(1000)}
              >
                {(1000).toLocaleString(undefined)}฿
              </div>
              <div
                className="border-solid border w-[200px] h-[75px] flex justify-center items-center rounded-lg cursor-pointer"
                onClick={() => onclickHandler(2000)}
              >
                {(2000).toLocaleString(undefined)}฿
              </div>
            </div>
            <div className="border-solid border w-[400px] h-[100px] mt-4 flex flex-col justify-center items-center rounded-lg cursor-pointer gap-4">
              <label>Feel free to pay what your desire</label>
              <div className="flex gap-2">
                <input
                  className="text-black px-2"
                  onChange={(e) => setAmount(Number(e.target.value))}
                  value={amount}
                />
                <button
                  className="border border-solid p-1 rounded-lg"
                  onClick={() => onclickHandler(amount ?? 0)}
                >
                  ตะหนับตะหนุน
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {!!showQR && (
        <>
          <div>
            ตะหนับตะหนุนค่ากาแฟจำนวน:{" "}
            {showQR?.toLocaleString() ?? amount?.toLocaleString()}฿
          </div>
          <img src={`https://promptpay.io/0827789132/${showQR}.png`} alt="" />
          <div>รับชำระจากทุกธนาคาร 🙇‍♂️</div>
          <div
            onClick={() => onclickHandler(0)}
            className="border border-solid p-2 px-10 rounded-lg"
          >
            Return
          </div>
        </>
      )}
    </main>
  );
}
