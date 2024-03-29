import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function secondsToTimerFormat(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function gameStatusLocalization(gameState: string) {
  if (gameState === "running") {
    return "进行中"
  } else if (gameState === "pause") {
    return "暂停中"
  } else if (gameState === "free") {
    return "等待开始"
  } else if (gameState === "abort") {
    return "已终止"
  } else if (gameState === "end") {
    return "已结束"
  } else {
    return "异常"
  }
}

export function currentStageLocalization(currentStage: string) {
  if (currentStage === "stage 1") {
    return "第一阶段"
  } else if (currentStage === "stage 2") {
    return "第二阶段"
  } else if (currentStage === "stage 3") {
    return "第三阶段"
  } else {
    return "阶段异常"
  }
}

export function bonusStateLocalization(bonusState: boolean) {
  if (bonusState) {
    return "已触发"
  } else {
    return "未触发"
  }
}
