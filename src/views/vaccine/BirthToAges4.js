import React, { useEffect, useState } from 'react';
import { Layout, Timeline, Card, Col, Row, Divider, Typography, Checkbox } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
import './BirthToAges4.css'
import axios from "axios";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const title = "Children Immunization"
const subtitle = "Vaccines schedules for children from birth to ages 4"

const BirthToAges6 = () => {
    const [vaccines, getVaccines] = useState([]);

    useEffect(() => {
        getAllVaccines();
    }, []);

    const getAllVaccines = () => {
        axios.get('https://edg53vnmmh.execute-api.us-east-1.amazonaws.com/dev/vaccines'
        )
            .then((response) => {
                const allVaccines = response.data.Items;
                getVaccines(allVaccines);
                console.log(response.data);
            })
            .catch(error => console.error('Error:$(error)'));
    }

    return (
        <div>
            <Content style={{ padding: '0 50px' }}>
                <LocationIdentifier title={title} subtitle={subtitle} />
                <div className="site-layout-content">
                    <Row style={{ paddingTop: "30px" }}>
                        <Col span={3}></Col>
                        <Col span={18}>
                            <Paragraph>
                                <Title>Vaccine Schedules Birth to Ages 4</Title>
                                <Divider />
                                <blockquote style={{ fontSize: "16px" }}>Free vaccinations and recommended vaccine schedules are available to protect children against various diseases.</blockquote>
                                <Divider />
                            </Paragraph>
                        </Col>
                    </Row>


                    <div className='vaccineContent' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: "0.5rem" }}>
                        <div className='vaccinations' style={{ justifyContent: 'center' }}>

                            {/* vaccine data for children once birth */}
                            <div style={{ paddingTop: "30px" }}>
                                <h2>Birth</h2>
                                <div className='grid-container'>
                                    {vaccines.map(item => item.childrenAge === 'Birth' ? //<--HERE  
                                        <Card
                                            key={item.id}
                                            title={item.name}
                                            // extra={<a href="#">More</a>}
                                            style={{
                                                width: 300,
                                            }}>
                                            <p>{item.content}</p>
                                            {/* <Checkbox onChange={onChange}>Inoculated</Checkbox> */}
                                        </Card>
                                        : null)}
                                </div>
                            </div>

                            {/* vaccine data for children at 2 months */}
                            <div style={{ paddingTop: "30px" }}>
                                <h2>2 months</h2>
                                <div className='grid-container'>
                                    {vaccines.map(item => item.childrenAge === '2 months' ? //<--HERE  
                                        <Card
                                            key={item.id}
                                            title={item.name}
                                            // extra={<a href="#">More</a>}
                                            style={{
                                                width: 300,
                                            }}>
                                            <p>{item.content}</p>
                                            {/* <Checkbox onChange={onChange}>Inoculated</Checkbox> */}
                                        </Card>
                                        : null)}
                                </div>
                            </div>

                            {/* vaccine data for children at 4 months */}
                            <div style={{ paddingTop: "30px" }}>
                                <h2>4 months</h2>
                                <div className='grid-container'>
                                    {vaccines.map(item => item.childrenAge === '4 months' ? //<--HERE  
                                        <Card
                                            key={item.id}
                                            title={item.name}
                                            // extra={<a href="#">More</a>}
                                            style={{
                                                width: 300,
                                            }}>
                                            <p>{item.content}</p>
                                            {/* <Checkbox onChange={onChange}>Inoculated</Checkbox> */}
                                        </Card>
                                        : null)}
                                </div>
                            </div>

                            {/* vaccine data for children at 6 months */}
                            <div style={{ paddingTop: "30px" }}>
                                <h2>6 months</h2>
                                <div className='grid-container'>
                                    {vaccines.map(item => item.childrenAge === '6 months' ? //<--HERE  
                                        <Card
                                            key={item.id}
                                            title={item.name}
                                            // extra={<a href="#">More</a>}
                                            style={{
                                                width: 300,
                                            }}>
                                            <p>{item.content}</p>
                                            {/* <Checkbox onChange={onChange}>Inoculated</Checkbox> */}
                                        </Card>
                                        : null)}
                                </div>
                            </div>

                            {/* vaccine data for children at 12 months */}
                            <div style={{ paddingTop: "30px" }}>
                                <h2>12 months</h2>
                                <div className='grid-container'>
                                    {vaccines.map(item => item.childrenAge === '12 months' ? //<--HERE  
                                        <Card
                                            key={item.id}
                                            title={item.name}
                                            // extra={<a href="#">More</a>}
                                            style={{
                                                width: 300,
                                            }}>
                                            <p>{item.content}</p>
                                            {/* <Checkbox onChange={onChange}>Inoculated</Checkbox> */}
                                        </Card>
                                        : null)}
                                </div>
                            </div>

                            {/* vaccine data for children at 18 months */}
                            <div style={{ paddingTop: "30px" }}>
                                <h2>18 months</h2>
                                <div className='grid-container'>
                                    {vaccines.map(item => item.childrenAge === '18 months' ? //<--HERE  
                                        <Card
                                            key={item.id}
                                            title={item.name}
                                            // extra={<a href="#">More</a>}
                                            style={{
                                                width: 300,
                                            }}>
                                            <p>{item.content}</p>
                                            {/* <Checkbox onChange={onChange}>Inoculated</Checkbox> */}
                                        </Card>
                                        : null)}
                                </div>
                            </div>

                            {/* vaccine data for children at 4 years */}
                            <div style={{ paddingTop: "30px" }}>
                                <h2>4 years</h2>
                                <div className='grid-container'>
                                    {vaccines.map(item => item.childrenAge === '4 years' ? //<--HERE  
                                        <Card
                                            key={item.id}
                                            title={item.name}
                                            // extra={<a href="#">More</a>}
                                            style={{
                                                width: 300,
                                            }}>
                                            <p>{item.content}</p>
                                            {/* <Checkbox onChange={onChange}>Inoculated</Checkbox> */}
                                        </Card>
                                        : null)}
                                </div>
                            </div>

                        </div>


                        <div className="timelines" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Timeline>
                                <Timeline.Item>Birth</Timeline.Item>
                                <Timeline.Item>2 months</Timeline.Item>
                                <Timeline.Item>4 months</Timeline.Item>
                                <Timeline.Item>6 months</Timeline.Item>
                                <Timeline.Item>12 months</Timeline.Item>
                                <Timeline.Item>18 months</Timeline.Item>
                                <Timeline.Item>4 years</Timeline.Item>
                            </Timeline>
                        </div>
                    </div>
                </div>
            </Content >
        </div>

    );
};

export default BirthToAges6;