import React from 'react';
import TableauReport from 'tableau-react';

const filters = {
    Colors: ['Blue', 'Red'],
    Sizes: ['Small', 'Medium']
};

const options = {
    height: 800,
    width: 1200,
    hideTabs: false,
    hideToolbar: false
    // added interval support - an integer can be passed as milliseconds in the options object and refreshDataAsync() will refresh the data automatically on your preferred interval.
    // All other vizCreate options are supported here, too
    // They are listed here: https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#vizcreateoptions_record
};

const DataDisplay = () => {
    return (
        <TableauReport url="https://public.tableau.com/shared/XTCDMZ8KF?:display_count=y&:origin=viz_share_link"
                       token=""
                       options={options}
                       filters={filters}
        />
    );
};

export default DataDisplay;