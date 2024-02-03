import GameOverviewCard from "@/components/competition/game-overview-card";
import TeamADetailCard from "@/components/competition/team-a-detail-card";
import TeamBDetailCard from "@/components/competition/team-b-detail-card";

export default function CompetitionPage() {
  return (
    <section className={"container grid items-center gap-6 pb-8 pt-6 md:py-10"}>
      <div
        className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <GameOverviewCard/>

      </div>
      <div
        className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <TeamADetailCard/>
        <TeamBDetailCard/>
      </div>
    </section>
  )
}
