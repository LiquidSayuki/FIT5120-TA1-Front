import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const IfVaccinationFree = () => {
    return (
        <div style={{ padding: "6%", height: '27rem', width: '100%' }}>
            <Row>
                <Col span={6}>
                    <div style={{ position: 'absolute' }}>
                        <img src="https://s1.imagehub.cc/images/2022/10/08/wallet-gcfa45ae6f_1280.png" alt="wallet-gcfa45ae6f_1280.png" style={{ height: '10rem', width: '10rem' }} />
                    </div>
                </Col>

                <Col span={6}>
                    <div style={{ position: 'absolute', marginTop: '15%', left: '-30%' }}>
                        <img src="https://s1.imagehub.cc/images/2022/10/08/nurse-gba277c155_1920.jpg" alt="nurse-gba277c155_1920.jpg" style={{ height: '18rem', width: '18rem' }} />
                    </div>
                </Col>

                <Col span={12} style={{ marginTop: '5%' }}>
                    <Title level={2} style={{ marginLeft: '15%' }}>Charge of Vaccinations</Title><br />
                    <Text style={{ marginLeft: '15%', color: 'cadetblue' }}>Vaccinations under National Immunisation Program are free!</Text><br /><br />
                    <Text style={{ marginLeft: '15%', color: 'cadetblue' }}>No need to pay for children's immunization!</Text>
                </Col>
            </Row>
        </div>
    );
};

export default IfVaccinationFree;