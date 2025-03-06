import type {TMatch} from "@/shared/types/comon.ts";

export type TMatchServices = {
  getMatches: () => Promise<{data: { matches: TMatch[] }}>,
}