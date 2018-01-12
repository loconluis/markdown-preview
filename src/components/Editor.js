import React from 'react'
import marked from 'marked'

export class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rawMarkup: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.getRawMarkup = this.getRawMarkup.bind(this);
  }

  handleChange(e) {
    const rawMarkup = e.target.value;
    // console.log(markup);
    this.setState(() => ({ rawMarkup }))
  }

  getRawMarkup( value ) {
    const markup = marked(value, { sanitize: true })
    return { __html: markup };
  }

  render () {
    return (
      <div className="editor">
        <div className="editor__input">
          <textarea
            className="textarea"
            placeholder="Write here..."
            onChange={this.handleChange}
          />
        </div>
        <div className="editor__preview"
        >
          <span dangerouslySetInnerHTML={this.getRawMarkup(this.state.rawMarkup)} />
        </div>
      </div>
    )
  }
}
