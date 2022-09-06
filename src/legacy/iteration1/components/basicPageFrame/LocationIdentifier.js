import React from 'react';
import { PageHeader } from 'antd';
import {withRouter} from "react-router-dom";

const LocationIdentifier = (props) => {

    const {title, subtitle} = props;

    const onBack = (e) => {
      props.history.goBack();
    }

    return (
        <PageHeader
            onBack={onBack}
            className="site-page-header"
            title={title}
            subTitle={subtitle}
        />
    );
};

export default withRouter(LocationIdentifier);