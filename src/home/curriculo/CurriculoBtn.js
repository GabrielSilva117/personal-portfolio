import React from 'react';
import { BiDownload } from "react-icons/bi";

const DownloadButton = () => {
    const buttonStyle = {
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        zIndex: 1000,
    };

    return (
        <div>
            <a style={buttonStyle} href={process.env.PUBLIC_URL + '/curriculo.pdf'} download="curriculo.pdf">
                <button class="btn btn-outline-secondary"><icon class="pr-2"><BiDownload /></icon>
                    Download Currículo
                </button>
            </a>
        </div>
    );
};

export default DownloadButton;