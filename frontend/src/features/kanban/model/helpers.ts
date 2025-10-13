import { KanbanColumn } from "@/dal/types"

export const getSortCardColumn = (columns: KanbanColumn[], {
    id, index
}: { id: number, index: number }
) => {
    const foundColumn = columns.find(
        ({ tasks }) => tasks.some(
            (t) => t.id === id
        )
    )?.tasks.filter((p) => p.id !== id) || []

    let newColumns = [
        ...foundColumn.slice(
            0, index
        ), {
            id
        },
        ...foundColumn.slice(
            index,
        )
    ]

    return newColumns.map(({ id }, order) => ({
        id, order
    }))

}