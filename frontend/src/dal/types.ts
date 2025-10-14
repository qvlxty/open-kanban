export type StageDto = {
    id: number,
    title: string
    description: string,
    createdDate: string,
    updateDate: string,
}

export type TaskDto = {
    id: number,
    title: string
    description: string,
    createdDate: string,
    updateDate: string,
    dueDate: string,
    user: UserDto,
    stage: StageDto,
}


export type KanbanColumn = {
    id: number,
    title: string,
    tasks: TaskDto[]
}

export type UserDto = {
    id: number,
    login: string,
    name: string,
}

export type ProjectDto = {
    id: number,
    title: string,
}