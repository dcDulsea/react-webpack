import React, { Component } from 'react';
import Input from '../presentational/Input';

export default class FormContainer extends Component{
  constructor(){
    super();
    this.state = {
      seo_title: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
  }
  render(){
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          tpye="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </form>
    )
  }
}