import React from 'react';
import { useRouter } from 'next/router';
import { Button, Col, Layout, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import config from './HeaderMenu.config';
import css from './HeaderMenu.module.scss';

const { Header } = Layout;

const HeaderMenu = (props) => {
  const router = useRouter();

  return (
    <Header
      id={css.HeaderMenu}
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col 
          className={css["ant-col"]}
          span={12}
        >
          <Button className={css["menu-btn"]} onClick={props.onMenuBtnClicked}>
            <MenuOutlined className={css["menu-icon"]} />
          </Button>
        </Col>
        {props.menus.map(menu => <Col
          className={css["ant-col"]}
          span={12/props.menus.length}
          key={menu.href}
          >
            <span className={router.pathname === menu.href ? css["menu-link-active"] : css["menu-link"]}>
              <span onClick={() => router.push(menu.href)}>{menu.title}</span>
            </span>
          </Col>
        )}
      </Row>
    </Header>
  );
};

HeaderMenu.displayName = config.displayName;
HeaderMenu.defaultProps = config.defaultProps;

export default HeaderMenu;