import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

class App extends Component {
  //Hereda de la clase componente

  constructor(props) {
    //Llamando el construrctor padre y trayendo los props
    super(props);

    this.state = [
      //Configurar los campos
      (name = ''),
      (lastName = ''),
      (email = ''),
      (phone = ''),
      (description = ''),

      //configurar campos de la clase padre
      (showPerfil = false),
      (approveMesagge = 'Perfil creado con Exito'),
    ];
  };

  manejarCambioNombre = texto => {
    //Metodo para cambiar Nombre
    this.setState({
      name: texto,
      showPerfil: false,
      approveMesagge: 'Información Actualizada',
    });
  };

  manejarCambioApellido = texto => {
    //Metodo para cambiar Apellido
    this.setState({
      lastName: texto,
      showPerfil: false,
      approveMesagge: 'Información Actualizada',
    });
  };

  manejarCambioEmail = texto => {
    //Metodo para cambiar Email
    this.setState({
      email: texto,
      showPerfil: false,
      approveMesagge: 'Información Actualizada',
    });
  };

  manejarCambioTelefono = texto => {
    //Metodo para cambiar Telefono
    this.setState({
      phone: texto,
      showPerfil: false,
      approveMesagge: 'Información Actualizada',
    });
  };

  manejarCambioDescripcion = texto => {
    //Metodo para cambiar Descripcion
    this.setState({
      description: texto,
      showPerfil: false,
      approveMesagge: 'Información Actualizada',
    });
  };

  limpiarFormulario = () => {
    //Metodo limpiar campos
    this.setState({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      description: '',
      showPerfil: false,
      approveMesagge: 'Limpiar campos',
    });

    Alert.alert(
      'Formulario Limpiando', //Titulo de la Alerta
      'Todos los campos han sido borrados',
      [{ text: 'OK' }],
    );
  };

  render() {
    //Metodo de renderizar
    const {
      name,
      lastName,
      email,
      phone,
      description,
      showPerfil,
      approveMesagge,
    } = this.state;

    return (
      <>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png' }}
              style = {styles.imagen}
              resizeMode="cover"
            />
            <Text>Mi Perfil de Usuario</Text>
            <Text>Mi Aplicación Demo de React</Text>

          </View>

          <View>
            <Text style={styles.titulo}>Nombre:</Text>
            <TextInput 
              value={name}
              onChangeText={this.manejarCambioNombre}
              placeholder='Ingresa tu nombre'
              placeholderTextColor="#999"
            />


            <Text style={styles.titulo}>Apellido:</Text>
            <TextInput 
              value={lastName}
              onChangeText={this.manejarCambioApellido}
              placeholder='Ingresa tu Apellido'
              placeholderTextColor="#999"
            />


            <Text style={styles.titulo}>Email:</Text>
            <TextInput 
              value={email}
              onChangeText={this.manejarCambioEmail}
              placeholder='Ingresa tu Email'
              placeholderTextColor="#999"
            />


            <Text style={styles.titulo}>Telefono:</Text>
            <TextInput 
              value={phone}
              onChangeText={this.manejarCambioTelefono}
              placeholder='Ingresa tu Telefono'
              placeholderTextColor="#999"
            />


            <Text style={styles.titulo}>Descripcion:</Text>
            <TextInput 
              value={description}
              onChangeText={this.manejarCambioDescripcion}
              placeholder='Ingresa tu Descripción'
              placeholderTextColor="#999"
            />
          </View>

          <View>
            <Button
              title='Guardar Perfil'
              //onPress={}
            />

            <Button
              title='Limpiar Campos'
              onPress={this.limpiarFormulario}
            />
          </View>
          
        </ScrollView>
      </>
    );
  }
};//Clase app

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f5f5'
  },

  header:{
    backgroundColor:'#3143abff',
    alignItems:'center',
    marginBottom:20,
    padding:30
  },

  titulo:{
    alignItems:'center',
    marginBottom:5,
    padding:15
  },

  imagen:{
    width:80,
    height:80,
    borderRadius:30,
    marginBottom:15,
    borderWidth:4,
    borderColor:'#fff',
  },

});



export default App;
