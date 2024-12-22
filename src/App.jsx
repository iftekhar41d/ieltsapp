import React from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home.jsx' // Import the Home component
import AboutMe from './components/AboutMe'; // Import the AboutMe component
import TestComponent from './components/TestComponent.jsx'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();
const App = () => (
<IonApp>
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/" component={Home} >
        {/*<Home /> */}
        <TestComponent />
      </Route>
      <Route exact path="/about" component={AboutMe} >
      </Route>
      <Route exact path="/test" component={TestComponent} >
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
);

export default App;
