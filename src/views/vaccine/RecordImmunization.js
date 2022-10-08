import React from 'react';
import { Row, Col, Typography } from 'antd';
import './RecordImmunization.css'


const { Title, Text } = Typography;

const RecordImmunization = () => {
    return (
        <div style={{ padding: "6%", height: '27rem', width: '100%', backgroundColor: "#FAFAFA" }}>

            <Row>

                <Col span={6}>
                    <div style={{ position: 'absolute', right: '15%', borderRadius: "50%", overflow: 'hidden' }}>
                        <img src="https://s1.imagehub.cc/images/2022/10/08/medical-gce6002e1e_1920.png" alt="medical-gce6002e1e_1920.png" style={{ height: '11rem', width: '11rem' }} />
                    </div>
                </Col>

                <Col span={6}>
                    <div style={{ position: 'absolute' }}>
                        <img src="https://s1.imagehub.cc/images/2022/10/08/doctor-ga6ccdb3fa_1920.jpg" alt="doctor-ga6ccdb3fa_1920.jpg" style={{ height: '20rem', width: 'auto', borderRadius: "50%" }} />
                    </div>
                </Col>

                <Col span={12}>
                    <div style={{ position: 'absolute', left: '15%', top: '4rem' }}>
                        <Title level={2}>Recording Immunisation</Title>
                        <Text type="secondary" style={{ position: 'absolute' }}>Note that you may need to notify vaccine provider to record the child vaccination into the Australian Immunization Register.</Text>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default RecordImmunization;