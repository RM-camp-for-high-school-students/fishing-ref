import GameOverviewCard from "@/components/competition/game-overview-card";
import TeamADetailCard from "@/components/competition/team-a-detail-card";
import TeamBDetailCard from "@/components/competition/team-b-detail-card";

export default function CompetitionPage() {
  return (
    <section className={"container grid items-center gap-6 pb-8 pt-6 md:py-10"}>
      <div>
        <GameOverviewCard/>
      </div>
      <div className={"flex space-x-24"}>
        <TeamADetailCard/>
        <TeamBDetailCard/>
      </div>
    </section>
  )
}
