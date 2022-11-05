import React from 'react';
import { useRouter } from 'next/router';
import { Drawer, Space } from 'antd';
import colors from '../../../styles/colors';

import config from './SiderMenu.config';
import css from './SiderMenu.module.scss';

const SiderMenu = (props) => {
  const router = useRouter();

  return (
    <Drawer
      placement="top"
      closable={false}
      open={props.isOpen}
      onClose={props.onClose}
      bodyStyle={{
        backgroundColor: colors.blackStd,
        margin: 0,
        padding: 0,
      }}
    >
      <div id={css.SideMenu}>
        <Space direction="vertical" size="large">
        {props.menus.map(menu => <React.Fragment key={menu.href}>
          <span className={router.pathname === menu.href ? css["menu-link-active"] : css["menu-link"]}>
            <span onClick={() => router.push(menu.href)}>{menu.title}</span>
          </span>
        </React.Fragment>)}
        </Space>
      </div>
    </Drawer>
  );
};

SiderMenu.displayName = config.displayName;
SiderMenu.defaultProps = config.defaultProps;

export default SiderMenu;