import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { authorsTableData, projectsTableData, exportData } from "@/data";
  
  export function ExportTable() {
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Exports 
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["S.No", "Commodity", "Unit", "Quantity", "Value"].map((el, index) => (
                    <th
                      key={el}
                      className={`border-b border-blue-gray-300 py-2 px-4 text-left ${
                        (index === 0 || index === 1) ? "pl-10 pr-4" : "px-4"
                      }`}
                    >
                      <Typography
                        variant="small"
                        className="text-[12px] font-semibold text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {exportData.map(({ SNo, Commodity, Unit, Quantity, Value }, index) => {
                  const className = `py-2 ${
                    index === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-300"
                  }`;
                  
                  return (
                    <tr key={index}>
                      <td className={`px-4 pl-10 ${className}`}>{SNo}</td>
                      <td className={`px-4 pl-10 ${className}`}>{Commodity}</td>
                      <td className={`px-4 ${className}`}>{Unit || "-"}</td>
                      <td className={`px-4 ${className}`}>{Quantity}</td>
                      <td className={`px-4 ${className}`}>{Value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
  
        {/* <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Imports FY22-23
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["S.No", "Commodity", "2022-2023", "Percentage Share"].map(
                    (el, index) => (
                      <th
                        key={el}
                        className={`border-b border-blue-gray-300 py-2 px-4 text-left ${
                          (index === 0 || index === 1) ? "pl-10 pr-4" : "px-4"
                        }`}
                      >
                        <Typography
                          variant="small"
                          className="text-[12px] font-semibold text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, Sno, Commodity, FY22_23, PercentageShare }, index) => {
                    const className = `py-2 ${
                      index === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-300"
                    }`;
  
                    return (
                      <tr key={index}>
                        <td className={`px-4 pl-10 ${className}`}>{index + 1}</td>
                        <td className={`px-4 pl-10 ${className}`}>{Commodity}</td>
                        <td className={`px-4 ${className}`}>{FY22_23 || "-"}</td>
                        <td className={`px-4 ${className}`}>{PercentageShare}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card> */}
      </div>
    );
  }
  
  export default ExportTable;
  