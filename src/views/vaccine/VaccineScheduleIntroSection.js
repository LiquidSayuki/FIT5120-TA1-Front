import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';

const VaccineScheduleIntroSection = () => {
    return (
        <div>


            <Link to='/vaccineSchedule'>
                <Button>Vaccine Schedules</Button>
            </Link>

        </div>
    );
};

export default VaccineScheduleIntroSection;