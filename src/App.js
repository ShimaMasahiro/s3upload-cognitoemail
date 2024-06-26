// Program Name: App.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-21
// Last Modified Date: 2024-06-26

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import VideoAnalysys from './VideoAnalysys';
import Transcription_Proofreading from './Transcription_Proofreading';
import Summarize from './Summarize';
import Translate from './Translate';
import Caption from './Caption';
import EMC_HLS from './EMC_HLS';
import EMC_mp3 from './EMC_mp3';
import PDFtoText_Summarize from './PDFtoText_Summarize';
import AmazonPolly from './AmazonPolly';
import DALL_E from './DALL_E';
import Rekognition from './Rekognition';
import Multimodal_AI from './Multimodal_AI';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Transcription_Proofreading />} />

            <Route path="/VideoAnalysys" element={<VideoAnalysys />} />

            <Route path="/Transcription_Proofreading" element={<Transcription_Proofreading />} />
            <Route path="/Summarize" element={<Summarize />} />
            <Route path="/Translate" element={<Translate />} />
            <Route path="/Caption" element={<Caption />} />
            <Route path="/EMC_HLS" element={<EMC_HLS />} />
            <Route path="/EMC_mp3" element={<EMC_mp3 />} />
            <Route path="/PDFtoText_Summarize" element={<PDFtoText_Summarize />} />
            <Route path="/AmazonPolly" element={<AmazonPolly />} />
            <Route path="/DALL_E" element={<DALL_E />} />
            <Route path="/Rekognition" element={<Rekognition />} />
            <Route path="/Multimodal_AI" element={<Multimodal_AI />} />
        </Routes>
    );
}

export default App;