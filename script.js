const { Grid, Table, TableHeaderRow } = DevExpress.DXReactGridBootstrap3;
const {
  Getter,
  Template,
  TemplatePlaceholder,
  Plugin } =
DevExpress.DXReactCore;
const { SortingState, IntegratedSorting } = DevExpress.DXReactGrid;

class ArtistSortingIndicator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      artistSorting: false };

  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Plugin, null, /*#__PURE__*/
      React.createElement(Getter, { name: "sorting",
        computed: ({ sorting }) => {
          const artistSorting = sorting.find(s => s.columnName === 'artist');
          this.setState({ artistSorting: !!artistSorting });
          return sorting;
        } }), /*#__PURE__*/
      React.createElement(Template, { name: "root" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(TemplatePlaceholder, null),
      this.state.artistSorting && /*#__PURE__*/React.createElement("div", { className: "overlay" }, /*#__PURE__*/React.createElement("div", null, "Artist Sorting Active"))))));




  }}


class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
      { name: "name", title: "Name" },
      { name: "artist", title: "Artist" },
      { name: "year", title: "Year" }],

      rows: [
      {
        name: "Their Satanic Majesties Request",
        artist: "The Rolling Stones",
        year: 1967 },

      { name: "Prime Cuts", artist: "David Bowie", year: 1983 },
      { name: "Human", artist: "Rag'n'Bone Man", year: 2017 }] };


  }

  render() {
    const { rows, columns } = this.state;

    return /*#__PURE__*/(
      React.createElement(Grid, { rows: rows, columns: columns }, /*#__PURE__*/
      React.createElement(SortingState, null), /*#__PURE__*/

      React.createElement(IntegratedSorting, null), /*#__PURE__*/
      React.createElement(ArtistSortingIndicator, null), /*#__PURE__*/

      React.createElement(Table, null), /*#__PURE__*/
      React.createElement(TableHeaderRow, { showSortingControls: true })));


  }}


ReactDOM.render([/*#__PURE__*/React.createElement("div", { className: "note" }, "Please note that while the title of this sample refers to the Watcher for historical reasons, the Watcher has been removed in beta 2. The same functionality can now be achieved with a Getter, and this sample has been changed accordingly."), /*#__PURE__*/React.createElement(App, null)], document.getElementById("app"));