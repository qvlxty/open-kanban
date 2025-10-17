import { UserDto } from "@/dal/types";
import { d } from "./domain";
import { attach } from "effector";
import { fetchUsersReqFx } from "@/dal";

export const $users = d.store<UserDto[]>([])
export const fetchUsersFx = attach({ effect: fetchUsersReqFx })