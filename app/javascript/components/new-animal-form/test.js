import React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      photoFile: null,
    };
  }

  handleInput(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleFile(e) {
    this.setState({ photoFile: e.currentTarget.files[0] });
  }

  render() {
      console.log(this.state)
    return (
      <form>
        <label>Body of Post</label>
        <input
          type='text'
          value={this.state.title}
          onChange={this.handleInput.bind(this)}
        />
        <input type='file' onChange={this.handleFile.bind(this)} />
      </form>
    );
  }
}
