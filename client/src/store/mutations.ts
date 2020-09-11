
import { RootState, Task } from './state';
import * as mutationTypes from './mutation-types';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<RootState> = {
    [mutationTypes.SET_PICKED_MONTH](state: RootState, value: number): void {
        state.pickedMonth = value;
    },

    [mutationTypes.SET_PICKED_YEAR](state: RootState, value: number): void {
        state.pickedYear = value;
    },
    
    [mutationTypes.INSERT_TASK](state: RootState, task: Task): void {
        state.tasks.push(task);
    }
}

