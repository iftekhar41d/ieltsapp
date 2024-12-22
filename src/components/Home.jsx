import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

const Home = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home Title</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      {/* Use IonLabel properly or just plain text */}
      <IonLabel>Hello, this is the Home page!</IonLabel>
      
      {/* Wrap the Link inside IonButton properly */}
      <IonButton>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>Go to About Me</Link>
      </IonButton>
    </IonContent>
  </IonPage>
);

export default Home;
