import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { RouletteCard } from "../../types/Card";
import { Card } from "../Card";

interface Props {
  items: RouletteCard[];
}

export function Roulette({ items }: Props) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const divRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [middle, setMiddle] = useState(-1);
  const [extendedItems, setExtendedItems] = useState<RouletteCard[]>([]);

  const itemWidth = 130;

  const spinToItem = () => {
    if (!divRef.current) return;
    if (isSpinning) return;
    const index = Math.floor(Math.random() * (100 - 75)) + 75;

    console.log(index);
    setIsFinished(false);
    setIsSpinning(true);
    setSelectedItemIndex(index);

    const { width } = divRef.current.getBoundingClientRect();
    const middleContainer = width / 2;
    const targetOffset = index * itemWidth;

    setOffset(targetOffset - middleContainer);

    setTimeout(() => {
      setIsSpinning(false);
      setIsFinished(true);
    }, 19500);
  };

  useEffect(() => {
    const newItems = Array(100)
      .fill(0)
      .map(() => items[Math.floor(Math.random() * items.length)]);

    setExtendedItems(newItems);

    setTimeout(() => {
      spinToItem();
    }, 2000);
  }, []);

  const updateSelectedItem = (x: number) => {
    if (divRef.current) {
      const { width } = divRef.current.getBoundingClientRect();
      const middleContainer = width / 2;
      const offset = x * -1 + middleContainer + 60;
      const itemIndex = Math.floor(offset / itemWidth);

      setMiddle(itemIndex);
    }
  };

  return (
    <>
      {isFinished && selectedItemIndex !== null ? (
        <div className="flex flex-col items-center mt-4">
          <Card card={extendedItems[selectedItemIndex]} />
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Girar Novamente
          </button>
        </div>
      ) : (
        <div className="relative max-w-screen-xl w-full justify-start">
          <div className="relative w-full h-[140px] flex items-center overflow-x-hidden overflow-y-visible">
            <div className="absolute w-[60px] z-50 left-0 h-full bg-roleta" />
            <div className="absolute w-[60px] z-50 right-0 h-full bg-roleta transform rotate-180" />
            <motion.div
              ref={divRef}
              className="w-full flex gap-2.5"
              animate={{ x: -offset }}
              transition={{ duration: 17, ease: "easeOut" }}
              onUpdate={(latest) => {
                const { x } = latest;
                updateSelectedItem(x as number);
              }}
            >
              {extendedItems.map((item, index) => (
                <Card card={item} selected={middle === index} />
              ))}
            </motion.div>
          </div>

          <div className="absolute top-[-56px] left-1/2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="116"
              height="116"
              viewBox="0 0 116 116"
              fill="none"
            >
              <path
                d="M55.4384 75.0617C56.118 75.7405 57.0394 76.1218 58 76.1218C58.9606 76.1218 59.882 75.7405 60.5617 75.0617L89.5617 46.0617C90.2405 45.382 90.6218 44.4606 90.6218 43.5C90.6218 42.5394 90.2405 41.618 89.5617 40.9383L26.4383 40.9383C25.7595 41.618 25.3782 42.5394 25.3782 43.5C25.3782 44.4606 25.7595 45.382 26.4383 46.0617L55.4384 75.0617Z"
                fill="#EAB308"
              />
            </svg>
          </div>
          {/* {selectedItemIndex !== null && (
        <p className="text-white mb-2">
          Item Selecionado: {selectedItemIndex} | middle: {middle}
        </p>
      )} */}
        </div>
      )}
    </>
  );
}
