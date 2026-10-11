import React from "react";

class EdTable extends React.Component {
  render() {
    const education = [
      {
        id: 1,
        name: "National Public School",
        place: "Bengaluru",
        stdedg: "10th",
        grade: "A+"
      },
      {
        id: 2,
        name: "Indian Institute of Science",
        place: "Bengaluru",
        stdedg: "Under Graduate",
        grade: "9.8"
      }
    ];

    const edudetails = education.map((educ) => (
      <EdRow
        key={educ.id}
        id={educ.id}
        name={educ.name}
        place={educ.place}
        stdedg={educ.stdedg}
        grade={educ.grade}
      />
    ));

    return (
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Place</th>
            <th>Education</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {edudetails}
        </tbody>
      </table>
    );
  }
}

class EdRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.place}</td>
        <td>{this.props.stdedg}</td>
        <td>{this.props.grade}</td>
      </tr>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <section>
        <EdTable />
      </section>
    );
  }
}

export default Education;