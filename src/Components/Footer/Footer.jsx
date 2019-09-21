import React from 'react';
import * as Version from '../../Version'

const Footer = () => {
    return (
        <footer className="bg-navy bottom-0 w-100 pv4 ph3 ph5-m ph6-l mid-gray">
            <small className="f6 db near-white fl">Made by Mar ♡</small>
            <small className="f6 db near-white fr">{Version.VersionTag}</small>
        </footer>);
};

export default Footer;

