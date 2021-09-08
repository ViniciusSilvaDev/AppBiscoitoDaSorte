import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  } from 'react-native';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/img/biscoito.png'),
      fundo: require('./src/img/home.png'),
      frasebtn:'Quebrar Biscoito',
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.',
      'A coragem não é ausência do medo; é a persistência apesar do medo.',
      'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
      'Uma auto-imagem forte e positiva é a melhor preparação possível para o sucesso.',
      'Creia em si, mas não duvide sempre dos outros.',
      'Insista, persista e nunca desista',
      'As crises não afastam os amigos. Apenas selecionam',
      'Faça valer a pena, as oportunidades não voltam',
      'O homem superior atribui a culpa a si próprio; o homem comum, aos outros.',
      'O homem não morre quando deixa de viver, mas sim quando deixa de amar.',
      'No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim.',
      'Hoje são dias de guerra. Amanhã serão de glória.',
      'Tudo é possível. O impossível apenas demora mais...',
      'Não é com desculpas que irá atingir os seus objetivos!',
      'Seu maior medo também pode ser sua maior motivação',
      'A vida é curta demais para deixarmos nossos sonhos adormecidos.',
      'Que a minha coragem seja sempre mais forte do que a tentação de parar e desistir.'
    ];

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: ' " ' + this.frases[numeroAleatorio] + ' " ',
      img: require('./src/img/biscoitoAberto.png'),
      frasebtn:'Nova frase',
    });
  
  }


  render(){
    return(
      <View style={styles.container} > 
        <ImageBackground
        source={this.state.fundo}
        style={styles.fundo}      
        >   

        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>  {this.state.frasebtn}</Text>
          </View>
        </TouchableOpacity>  

        </ImageBackground>
      </View>    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fundo:{
    flex:1,
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    fontWeight:'bold',
    color: '#000',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    marginTop:-15,
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor:'#dd7b22',
    borderRadius: 25 
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },

});

export default App;
