/**
 * Created by John on 2017/5/27.
 */
export default {
    state:0,
    reducers:{
        init(state,action){
            return action.number
        },
        increase(state,action){
            return state+1
        },
        decrease(state,action){
            return state-1;
        }
    }
}