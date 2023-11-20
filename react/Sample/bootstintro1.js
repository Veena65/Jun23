import React from "react";


export default function Sampletext()
{
    return (
        <div>
        <div className="border border-info">
            <p className="d-inline border border-black h1">Heading 1</p>
            <p className="d-inline border border-black display-2">Heading 2</p>
            <p className="lead text-warning">Heading 3</p>
            <p className="display-3 text-danger text-center bg-white p-2 m-5">This is a primary text</p>
            <p className="text-info text-decoration-underline">Information</p>
            <figure>
        <blockquote className="blockquote">
            <p>A well-known quote, contained in a <span className="mark">blockquote element.</span></p>
        </blockquote>
        <figcaption className="blockquote-footer text-danger">
            Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
        </figure>
        </div>
        <div>
                    <p className="bg-warning display-5 rounded p-4 m-2"> Text </p>
            <p className="badge bg-primary text-wrap" style={{width:"6%"}}>  
                This text should wrap.
                </p>
        </div>
        <div>
            <div>
            <Image src="holder.js/100px250" fluid />
            {/* <img src="E:\html_files\HTML\image\cakes\img3.jpg" alt="imagedisp"></img> */}
            </div>
            <ul className="list-unstyled">
                <li>Front End Developer</li>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
                <li>Back End Developer</li>
                <ul>
                    <li>Node Js</li>
                    <li>MongoDB</li>
                </ul>
            </ul>
        </div>
        <div>
            <table className="table table-info table-striped table-hover">
            {/* striped-columns for column stripes  table-active to highlight a particular cell/row*/}
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>AAA</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className="table-active">BBB</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>CCC</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}