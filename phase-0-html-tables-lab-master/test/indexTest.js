require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("<table>", () => {
  it("exists in the HTML document", () => {
    // Find the table in the HTML
    const table = document.querySelector("table");
    const hint = "The document should have a <table> element";

    expect(table, hint).to.exist;
  });

  it("has five rows", () => {
    const table = document.querySelector("table");
    const hint = "Your <table> tag needs five <tr> tags, one for each row";

    expect(table, hint).to.have.descendants("tr").and.have.length(5);
  });

  it("has the correct headers", () => {
    const table = document.querySelector("table");
    const hint1 = "The first <tr> should have three <th> elements";
    expect(table, hint1).to.have.descendants("tr > th").and.have.length(3);

    const [header1, header2, header3] = table.querySelectorAll("tr > th");

    expect(header1).to.contain.text("City");
    expect(header2).to.contain.text("State");
    expect(header3).to.contain.text("2017 estimate");
  })