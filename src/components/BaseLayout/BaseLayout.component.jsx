import React from 'react';
import { useRouter } from 'next/router';
import { Col, Drawer, Image, Layout, List, Row } from 'antd';
import HeaderMenu from './HeaderMenu/HeaderMenu.component';
import SiderMenu from './SiderMenu/SiderMenu.component';
import nav from '../../constants/nav';

import config from './BaseLayout.config';
import css from './BaseLayout.module.scss';

const { Header, Footer, Sider, Content } = Layout;

const BaseLayout = (props) => {
  const [sideMenuVisibility, setSideMenuVisibility] = React.useState(false);

  return (
    <Layout id={css.BaseLayout}>
      <HeaderMenu
        menus={nav.menus}
        onMenuBtnClicked={() => setSideMenuVisibility(!sideMenuVisibility)}
      />
      <SiderMenu
        menus={nav.menus}
        isOpen={sideMenuVisibility}
        onClose={() => setSideMenuVisibility(false)}
      />
      <Content id={css.ContentContainer}>
        {props?.children}
      </Content>
      <Footer hidden>Footer</Footer>
    </Layout>
  );
};

BaseLayout.displayName = config.displayName;
BaseLayout.defaultProps = config.defaultProps;

export default BaseLayout;