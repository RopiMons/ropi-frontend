import React from "react";
import Paragraphe from "../../components/paragraphe";
import ApiCaller from "../../components/services/ApiCaller";
import Error from "next/error";
import PropTypes from 'prop-types';


export async function getStaticProps({params}) {

    let status = null, isOk = null, data = null;
    await ApiCaller.getPage(params.slug).then(json => {
            status = json.status;
        isOk = 200 === status;
        if (isOk) {
            data = json.json
        }
        }
    );

    return {
        props : {
            status: status,
            isOk: isOk,
            page: data
        },
        revalidate: 15*60
    }

}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {slug: '7'}},
            {params: {slug: '8'}}
        ],
        fallback: true
    }
}

export default function CMSPage(props){

    if(!props.isOk || !props.page || !props.page.paragraphes || props.page.paragraphes.length < 1){
        return(<Error statusCode={props.status} />)
    }

    return(
        <>
            {props.page.paragraphes.map((paragraphe,key)=>{
                return(
                    <Paragraphe key={key} titre={paragraphe.titre} anchor={paragraphe.id}>
                        {paragraphe.text}
                    </Paragraphe>
                )
            })}
        </>
    )

}

CMSPage.propTypes = {
    isOk: PropTypes.bool.isRequired,
    status: PropTypes.number.isRequired,
    page: PropTypes.shape({
        titreMenu: PropTypes.string.isRequired,
        paragraphes: PropTypes.arrayOf(PropTypes.shape({
            titre: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }))
    })
}
