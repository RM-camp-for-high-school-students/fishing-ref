import FishMongerStatusCard from "@/components/overview/fish-monger-status-card";
import FishPondStatusCard from "@/components/overview/fish-pond-status-card";
import FishPondTestingCard from "@/components/testing/fish-pond-testing-card";
import FishMongerTestingCard from "@/components/testing/fish-monger-testing-card";

export default function TestPage() {
  return (
    <section className={"container grid items-center gap-6 pb-8 pt-6 md:py-10"}>
      <h2 className={"text-3xl font-bold tracking-tight"}>测试模式</h2>
      <div
        className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <FishMongerTestingCard fishMongerStatusList={[
          {mongerIdentifier: "AX", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "AY", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "BX", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "BY", isOnline: true, mongerState: "SCANNING"}]}/>
        <FishMongerStatusCard fishMongerStatusList={[
          {mongerIdentifier: "AX", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "AY", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "BX", isOnline: true, mongerState: "SCANNING"},
          {mongerIdentifier: "BY", isOnline: true, mongerState: "SCANNING"}]}/>
      </div>
      <div
        className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <FishPondTestingCard isOnline={true} pondState={"NORMAL"}/>
        <FishPondStatusCard isOnline={true} pondState={"NORMAL"}/>
      </div>
    </section>
  )
}
