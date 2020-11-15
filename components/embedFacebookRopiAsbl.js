import React, { Component} from 'react';

/*
 * Load facebook SDK JavaScript (must be included at beginning of corps).
 * https://developers.facebook.com/docs/plugins/embedded-posts/
 */
export default function LoadFacebookSDKjs(props) {

    return (
        <>
            <div id="fb-root">  </div>

            <script async defer crossOrigin="anonymous"
                    src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v9.0&appId=820522908723163&autoLogAppEvents=1"
                    nonce="L8Dfkhq9"/>


            {/*"820522908723163" is the app id to access Ropi data. TODO hide in server. replace below */}
        </>
    )
}

export function FacebookLatestNews(props) {
    return (
        <>
            <h3> essai Insertion News depuis facebook</h3>

            <script>
                FB.api(
                '/me',
                'GET',
                {},
                function (response) {
                // Insert your code here

            }
                );

            </script>

            <div className="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/"
                 data-show-text="true" data-width="">

                <blockquote cite="https://www.facebook.com/20531316728/posts/10154009990506729/"
                            className="fb-xfbml-parse-ignore">Publiée par <a
                    href="https://www.facebook.com/facebookapp/">Facebook
                    App</a> sur&nbsp;<a href="https://www.facebook.com/20531316728/posts/10154009990506729/">Jeudi 27
                    août
                    2015</a>
                </blockquote>

            </div>


        </>
    )
}


export function LikeRopiFacebookPage(props) {

    return (
        <>
            <h1>LikeRopiFacebookPage </h1>

            <FacebookProvider appId="908250469299060">
                <Like href="http://www.facebook.com" colorScheme="dark" showFaces share/>
            </FacebookProvider>


        </>
    )

}