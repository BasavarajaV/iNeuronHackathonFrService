import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import ticketStore from "./../../app/ticketStore";
import shallow from "zustand/shallow";
import Loader from "./../../components/loader";
import moment from "moment";

function TicketList() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Ticket id",
        accessor: "ticketId",
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
        accessor: "createdOn",
        accessor: (d) => {
          return moment(d.createdOn).local().format("DD-MMM-YYYY");
        },
      },
      {
        Header: "updated At",
        accessor: "updatedOn",
        accessor: (d) => {
          return moment(d.updatedOn).local().format("DD-MMM-YYYY");
        },
      },
    ],
    []
  );
  const fetchTickets = ticketStore((state) => state.fetchTickets);
  const { loading, error, result } = ticketStore((state) => state, shallow);
  console.log("result====>", result);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: result?.list || [] });
  let navigate = useNavigate();

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div className="w-full">
      {loading && (
        <div className="w-full h-screen flex justify-center items-center absolute">
          <Loader />
        </div>
      )}
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
                    className="w-full h-11 border-2 text-center cursor-pointer"
                    onClick={() => {
                      navigate(`../ticketDetails/${row.original._id}`);
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
