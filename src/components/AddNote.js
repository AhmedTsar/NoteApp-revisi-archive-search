import React from 'react';
import { Input } from '../styles/styles.components/input.styles';

class AddNote extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);

    this.onNotesChangeHandler = this.onNotesChangeHandler.bind(this);

    this.onSubmitChangeHandler = this.onSubmitChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      }
    });
  }

  onNotesChangeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      }
    });
  }

  onSubmitChangeHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.addNote({ title, body });
  }

  render() {
    return (
      <Input
        onSubmit={this.onSubmitChangeHandler}
        >
          <input
            type='text'
            placeholder='  Ini adalah judul ...'
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <textarea
            type='text'
            rows='6'
            placeholder=' Tuliskan catatanmu di sini ...'
            value={this.state.body}
            onChange={this.onNotesChangeHandler}
          ></textarea>
          <button
            type='submit'
          >Simpan</button>
        </Input>
    );
  }
}

export default AddNote;