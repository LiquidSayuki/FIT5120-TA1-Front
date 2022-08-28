import React from 'react';
import { Layout } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";

const { Content } = Layout;

const title = "Children Immunization"
const subtitle = "Vaccines schedules for children from ages 7 to ages 18"

const Ages7ToAges18 = () => {
    return (
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <LocationIdentifier title={title} subtitle={subtitle} />
            <div className="site-layout-content">
                Vaccine Content Test
            </div>
        </Content>
    );
};

export default Ages7ToAges18;