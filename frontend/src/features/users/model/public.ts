import { UserDto } from "@/dal/types";
import { d } from "./domain";

export const $users = d.store<UserDto[]>([])