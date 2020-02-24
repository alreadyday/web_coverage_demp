import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
  }
  * {
      box-sizing: border-box;
  }
`;

const Button = styled.button`
    border: 1px solid black;
`;

class HomaPage extends React.Component {
    state = {
        date: '',
        displayDate: '',
    }

    changeDate = (date) => {
        this.setState({
            date,
        });
    }

    setInitDate = () => {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <>
                <GlobalStyle />
                <Button onClick={this.setInitDate}>INIT</Button>
                <div>
                    {this.state.date.toLocaleString().split(' ')[0].replace(/\//g, '-')}
                </div>
            </>
        );
    }
}

ReactDOM.render(
    <HomaPage />,
    document.getElementById('root')
);
