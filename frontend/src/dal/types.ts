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
    assigned: UserDto[],
    stage: StageDto,
    user: UserDto
}


export type KanbanColumnDto = {
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