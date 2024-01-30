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
  score: number[];
  bonusState: boolean[];
  bonusCountdown: number[];
  remoteControlTime: number[];
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
  const [score, setScore] = useState<number[]>([0, 0])
  const [bonusState, setBonusState] = useState<boolean[]>([false, false])
  const [bonusCountdown, setBonusCountdown] = useState<number[]>([0, 0])
  const [remoteControlTime, setRemoteControlTime] = useState<number[]>([0, 0])

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
      setScore(newData.score)
    })

    newSocket.on('bonus', (newData) => {
      setBonusState(newData.bonusState)
      setBonusCountdown(newData.bonusCountdown)
    })

    newSocket.on('remote_control_time', (newData) => {
      setRemoteControlTime(newData.remoteControlTime)
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
      score,
      bonusState,
      bonusCountdown,
      remoteControlTime,
      socket
    }}>
      {children}
    </SocketContext.Provider>
  )
}
