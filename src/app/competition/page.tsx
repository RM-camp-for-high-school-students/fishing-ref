'use client'
import GameOverviewCard from "@/components/competition/game-overview-card";
import ScoreCard from "@/components/competition/scorecard";

export default function CompetitionPage() {
  return (
    <section className={"container grid items-center gap-6 pb-8 pt-6 md:py-10"}>
      <h2 className={"text-3xl font-bold tracking-tight"}>正式比赛</h2>
      <div
        className={"flex max-w-screen-md flex-col items-center justify-start space-y-8 md:flex-row md:space-x-8 md:space-y-0"}>
        <GameOverviewCard/>
        <ScoreCard/>
      </div>
    </section>
  )
}
