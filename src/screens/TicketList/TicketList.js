import React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";

const data = [
  {
    ticket_id: 1,
    title: "Ticket title",
    description: "Ticket description",
    status: "Ticket status",
    createdAt: "Ticket created at",
    updatedAt: "Ticket updated at",
  },
  {
    ticket_id: 2,
    title: "Ticket title",
    description: "Ticket description",
    status: "Ticket status",
    createdAt: "Ticket created at",
    updatedAt: "Ticket updated at",
  },
  {
    ticket_id: 3,
    title: "Ticket title",
    description: "Ticket description",
    status: "Ticket status",
    createdAt: "Ticket created at",
    updatedAt: "Ticket updated at",
  },
  {
    ticket_id: 4,
    title: "Ticket title",
    description: "Ticket description",
    status: "Ticket status",
    createdAt: "Ticket created at",
    updatedAt: "Ticket updated at",
  },
];
const columns = [
  {
    Header: "Ticket id",
    accessor: "ticket_id",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Status ",
    accessor: "status",
  },
  {
    Header: "Created At",
    accessor: "createdAt",
  },
  {
    Header: "updated At",
    accessor: "updatedAt",
  },
];
function TicketList() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  let navigate = useNavigate();

  return (
    <div className="w-full">
      <h1 className="text-center mt-5 text-lg	font-bold	 ">Ticket List</h1>
      <div className="mt-10 overflow-x-scroll overflow-y-hidden w-full">
        <table
          {...getTableProps()}
          className="w-full border-spacing-0 border-2"
        >
          <thead className="h-11 bg-gray-600 w-full">
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()} className="text-white ">
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()} className="w-full">
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr
                    {...row.getRowProps()}
                    className="w-full h-11 border-2 text-center"
                    onClick={() => {
                      navigate(`../ticketDetails/${row.original.ticket_id}`);
                    }}
                  >
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()} className="border-2">
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TicketList;
