import React, { Component } from "react";
import clsx from "clsx";
import TextField from "../../../../../../comps/FormControl/TextField";
import { isEqual } from "lodash";

class StoreName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: { name: null, storeID: null, slogan: null },
      errors: [],
      complete: false,
      disabled: false,
      active: false,
      activeInput: null,
      completed: []
    };

    this.onChange = this.onChange.bind(this);
    this.onActive = this.onActive.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onChange(field, fieldState) {
    let { props, onError } = this,
      { onChange, isCompleted, onComplete } = props,
      { props: fieldProps } = field,
      { name } = fieldProps,
      { value, error: fieldError } = fieldState;

    this.setState(
      state => {
        let { completed, errors, fields } = state;
        let update = { fields: { ...fields } };

        if (fieldError) {
          return onError(fieldError, field, errors);
        }

        if (fields[name]) {
          update.fields[name] = value;
        }

        if (!completed.includes(field)) {
          update.completed = completed.concat(field);
        }

        if (isCompleted(completed)) {
          update.complete = true;
        }

        return update;
      },
      state => {
        let { complete } = state;

        if (complete) {
          onComplete(this);
        } else {
          let update = {
            set: this,
            input: field,
            state
          };
          onChange(update);
        }
      }
    );
  }
  onActive(input) {
    this.setState(() => ({
      activeInput: input
    }));
  }
  onError(err, input, errors) {
    let { indexOf } = errors;
    let update = { complete: false };

    let { props: inputProps } = input,
      { name, FieldProps } = inputProps,
      { value, label, inputRef } = FieldProps;

    let error = { ...err, value, name, label, inputRef, input };

    let included = errors.find(error => error.input === input);

    if (!included) {
      update.errors = errors.concat(error);
    } else if (!isEqual(included, error)) {
      update.errors = [...errors];
      update.errors[indexOf(included)] = error;
    }
    return update;
  }
  onBlur(input) {
    this.setState(state => {
      let { activeInput } = state,
        update = { activeInput };
      if (activeInput === input) {
        update.activeInput = null;
      }
      return update;
    });
  }
  render() {
    let { state, props, onChange, onActive, onBlur } = this,
      { classes, inputs } = props,
      { disabled } = state,
      { fieldGutter, fieldMargin } = classes;

    let [name, storeID, slogan] = inputs;

    return (
      <div id="store-name-and-slogan-fieldset">
        <div className={clsx(fieldMargin)}>
          <TextField
            disabled={disabled}
            classes={classes}
            onChange={onChange}
            onActive={onActive}
            onBlur={onBlur}
            {...name}
          />

          <TextField
            className={clsx(fieldGutter)}
            disabled={disabled}
            classes={classes}
            onChange={onChange}
            onActive={onActive}
            onBlur={onBlur}
            {...storeID}
          />
        </div>

        <TextField
          className={clsx(fieldMargin)}
          disabled={disabled}
          FieldProps={slogan}
          onChange={onChange}
          onActive={onActive}
          onBlur={onBlur}
          {...slogan}
        />
      </div>
    );
  }
}

export default StoreName;
