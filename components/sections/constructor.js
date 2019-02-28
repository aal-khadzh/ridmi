import React from "react";
import { data } from "../../lib/source";
import Section from "./../section";
import Column from "./../column";
import Textarea from "./../textarea";
import Input from "./../input";

class Constructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      constructorContent: "",
      constructorStorage: "",
      constructorInput: ""
    };

    this.getItemList = this.getItemList.bind(this);

    this.handleDropdownList = this.handleDropdownList.bind(this);
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getItemList() {
    let items = data.map(item => item.name);
    return items;
  }

  handleDropdownList(selection) {
    data.map(item => {
      if (item.name === selection) {
        this.setState({
          constructorStorage: item.tag
        });
      }
    });
  }

  handleMarkdownChange(event) {
    this.setState({
      constructorContent: event.target.value
    });
  }

  handleInputChange(event) {
    this.setState({
      constructorInput: event.target.value
    });
  }

  handleSubmit() {
    let markdown;
    let tag = this.state.constructorStorage;
    let content = this.state.constructorInput;
    if (tag) {
      markdown = tag.replace("string", content);
    }
    this.setState(prevState => ({
      constructorContent: prevState.constructorContent + markdown + `\n`,
      constructorInput: ""
    }));
  }

  render() {
    return (
      <Section>
        <Column
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          {
            <Input
              comboboxItems={this.getItemList()}
              comboboxOnChange={selection => this.handleDropdownList(selection)}
              placeholder="Element"
              inputOnChange={this.handleInputChange}
              inputValue={this.state.constructorInput}
              buttonOnClick={this.handleSubmit}
            />
          }
        </Column>
        <Column>
          <Textarea
            value={this.state.constructorContent}
            onChange={this.handleMarkdownChange}
            placeholder="# Your markdown would be appearing here..."
          />
        </Column>
      </Section>
    );
  }
}

export default Constructor;
