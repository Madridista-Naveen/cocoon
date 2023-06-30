import React from "react";
import { Button, Input, Select, Option } from "@material-tailwind/react";

interface Field {
  name: string;
  label: string;
  type: string;
  options?: string;
}

interface PropsInterface {
  span?: number;
  onSubmit: (val: any) => void;
  fields: any[];
  buttonText?: string;
}

interface StateInterface {
  formValues: any;
}

export default class Form extends React.Component<
  PropsInterface,
  StateInterface
> {
  constructor(props: any) {
    super(props);
    this.state = {
      formValues: {},
    };
  }

  handleSelect = (value: any, name: string) => {
    const { formValues } = this.state;
    this.setState({ formValues: { ...formValues, [name]: value } });
  };
  handleOnChange = (e: any) => {
    const { name, value } = e.target;
    const { formValues } = this.state;
    this.setState({ formValues: { ...formValues, [name]: value } });
  };

  render() {
    const { formValues } = this.state;
    const { onSubmit, fields, span, buttonText } = this.props;
    const { handleOnChange, handleSelect } = this;
    console.log(fields, "fields");
    return (
      <div className={"dynamicForm p-2 grid grid-cols-" + span + " gap-2 "}>
        {fields.map((field: any) => {
          if (field.hideOnForm !== true) {
            if (
              field.type == "text" ||
              field.type === "number" ||
              field.type === "email" ||
              field.type === "password"
            ) {
              return (
                <Input
                  type={field.type}
                  name={field.name}
                  label={field.label}
                  onChange={handleOnChange}
                />
              );
            }
            if (field.type == "select") {
              return (
                <Select
                  variant="outlined"
                  label="Select Version"
                  onChange={(e) => handleSelect(e, field.name)}
                >
                  {field.options ? (
                    field.options.map((o: any) => {
                      return <Option value={o.value}>{o.label}</Option>;
                    })
                  ) : (
                    <Option value={"No"}>{"No Options"}</Option>
                  )}
                </Select>
              );
            }
          }
        })}
        <Button onClick={() => onSubmit(formValues)}>
          {buttonText ? buttonText : "Submit"}
        </Button>
      </div>
    );
  }
}
