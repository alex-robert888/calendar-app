
export interface Task {
    title: string;
    completed: boolean;
}

export interface RootState {
    DAYS_OF_THE_WEEK_ABBREVIATED: readonly string[];
    pickedMonth: number;
    pickedYear: number;
    tasks: Array<Task>;
}

export const state: RootState = {
    DAYS_OF_THE_WEEK_ABBREVIATED: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    pickedMonth: 0,
    pickedYear: 0,
    tasks: [
        { title: 'Set up mongodb', completed: false },
        { title: 'Draw db model ffs', completed: false }
    ]
}
