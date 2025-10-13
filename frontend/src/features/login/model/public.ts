import { accessTokenApi } from "@/dal/request";
import { d } from "./domain";


export const $isUserAuthorized = accessTokenApi.$store.map(Boolean)
export const logout = d.event()

$isUserAuthorized.watch(console.log)