import React, { Component } from "react";

export class ExampleModel extends Component<any, {}> {
  model = null;

  constructor(props: any) {
    super(props);
    this.fields = this.fields.map((f) => {
      // f.render = f.render || function (v: any) { return v };
      return f;
    });
  }
  setDate(value: any) {
    if (value) {
      return new Date(value).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
    } else return value ? value : "";
  }
  fields = [
    // {
    //     id: "_id",
    //     name: "_id",
    //     label: "Contest ID",
    //     placeholder: "Contest ID",
    //     type: "text",
    //     editable: false
    // },
    {
      id: "studentName",
      name: "studentName",
      label: "Student Name",
      placeholder: "Student Name",
      type: "text",
      required: true,
      hideOnTable:true
    },
    {
      id: "grade",
      name: "grade",
      label: "Grade",
      placeholder: "Grade",
      type: "text",
      hideOnTable: true,
      required: true,
    },
    {
      id: "section",
      name: "section",
      label: "Section",
      placeholder: "Section",
      type: "text",
      required: true,
    },
    {
      id: "parentName",
      name: "parentName",
      label: "Parent's Name",
      placeholder: "Parent's Name",
      type: "text",
    },
    {
      id: "emailAddress",
      name: "emailAddress",
      label: "Email Address",
      placeholder: "Email Address",
      type: "email",
    },
    {
      id: "contactNumber",
      name: "contactNumber",
      label: "Contact Number",
      placeholder: "Contact Number",
      type: "number",
      hideOnForm:true
    },
    {
      id: "school",
      name: "school",
      label: "School",
      placeholder: "School",
      type: "select",
    },
    {
      id: "declaration",
      name: "declaration",
      label: "Declaration",
      placeholder: "Declaration",
      type: "checkbox",
    },
  ];
}
