import React from 'react';
import { Layout } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";

const {Content} = Layout;

const title = "Vaccine"
const subtitle = "Subtitle of vaccine page"

const Vaccine = () => {
    return (
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <LocationIdentifier title={title} subtitle={subtitle}/>
            <div className="site-layout-content">
                Vaccine Content
            </div>
        </Content>
    );
};

export default Vaccine;