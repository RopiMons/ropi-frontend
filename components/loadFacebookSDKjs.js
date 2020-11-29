import React, { Component } from 'react';

import Iframe from 'react-iframe'


export default function FacebookLatestNews(props) {
    return (
        <>
           
            {/* https://www.npmjs.com/package/react-iframe */}
            {/* https://developers.facebook.com/docs/plugins/embedded-posts/ */}
            {/* Supprimer le module Facebook container de firefox car alors ça ne s'affiche pas */}
            <Iframe 
                /* url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F946477982049924%2Fposts%2F3830091287021898%2F&show_text=true&width=552&appId=820522908723163&height=489" */
                url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F946477982049924%2Fposts%2F3830091287021898%2F&show_text=true&appId=820522908723163"
                width="500px"
                height="600px" 
                scrolling="auto"
                id="facebookLatestNEw"
                className="myClassname"
                display="initial"
                position="relative"
            />
            
           
        </>
    )
}

export function LikeRopiFacebookPage(props) {

    return (
        <>
            <h1>LikeRopiFacebookPage </h1>

            <FacebookProvider appId="908250469299060">
                <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
            </FacebookProvider>


        </>
    )

}

