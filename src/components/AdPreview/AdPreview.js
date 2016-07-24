import React, { Component, PropTypes } from 'react';
import style from './AdPreview.css';

class AdPreview extends Component {
  static propTypes = {
    formData: PropTypes.object,
    adData: PropTypes.string
  };

  static defaultProps = {
    formData: {
      title: ''
    }
  };

  render() {
    const { formData, adData } = this.props;

    return (
      <div className={style.root}>
        <h2>Ad Preview</h2>
        <div className={style.topSection}>
          <h1>{formData.title}</h1>
        </div>
        <div className={style.bottomSection}>
          <iframe
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            srcDoc={adData}
          />
        </div>
      </div>
    );
  }
}

export default AdPreview;

