import { initGlobalState } from 'qiankun';
const initState = {
  name: 'react-main',
  value: 'react-main date'
}
// 初始化 state
const actions = initGlobalState(initState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('main store',state, prev);
  for(const key in state){
    initState[key] = state
  } 
});
// actions.setGlobalState(state);
// actions.offGlobalStateChange();

actions.getGlobalState = (key) => {
   return initState[key] ?  initState[key] : initState
}

export default actions;