import React, { FC } from "react";
import { PageFrame } from "../components/page-frame";
import { PageWrapper } from "../components/page-wrapper";
import { Computer, RecordPlayer } from "../constants/siteConstants";
import { Link } from "gatsby";
import styled from "styled-components";

const Credit: FC = () => {
    return (
        <PageWrapper>
            <Link to='/'>Go Home</Link>
            <div>
                Computer ASCII Art Sourced From&nbsp;
                <a href={ Computer.credits }>asciiart.website</a>
            </div>
            <div>
                ASCII Record Player Sourced from&nbsp;
                <a href={ RecordPlayer.credits }>ascii.co.uk</a>
            </div>
        </PageWrapper>
    );
};

export default Credit;
