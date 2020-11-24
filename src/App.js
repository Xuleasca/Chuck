import React, {Component} from 'react';



class App extends Component {
state={
  showPage : true,
  sentence1 : '',
  sentence2 : '',
  winner: '',
  endpoint : 'https://api.chucknorris.io/jokes/random?category=dev'
}

showFacts = ()=>{
  this.setState({showPage: false})
  
}

handleEvent = (ev)=>{
 this.setState({endpoint: 'https://api.chucknorris.io/jokes/random?category='+ ev.target.value})
}



  // componentDidMount() {
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       sentence1: data.value
  //     }))
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       sentence2: data.value
  //     }))
  // }



// componentDidMount() {
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => response.json())
//     .then(joke =>
//       fetch('https://api.chucknorris.io/jokes/random')
//         .then(response => response.json())
//         .then(joke2 => this.setState({
//           sentence1: joke.value,
//           sentence2: joke2.value
//         }))
//     )

//       }

storeSentence = ()=>{
  Promise.all(
    [
      fetch(this.state.endpoint).then(response => response.json()),
      fetch(this.state.endpoint).then(response => response.json())
    ])
    .then(data=>
      this.setState({
        sentence1: data[0].value,
        sentence2: data[1].value
      }))
  
}
componentDidMount() {
  this.storeSentence()
}

select =(sentence)=> {
   this.setState({
     winner: this.state[sentence]
   })
}


  render() {
    return (   //we can use <> empty tags or div or Fragment(needs to be imported)
      <div>    
                {
          this.state.showPage
          ?
          <div>
          <h1> Chuck facts </h1>
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </p>
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                 </p>
                 <form >
                 <label htmlFor="jokes">Choose a joke category:</label>
                      <select name="jokes" id="jokes" onChange={this.handleEvent}>
                        <option default>Choose your category</option>
                        <option value="animal">Animal</option>
                        <option value="career">career</option>
                        <option value="celebrity">celebrity</option>
                        <option value="dev">dev</option>
                        <option value="explicit">explicit</option>
                        <option value="fashion">fashion</option>
                        <option value="food">food</option>
                        <option value="history">history</option>
                        <option value="money">money</option>
                        <option value="movie">movie</option>
                        <option value="music">music</option>
                        <option value="political">political</option>
                        <option value="religion">religion</option>
                        <option value="science">science</option>
                        <option value="sport">sport</option>
                        <option value="travel">travel</option>
                      </select>
                      <input type="submit" onClick={this.showFacts}/>
                   </form>
       </div>
       :
   <div>
   <p>{this.state.sentence1}<button onClick={() => this.select('sentence1')}>click</button></p>
   
   <p>{this.state.sentence2}<button onClick={() => this.select('sentence2')}>click</button></p>
   {
     this.state.winner &&
     <>
     <h2>{this.state.winner}</h2>
    <button onClick={this.storeSentence}>Give me more</button>
     </>
   }
               
   </div>
   
        }
      
       
     </div>
    );
  }
}

export default App;