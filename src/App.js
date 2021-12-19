import { useState, useEffect } from 'react';
import { registerMicroApps, start } from 'qiankun';
import './App.css';
import storeAction from './store';
// 注册子应用
registerMicroApps([
  {
    name: 'react-sub',
    entry: process.env.REACT_APP_REACT_SUB,
    container: '#container',
    activeRule: '/react',
    // props:{
    //   getGlobalState: storeAction.getGlobalState
    // }
  },
  {
    name: 'vue-sub',
    entry: process.env.REACT_APP_VUE_SUB,
    container: '#container',
    activeRule: '/vue',
  },
]);
// 启动 qiankun
start();

function App() {
  const [activeId, setActiveId] = useState(1);
  const [headerText, setHeadetText] = useState(storeAction.getGlobalState())
  
  const handleClick = (id) => {
    window.history.pushState(null, null, id === 1 ? '/react' : '/vue')
    setActiveId(id)
  }
  // 修改默认布局，增加子应用挂在容器“＃container”

  const changeGlobalData = () => {
     storeAction.setGlobalState({
       value: 'react-main change data'
     }) 
  }

  useEffect(() => {
    storeAction.onGlobalStateChange((state, pre) => {
      setHeadetText(state)
    })
    return () => {
      storeAction.offGlobalStateChange()
    }
  }, [])

  return (
    <div className="app">
      <header className="app_header">
        <span>{headerText.name}:{headerText.value}</span>
        <button　onClick={changeGlobalData}>改变主应用数据</button>
      </header>
      <div className="app_body">
        <aside className="menu">
          <div className={`menu_button ${activeId === 1 && 'active'}`} onClick={() => handleClick(1)}>react-sub</div>
          <div className={`menu_button ${activeId === 2 && 'active'}`} onClick={() => handleClick(2)}>vue-sub</div>
        </aside>
        <div id="container" className="content"></div>
      </div>
    </div>
  );
}

export default App;
