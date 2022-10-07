import React from 'react';
import { Row, Col, Typography } from 'antd';
import './RecordImmunization.css'


const { Title, Text } = Typography;

const RecordImmunization = () => {
    return (
        <div style={{ padding: "5%", height: '27rem', width: '100%', backgroundColor: "#FAFAFA" }}>

            <Row>
                <Col span={6}>
                    <div style={{ position: 'absolute' }}>
                        <img src="https://s1.imagehub.cc/images/2022/10/07/medical-gc044d0589_1920.jpg" alt="medical-gc044d0589_1920.jpg" style={{ height: '9rem', width: '9rem', borderRadius: "50%" }} />
                    </div>
                </Col>

                <Col span={6}>
                    <div style={{ position: 'absolute', top: '5rem', right: '15%', borderRadius: "50%", overflow: 'hidden' }}>
                        <img src="https://s1.imagehub.cc/images/2022/10/07/Report-to-the-Australian-Immunisation-register.jpg" alt="Report-to-the-Australian-Immunisation-register.jpg" style={{ height: '15rem', width: '15rem' }} />
                    </div>
                </Col>

                <Col span={12}>
                    <div style={{ position: 'absolute', left: '15%', top: '6rem' }}>
                        <Title level={2}>Recording Immunisation</Title>
                        <Text type="secondary" style={{ position: 'absolute' }}>Note that you may need to notify vaccine provider to record the child vaccination into the Australian Immunization Register.</Text>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default RecordImmunization;