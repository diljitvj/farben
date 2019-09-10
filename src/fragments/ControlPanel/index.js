import React, { Component } from 'react';
import PencilIcon from '@material-ui/icons/Create';
import EraseIcon from '../../assets/icons/EraseSolid';
import styles from './style.module.css';
import clsx from 'clsx';

const CONTROLS = [
  {
    uiLabel: 'Pencil',
    mode: 'pencil',
    Icon: PencilIcon,
    options: [
      {
        type: 'storkeWidth',
        value: 1,
        Icon: (
          <span
            style={{
              position: 'absolute',
              top: 'calc(50% - 0.5px)',
              width: 'calc(100% - 10px)',
              left: '5px',
              height: '1px',
              background: 'black',
              display: 'inline-block'
            }}
          ></span>
        )
      },
      {
        type: 'storkeWidth',
        value: 2,
        Icon: (
          <span
            style={{
              position: 'absolute',
              top: 'calc(50% - 1px)',
              width: 'calc(100% - 10px)',
              left: '5px',
              height: '2px',
              background: 'black',
              display: 'inline-block'
            }}
          ></span>
        )
      },
      {
        type: 'storkeWidth',
        value: 3,
        Icon: (
          <span
            style={{
              position: 'absolute',
              top: 'calc(50% - 1.5px)',
              width: 'calc(100% - 10px)',
              left: '5px',
              height: '3px',
              background: 'black',
              display: 'inline-block'
            }}
          ></span>
        )
      }
    ]
  },
  {
    uiLabel: 'Erase',
    mode: 'erase',
    Icon: EraseIcon,
    options: [
      {
        type: 'eraseRadius',
        value: 1,
        Icon: (
          <span
            style={{
              position: 'absolute',
              top: 'calc(50% - 5px)',
              left: 'calc(50% - 5px)',
              width: '10px',
              height: '10px',
              border: '1px solid black',
              borderRadius: '5px',
              display: 'inline-block'
            }}
          ></span>
        )
      },
      {
        type: 'eraseRadius',
        value: 2,
        Icon: (
          <span
            style={{
              position: 'absolute',
              top: 'calc(50% - 7.5px)',
              left: 'calc(50% - 7.5px)',
              width: '15px',
              height: '15px',
              border: '1px solid black',
              borderRadius: '8px',
              display: 'inline-block'
            }}
          ></span>
        )
      },
      {
        type: 'eraseRadius',
        value: 3,
        Icon: (
          <span
            style={{
              position: 'absolute',
              top: 'calc(50% - 10px)',
              left: 'calc(50% - 10px)',
              width: '20px',
              height: '20px',
              border: '1px solid black',
              borderRadius: '10px',
              display: 'inline-block'
            }}
          ></span>
        )
      }
    ]
  }
];

class ControlPanel extends Component {
  state = {
    showControlOptions: false,
    selectedMode: null
  };

  handleControlChange = (optionType, optionValue) => {
    const { activeControl = {}, onChange } = this.props;

    const { mode } = activeControl;

    const { selectedMode } = this.state;

    const newMode = selectedMode || mode;

    onChange({ mode: newMode, option: { [optionType]: optionValue } });
  };
  handleModeClick = selectedMode => {
    this.setState({
      selectedMode,
      showControlOptions: true
    });
  };

  getModeOptions = selectedMode => {
    const mode = CONTROLS.find(({ mode }) => mode === selectedMode);

    if (mode && mode.options) return mode.options;

    return [];
  };

  getSelectedOptionIcon = (
    selectedMode,
    selectedOptionType,
    selectedOptionValue
  ) => {
    const mode = CONTROLS.find(({ mode }) => mode === selectedMode);

    if (!mode || !mode.options) return <div></div>;

    const option = mode.options.find(
      ({ type, value }) =>
        selectedOptionType === type && selectedOptionValue === value
    );

    return option.Icon;
  };

  getModeUiLabel = modeValue => {
    const mode = CONTROLS.find(({ mode }) => mode === modeValue);

    if (!mode || !mode.options) return '';

    return mode.uiLabel;
  };

  render() {
    const { activeControl = {} } = this.props;
    const { mode, option } = activeControl;
    const [[type, value]] = Object.entries(option);

    const { selectedMode } = this.state;
    const options = this.getModeOptions(selectedMode || mode);

    return (
      <div className={styles.controlWrapper}>
        <div className={styles.activeControl}>
          <span className={styles.selectedMode}>
            {this.getModeUiLabel(mode)}
          </span>
          {this.getSelectedOptionIcon(mode, type, value)}
        </div>
        <div
          style={{
            display: 'inline-block',
            lineHeight: 0
          }}
        >
          <div style={{ marginBottom: '5px' }}>
            {CONTROLS.map(({ Icon, uiLabel, mode: modeName }, index) => (
              <div
                onClick={() => this.handleModeClick(modeName)}
                title={uiLabel}
                className={clsx(styles.controlIconWrapper, {
                  [styles.firstChild]: index === 0,
                  [styles.selected]: selectedMode
                    ? selectedMode === modeName
                    : mode === modeName
                })}
              >
                {<Icon className={clsx(styles.controlIcon)} />}
              </div>
            ))}
          </div>
          <div className={styles.optionsWrapper}>
            {options.map(
              ({ type: optionType, value: optionValue, Icon }, index) => (
                <div
                  className={clsx(styles.optionWrapper, {
                    [styles.firstChild]: index === 0
                  })}
                  onClick={() =>
                    this.handleControlChange(optionType, optionValue)
                  }
                >
                  {Icon}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
