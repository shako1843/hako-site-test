import React from 'react';
import {View,Text, SafeAreaView, Platform, StatusBar, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {SelectList}from 'react-native-dropdown-select-list';


const Teste=()=>{
  const [selected, setSelected] = React.useState("");

  const data=[
    //  Moderação
    {value:"/ping",key:"Moderação - Ping do bot"},
    {value:"/rc [#canal] [nome]",key:"Moderação - Renomear o canal"},
    {value:"/dc [#chat]",key:"Moderação - Deletar o canal"},
    {value:"/anuncio [#chat] [(mencionar) True/False] [texto]",key:"Moderação - Faz um anúncio"},
    {value:"/vote [#chat] [texto]",key:"Moderação - Faz uma votação"},
    {value:"/clear [num/all (todas)]",key:"Moderação - Apaga as mensagens do canal"},
    {value:"/lock",key:"Moderação - Bloqueia o canal"},
    {value:"/unlock",key:"Moderação - Desbloqueia o canal"},
    {value:"/slow [0 (desativa) / num]",key:"Moderação - Ativa o modo lento"},
    {value:"/msg [#chat] [texto]",key:"Moderação - Manda uma mensagem no canal"},
    {value:"/pv [@membro] [texto]",key:"Moderação - Manda uma mensagem no PV"},
    {value:"/nick [@membro] [nome]",key:"Moderação - Mudar o nickname"},
    {value:"/kick [@membro]",key:"Moderação - Expulsar o membro"},
    {value:"/ban [@membro]",key:"Moderação - Banir o mambro"},

    //  Utilidade
    {value:"/sug [texto]",key:"Utilidade - Envia sua sugestão"},
    {value:"/bug [texto]",key:"Utilidade - Reporta um Bug"},
    {value:"/calc [conta (+, -, *, /)]",key:"Utilidade - Calculadora"},
    {value:"/si",key:"Utilidade - Informações do servidor"},
    {value:"/ui [@membro]",key:"Utilidade - Informações do usuário"},
    {value:"/ei [:emoji:]",key:"Utilidade - Informações do emoji"},
    {value:"/equipe",key:"Utilidade - Equipe de desenvolvimento"},

    //  Diversão
    {value:"/rgb [r] [g] [b]",key:"Diversão - Cor RGB"},
    {value:"/morse [input]",key:"Diversão - Traduz para o código morse"},
    {value:"/ppt [pedra/papel/tesoura]",key:"Diversão - Jokenpô/pedra, papel, tesoura"},
    {value:"/piada",key:"Diversão - Conta uma piada"},
    {value:"/hug [@membro]",key:"Diversão - Dá um abraço"},
    {value:"/kiss [@membro]",key:"Diversão - Dá um beijo"},
    {value:"/tapa [@membro]",key:"Diversão - Dá um tapa"},
    {value:"/ship [@membro 1] [@membro 2]",key:"Diversão - Shipar os membros"},
    {value:"/cc [cara/coroa]",key:"Diversão - Jogar cara ou coroa"},
    {value:"/img [@membro]",key:"Diversão - Mostra o avatar do membro"},
    {value:"/randint [num 1] [num 2]",key:"Diversão - Número aleatório entre os inputs"},

    //  Ticket
    {value:"/ticket [#chat]",key:"Ticket - Configura o ticket"},

    //  Comandos do Bot
    {value:"/help",key:"Comandos do Bot - Meus comandos"},
    {value:"/ping",key:"Comandos do Bot - Ping do bot"},
    {value:"/sug [texto]",key:"Comandos do Bot - Envia sua sugestão"},
    {value:"/equipe",key:"Comandos do Bot - Pudding"}
  ]

  return(
    <View style={{margin: 20}}>
      <SelectList setSelected={setSelected} data={data} placeholder={"Selecione um comando"}/>

      <Text>{"\n\n"}        - {selected}</Text>
    </View>
  )

}

// goTo=(route)=>{
//   this.props.navigation.navigate(route)
// }

export default Teste;