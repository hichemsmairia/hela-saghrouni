import React from "react";
import ChatBot from 'react-simple-chatbot';
class Chatbot extends React.Component {
  render() {
    return (

      <ChatBot floating={true}
      headerTitle="Bot intelligent de Tfarrej-Time "
      speechSynthesis={{ enable: true, lang: 'fr' }}
      steps={[
      {
        id: '1',
        message: 'Quelle est votre nom ?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Salut {previousValue}, je suis ici a votre service !',
        trigger:'4' ,
      },
        {
          id: '4',
          message: 'Vous trouvez des difficultes au : ?',
          trigger: '5',
        },
        {
          id: '5',
          options: [
            { value: 1, label: 'Je ne sais pas comment utiliser le site ', trigger: '6' },
            { value: 2, label: 'Probleme de connection ', trigger: '7' },
            { value: 3, label: 'Contacter l equipe de Tfarrej_Time ', trigger: '8' },
          ],
        },
        {
          id: '6',
          message: 'pas de panique, nous allons vous aider à utiliser ce site comme un pro le lien ci-dessus vous conduira vers une documentation complète bla bla bla',
          trigger: '10',
        },
        {
          id: '10',
          options: [
            { value: 1, label: 'Probleme resolue  ', trigger: '12' },
            { value: 2, label: 'le probleme persiste :( ', trigger: '5' },

          ],
        },
        {
          id: '7',
          message: 'Commencez par verifier vos credentiales , sinn envoyez-nous un email ',
          trigger: '10',
        },
        {
          id: '12',
          message: 'Toujours a votre service ',
          trigger: '5',
        },
        {
          id: '8' ,
          message :'Notre adresse email :  tfarrej_time_2020@gmail.com' ,
          trigger : '12' ,
        }
      ]} />

      )
  }
}



      export default Chatbot ; 