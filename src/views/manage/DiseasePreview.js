import React from 'react';
import {Card} from "antd";

const html = "<h1>This is the Title of the disease</h1><p>Disease description</p><p><img src=\"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png\" alt=\"\" data-href=\"\" style=\"\"/></p><p><br></p><h1>This is disease symptom</h1><ul><li>01 </li><li>02</li><li>03</li><li>04</li></ul><h1>This is disease cure</h1><ul><li>01</li><li>02</li><li>03</li><li>04</li></ul><h1>This is disease prevention</h1><ul><li>01</li><li>02</li><li>03</li><li>04</li></ul><p><br></p><p><br></p>"

const DiseasePreview = () => {
    return (
        <Card>
            {html}
        </Card>
    );
};

export default DiseasePreview;