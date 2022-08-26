import React from 'react';
import { Layout } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";

const {Content} = Layout;

const title = "Disease"
const subtitle = "Subtitle of disease page"

const Disease = () => {
    return (
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <LocationIdentifier title={title} subtitle={subtitle}/>
            <div className="site-layout-content">
                Disease Content
            </div>
        </Content>
    );
};

export default Disease;