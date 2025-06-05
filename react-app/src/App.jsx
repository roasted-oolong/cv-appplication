import React, { useState } from 'react';
import DisplayCV from './components/DisplayCV';
import EducationExperience from './components/EducationExperience'
import GeneralInfo from './components/GeneralInfo';
import PracticalExperience from './components/PracticalExperience'

function App() {
    const [general, setGeneral] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [practical, setPractical] = useState({
        company: '',
        position: '',
        responsibilities: '',
        from: '',
        until: ''
    });

    const [education, setEducation] = ({
        school: '',
        major: '',
        date: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => setSubmitted(true);
    const handleEdit = () => setSubmitted(false);

    return (
        <div className="CV-App">
            <h1>CV Generator</h1>

            <GeneralInfo info={GeneralInfo} setInfo={setGeneralInfo} />
            <Education info={education} setEducation={setEducation} />
            <PracticalExperience info={practical} setPractical={setPractical} />
        </div>
    )
}