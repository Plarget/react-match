import type { TWithProviders } from "./types.ts"
import compose from "compose-function"
import {withQuery} from "./withQuery";

export const withProviders: TWithProviders = compose(withQuery)