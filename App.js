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
  }

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
      lastNamename: texto,
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
        <ScrollView>
          <View>
            <Image
              source={{ uri: 'ruta de imagen' }}
              //style = 'Se crea el style'
              resizeMode="cover"
            />
            <Text>Mi Perfil de Usuario</Text>
            <Text>Mi Aplicación Demo de React</Text>

          </View>

          <View>
            <Text>Nombre:</Text>
            <TextInput 
              value={name}
              onChange={manejarCambioNombre}
              placeholder='Ingresa tu nombre'
              placeholderTextColor="#999"
            />


            <Text>Apellido:</Text>
            <TextInput 
              value={lastNamename}
              onChange={manejarCambioApellido}
              placeholder='Ingresa tu Apellido'
              placeholderTextColor="#999"
            />


            <Text>Email:</Text>
            <TextInput 
              value={email}
              onChange={manejarCambioEmail}
              placeholder='Ingresa tu Email'
              placeholderTextColor="#999"
            />


            <Text>Telefono:</Text>
            <TextInput 
              value={phone}
              onChange={manejarCambioTelefono}
              placeholder='Ingresa tu Telefono'
              placeholderTextColor="#999"
            />


            <Text>Descripcion:</Text>
            <TextInput 
              value={description}
              onChange={manejarCambioDescripcion}
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
}

export default App;
