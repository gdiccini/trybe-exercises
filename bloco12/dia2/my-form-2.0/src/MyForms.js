import React, { Component } from 'react';
import './Forms.css'

class MyForms extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.alertRole = this.alertRole.bind(this);
    this.renderCurriculum = this.renderCurriculum.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      estado: 'Acre',
      houseType: '',
      resume: '',
      role: '',
      roleDescription: '',
      alertCount: 'on',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  resetState() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      estado: 'Acre',
      houseType: '',
      resume: '',
      role: '',
      roleDescription: '',
      display: false,
    })
  }

  alertRole() {
    const {alertCount} = this.state
    if(alertCount === 'on') {
      alert('Preencha com cuidado esta informação.');
      this.setState({
        alertCount: 'off',
      })
    }
  }

  renderCurriculum() {
    this.setState({
      display: true,
    })
  }

  createCurriculum() {
    const info = this.state;
    const infoArray = Object.entries(info);
    return infoArray.map((info, index) => <p key={ index }>{info[0].toUpperCase()}: {info[1]}</p>)
  }

  render() {
    const arrayOfStates = [ 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraiba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

    return(
      <div className="forms">
        <fieldset>
          <legend>Informações Pessoais</legend>
          <label>
            Nome:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Nome" maxLength="40" />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} placeholder="Email" maxLength="50" />
          </label>
          <label>
            CPF:
            <input type="text" name="cpf" onChange={this.handleChange} placeholder="Somente números" maxLength="11" />
          </label>
          <label>
            Endereço:
            <input type="text" name="address" onChange={this.handleChange} placeholder="Endereço" maxLength="200" />
          </label>
          <label>
            Cidade:
            <input type="text" name="city" onChange={this.handleChange} placeholder="Cidade" maxLength="28" />
          </label>
          <span>Estado</span>
          <select name="estado" onChange={this.handleChange}>

            {arrayOfStates.map((state, index) => <option key={ index } value={state}>{state}</option>)}
          </select>
          <div>
            <strong>Moradia</strong>
            <label>
              <input onChange={this.handleChange} name="houseType" type="radio" value="casa" />
              Casa
            </label>
            <label>
              <input onChange={this.handleChange} name="houseType" type="radio" value="apartamento" />
              Apartamento
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Currículo</legend>
          <p style={{'marginBottom': '0'}}>Resumo do currículo</p>
          <textarea name="resume" onChange={this.handleChange} maxLength="1000" required></textarea>
          <p style={{'marginBottom': '0'}}>Cargo</p>
          <textarea name="role" onMouseEnter={this.alertRole} onChange={this.handleChange} maxLength="40" required></textarea>
          <p style={{'marginBottom': '0'}}>Descrição do cargo</p>
          <textarea name="roleDescription" onChange={this.handleChange} maxLength="500" required></textarea>
        </fieldset>
        <button type="button" onClick={this.resetState}>Limpar</button>
        <button type="submit" onClick={this.renderCurriculum}>Enviar</button>
        <div>
          {(this.state.display) && this.createCurriculum()}
        </div>
      </div>
    )
  }
}

export default MyForms;