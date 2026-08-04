"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";

type FlyData = {
  startX: number;
  startY: number;
  image: string;
  name: string;
};

type FlyContextType = {
  fly: (data: FlyData) => void;
  activeFly: FlyData | null;
  flyId: number;
};

const FlyContext = createContext<FlyContextType | null>(null);

export function FlyProvider({ children }: { children: React.ReactNode }) {
  const [activeFly, setActiveFly] = useState<FlyData | null>(null);
  const [flyId, setFlyId] = useState(0);

  const fly = useCallback((data: FlyData) => {
    setActiveFly(data);
    setFlyId((id) => id + 1);
  }, []);

  return (
    <FlyContext.Provider value={{ fly, activeFly, flyId }}>
      {children}
    </FlyContext.Provider>
  );
}

export function useFly() {
  const ctx = useContext(FlyContext);
  if (!ctx) throw new Error("useFly must be used within FlyProvider");
  return ctx;
}
