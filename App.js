import { StyleSheet, Text, View, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

export default function App() {
  // Definir los datos del formulario
  const {control, handleSubmit, formState:{errors}} = useForm ({
    defaultValues:{
      name:'',
      email:'',
      password:'',
      salary:'',
      age:'',
      date:''
    }
  })
  // Metodo para capturar los datos - onsubmit
  const onSubmit = data => console.log(data)
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[A-Za-zÑñáéóúí ]+$/i, // validar que solo sean letras y espacios
          maxLength:30,
          minLength:5
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.input}
            placeholder='Nombre completo'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            
          />
        )}
        name='name'  // Valor a validar
      />
      {errors.name?.type == "required" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>El nombre es obligatorio</Text>}
      {errors.name?.type == "pattern" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>El nombre solo debe de tener letras y espacios</Text>}
      {errors.name?.type == "maxLength" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>El nombre no puede ser mayor a 30 caracteres</Text>}
      {errors.name?.type == "minLength" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>El nombre no puede ser menor a 5 caracteres</Text>}


      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, // validar que solo sean letras y espacios
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.input}
            placeholder='Email'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='email'  // Valor a validar
      />
      {errors.email?.type == "required" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>El email es obligatorio</Text>}
      {errors.email?.type == "pattern" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>Ingrese un correo valido</Text>}

      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[0-9]+$/i, // validar que solo sean letras y espacios
          max:100000000,
          min:2000000
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.input}
            placeholder='Salario'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='salary'  // Valor a validar
      />
      {errors.salary?.type == "required" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>El salario es obligatorio</Text>}
      {errors.salary?.type == "pattern" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>El salario solo debe tener numeros</Text>}
      {errors.salary?.type == "max" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>El salario no puede ser mayor a 100000000</Text>}
      {errors.salary?.type == "min" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>El salario no puede ser menor a 2000000</Text>}

      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[0-9]+$/i, // validar que solo sean letras y espacios
          max:35,
          min:18
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.input}
            placeholder='Edad'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='age'  // Valor a validar
      />
      {errors.age?.type == "required" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>La edad es obligatoria</Text>}
      {errors.age?.type == "pattern" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>La edad solo debe tener numeros</Text>}
      {errors.age?.type == "max" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>La edad debe estar entre 18 y 35</Text>}
      {errors.age?.type == "min" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>La edad debe estar entre 18 y 35</Text>}

      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/, // validar que solo sean letras y espacios
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            secureTextEntry={true}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='password'  // Valor a validar
      />
      {errors.password?.type == "required" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>La contraseña es obligatoria</Text>}
      {errors.password?.type == "pattern" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>La contraseña debe cumplir con los requisitos</Text>}

      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, // validar que solo sean letras y espacios
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.input}
            placeholder='Fecha dd/mm/aa'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='date'  // Valor a validar
      />
      {errors.date?.type == "required" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>La fechaa es obligatoria</Text>}
      {errors.date?.type == "pattern" && <Text style={{color:'red',marginBottom:5,marginTop:-5}}>La fecha debe ser dd/mm/aa o dd-mm-aa</Text>}

      <TouchableOpacity
       style={{backgroundColor:'green',padding:10,borderRadius:10}}
       onPress={handleSubmit(onSubmit)}>
        <Text style={{color:'white'}}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    padding:10,
    borderWidth:1,
    borderColor:'green',
    textAlign:'center',
    borderRadius:10,
    color:'black',
    marginBottom:5
  }
});
