import React from "react";
import marked from "marked";
import Section from "../section";
import Column from "../column";
import Textarea from "../textarea";

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewerContent: "# Input your markdown here..."
    };
    this.handleChangePreviewer = this.handleChangePreviewer.bind(this);
    this.markdownPreview = this.markdownPreview.bind(this);
  }

  handleChangePreviewer(event) {
    this.setState({
      previewerContent: event.target.value
    });
  }

  markdownPreview() {
    let markup = marked(this.state.previewerContent, { sanitize: true });
    return { __html: markup };
  }

  render() {
    return (
      <Section>
        <Column>
          <Textarea
            value={this.state.previewerContent}
            onChange={this.handleChangePreviewer}
          />
        </Column>
        <Column overflow="auto">
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={this.markdownPreview()}
          />
        </Column>
        <style>{`
          .markdown-body {
            box-sizing: border-box;
            min-width: 200px;
            max-width: 980px;
            margin: 0 auto;
            padding: 30px;
            overflow-y:auto
          }

          @media (max-width: 767px) {
            .markdown-body {
              padding: 15px;
            }
          }
        `}</style>
      </Section>
    );
  }
}

export default Previewer;
