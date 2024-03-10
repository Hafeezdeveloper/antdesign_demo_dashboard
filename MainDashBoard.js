import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Routes, Route } from 'react-router-dom';
import CategoryList from '../Page/Category/CategoryList';
import ProductList from '../Page/Product/ProductList';
import MainHeader from '../Component/Header/MainHeader';
import { MailOutlined } from '@ant-design/icons';
const { Sider } = Layout;

const YourComponent = () => {
    const [siderVisible, setSiderVisible] = useState(true);

    const onClick = ({ key }) => {
        // Handle menu item click if needed
    };

    const renderMenuItems = (items) => {
        return items.map(item => (
            <Menu.Item key={item.key}>
                {item.icon}
                <span>{item.label}</span>
            </Menu.Item>
        ));
    };

    const items = [
        { key: '1', label: 'Dashboard', icon: <MailOutlined /> },
        { key: '2', label: 'Categories', icon: <MailOutlined /> },
        { key: '3', label: 'Products', icon: <MailOutlined /> }
    ]; // Sample menu items, you can replace it with your actual menu items

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {siderVisible && (
                <Sider width={256} theme="light" collapsed={!siderVisible}>
                    <div className="d-flex justify-content-center">
                        <img style={{ width: "135px", height: "85px", objectFit: "cover" }} src={require("../Assest/StoreLogo.jpeg")} alt="Logo" />
                    </div>
                    <Menu
                        onClick={onClick}
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                    >
                        {renderMenuItems(items)}
                    </Menu>
                </Sider>
            )}
            <Layout>
                <MainHeader onClick={() => setSiderVisible(!siderVisible)} icon={true} />
                <div className="px-3">
                    <Routes>
                        <Route path='CategoryList' element={<CategoryList />} />
                        <Route path='ProductList' element={<ProductList />} />
                    </Routes>
                </div>
            </Layout>
        </Layout>
    );
};

export default YourComponent;
