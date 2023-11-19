import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "axios";

export function Notifications() {
  const [showAlerts, setShowAlerts] = React.useState({
    cotton: true,
    rice: true,
    wheat: true,
    groundnut: true,
    pulses: true,
    sugarcane: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    cotton: true,
    rice: true,
    wheat: true,
    groundnut: true,
    pulses: true,
    sugarcane: true,
  });
  const alerts = ["blue", "green", "orange", "red"];
  const inputData = { input_feature: [0, 427, 1, 2000, 0.0001] };
  const [predictions, SetPredictions] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:5198/predict", inputData)
      .then((response) => {
        const predictions = response.data.predictions;
        console.log("Predictions:", predictions);
        SetPredictions(predictions);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(predictions);
  

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Alerts
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          {predictions.map(({ name, value }, index) => {
            let alertMessage = "";

            if (name === "cotton") {
              alertMessage = `${name} has exceeded expectations with a surplus harvest, with a
              production of ${Math.round(value)} metric ton.`;
            }
            if (name === "groundnut") {
              alertMessage = `${name} has exceeded expectations with a surplus harvest, with a
              production of ${Math.round(value)} metric ton.`;
            }
            if (name === "pulses") {
              alertMessage = `${name} has exceeded expectations with a surplus harvest, with a
              production of ${Math.round(value)} metric ton.`;
            }
            if (name === "rice") {
              alertMessage = `${name} has exceeded expectations with a surplus harvest, with a
              production of ${Math.round(value)} metric ton.`;
            }
            if (name === "wheat") {
              alertMessage = `${name} has exceeded expectations with a surplus harvest, with a
              production of ${Math.round(value)} metric ton.`;
            }
            if (name === "sugarcane") {
              alertMessage = `${name} has exceeded expectations with a surplus harvest, with a
              production of ${Math.round(value)} metric ton.`;
            }
            return (
              <Alert
                key={index}
                show={showAlerts[name]}
                color="green"
                icon={
                  <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
                }
                dismissible={{
                  onClose: () =>
                    setShowAlerts((current) => ({ ...current, [name]: false })),
                }}
              >
                {alertMessage}
              </Alert>
            );
          })}
        </CardBody>
      </Card>
      {/* <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Alerts with Icon
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          {alerts.map((color) => (
            <Alert
              key={color}
              show={showAlertsWithIcon[color]}
              color={color}
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
              dismissible={{
                onClose: () =>
                  setShowAlertsWithIcon((current) => ({
                    ...current,
                    [color]: false,
                  })),
              }}
            >
              A simple {color} alert with an <a href="#">example link</a>. Give
              it a click if you like.
            </Alert>
          ))}
        </CardBody>
      </Card> */}
    </div>
  );
}

export default Notifications;
