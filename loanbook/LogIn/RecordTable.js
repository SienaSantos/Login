var React = require('react');

var RecordTable = React.createClass({
    render: function() {
        var rows = this.props.content.map(function(record, index){
            return (
              <tr key={index}>
                <td>{record.list}</td>
              </tr>
            );
        })

        return (
          <div className="row col-sm-6">
            <table className="table">
              <thead>
                <tr>
                  <th>List</th>
                </tr>
              </thead>
              <tbody>
                  {rows}
              </tbody>
            </table>
          </div>
        );
    }
});

module.exports = RecordTable;
