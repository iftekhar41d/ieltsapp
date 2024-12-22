import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel } from '@ionic/react';
import { Link } from 'react-router-dom';

const AboutMe = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>About Me</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonLabel>Hello, this is the About Me page!</IonLabel>
      <IonButton>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Go to Home</Link>
      </IonButton>
    </IonContent>
  </IonPage>
);

export default AboutMe;
