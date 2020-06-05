import React, {Component} from 'react'

class Table extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Job
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Ilman
                        </td>
                        <td>
                            Programmer
                        </td>
                    </tr>
                </tbody>
            </table>
        )  
    }
}
export default Table