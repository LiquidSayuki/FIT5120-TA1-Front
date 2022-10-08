import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const WhyNeedVaccinated = () => {
    return (
        <div style={{ padding: "6%", height: '27rem', width: '100%', position: 'relative' }}>
            <Row>
                <Col span={12}>
                    <div style={{ position: 'absolute' }}>
                        <img src="https://s1.imagehub.cc/images/2022/10/08/vaccine-agenda.webp" alt="vaccine-agenda.webp" style={{ height: '24rem', width: '24rem' }} />
                    </div>
                </Col>

                <Col span={12}>
                    <div style={{ position: 'absolute' }}>
                        <Title level={2} style={{ marginTop: '10%' }}>Why Child Needs to be Vaccinated ?</Title>
                        <Text type="secondary" style={{ position: 'absolute', marginTop: '10%' }}>Passive immunity occurs when antibodies are transferred from mother to baby during pregnancy. The level of antibody protection for the baby can be low and wears off quickly. This puts them at risk of diseases that can be prevented with vaccination.
                        </Text>
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default WhyNeedVaccinated;