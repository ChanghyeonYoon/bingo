"use client";

import React from "react";
import Image from "next/image";
import { QUESTIONS } from "@/constants";
import gsap from "gsap";

export default function Home() {
  const [answerList, setAnswerList] = React.useState<Record<string, string>>({});
  const handleSaveAnswer = (idx: number) => () => {
    const answer = window?.prompt("정답을 입력해주세요.");
    if (!answer) return;
    setAnswerList((prev) => ({
      ...prev,
      [`Q-${idx}`]: answer,
    }));

    gsap.to(`#Q-${idx}`, {
      duration: 1,
      rotationY: 180,
      transformStyle: "preserve-3d",
      transformOrigin: "center",
      ease: "power2.inOut",
      backgroundColor: "#FF9900",
    });

    gsap.to(`#Q-${idx} div`, {
      duration: 1,
      rotationY: 180,
      transformStyle: "preserve-3d",
      transformOrigin: "center",
      ease: "power2.inOut",
    });
  };

  return (
    <main className='flex h-screen w-screen justify-center bg-white'>
      <div className='flex h-full w-full max-w-[430px] flex-col items-center ring-1 ring-gray-200'>
        <Image src={"/images/check.svg"} alt={"check"} width={430} height={50} />
        <Image src={"/images/title.png"} alt={"check"} width={430} height={50} />
        <Image src={"/images/sub_title.svg"} alt={"check"} width={340} height={50} className='mb-10' />
        <section className='grid grid-cols-4 gap-3'>
          {QUESTIONS.map((question, idx) => {
            const isAnswered = !!answerList?.[`Q-${idx}`];
            return (
              <div
                id={`Q-${idx}`}
                key={question}
                onClick={handleSaveAnswer(idx)}
                className='flex h-28 w-[90px] cursor-pointer items-center justify-center border-[2px] border-black bg-white shadow-2xl'
              >
                <div>
                  <p className={`whitespace-pre-line text-center ${idx === 6 ? "text-xs" : "text-sm"}`}>
                    {isAnswered ? answerList?.[`Q-${idx}`] : question}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
