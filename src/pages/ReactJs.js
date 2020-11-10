import React, { Fragment } from 'react';
import NumberList from '../Components/NumberList';
import TableList from '../Components/TableList';

// import RsTodollar from "../Components/RsTodollar";
const numbers = [1, 2, 3, 8, 10];
var countries = [{ id: 1, name: 'Afghanistan', code: 'AF' },
{ id: 2, name: 'Albania', code: 'AL' },
{ id: 3, name: 'Algeria', code: 'DZA' },
{ id: 4, name: 'Andorra', code: 'ANS' },
{ id: 5, name: 'Angola', code: 'ANG' },
{ id: 6, name: 'India', code: 'IN' }];

class ReactDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: countries

    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    console.log(this.state.countries);
    console.log(typeof (this.state.countries));
  }




  handleSearchChange(e) {
    //  console.log("Value from Handle Change :" + e.target.value);
    let newList = [];
    let currentList = [];
    let originalList = [];
    // console.log(this.state.countries);
    originalList = countries;
    currentList = this.state.countries;

    if (e.target.value !== '') {
      newList = currentList.filter(country => {
        // console.log(country + "Value from country");
        const lc = country.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        // console.log(lc.includes(filter));
        return lc.includes(filter) || !e.target.value;
      })
    }
    else {
      console.log("Have a nice day");
      // console.log(currentList);

      newList = originalList;
      console.log(newList);
    }
    this.setState({ countries: newList });
  }
  render() {
    return (<div id="reactDemo">
      <div className="container">
        <div className="panel panel-info">
          <div className="panel-heading"><strong>React JS</strong></div>
          <div className="panel-body">
            {/* Panel Content */}
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">List and Keys.</div>
                <div className="panel-body">
                  {/* Content  of List and Keys */}
                  <p>A “key” is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed.  </p>
                  <NumberList numbers={numbers} />
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">Table Rendering </div>
                <div className="panel-body">
                  {/* Content of Table Rendering */}
                  <p>Items of array can be dispalyed using Table.</p>

                  {/* Content  of Table list */}
                  <input className="form-control" id="myInput" onChange={this.handleSearchChange} type="text" placeholder="Search.." />
                  <br></br>
                  <TableList countries={this.state.countries.map(countries => { return (countries) })} />


                </div>
              </div>

              {/* Fragments */}
              <div className="panel panel-default">
                <div className="panel-heading">Fragments</div>
                <div className="panel-body">
                  <p> Fragment is a solution allowing you to return many elements from a component. It feels natural and doesn’t litter the DOM with unnecessary wrapper elements .A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
  </p>   <div className="panel panel-default">
                    <div className="panel-body">
                      <React.Fragment>
                        <td>Hello</td>
                        <td>World</td>
                      </React.Fragment>
                    </div>

                  </div>
                  <div className="panel panel-default">

                    <div className="panel-body">
                      <dl>
                        {this.state.countries.map(item => (
                          // Without the `key`, React will fire a key warning
                          <React.Fragment key={item.id}>
                            <dt>{item.name}</dt>
                            <dt>{item.code}</dt>
                            <dd>{item.id}</dd>
                          </React.Fragment>
                        ))}
                      </dl>

                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-body">

                      {this.state.countries.map(item => (
                        // Without the `key`, React will fire a key warning
                        <Fragment >
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                            <td>{item.id}</td>
                          </tr>
                        </Fragment>
                      ))}
                    </div>

                  </div>

                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">Carousels</div>
                <div className="panel-body">
                  <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    {/* <!-- Carousel indicators --> */}
                    <ol class="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    {/* <!-- Wrapper for carousel items --> */}
                    <div class="carousel-inner">
                      <div class="item active">
                        <img src="../img/events.png" alt="First Slide" />
                      </div>
                      <div class="item">
                        <img src="../img/events.png" alt="Second Slide" />
                      </div>
                      <div class="item">
                        <img src="../img/events.png" alt="Third Slide" />
                      </div>
                    </div>
                    {/* <!-- Carousel controls --> */}
                    <a class="carousel-control left" href="#myCarousel" data-slide="prev">
                      <span class="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a class="carousel-control right" href="#myCarousel" data-slide="next">
                      <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                  </div>

                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ReactDemo