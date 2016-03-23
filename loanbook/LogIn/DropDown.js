var React = require('react');
var data = require('./data');

var DropDown = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired,
  },

  selectCategory (e){
    this.props.handleSelect(e)
  },
  

  render () {
    var categories = this.props.data.map(function(tab, index) {
      return (
       <option value={tab.category} key={index}>
        {tab.category}
        </option>
      );
    });

    var subCats = this.props.data.map((tab,index) => {
      if (tab.category == this.props.category){
        var sub = tab.subcategory.map(function(e,index){
          return (
            <option value={e} key={index}> {e} </option>
          )
        });

        return sub
        
      }

      return;
    });

    return (
      <div>
        <div>
          <select value={this.props.category} onChange={this.selectCategory}>
            <option> Select a Category </option>
            {categories}
          </select>
        </div>
        <div>
          <select>
            <option> Select a Sub Category </option>
            {subCats}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = DropDown;
