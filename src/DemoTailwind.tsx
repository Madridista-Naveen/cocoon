import React, { Component, Fragment } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

// import { fields } from "./Components/dynamic-form/FormSchema";
import { ExampleModel } from "./models/example-model/ExampleModel";

import Form from "./Components/dynamic-form/Form";

import TableComponent from "./Components/table-component/TableComponent";

const dataArray = [
  {
    studentName: "ABC",
    grade: "A",
    section: "5",
    parentName: "XYZ",
    emailAddress: "ABC",
    contactNumber: 123,
    school: "ABC",
    declaration: "",
  },
  {
    studentName: "ABC",
    grade: "A",
    section: "5",
    parentName: "XYZ",
    emailAddress: "ABC",
    contactNumber: 123,
    school: "ABC",
    declaration: "",
  },

  {
    studentName: "ABC",
    grade: "A",
    section: "5",
    parentName: "XYZ",
    emailAddress: "ABC",
    contactNumber: 123,
    school: "ABC",
    declaration: "",
  },

  {
    studentName: "ABC",
    grade: "A",
    section: "5",
    parentName: "XYZ",
    emailAddress: "ABC",
    contactNumber: 123,
    school: "ABC",
    declaration: "",
  },

  {
    studentName: "ABC",
    grade: "A",
    section: "5",
    parentName: "XYZ",
    emailAddress: "ABC",
    contactNumber: 123,
    school: "ABC",
    declaration: "",
  },

  {
    studentName: "ABC",
    grade: "A",
    section: "5",
    parentName: "XYZ",
    emailAddress: "ABC",
    contactNumber: 123,
    school: "ABC",
    declaration: " ",
  },

  {
    studentName: "ABC",
    grade: "A",
    section: "5",
    parentName: "XYZ",
    emailAddress: "ABC",
    contactNumber: 123,
    school: "ABC",
    declaration: "",
  },
];

interface stateInterface {
  isOpen: boolean;
}

export default class DemoTailwind extends Component<any, stateInterface> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  model = new ExampleModel("");

  handleOpen = () => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  };

  handleOnSubmit = (values: any) => {
    alert(JSON.stringify(values));
  };
  render() {
    const { handleOnSubmit, handleOpen } = this;
    const { fields } = this.model;
    const { isOpen } = this.state;

    return (
      <div className="container hover:bg-sky-700">
        <Card className="p-2" color="transparent" shadow={true}>
          <div className="text-end">
            {/* <Fragment> */}
              <Button onClick={handleOpen} variant="gradient">
                Open Dialog
              </Button>
              <Dialog open={isOpen} handler={handleOpen}>
                <DialogHeader className="w-full flex justify-between">Its a simple dialog.
                <Button className="text-end" variant="filled" color="blue-gray" onClick={handleOpen}>
                    <span>X</span>
                  </Button>
                </DialogHeader>
                <DialogBody divider>
                  <Form
                    span={4}
                    onSubmit={handleOnSubmit}
                    fields={fields}
                    buttonText={"Register"}
                  />
                </DialogBody>
                {/* <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Confirm</span>
                  </Button>
                </DialogFooter> */}
              </Dialog>
            {/* </Fragment> */}
          </div>
          <br />
          <br />
          <TableComponent dataArray={dataArray} fields={fields} />
        </Card>
      </div>
    );
  }
}
