import React, {useRef, useState} from 'react';
import {
    IonApp, 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonLabel,
    IonGrid, 
    IonItem, 
    IonInput, 
    IonCard, 
    IonRow, 
    IonCol, 
    IonIcon, 
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonAlert
} from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';


const TestComponent = () => {
    const heightInputRef = useRef(null);
    const weightInputRef = useRef(null);
    const [bmi, setBmi] = useState(null);
    const [error, setError] = useState(null);


    const calculateBMI = () => {
        const enteredHeight = heightInputRef.current?.value;
        const enteredWeight = weightInputRef.current?.value;
        var bmi = 0;
        
        if(!enteredHeight || !enteredWeight || +enteredHeight<0 ||+enteredWeight<0){
            setError('Please check the inputs');
            return;
        }

        bmi = enteredWeight/(enteredHeight * enteredHeight);
        setBmi(bmi);
    };

    const resetInputs = ()=>{
        heightInputRef.current.value = null;
        weightInputRef.current.value = null;
        setBmi(null);              
    } 

    const clearError = ()=>{
        setError(null);
    }

return (
    <>
    <IonAlert isOpen={!!error} message={error} buttons={[{text: 'Ok', handler: clearError}]}/>
      <IonApp>
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle> BMI calculator</IonTitle>              
            </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">
                                Your Height (m)
                            </IonLabel >
                            <IonInput ref={heightInputRef} type="number">                       
                            </IonInput>
                        </IonItem>                        
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                    <IonItem>
                            <IonLabel position="floating">
                                Your Weight (kg)
                            </IonLabel>
                            <IonInput ref={weightInputRef} type="number">                       
                            </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton onClick={calculateBMI}>
                            <IonIcon slot="start" icon={calculatorOutline}/>
                            Calculate
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton onClick={resetInputs}>
                            <IonIcon slot="start" icon={refreshOutline}/>
                            Reset
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                    { bmi && (
                        <IonCard>
                            <IonCardHeader>
                                <h2> BMI </h2>
                            </IonCardHeader>                            
                            <IonCardContent>
                                <h2> {bmi} </h2>
                            </IonCardContent>                            
                        </IonCard>)
                    }
                    </IonCol>
                </IonRow>
            </IonGrid>    
        </IonContent>
      </IonApp>
    </>
);
};


export default TestComponent;
