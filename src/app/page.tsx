import BackendStatusCard from "@/components/overview/backend-status-card"
import GameOverviewCard from "@/components/competition/game-overview-card";
import DatetimeCard from "@/components/overview/datetime-card";

export default function IndexPage() {

  return (
    <section className={"container grid items-center gap-6 pb-8 pt-6 md:py-10"}>
      <h2 className={"text-3xl font-bold tracking-tight"}>概览</h2>
      <div
        className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <BackendStatusCard/>
        <DatetimeCard/>
      </div>
      <div
        className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <GameOverviewCard/>
      </div>
    </section>
  )
}
