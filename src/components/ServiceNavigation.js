// Program Name: /components/ServiceNavigation.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-27
// Last Modified Date: 2024-06-14

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SideNavigation } from "@cloudscape-design/components";
import navigationLabels from '../labels/navigationLabels'; 

const ServiceNavigation = () => {
    const location = useLocation();
    let navigate = useNavigate();

    function onFollowHandler(event) {
        if (!event.detail.external) {
            event.preventDefault();
            navigate(event.detail.href);
        }
    }

    return (
        <SideNavigation
            activeHref={location.pathname}
            header={{href: "/", text: "メニュー"}}
            onFollow={onFollowHandler}
            items={[

                {type: "link", text: navigationLabels.Transcription_Proofreading.title, href: "/Transcription_Proofreading"},
                {type: "divider"},

                {type: "link", text: navigationLabels.Caption.title, href: "/Caption"},
                {type: "divider"},

                {type: "link", text: navigationLabels.VideoAnalysys.title, href: "/VideoAnalysys"},
                {type: "divider"},

                {type: "link", text: navigationLabels.Summarize.title, href: "/Summarize"},
                {type: "divider"},

                {type: "link", text: navigationLabels.Translate.title, href: "/Translate"},
                {type: "divider"},

                {type: "link", text: navigationLabels.AmazonPolly.title, href: "/AmazonPolly"},
                {type: "divider"},

                {type: "link", text: navigationLabels.DALL_E.title, href: "/DALL_E"},
                {type: "divider"},

                {type: "link", text: navigationLabels.PDFtoText_Summarize.title, href: "/PDFtoText_Summarize"},
                {type: "divider"},

{/*

                {type: "link", text: navigationLabels.Rekognition.title, href: "/Rekognition"},
                {type: "divider"},

                {type: "link", text: navigationLabels.EMC_HLS.title, href: "/EMC_HLS"},
                {type: "divider"},

                {type: "link", text: navigationLabels.EMC_mp3.title, href: "/EMC_mp3"},
                {type: "divider"},                

                {type: "link", text: navigationLabels.Multimodal_AI.title, href: "/Multimodal_AI"},
                {type: "divider"},

*/}
            ]}
        />
    );
};

export default ServiceNavigation;