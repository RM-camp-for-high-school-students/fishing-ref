import {QuickAccessCard} from "@/components/qick-access-card";
import BackendStatusCard from "@/components/backend-status-card"
import FishPondStatusCard from "@/components/fish-pond-status-card";
import FishMongerStatusCard from "@/components/fish-monger-status-card";

export default function IndexPage() {
  return (
    <section className={"container grid items-center gap-6 pb-8 pt-6 md:py-10"}>
      <h2 className={"text-3xl font-bold tracking-tight"}>概览</h2>
      <div className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <QuickAccessCard/>
        <BackendStatusCard isOnline={true}/>
      </div>
      <div className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <FishPondStatusCard isOnline={true} pondState={"NORMAL"}/>
        <FishMongerStatusCard fishMongerStatusList={[
          {mongerIdentifier: "X1", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "X2", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "Y1", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "Y2", isOnline: true, mongerState: "SCANNING"}]}/>
      </div>
    </section>
  )
}
