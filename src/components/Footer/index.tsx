import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { AUTHOR_GITHUB } from '@/constants';
const Footer: React.FC = () => {
  const defaultMessage = 'CXY出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: '沁空间',
          href: 'https://www.baidu.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> CXY的github
            </>
          ),
          href: AUTHOR_GITHUB,
          blankTarget: true,
        },
        // {
        //   key: 'Ant Design',
        //   title: 'Ant Design',
        //   href: 'https://www.baidu.com',
        //   blankTarget: true, //用户点击后是否在新页面跳转
        // },
      ]}
    />
  );
};
export default Footer;
