// import React from 'react';
// import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";
// // import React, { useEffect, useState } from 'react';
// import { Col, Layout, Row, List, Button, Typography, Divider } from 'antd';
// // import axios from "axios";

// const { Content } = Layout;
// const { Title, Paragraph } = Typography;

// const title = "Children Immunization"
// const subtitle = "Vaccines for children from birth to ages 6"

// const BirthToAges6 = () => {
//     // return (
//     //     <div>
//     //         This is one vaccine
//     //         <LocationIdentifier title={title} subtitle={subtitle} />
//     //     </div>
//     // );

//     return (
//         <Content
//             style={{
//                 padding: '0 50px',
//             }}
//         >
//             <LocationIdentifier title={title} subtitle={subtitle} />
//             <div className="site-layout-content">
//                 Vaccine Content
//             </div>
//         </Content>
//     );
// };

// export default BirthToAges6;


import React from 'react';
import { Layout } from 'antd';
import LocationIdentifier from "../../components/basicPageFrame/LocationIdentifier";

const { Content } = Layout;

const title = "Vaccine"
const subtitle = "Subtitle of vaccine page"

const BirthToAges6 = () => {
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

export default BirthToAges6;