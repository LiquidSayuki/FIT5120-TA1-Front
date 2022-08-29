// import React from 'react';
// import { Layout, Timeline, Card, Col, Row, Divider, Typography } from 'antd';
// import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
// import { list } from 'postcss';

// const { Content } = Layout;
// const { Title, Paragraph } = Typography;

// const title = "Children Immunization"
// const subtitle = "Vaccines schedules for children from ages 7 to ages 18"


// const data = [{
//     category: "Birth",
//     name: "Hepatitis B",
//     content: "vaccine content",
//     id: "01",
//     imgSrc: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
// }, {
//     category: "2 months",
//     name: "Diphtheia",
//     content: "vaccine content",
//     id: "02",
//     imgSrc: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
// },
// {
//     category: "2 months",
//     name: "Rotavirus",
//     content: "vaccine content",
//     id: "03",
//     imgSrc: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
// }]

// const Ages7ToAges18 = () => {
//     return (
//         <Content
//             style={{
//                 padding: '0 50px',
//             }}
//         >
//             <LocationIdentifier title={title} subtitle={subtitle} />
//             <div className="site-layout-content">
//                 {/* Vaccine Content Test */}
//                 <Row style={{ paddingTop: "30px" }}>
//                     <Col span={3}></Col>
//                     <Col span={18}>
//                         <Paragraph>
//                             <Title>Vaccine Schedules Ages 7 to Ages 18</Title>
//                             <Divider />
//                             <blockquote style={{ fontSize: "16px" }}>Free vaccinations are available to protect children against various diseases.</blockquote>
//                             <Divider />
//                         </Paragraph>
//                     </Col>
//                 </Row>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: "30px" }}>
//                     <div className='vaccinations' style={{ justifyContent: 'center' }}>
//                         <div className='vaccinesData'>
//                             {data.map((vaccine, index) => {

//                                 // const listCategory = [];
//                                 // if (!vaccine.category in listCategory) {
//                                 //     listCategory.append(vaccine.category)
//                                 //     // listCategory(vaccine.category);
//                                 //     console.log(listCategory)


//                                 return (
//                                     <div className='vaccineData' key={index} style={{ paddingTop: "40px" }}>
//                                         <h2>{vaccine.category}</h2>
//                                         <Card
//                                             title={vaccine.name}
//                                             extra={<a href="#">More</a>}
//                                             style={{
//                                                 width: 300,
//                                             }}>
//                                             <p>{vaccine.content}</p>
//                                             {/* <img
//                                             width={272}
//                                             alt="logo"
//                                             src={vaccine.imgSrc}
//                                         /> */}
//                                         </Card>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                     <div className="timelines" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                         <Timeline>
//                             <Timeline.Item>Birth</Timeline.Item>
//                             <Timeline.Item>2 months</Timeline.Item>
//                             <Timeline.Item>4 months</Timeline.Item>
//                             <Timeline.Item>6 months</Timeline.Item>
//                             <Timeline.Item>12 months</Timeline.Item>
//                             <Timeline.Item>18 months</Timeline.Item>
//                             <Timeline.Item>19-23 months</Timeline.Item>
//                             <Timeline.Item>2-3 years</Timeline.Item>
//                             <Timeline.Item>4-6 years</Timeline.Item>
//                         </Timeline>
//                     </div>
//                 </div>
//             </div>
//         </Content >
//     );
// };


// export default Ages7ToAges18;