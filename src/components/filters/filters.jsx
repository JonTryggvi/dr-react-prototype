import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './filters.css';
import MainButton from '../../components/main-button/main-button';
class Filters extends Component {
  constructor(props) {
    super(props);
    // we set the state to equal the props because we are going to modify it in a functio below with the setState methood
    this.state = this.props;
    // console.log(this.state);
    
    // This binding is necessary to make `this` work in the callback
    this.filterClick = this.handleFilterClick.bind(this);
  }
//  we define clickable function
  handleFilterClick() {
    this.setState({
      isToggleOn: false
    });

    // console.log(this.state);
  }

  render() {
    /* Interesting syntax!! Her we use a so called deconstruction syntax to deconstruct this.props (which is a jsonOBJ) into the variables sendToFilter and closeFromFilter. Its much shorter than writing fx. const sendToFilter = this.props.sendToFilter and then in a nother line const closeFromFilter = this.props.closeFromFilter https://wesbos.com/destructuring-objects/ */
    const { sendToFilter, closeFromFilter } = this.props;
    
    return (
      /* here we use check on isToggleOn, Since it is a boolean we can use the ternary operator to deside what class to render in the className attribute. */
      <div className={ sendToFilter.isToggleOn ? 'filter' : 'filterClosed'}>
        <div className="skjult" onClick={() => closeFromFilter()}><span>{sendToFilter.isToggleOn ? 'Skjult' : ''}</span></div>
      
        <div className="firstSection">
          <h2>Find program!</h2>
          <span><input type="text" placeholder="Hvad leder du efter…"/><img src={require('./images/search.svg')} alt=""/></span>
        </div>
        <div className="secoundSection">
            <div>
              <h3>Sorter erfter</h3>
              <ul className="section-list">
                <li className="namefilter"><Link to="/navn">Navn</Link></li>
                <li><Link to="/ratings">Bedømmelser</Link></li>
 
                <li><Link to="/udgivelsesdato">Udgivelsesdato</Link></li> 
              </ul>
            </div>
            <div>
              <h3>Genre</h3>
              <div className="row">
                <div className="column firstColumn">
                  <input id="c1" type="checkbox" name="drama" value="drama" />
                <label htmlFor="c1"><span></span>Drama</label>

                  <input id="c2" type="checkbox" name="kultur" value="kultur" />
                <label htmlFor="c2"><span></span>Kultur</label>

                  <input id="c3" type="checkbox" name="natur-viden" value="natur-viden" />
                <label htmlFor="c3"><span></span>Natur & videnskab</label>

                  <input id="c4" type="checkbox" name="nyheder-aktualitet" value="nyheder-aktualitet" />
                <label htmlFor="c4"><span></span>Nyheder</label>

                  <input id="c5" type="checkbox" name="sport" value="sport" />
                <label htmlFor="c5"><span></span>Sport</label>

                  <input id="c6" type="checkbox" name="underholdning" value="underholdning" />
                <label htmlFor="c6"><span></span>Underholdning</label>
                </div>

                <div className="column">
                  <input id="c7" type="checkbox" name="romance" value="romance" />
                <label htmlFor="c7"><span></span>Romance</label>

                  <input id="c8" type="checkbox" name="action" value="action" />
                <label htmlFor="c8"><span></span>Action</label>

                  <input id="c9" type="checkbox" name="family" value="family" />
                <label htmlFor="c9"><span></span>Familie</label>

                  <input id="c10" type="checkbox" name="comedie" value="comedie" />
                <label htmlFor="c10"><span></span>Comedie</label>

                  <input id="c11" type="checkbox" name="scifi" value="scifi" />
                <label htmlFor="c11"><span></span>Sci-Fi</label>

                  <input id="c12" type="checkbox" name="thrillers" value="thrillers" />
                <label htmlFor="c12"><span></span>Thrillers</label>

                  <input id="c13" type="checkbox" name="musicals" value="musicals" />
                <label htmlFor="c13"><span></span>Musicals</label>
                </div>
              </div>
            </div>
            <div>
              <h3>Kanal</h3>
              <div className="column">
                <input id="c14" type="checkbox" name="dr1" value="dr1" />
              <label htmlFor="c14"><span></span>DR 1</label>

                <input id="c15" type="checkbox" name="dr2" value="dr2" />
              <label htmlFor="c15"><span></span>DR 2</label>

                <input id="c16" type="checkbox" name="dr3" value="dr3" />
              <label htmlFor="c16"><span></span>DR 3</label>

                <input id="c17" type="checkbox" name="drk" value="drk" />
            <label htmlFor="c17"><span></span>DR K</label>

                <input id="c18" type="checkbox" name="ramasjang" value="ramasjang" />
            <label htmlFor="c18"><span></span>Ramasjang</label>

                <input id="c19" type="checkbox" name="ultra" value="ultra" />
            <label htmlFor="c19"><span></span>Ultra</label>
              </div>
            </div>
            <div className="column type-unsertext">
              <div className="row">
                <div>
                  <h3>Type</h3>
                  <div className="column">
                    <input id="c20" type="checkbox" name="serie" value="serie" />
                <label htmlFor="c20"><span></span>Serie</label>

                    <input id="c21" type="checkbox" name="film" value="film" />
                <label htmlFor="c21"><span></span>Film</label>
                   </div>
                </div>
                <div>
                  <h3>Undertext</h3>
                  <div className="column">
                    <input id="c22" type="checkbox" name="ja" value="ja" />
                <label htmlFor="c22"><span></span>Ja</label>

                    <input id="c23" type="checkbox" name="nei" value="nei" />
                <label htmlFor="c23"><span></span>Nei</label>
                  </div>
                </div>
              </div>
              <div>
                <h3>År</h3>
                <div className="slider">
                  <img src={require('./images/sliderPic.png')} alt=""/>
                </div>
              </div>
            </div>
            
          
        </div>
        {/* The MainButton component takes two attributes, the onPress for any function it needs to execute and the buttonText for well the button text. Here we are sneaking in a Link element into the button text which means that we  will have an anchor attribuite in our button in the DOM. That isn't a very good practise but for now we let it fe for this prototype */}
        <MainButton onPress={() => closeFromFilter()} buttonText={<Link to="/programmes">Find nu</Link>} />
      </div>      

    )
  }
}

export default Filters;