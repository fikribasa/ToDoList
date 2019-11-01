import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <div className="pull-right">
          <button
            className="btn addBtn btn-default disabled"
            data-toggle="tooltip"
            title="Toggle complete"
          >
            <i className="fa fa-filter" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
