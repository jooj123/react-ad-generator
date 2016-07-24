import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import AdForm from '../AdForm/AdForm';
import AdPreview from '../AdPreview/AdPreview';
import style from './AdGenerator.css';
import fetch from 'isomorphic-fetch';

class AdGenerator extends Component {
  constructor() {
    super();

    this.onFormChange = this.onFormChange.bind(this);
    this.displayAdSpot = this.displayAdSpot.bind(this);

    this.state = {
      formData: {
      },
      adData: '',
      topAdEnabled: false,
      bottomAdEnabled: false,
      rightAdEnabled: false,
      leftAdEnabled: false
    };
  }

  onFormChange(data) {
    this.displayAdSpot(data.position);

    fetch(`/${data.value}.html`)
      .then((response) => response.text())
      .then((body) => {
        this.setState({
          adData: body
        });
      });
  }

  displayAdSpot(position) {
    const adSpotsEnabled = {
      topAdEnabled: false,
      bottomAdEnabled: false,
      rightAdEnabled: false,
      leftAdEnabled: false
    };

    if (position === 'left') {
      adSpotsEnabled.leftAdEnabled = true;
    } else if (position === 'right') {
      adSpotsEnabled.rightAdEnabled = true;
    } else if (position === 'top') {
      adSpotsEnabled.topAdEnabled = true;
    } else if (position === 'bottom') {
      adSpotsEnabled.bottomAdEnabled = true;
    }

    this.setState(adSpotsEnabled);
  }

  renderAdSpot(enabled) {
    if (!enabled) {
      return null;
    }
    return (<AdPreview formData={this.state.formData} adData={this.state.adData} />);
  }

  render() {
    return (
      <div className={style.root} >
        <Helmet title="React Ad Generator" />

        <div className={style.topAdSpot}>
          {this.renderAdSpot(this.state.topAdEnabled) }
        </div>

        <div className={style.body}>
          <main className={style.content}>
            <AdForm onChange={this.onFormChange} />

            <textarea value={this.state.adData} className={style.code} disabled />
          </main>
          <nav className={style.leftAdSpot}>
            {this.renderAdSpot(this.state.leftAdEnabled) }
          </nav>
          <aside className={style.rightAdSpot}>
            {this.renderAdSpot(this.state.rightAdEnabled) }
          </aside>
        </div>

        <div className={style.bottomAdSpot}>
          {this.renderAdSpot(this.state.bottomAdEnabled) }
        </div>
      </div>
    );
  }
}

export default AdGenerator;
