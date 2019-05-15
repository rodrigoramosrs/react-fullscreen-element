# Fullscreen any dom element ReactJS

[![NuGet version](https://badge.fury.io/js/react-fullscreen-element.svg)](https://www.npmjs.com/package/react-fullscreen-element)

![](https://media.giphy.com/media/dWaH8ytMCCKzb2wdpH/giphy.gif)

# Installation

```
npm i react-fullscreen-element
```

# Usage Example

```
import ReactFullScreenElement from "react-fullscreen-element";

class Demo extends React.Component {
    state={
        fullscreen: false
    }
    render(
        return(
            <div>

                <ReactFullScreenElement
                    fullScreen={this.state.fullscreen}
                    allowScrollbar={true}
                >
                    <input type="button" value="Click here to toggle fullscreen" onClick={() => this.setState({fullscreen: !this.state.fullscreen})} />
                    your code goes here
                </ReactFullScreenElement>
            </div>

        )
    )


}
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
