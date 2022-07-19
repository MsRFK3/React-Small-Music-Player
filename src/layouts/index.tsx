import { IRouteComponentProps } from 'umi';
import { Provider } from 'react-redux';

import store from '@/redux/index';
import BG from './bg';
import Header from './header';

import 'antd/dist/antd.min.css';
import './index.scss';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <Provider store={store}>
      <div className="layout">
        <div className="header">
          <Header></Header>
        </div>
        <div className="middle_content">{children}</div>
        <div className="footer">22</div>
      </div>
      <BG bgLink={require('@/assets/images/bg/base_bg.jpg')}></BG>
    </Provider>
  );
}
