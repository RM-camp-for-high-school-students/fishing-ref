'use client'
import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {io, Socket} from "socket.io-client";
import {BackendUrlContext} from "@/context/BackendUrlContext";

interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  gameStatus: string;
  gameCountdown: number;
  currentStage: string;
  stageCountdown: number;
  originalScore: number[];
  finalScore: number[];
  remoteControlTime: number[];
  invasionTime: number[];
  fishmongerCoolDown: number[];
  gainMultiplier: number[];
  penaltyMultiplier: number[];
}

export const SocketContext = createContext<SocketContextType | undefined>(undefined)

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const {backendUrl, setBackendUrl} = useContext(BackendUrlContext)

  const [isConnected, setIsConnected] = useState(false)
  const [gameStatus, setGameStatus] = useState("")
  const [gameCountdown, setGameCountdown] = useState(0)
  const [currentStage, setCurrentStage] = useState("")
  const [stageCountdown, setStageCountdown] = useState(0)
  const [originalScore, setOriginalScore] = useState<number[]>([0, 0])
  const [finalScore, setFinalScore] = useState<number[]>([0, 0])
  const [remoteControlTime, setRemoteControlTime] = useState<number[]>([0, 0])
  const [invasionTime, setInvasionTime] = useState<number[]>([0, 0])
  const [fishmongerCoolDown, setFishMongerCoolDown] = useState<number[]>([0, 0, 0, 0])
  const [gainMultiplier, setGainMultiplier] = useState<number[]>([0, 0])
  const [penaltyMultiplier, setPenaltyMultiplier] = useState<number[]>([0, 0])

  useEffect(() => {
    const newSocket = io(backendUrl)

    setSocket(newSocket)

    newSocket.on('connect', () => {
      setIsConnected(true);
    })

    newSocket.on('disconnect', () => {
      setIsConnected(false)
    })

    const fetchInterval = 500

    const intervalId = setInterval(() => {
      newSocket.emit("fetch_game_data", () => {
      })
    }, fetchInterval)

    newSocket.on('game_status', (newData) => {
      setGameStatus(newData.gameStatus)
    })

    newSocket.on('game_countdown', (newData) => {
      setGameCountdown(newData.gameCountdown)
    })

    newSocket.on('current_stage', (newData) => {
      setCurrentStage(newData.currentStage)
    })

    newSocket.on('stage_countdown', (newData) => {
      setStageCountdown(newData.stageCountdown)
    })

    newSocket.on('score', (newData) => {
      setOriginalScore(newData.originalScore)
      setFinalScore(newData.finalScore)
    })

    newSocket.on('remote_control_time', (newData) => {
      setRemoteControlTime(newData.remoteControlTime)
    })

    newSocket.on('invasion_time', (newData) => {
      setInvasionTime(newData.invasionTime)
    })

    newSocket.on('fishmonger_cool_down', (newData) => {
      setFishMongerCoolDown(newData.fishmongerCoolDown)
    })

    newSocket.on('multiplier', (newData) => {
      setGainMultiplier(newData.gainMultiplier)
      setPenaltyMultiplier(newData.penaltyMultiplier)
    })

    return () => {
      clearInterval(intervalId)
      newSocket.disconnect()
    }
  }, [backendUrl])

  return (
    <SocketContext.Provider value={{
      isConnected,
      gameStatus,
      gameCountdown,
      currentStage,
      stageCountdown,
      originalScore,
      finalScore,
      remoteControlTime,
      invasionTime,
      fishmongerCoolDown,
      gainMultiplier,
      penaltyMultiplier,
      socket
    }}>
      {children}
    </SocketContext.Provider>
  )
}
