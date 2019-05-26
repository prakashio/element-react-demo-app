import React from "react";
import PropTypes from "prop-types";
import { Layout } from "element-react";
import "element-theme-default";
import Header from "./components/Header";
import "./App.css";
import { AddNewNote, NoteList } from "./container";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout.Row type="flex">
          <Layout.Col span="12">
            <Layout.Row>
              <Header />
              <AddNewNote />
            </Layout.Row>
          </Layout.Col>
          <Layout.Col span="12" className="bg-dark">
            <div className="grid-content text-center p-2">
              <h1> Content </h1> <NoteList />
            </div>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }
}

export default App;
