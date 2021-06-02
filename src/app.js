import React from "react";
import ReactDOM from 'react-dom';

class Message extends React.Component {
    toggle = () => {
      console.log("start toggle....");
    };
    render() {
      return (
        <div>
          <a href={this.toggle}>Want to buy a new car?</a>
          
        </div>
      );
    }
  }
  
  document.body.innerHTML = "<div id='root'> </div>";
  
  const rootElement = document.getElementById("app");
  ReactDOM.render(<Message />, rootElement);
  
  console.log("Before click: " + rootElement.innerHTML);
  document.querySelector("a").click();
  console.log("After click: " + rootElement.innerHTML('<div id="app"><p>Call +11 22 33 44 now!</p></div>'));
  