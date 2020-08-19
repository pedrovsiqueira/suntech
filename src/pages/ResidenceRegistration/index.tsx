import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { api, googleApi } from '../../services/api';
import { Container } from './styles';
import Nav from '../../components/Navbar';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

interface inputValuesDTO {
  cep: string;
  residentes: number;
  numero: number;
}

const ResidenceRegistration: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: inputValuesDTO) => {
    const { cep, numero, residentes } = data;
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        cep: Yup.string().min(9, 'Mínimo 8 digitos'),
        residentes: Yup.string().required('Residentes obrigatório'),
        numero: Yup.string().required('Número obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const formattedCep = cep.replace('-', '');

      const googleResponse = await googleApi(formattedCep);

      const {
        lat: latitude,
        lng: longitude,
      } = googleResponse.data.results[0].geometry.location;

      const newResidence = {
        cep: formattedCep,
        numero: Number(numero),
        residentes: Number(residentes),
        latitude,
        longitude,
      };

      await api.post('residences', newResidence);

      history.push('/');

      addToast({
        type: 'success',
        description: 'Residência criada com sucesso',
        title: 'Sucesso na criação',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      console.log(err);
      window.scrollTo(0, 0);
      addToast({
        type: 'error',
        description:
          'Ocorreu um erro ao cadastrar o residência, verifique o CEP',
        title: 'Erro no servidor',
      });
    }
  }, [history, addToast]);

  return (
    <>
      <Nav />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            mask="99999-999"
            label="cep"
            type="text"
            placeholder="cep"
            name="cep"
          />

          <Input
            label="numero"
            type="number"
            placeholder="numero"
            name="numero"
          />
          <Input
            label="residentes"
            type="number"
            placeholder="residentes"
            name="residentes"
          />
          <Button>inserir</Button>
        </Form>
      </Container>
    </>

  );
};

export default ResidenceRegistration;
