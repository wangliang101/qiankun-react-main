import { useState } from 'react';
import { registerMicroApps, start } from 'qiankun';
import './App.css';
// 注册子应用
registerMicroApps([
  {
    name: 'react-sub',
    entry: process.env.REACT_APP_REACT_SUB,
    container: '#container',
    activeRule: '/react',
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
  console.log('lll', process.env)

  // 修改默认布局，增加子应用挂在容器“＃container”
  return (
    <div className="app">
      <header className="app_header"></header>
      <div className="app_body">
        <aside className="menu">
          <div className={`menu_button ${activeId === 1 && 'active'}`} onClick={() => setActiveId(1)}>react-sub</div>
          <div className={`menu_button ${activeId === 2 && 'active'}`} onClick={() => setActiveId(2)}>vue-sub</div>
        </aside>
        <div id="container" className="content"></div>
      </div>
    </div>
  );
}

export default App;
