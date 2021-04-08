import React, { Component } from 'react';

import Iframe from 'react-iframe'




export default function FacebookLatestNews(props) {

    //let MessageURL = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F${process.env.FB_PAGEID}%2Fposts%2F${props.messageId}%2F&show_text=true&appId=${process.env.FB_APPID}"
    let MessageURL = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F${process.env.FB_PAGEID}%2Fposts%2F${props.messageId}%2F&show_text=true&appId=820522908723163"

    return (
        <>           
           
            {console.log("Mon appid : " + process.env.FB_APPID)}
            {console.log("Mon URL : " + MessageURL)}
            
            
            {/* https://www.npmjs.com/package/react-iframe */}
            {/* https://developers.facebook.com/docs/plugins/embedded-posts/ */}
            {/* Supprimer le module "Facebook container" de firefox car alors ça ne s'affiche pas */}
            {/* url={"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F" + process.env.FB_PAGEID + "%2Fposts%2F" + props.messageId +"%2F&show_text=true&appId=820522908723163"} */}
            {/* url={"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F" + process.env.FB_PAGEID + "%2Fposts%2F" + props.messageId +"%2F&show_text=true&appId=" + process.env.FB_APPID}  */}
            
            {/* url={"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F" + process.env.FB_PAGEID
                    + "%2Fposts%2F" + props.messageId
                    + "%2F&show_text=true&appId=820522908723163"} */}

            {/* Wierd! I don't manage to get the process.env.FB_APPID inside the URL. ?! */}
            {/* url={MessageURL}    */}
            <Iframe                 
                url={"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F" + process.env.FB_PAGEID
                    + "%2Fposts%2F" + props.messageId
                    + "%2F&show_text=true&appId=820522908723163"}                               
                width="100%"
                height="500px"
                scrolling="auto"
                id="facebookLatestNew"
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

