import C from "./constant"

export const addNote = (note) => (
    {
        type: C.ADD_NOTE,
        note
    }
)
