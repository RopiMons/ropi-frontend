import React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {RopiTextInput} from './ropi-inputs-form';
import img05 from "./../../public/images/dos_billet4.jpg";
import img1 from "./../../public/images/dos_billet3.jpg";
import img5 from "./../../public/images/dos_billet2.jpg";
import img10 from "./../../public/images/dos_billet1.jpg";
const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        flexShrink: 0,
        flexWrap: "nowrap"
        //borderColor: '#4C588D',
        //borderWidth: 2,
    },
    tabCell: {
        flexGrow: 2,
        width: 0,
        flexWrap: "wrap",
        marginLeft: 10,
        marginRight: 10,
        //borderColor: '#000000',
        alignSelf: 'strech',
        // borderWidth: 2,
        flexDirection: "column"
    },
    content: {
        flexGrow: 1,
        //borderWidth: 2,
        justifyContent: 'center'
    }
}

export const NewCommandeFormBootstrap = props => {

    let billets = [{value: 0.5, image: img05, name: 'quantite05'},{value: 1, image: img1, name: 'quantite1'},{value: 5, image: img5, name: 'quantite5'},{value: 10, image: img10, name: 'quantite10'}];

    let formNames = {};
    let validationSchema = {}
    billets.forEach(element=> {
        formNames = {...formNames, ...{[element.name]: 0}};
        validationSchema =  {...validationSchema, ... {[element.name] : Yup.number().integer("Le nombre doit-être entier").min(0, "Le nombre minimale de billet est 0")}}
    })

    return(
        <Formik
            initialValues={formNames}
            onSubmit={values => console.log(values)}
            validationSchema={Yup.object(validationSchema)}
        >

            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <>
                    <View style={styles.container}>
                        <View style={{...styles.tabCell, ...{flexGrow: 3}}}>
                            <Text>Image</Text>
                            { billets.map(element=> {
                                return(
                                    <View key={element.image} style={{...styles.content, ...{margin: 10}}}>
                                        <Image
                                            resizeMode={"contain"}
                                            style={{width: '100%', height: 100}}
                                            source={element.image}
                                        />
                                    </View>
                                )
                            })  }

                        </View>
                        <View style={styles.tabCell}>
                            <Text>Quantité</Text>
                            { Object.entries(formNames).map(element=>(
                                <View style={styles.content}>
                                    <RopiTextInput
                                        name={element[0]}
                                    />
                                </View>
                            ))}
                        </View>
                        <View style={styles.tabCell}>
                            <Text>Prix</Text>
                            {billets.map(element=>(
                                <View key={element.value} style={styles.content}>
                                    <Text>{element.value} €</Text>
                                </View>
                            ))}
                        </View>
                        <View style={styles.tabCell}>
                            <Text>Total</Text>
                            {billets.map(element=>(
                                <View style={styles.content}>
                                    <Text>{!isNaN(values[element.name]) && !errors[element.name] ? values[element.name] * element.value : 0} €</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </>
            )}

        </Formik>
    )
};
