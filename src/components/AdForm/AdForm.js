import React, { Component, PropTypes } from 'react';
import style from './AdForm.css';
import Select from 'react-select';
import CopyToClipboard from 'react-copy-to-clipboard';

const adSlots = [
  {
    value: 'test-ad',
    label: 'Ad Slot Left'
  },
  {
    value: 'test-ad-2',
    label: 'Ad Slot Right'
  },
  {
    value: 'test-ad-3',
    label: 'Ad Slot Top'
  },
  {
    value: 'test-ad-4',
    label: 'Ad Slot bottom'
  }
];

const adSlotPosition = {
  'test-ad': 'left',
  'test-ad-2': 'right',
  'test-ad-3': 'top',
  'test-ad-4': 'bottom'
};

class AdForm extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  static defaultProps = {}

  constructor() {
    super();
    this.onAdSlotChange = this.onAdSlotChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);

    this.state = {
      slot: '',
      copied: false,
      duration: '',
      title: '',
      target: ''
    };
  }

  onAdSlotChange(selected) {
    this.props.onChange({
      value: selected.value,
      position: adSlotPosition[selected.value]
    });

    this.setState({
      slot: selected.value
    });
  }

  onTextChange(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  render() {
    return (
      <form className={style.root}>
        <h1>Ad Generator</h1>
        <fieldset>
          <legend>Ad Slot Details</legend>
          <div>
            <label>Slot</label>
            <Select
              name="ad-slot"
              placeholder="Please select an ad slot"
              value={this.state.slot}
              options={adSlots}
              onChange={this.onAdSlotChange}
            />
          </div>
          <div>
            <label>Duration</label>
            <input type="text" value={this.state.duration} name="duration" className={style.field} />
          </div>
        </fieldset>

        <fieldset>
          <legend>Ad Settings</legend>
          <div>
            <label>Title</label>
            <input type="text" value={this.state.title} name="title" onChange={this.onTextChange} className={style.field} />
          </div>
          <div>
            <label>Target</label>
            <input type="text" value={this.state.target} name="target" className={style.field} />
          </div>
        </fieldset>
        <div>
          <CopyToClipboard
            text={this.state.title}
            onCopy={() => this.setState({ copied: true })}
          >
            <button type="button" className={style.submit}>Copy code to clipboard</button>
          </CopyToClipboard>&nbsp;

          {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
        </div>
      </form>
    );
  }
}

export default AdForm;
