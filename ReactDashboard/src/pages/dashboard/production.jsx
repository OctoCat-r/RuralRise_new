import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { productionData } from "@/data/productionData";
  
  export function Production() {
    console.log(productionData)
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Production Data
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "SNo",
                    "Crop",
                    "State",
                    "COC/hec(A2+Fl)",
                    "COC/hec(C2)",
                    "COP/quin(C2)",
                    "Yield (Quintal/ Hectare)"
                  ].map((el, index) => (
                    <th
                      key={el}
                      className={`border-b border-blue-gray-300 py-2 px-4 text-left ${
                        index === 0 || index === 1 ? "pl-10 pr-4" : "px-4"
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
                {productionData.map(
                  (
                    {
                        Crop,
                        State,
                        COCperhecA2andFl,
                        COCperhecC2,
                        COPperquinC2,
                        YieldQuintalHectare,
                    },
                    index
                  ) => {
                    const className = `py-2 ${
                      index === productionData.length - 1
                        ? ""
                        : "border-b border-blue-gray-300"
                    }`;
  
                    return (
                      <tr key={index}>
                        <td className={`px-4 pl-10 ${className}`}>{index + 1}</td>
                        <td className={`px-4 pl-10 ${className}`}>{Crop}</td>
                        <td className={`px-4 ${className}`}>{State}</td>
                        <td className={`px-4 ${className}`}>{COCperhecA2andFl}</td>
                        <td className={`px-4 ${className}`}>{COCperhecC2}</td>
                        <td className={`px-4 ${className}`}>{COPperquinC2}</td>
                        <td className={`px-4 ${className}`}>{YieldQuintalHectare}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
  
      </div>
    );
  }
  
  export default Production;
  