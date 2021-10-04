class AjouterFacture extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rowData: [],
        Produits: [],
        id: 0
      };
  
      this.handleQuantiteChange = this.handleQuantiteChange.bind(this);
      this.handlePrixChange = this.handlePrixChange.bind(this);
      this.handleselectprdtChange = this.handleselectprdtChange.bind(this);
      this.handleRowDelete = this.handleRowDelete.bind(this);
      this.handleRowAdd = this.handleRowAdd.bind(this);
      this.getTotal = this.getTotal.bind(this);
    }
    handleQuantiteChange(index, value) {
      const rowDataCopy = this.state.rowData.slice(0);
      rowDataCopy[index] = Object.assign({}, rowDataCopy[index], {Quantite: parseInt(value, 10)});
      this.setState({
        rowData: rowDataCopy
      });
    }
    handleselectprdtChange(index, value) {
      const rowDataCopy = this.state.rowData.slice(0);
      rowDataCopy[index] = Object.assign({}, rowDataCopy[index], {selectprdt: value});
      this.setState({
        rowData: rowDataCopy
      });
    }
    handlePrixChange(index, value) {
      const rowDataCopy = this.state.rowData.slice(0);
      rowDataCopy[index] = Object.assign({}, rowDataCopy[index], {Prix: parseInt(value, 10)});
      this.setState({
        rowData: rowDataCopy
      });
    }
  
  
    render() {
      return (
        <div className="animated fadeIn">
          <h6> Veuillez ajouter au moins un produit : </h6>
          <Table>
            <thead>
              <tr>
                <th>PRODUIT</th>
                <th>QUANTITE</th>
                <th>PRIX UNITAIRE</th>
                <th>TOTAL</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.rowData.map((data, index) => (
                <tr key={index} id={index}>
                  <td>
                    {" "}
                    <Input
                      type="select"
                      name="selectedcl"
                      id="selectcl"
                      placeholder="Veuillez sélectionner un produit"
                      value={data.selectprdt}
                      onChange={(e) => this.handleselectprdtChange(index, e.targe.value)}
                    >
                      <option key={-1} hidden>
                        Choisisr un produit
                      </option>
  
                      {this.state.Produits.map((pdt, i) => (
                        <option key={i}>{pdt.Nomp}</option>
                      ))}
                    </Input>
                  </td>
                  <td>
                    <Input
                      type="number"
                      placeholder="0"
                      value={data.Quantite || 0}
                      onChange={(e) => this.handleQuantiteChange(index, e.target.value)}
                    />
                  </td>
                  <td>
                    <InputGroup>
                      <Input
                        type="text"
                        value={data.Prix || 0}
                        onChange={(e) => this.handlePrixChange(index, e.target.value)}
                      />
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </td>
                  <td>
                    <p>{(data.Quantite || 0) * (data.Prix || 0)} </p>
                  </td>
                  <td>
                    <Button
                      onClick={(e) => this.handleRowDelete(index)}
                      active
                      style={"center"}
                    >
                      Effacer
                    </Button>
                  </td>{" "}
                </tr>
              ))}
  
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td>
                  <Button onClick={this.handleRowAdd} style={center}>Ajouter une ligne</Button>
                </td>
              </tr>
            </tbody>
  
            <tfoot>
              <tr>
                <th />
                <th>Grand total :</th>
                <th>{this.getTotal()} </th>
                <th />
              </tr>
            </tfoot>
          </Table>
        </div>
      );
    }
    getTotal() {
      let grandTotal = 0;
      const rowTotals = this.state.rowData.map(
        row => (row.Quantite * row.Prix) || 0
      );
      if (rowTotals.length > 0) {
        grandTotal = rowTotals.reduce((acc, val) => acc + val);
      }
      return grandTotal;
    }
  
    handleRowDelete(row) {
      const rowDataCopy = this.state.rowData.slice(0);
      rowDataCopy.splice(row, 1);
      this.setState({
        rowData: rowDataCopy
      });
    }
    handleRowAdd() {
      let id = this.state.id;
          id = id++;
      const rowDataCopy = this.state.rowData.slice(0);
      rowDataCopy.push({
        selectprdt: "",
        Quantite: 0,
        Prix: 0
      });
      this.setState({
        rowData: rowDataCopy,
        id: id
      });
    }
  }
  
  export default AjouterFacture;