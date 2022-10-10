import React, { useEffect } from 'react'
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import { Layout, Col, Row, Divider, Typography, Collapse } from 'antd';
import Quiz from './Quiz';
import './Outdoors.css'
import intl from "react-intl-universal";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;


const Outdoors = () => {

    // const [click, setClick] = useState(false);

    // // const handleClick = () => {
    // //     click
    // // }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Content style={{ padding: '0 50px' }}>
            <LocationIdentifier title={intl.get("outdoorTitle")} subtitle={intl.get("outdoorSubtitle")} />
            <div className="site-layout-content">
                <div className="site-layout-content">
                    <Row style={{ paddingTop: "30px" }}>
                        <Col span={3}></Col>
                        <Col span={18}>
                            <Paragraph>
                                <Title className='animate__animated animate__slideInDown'>Outdoor Activities</Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>Outdoor activities may vary in countries. Meantime, connecting to the outside world is essential, but also becoming one of most common infectious spreaded transmission.</blockquote>
                                <Divider />
                            </Paragraph>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: "0.5rem" }}>
                        <div style={{ justifyContent: 'center' }}>
                            {/* {click ? <Quiz /> : null} */}
                            <Quiz />
                        </div>

                    </div>

                </div>
            </div>
        </Content>
    );
};

export default Outdoors;