var React = require('react');

var RecordTable = React.createClass({
    render: function() {
        var rows = this.props.content.map(function(record, index){
            return (
              <tr key={index}>
                <td>{record.task}</td>
                <td>{record.elapsed}</td>
              </tr>
            );
        })

        return (
          <div className="row col-sm-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Task/s</th>
                  <th>Duration</th>
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
