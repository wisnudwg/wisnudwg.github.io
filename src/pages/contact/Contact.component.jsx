import React from 'react';
import Link from 'next/link';
import { Button, Image, Tooltip, Typography, Space } from 'antd';
import {
  PaperClipOutlined,
  GoogleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import colors from '../../styles/colors';

import config from './Contact.config';
import css from './Contact.module.scss';

const { Title, Text, Paragraph } = Typography;

const Contact = (props) => {
  const [state, setState] = React.useState();

  return (
    <div id={css.Contact}>
      <Title level={2}>Thank you for visiting!</Title>
      <Paragraph>
        Interested in collaborating or any further contact? You can contact me via one of the following:
      </Paragraph>
      <br />
      <Space direction="vertical" size="large">
        <div>
          <Space direction="horizontal" size="large">
            <span><InstagramOutlined className={css["platform-icon"]} /></span>
            <span
              onClick={() => window.open('https://www.instagram.com/wisnu_dwg/?hl=en')}
              style={{ cursor: 'pointer', color: colors.yellowLight }}
            >
              @wisnu_dwg
            </span>
          </Space>
        </div>
        <div>
          <Space direction="horizontal" size="large">
            <span><LinkedinOutlined className={css["platform-icon"]} /></span>
            <span
              onClick={() => window.open('https://www.linkedin.com/in/wisnu-dewangga-369019182/?originalSubdomain=id')}
              style={{ cursor: 'pointer', color: colors.yellowLight }}
            >
              Wisnu Dewangga
            </span>
          </Space>
        </div>
        <div>
          <Space direction="horizontal" size="large">
            <span><GoogleOutlined className={css["platform-icon"]} /></span>
            <span>wisnudewangga29@gmail.com</span>
            <span>
              <Tooltip title="Copy Email">
                <PaperClipOutlined
                  style={{ cursor: 'pointer', color: colors.yellowLight }} 
                  onClick={() => navigator.clipboard.writeText('wisnudewangga29@gmail.com')}
                />
              </Tooltip>
            </span>
          </Space>
        </div>
        <div>
          <Image
            src="/images/red_crescent_moon.jpg"
            alt="red_crescent_moon"
            preview={false}
            width={250}
          />
        </div>
      </Space>
    </div>
  );
};

Contact.displayName = config.displayName;
Contact.defaultProps = config.defaultProps;

export default Contact;