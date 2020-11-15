import React from "react";

async function getJson(response){

}




function TestFacebookNews({token}) {
    console.log("Moi page, je reçois ce token : " + token);
    return (<></>)
}

TestFacebookNews.getInitialProps = async (context) => {
    const clientId = "820522908723163";
    const clientSecret = "06154ead829de2b4c04b247a1e3b54f9";

    let token = null;

    let url = "https://graph.facebook.com/oauth/access_token?client_id={{clientID}}&client_secret={{clientSecret}}&grant_type=client_credentials";
    await fetch(url.replace("{{clientID}}",clientId).replace("{{clientSecret}}",clientSecret)).then(async (result)=>{
        await result.json().then((json) =>{
            token = json.access_token;
            fetch("https://graph.facebook.com/v9.0/946477982049924?access_token="+token).then(result=>result.json().then(json=>console.log(json)));
        })
    })

    return { token: token };
}


export default TestFacebookNews;