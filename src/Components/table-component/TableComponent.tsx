import { Typography } from "@material-tailwind/react";
import React, { Component } from "react";

interface PropsInterface {
  dataArray: any[];
  fields: any;
}

export default class TableComponent extends Component<PropsInterface, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { dataArray, fields } = this.props;
    return (
      <div className="container">
        <div className="w-full overflow-x-auto lg:overflow-x-hidden md:overflow-x-hidden">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {fields.map((field: any) => {
                  if (field.hideOnTable !== true) {
                    return (
                      <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        {" "}
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {field.label}
                        </Typography>
                      </th>
                    );
                  }
                })}
              </tr>
            </thead>
            <tbody>
              {dataArray.map((obj: any, index) => {
                const isLast = index === dataArray.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr>
                    {fields.map((f: any) => {
                      if (f.hideOnTable !== true) {
                        return (
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {obj[f.id]}
                            </Typography>{" "}
                          </td>
                        );
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
