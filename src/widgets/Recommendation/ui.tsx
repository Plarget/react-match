import type {FC} from "react"
import type {TRecommendation} from "./types";
import MatchList from "@/shared/ui/MatchList";
import matchServices from "@/shared/services/matchServices";
import {useQuery} from "@tanstack/react-query";
import Logo from "@/shared/ui/Logo";
import Button from "@/shared/ui/Button";
import SvgIcon from "@/shared/ui/SvgIcon";
import "./Recommendation.pcss"
import Loading from "@/shared/ui/Loading";

const Recommendation: FC<TRecommendation> = () => {
  const {
    data: matches,
    refetch, isFetching,
    isError
  } = useQuery({
    queryKey: ["matches"],
    queryFn: matchServices.getMatches,
  })

  return (
    <section className="recommendation">
      <div className="recommendation__inner container">
        <div className="recommendation__header">
          <Logo className="recommendation__logo"/>
          <div className="recommendation__actions">
            {isError && (
              <div className="recommendation__error">
                <SvgIcon className="recommendation__error-icon" name="error" />
                <div className="recommendation__error-text text">Ошибка: не удалось загрузить информацию</div>
              </div>
            )}
            <Button
              className="recommendation__refresh"
              disabled={isFetching}
              onClick={() => refetch()}
            >
              Обновить
              <SvgIcon className="recommendation__refresh-icon" name="refresh"/>
            </Button>
          </div>
        </div>
        {isFetching ? (
          <Loading className="recommendation__loading"/>
        ) : (
          matches && <MatchList className="recommendation__body" matches={matches.data.matches}/>
        )}
      </div>
    </section>
  )
}

export default Recommendation