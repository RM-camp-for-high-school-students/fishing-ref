'use client'
import {QuickAccessCard} from "@/components/overview/qick-access-card";
import BackendStatusCard from "@/components/overview/backend-status-card"
import FishPondStatusCard from "@/components/overview/fish-pond-status-card";
import FishMongerStatusCard from "@/components/overview/fish-monger-status-card";

export default function IndexPage() {

  return (
    <section className={"container grid items-center gap-6 pb-8 pt-6 md:py-10"}>
      <h2 className={"text-3xl font-bold tracking-tight"}>概览</h2>
      <div
        className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <BackendStatusCard/>
        <QuickAccessCard/>
      </div>
      <div
        className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <FishMongerStatusCard fishMongerStatusList={[
          {mongerIdentifier: "AX", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "AY", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "BX", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "BY", isOnline: true, mongerState: "SCANNING"}]}/>
        <FishPondStatusCard isOnline={true} pondState={"NORMAL"}/>
      </div>
    </section>
  )
}
