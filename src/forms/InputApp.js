import React from 'react';

import unsplash from './unsplash';

import FormComponent from './FormComponent';
import ImageList from './ImageList';

class InputApp extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (inputValue) => {
    const response = await unsplash.get(
      '/search/photos', {
        params: { query: inputValue },
      },
    );

    this.setState({ images: response.data.results });
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <FormComponent onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={images} />
      </div>
    );
  }
}

export default InputApp;
